const Dsig = require('pkcs12-xml');
const fs = require('fs');
const argv = require('yargs/yargs')(process.argv.slice(2))
    .usage('Usage: $0 [options]')
    .alias('s', 'source')
    .describe('s', 'Source path')
    .alias('d', 'destination')
    .describe('d', 'Destination path')
    .alias('c', 'certificate')
    .describe('c', 'PKCS12 Certificate path')
    .alias('p', 'password')
    .describe('p', 'Certificate password')
    .default('p', '12345678')
    .example('$0 -s /path/to/file.xml -d /path/to/signedfile.xml -c /path/to/p12file.p12 -p password')
    .demandOption(['s', 'd', 'c'])
    .argv;

    
// Gets certificate keys 
const dsig = new Dsig(argv.c);

try {
    dsig.openSession(argv.p);
    //Opens de xml file to sign
    const file = fs.readFileSync(argv.s, 'utf-8')
    console.log(file)
    fs.writeFileSync(argv.d, dsig.computeSignature(file))
} catch (e) {
    console.error(e);
} finally {
    dsig.closeSession();
}
