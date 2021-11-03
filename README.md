# Sign XML documents
This scripts signs XML files passed as argument to the script

## Installation

Tested on **node v10.19.0** 
1. ```$ git clone https://github.com/CostGranda/digital_signature.git```
2. ```$ npm install```


## Usage

```shell
Usage: app.js [options]

Options:
  --help             Show help                                         [boolean]
  --version          Show version number                               [boolean]
  -s, --source       Source path                                      [required]
  -d, --destination  Destination path                                 [required]
  -c, --certificate  PKCS12 Certificate path                          [required]
  -p, --password     Certificate password                  [default: "12345678"]

Examples:
  app.js -s /path/to/file.xml -d /path/to/signedfile.xml -c /path/to/p12file.p12 -p password
```
