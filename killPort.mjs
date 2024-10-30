import ps from 'ps-node';
import { execSync } from 'child_process';

function killPort(port) {
  try {
    ps.lookup({
      command: 'node',
      psargs: 'aux'
    }, (err, resultList) => {
      if (err) throw new Error(err);

      resultList.forEach(process => {
        if (process && process.arguments.includes(`:${port}`)) {
          console.log(`Killing process ${process.pid} on port ${port}`);
          execSync(`kill -9 ${process.pid}`);
        }
      });
    });
  } catch (error) {
    console.error(`Error killing port ${port}: ${error.message}`);
  }
}

const ports = [4444, 80, 9090];

ports.forEach(port => killPort(port));