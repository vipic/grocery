const input = '【丰巢】'
const isFC = /丰巢/.test(input)
let msg = ''
if(isFC) {
	msg = `码: ${/(\d{8})/.exec(input)[0] || '无效'} 位置: ${/\d.号楼/.exec(input)}`
}
console.log(msg)