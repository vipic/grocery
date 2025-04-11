const url = $request.url;
let obj = JSON.parse($response.body);

const other_info = obj.equip.other_info;
delete other_info.report_score_data;
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
