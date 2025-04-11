const url = $request.url;
let obj = JSON.parse($response.body);


if (obj?.equip?.other_info) { // 检查 obj.equip.other_info 是否可访问
  delete obj.equip.other_info.report_score_data;
}
$done({
  body: JSON.stringify({
    ...obj,
    equip: {
      ...obj.equip,
      video_info: {},
      video_list: [],
    },
  }),
});
