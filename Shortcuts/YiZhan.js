const input = '【快宝驿站】'
const isFC = /驿站/.test(input)
let msg = ''
if(isFC) {
	msg = `码: ${/(\d{1,2}\-\d{1,2}\-\d{1,4})/.exec(input)[0] || '无效'} 位置: 小区门口`
}
console.log(msg)