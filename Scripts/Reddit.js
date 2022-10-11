const url = $request.url;
const body = $response.body;

let obj = JSON.parse(body);

const children = obj.data.children.filter(item=>{
    return item.data.priority_id === undefined
})
obj.data.childrend = children
$done({ body: JSON.stringify(obj) });
