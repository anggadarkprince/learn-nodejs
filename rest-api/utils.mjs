import fs from 'fs/promises';

async function readDataFromFile(filename) {
    const data = await fs.readFile(filename, 'utf8');
    return JSON.parse(data.toString());
}

async function writeDataToFile(filename, content) {
    await fs.writeFile(filename, JSON.stringify(content, null, 2), 'utf8');
}

function getPostData(req) {
    return new Promise((resolve, reject) => {
        try {
            let body = '';

            req.on('data', (chunk) => {
                body += chunk.toString();
            });
            req.on('end', () => {
                resolve(body);
            });
        } catch (error) {
            reject(error);
        }
    });
}

export {
    readDataFromFile,
    writeDataToFile,
    getPostData
}