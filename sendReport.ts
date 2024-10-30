import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import * as ip from 'ip';
import PDFMerger from 'pdf-merger-js'; // ^4.2.1
import puppeteer, { Browser, PDFOptions, PaperFormat } from 'puppeteer';
import nodemailer, { SendMailOptions } from 'nodemailer';

const date = new Date();
const timestamp: string = date.toISOString().replace(/:/g, '-');
const reportName: string = (process.env.ENV || 'test').trim();
const dateTimeStamp: string = date.toString().substring(0, date.toString().indexOf('GMT'));
const operatingSystem: string = os.platform();
const currentIpAddress: string = ip.address();

const fileNameWithoutPath: string = `${reportName}-${timestamp}.pdf`;
const filename: string = path.join('pdf-output', fileNameWithoutPath);

const urls: string[] = operatingSystem === 'win32'
  ? [
      `http://${currentIpAddress}:9090/index.html`,
      `http://${currentIpAddress}:9090/index.html#suites`,
      `http://${currentIpAddress}:9090/index.html#graph`,
    ]
  : [
      `http://localhost:9090/index.html`,
      `http://localhost:9090/index.html#suites`,
      `http://localhost:9090/index.html#graph`,
    ];

    const pdfOptions: PDFOptions = {
      format: 'A2',
      printBackground: true,
    };

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function launchWithRetry(browser: Browser): Promise<void> {
  const maxRetryCount = 10; // Maximum number of retries
  const retryInterval = 60000; // 60 seconds in milliseconds

  let retryCount = 0;
  while (retryCount < maxRetryCount) {
    try {
      const [checkUrl] = await browser.pages();
      await checkUrl.goto(urls[0], { waitUntil: 'networkidle2' });
      console.log('Puppeteer launched successfully');
      return; // Successfully launched, exit function
    } catch (error) {
      console.error(`Failed to launch Puppeteer (Attempt ${retryCount + 1})`);
      retryCount++;
      await delay(retryInterval); // Wait before retrying
    }
  }

  throw new Error('Failed to launch Puppeteer after multiple retries');
}

async function pdfAndMail(browser: Browser): Promise<void> {
  const page = await browser.newPage();
  const merger = new PDFMerger();

  for (const url of urls) {
    await page.goto(url, { waitUntil: 'networkidle2' });
    await delay(5000);
    await merger.add(await page.pdf(pdfOptions));
  }

  console.log("PDF saved");
  await merger.save(filename);

  await browser.close();

  console.log("Node environment:", process.env.NODE_ENV);

  if (process.env.NODE_ENV !== 'production') {
    console.log("EMAIL WILL NOT BE SENT");
    return;
  }

  const transporter = nodemailer.createTransport({
    host: 'firstinsight-com.mail.protection.outlook.com',
    port: 25,
    auth: {
      user: 'qa@firstinsight.com',
      pass: 'he!!Bl00dY', // Consider using environment variables for sensitive information
    },
  });

  const pdfData = fs.readFileSync(filename);

  const mailOptions: SendMailOptions = {
    from: 'qa@firstinsight.com',
    to: 'autotestsreport@firstinsight.com',
    subject: `QA Autotests Report - ${reportName} - ${dateTimeStamp}`,
    text: `Hi All,\n\nPlease find the attached QA Autotests Report.\n\nThanks,\nAutomation Team`,
    attachments: [
      {
        filename: fileNameWithoutPath,
        content: pdfData,
      },
    ],
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
      console.log("EMAIL SENT SUCCESSFULLY");
    }
  });
}

(async () => {
  const browser = await puppeteer.launch();
  try {
    await launchWithRetry(browser);
    await pdfAndMail(browser);
  } catch (error) {
    console.error('Error:', error.message);
  }
})();