const [firstArgv] = process.argv.slice(2)
const pattern1 = /驿站/
const pattern2 = /【丰巢】/
let msg = ''
if(pattern1.test(firstArgv)) {
    msg = `码: ${/(\d{1,2}-\d{1,2}-\d{1,4})/.exec(firstArgv)[0] || '无效'} 位置: 小区门口`
} else if (pattern2.test(firstArgv)) {
    msg = `码: ${/(\d{8})/.exec(firstArgv)[0] || '无效'} 位置: ${/\d.号楼/.exec(firstArgv)}`
} else {
    msg = "无效"
}

function pbcopy(data) {
    var proc = require('child_process').spawn('pbcopy');
    proc.stdin.write(data); proc.stdin.end();
}
console.log(msg)
pbcopy(msg)
