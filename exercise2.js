fs = require('fs');

const errorHandle = (err, data) => {
    if(err) { console.log(err)} else{console.log(data)}
}

fs.writeFile('test.html', 'hello', errorHandle)