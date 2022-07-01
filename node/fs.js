const fs = require('fs')
// import { readFile } from 'fs'; //es6 导包方式

fs.readFile('./test.txt', 'utf8', function (err, data) {
    if (err == null) {
        console.log("读取成功！");
        console.log(data);
    } else {
        console.log("读取失败");
    }

    fs.writeFile('./testw.txt', data, function (err) {
        if (err == null) {
            console.log('写入成功');
        } else {
            console.log('写入失败');
        }

    })
})
