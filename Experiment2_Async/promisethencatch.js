const fs = require('fs').promises;

async function writeFile() {
    try {
        await fs.writeFile('promise.txt', 'Hello Students');
        console.log('File created and data written successfully');
    } catch (error) {
        console.log('Error:', error);
    }
}
writeFile();
async function readFile() {
    try {
        const data = await fs.readFile('promise.txt', 'utf8');
        console.log('File data:', data);
    } catch (error) {
        console.log('Error:', error);
    }
}
readFile();
async function appendFile() {
    try {
        await fs.appendFile('promise.txt', '\nWelcome to Full Stack Development');
        console.log('Data appended successfully');
    } catch (error) {
        console.log('Error:', error);
    }
}

appendFile();
async function rename() {
    try {
        await fs.rename('promise.txt', 'promise2.txt');
        console.log('Data renamed successfully');
    } catch (error) {
        console.log('Error:', error);
    }
}

rename();

// async function deleteFile() {
//     try {
//         await fs.unlink('promise1.txt');
//         console.log('File deleted successfully');
//     } catch (error) {
//         console.log('Error:', error);
//     }
// }
// deleteFile();