import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import nodemailer from 'nodemailer';

const reportName: string = (process.env.ENV || 'test').trim();
const date: Date = new Date();
const timestamp: string = date.toISOString().replace(/:/g, '-'); // Ensures the timestamp is safe for filenames
const dateTimeStamp: string = date.toString().substring(0, date.toString().indexOf("GMT"));

const hostname: string = os.hostname();
const operatingSystem: string = os.platform();

// Determine directory path based on the operating system
let directoryPath: string;

if (operatingSystem === 'win32') {
    directoryPath = 'D:\\wdioLogs'; // Windows path
} else {
    switch (hostname) {
        case 'QA-MacAutomation.local':
            directoryPath = '/Users/qa-workstation/wdioLogs';
            break;
        case 'ChennaiAutoMacBookPro.local':
        case 'auto.local':
            directoryPath = '/Users/autotest/wdioLogs';
            break;
        case 'FI-QA-MacMini-Chennai.local':
            directoryPath = '/Users/fi-qa/wdioLogs';
            break;
        default:
            console.error('Unknown hostname:', hostname);
            process.exit(1); // Exit if hostname is not recognized
    }
}

// Prepare filename and path
const fileNameWithoutPath: string = `${reportName}-${timestamp}.txt`;
const filePath: string = path.join(directoryPath, fileNameWithoutPath);
console.log("File to process:", filePath);

if (process.env.NODE_ENV !== 'production') {
    console.log("EMAIL WILL NOT BE SENT");
} else {
    const transporter = nodemailer.createTransport({
        host: 'firstinsight-com.mail.protection.outlook.com',
        port: 25,
        auth: {
            user: 'qa@firstinsight.com',
            pass: 'he!!Bl00dY' // Consider using environment variables for sensitive information
        }
    });

    const mailOptions: nodemailer.SendMailOptions = {
        from: 'qa@firstinsight.com',
        to: 'prabhakaran.ravichandran@firstinsight.com, jagadeesh.chandrasekaran@firstinsight.com, geetha.kalla@firstinsight.com',
        subject: `QA Autotests Console Log - ${reportName} - ${dateTimeStamp}`,
        text: `Hi All,\n\nPlease find the attached QA Autotests Console Log.\n\nThanks,\nAutomation Team`,
        attachments: []
    };

    function findLatestFile(dirPath: string, extension: string): string | null {
        const files = fs.readdirSync(dirPath).filter(file => file.endsWith(extension));
        files.sort((a, b) => fs.statSync(path.join(dirPath, b)).mtime.getTime() - fs.statSync(path.join(dirPath, a)).mtime.getTime());
        return files.length > 0 ? path.join(dirPath, files[0]) : null;
    }

    const latestFile: string | null = findLatestFile(directoryPath, '.txt'); // Adjusted to look for any .txt file
    if (latestFile) {
        mailOptions.attachments.push({
            filename: path.basename(latestFile),
            path: latestFile
        });

        transporter.sendMail(mailOptions, function (error: Error | null, info: nodemailer.SentMessageInfo) {
            if (error) {
                console.error('Error sending mail:', error);
                process.exit(1); // Exit with error code
            } else {
                console.log('Email sent:', info.response);
                process.exit(0); // Exit successfully
            }
        });
    } else {
        console.log('No .txt files found in the directory.');
        process.exit(1); // Exit with error code
    }
}