import { Dropbox, Error, files } from 'dropbox'; // eslint-disable-line no-unused-vars
import fs = require('fs');
import path = require('path');
const accessToken: string = 'RS3fSg5C7UkAAAAAAAAAAa-WvJjmJNrpEz_8uF_YwU2wBpTgvoYacEer1nEpcgWu';

const dbx = new Dropbox({ accessToken: accessToken });
export function up(fileName: string){
    fs.readFile(path.join('/tmp', fileName + '.jpg'), (err, contents) => {
        if (err) {
            console.log('Error: ', err);
        }

        // This uploads basic.js to the root of your dropbox
        dbx.filesUpload({ path: '/img/' + fileName + '.jpg', contents })
            .then((response: any) => {
                console.log(response);
            })
            .catch((uploadErr: Error<files.UploadError>) => {
                console.log(uploadErr);
            });
    });
}
