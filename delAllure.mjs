import { execSync } from 'child_process';

function deleteDirectory(directory) {
  try {
    if (process.platform === 'win32') {
      execSync(`rmdir ${directory}`); // Windows
    } else {
      execSync(`rm -rf ${directory}`); // Unix-based systems (macOS, Linux)
    }
    console.log('Directory deleted');
  } catch (err) {
    console.error('Error deleting directory:', err);
  }
}

deleteDirectory('allure-results');