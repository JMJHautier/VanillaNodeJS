fs = require('fs');

const errorHandle = (err, data) => {
    if(err) { console.log(err)} else{console.log(data)}
}

fs.readFile('test.html', 'utf-8', errorHandle)