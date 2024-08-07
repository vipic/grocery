// 2023-11-29 10:55

const url = $request.url;
try {
  let obj = JSON.parse($response.body);
  const tmp = obj.data.item.filter(inner => {
    // item does not have an "owner" field is an advertisement.
    return inner.owner !== null;
  });
  $done({
    body: JSON.stringify({
      ...obj,
      data: {
        ...obj.data,
        item: tmp,
      },
    }),
  });
} catch {
  $done({
    body: JSON.stringify({
      ...obj,
    }),
  });
}
