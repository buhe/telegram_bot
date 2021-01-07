import { Dropbox, Error, files } from 'dropbox'; // eslint-disable-line no-unused-vars
import fs = require('fs');
import path = require('path');
const accessToken: string = 'sl.Ao79buEYfp01aTnSMYcQiVZkkgjZG6HERAhSJ20FEWeAMjfhb2sOGo3ClBuBP3yYPbDteSRJuMi6F37TJodRaGKuVB3UhPr7hq21e3GV7djUZXi0ti5gdDbMPGpu02DYkA924m8';

const dbx = new Dropbox({ accessToken: accessToken });

fs.readFile(path.join(__dirname, '/sdk.ts'),  'utf8', (err, contents) => {
    if (err) {
        console.log('Error: ', err);
    }

    // This uploads basic.js to the root of your dropbox
    dbx.filesUpload({ path: '/sdk.ts', contents })
        .then((response: any) => {
            console.log(response);
        })
        .catch((uploadErr: Error<files.UploadError>) => {
            console.log(uploadErr);
        });
});