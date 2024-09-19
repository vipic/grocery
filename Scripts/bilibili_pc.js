// 2023-11-29 10:55

const url = $request.url;
try {
  if(url.includes('popular')) {
    const body = JSON.parse($response.body);
    const raw = body.data.list;

    const tmp = raw.filter(inner => {
      const tagFilterList = [
        "美食",
        "法律",
        "车",
        "新能源",
        "美妆",
        "同人",
        "cos",
        "mv",
        "翻唱",
        "三农",
        "特摄"
      ];
      const desFiterKeywords = ["黑神话","天命"];
      //如果tanme符合ftagFilterList中的任意一个，则返回false，否则返回true
      return (
          tagFilterList.every(item => inner.tname.includes(item) === false) &&
          desFiterKeywords.every(item => inner.desc.includes(item) === false) &&
          desFiterKeywords.every(item => inner.title.includes(item) === false)
      );
    });
    body.data.list = tmp;
    $done({
      body: JSON.stringify(body),
    });
  } else {
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
  }

} catch {
  $done({
    body: JSON.stringify({
      ...obj,
    }),
  });
}
