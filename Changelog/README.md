# Auto generated changelog based on git log

> 在我们开始之前，希望你了解以下两点：
>
> 1. 约定式提交，[约定式提交规范](https://www.conventionalcommits.org/zh-hans/v1.0.0/)
> 2. 语义化版本，[语义化版本规范](https://semver.org/lang/zh-CN/)

changelog 可以基于 git log 自动生成，这样可以减少我们手动维护 changelog 的工作量，同时也可以保证 changelog 的准确性。
有一个要求就是，git commit 要符合约定式提交规范，这样才能保证 changelog 的准确性。下面是 git commit 的结构例子，更多的可以去前述提到的约定式提交规范中查看。

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

## changelog 配置说明

请参考以下两个关键配置，如果有更多需求，可以前往 [conventional-changelog-config-spec](https://github.com/conventional-changelog/conventional-changelog-config-spec/tree/master)来查看

1. header: changelog 的标题，markdown 格式，如果需要描述，也在 header 中添加，

2. types: 将对应类型的 git commit 按照 section 分类，可以增加自己习惯的 type 到对应的 section 中，例如我将 add 增加到了 section Features 中。

```json
{
  "header": "# Changelog\n\nthe description of this document",
  "types": [
    { "type": "feat", "section": "Features" },
    { "type": "add", "section": "Features" },
    { "type": "fix", "section": "Bug Fixes" },
    { "type": "chore", "hidden": true },
    { "type": "docs", "hidden": true },
    { "type": "style", "hidden": true },
    { "type": "refactor", "hidden": true },
    { "type": "perf", "hidden": true },
    { "type": "test", "hidden": true }
  ]
}
```
