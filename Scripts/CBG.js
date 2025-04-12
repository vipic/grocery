const url = $request.url;
let obj = JSON.parse($response.body);

$done({
  body: JSON.stringify({
    ...obj,
    equip: {
      ...obj.equip,
      has_score: false,
      video_info: {},
      video_list: [],
    },
  }),
});
