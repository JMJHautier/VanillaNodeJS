import fs from 'node:fs/promises';
import { readFile, writeFile} from 'fs';

const errorHandle = (err, data) => {
    if(err) { console.log(err)} else{console.log(data)}
}

writeFile('test.html', 'hello in ES5', errorHandle)
readFile('test.html', 'utf-8', errorHandle)