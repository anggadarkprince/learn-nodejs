const buffer = Buffer.from('Angga Æ', 'utf-8')
console.info(buffer.toString()) // use source encoding
console.info(buffer.toString('base64'));
console.info(buffer.toString('hex'));
console.info(buffer.toString('ascii'));

const bufferBase64 = Buffer.from('QW5nZ2Egw4Y=', 'base64');
console.info(bufferBase64.toString('utf-8'));