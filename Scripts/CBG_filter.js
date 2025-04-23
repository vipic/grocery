const url = $request.url;
let obj = JSON.parse($response.body);
const list = obj.result;



const EID_LIST = ["202501032101713-182-FVBG7AJWUHHJ"]

// 将 item 的 eid 在 EID_LIST 中的元素过滤出去
const filterFn = item =>{
    return EID_LIST.indexOf(item.eid) === -1;
}
const ans = list.filter(filterFn);

obj.result = ans;

$done({
    body: JSON.stringify(obj),
});
