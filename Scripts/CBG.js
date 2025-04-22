const url = $request.url;
let obj = JSON.parse($response.body);

$done({
  body: JSON.stringify({
    ...obj,
    equip: {
      ...obj.equip,
      has_score: false,
      allow_multi_order: false,
      is_support_instalment: false,
      is_agent_role_keep_online: false,
      video_info: {},
      video_list: [],
    },
  }),
});
