const Firestore = require('@google-cloud/firestore');

module.exports = new Firestore({
    projectId: 'testboybot',
    keyFilename: './secret-key.json',
});