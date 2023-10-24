# Use prettier to unify the code

If you encounter the following issues during project development, you may need the help of `Prettier`:

1. Multiple formatting changes in the `git diff` scenario affecting code readability.
2. Different developers having different code styles in team collaboration, impacting code readability.
3. Format interference making it difficult to resolve conflicts.
4. Unused imported packages that were not removed, resulting in code redundancy.
5. Conflicts caused by inconsistent package import orders in team collaboration.

Below is a partial list of dependencies in `package.json`.

```json
{
  "devDependencies": {
    "prettier": "^3.0.3",
    "prettier-plugin-organize-imports": "^3.2.3"
  }
}
```

## Config file

Create a `.prettierrc` file in the root directory of your project, you can refer to the `.prettierrc` file.

## Ignore file

You can write the files or folders that you do not want to be formatted into the `.prettierignore` file. For example, folders that contain compiled files or specific file extensions that are being refactored.

> If you want to learn more, you can visit the [Prettier official website](https://prettier.io/).

---

如果你在项目开发中遇到了以下问题，你可能需要 Prettier 的帮助：

1. git diff 场景里，多处格式的变动，影响代码阅读。
2. 多人合作时，不同的开发者有不同的代码风格，影响代码阅读。
3. 发生冲突时候，有格式的干扰，很难解决冲突。
4. 曾经导入的包，后来不再使用，但是没有删除，导致代码冗余。
5. 多人合作时，不同的时间导入的包，顺序不一致，导致冲突。

以下是 `package.json` 的部分依赖

```json
{
  "devDependencies": {
    "prettier": "^3.0.3",
    "prettier-plugin-organize-imports": "^3.2.3"
  }
}
```

## Config file

在项目根目录下创建 `.prettierrc` 文件，可以参考 `.prettierrc` 文件

## Ignore file

可以将不需要格式化的文件或者文件夹写入`.prettierignore`文件中，例如打包编译过后的文件夹，正在重构中的特定后缀文件等

> 如果想了解更多，可以查看 [Prettier 官网](https://prettier.io/)

---

プロジェクト開発中に以下の問題に直面する場合、Prettierの助けが必要かもしれません：

1. `git diff` の場面で、コードの可読性に影響を与える複数のフォーマット変更。
2. チームでの協力時に、異なる開発者が異なるコードスタイルを持ち、コードの可読性に影響を与えること。
3. フォーマットの干渉により、衝突の解決が困難になること。
4. 使用されていないインポートされたパッケージが削除されず、コードの冗長性が生じること。
5. チーム内での異なる時期のパッケージのインポート順序の一貫性のなさによる衝突の発生。

以下は `package.json` の依存関係の一部です。

```json
{
  "devDependencies": {
    "prettier": "^3.0.3",
    "prettier-plugin-organize-imports": "^3.2.3"
  }
}
```

## Config file

プロジェクトのルートディレクトリに `.prettierrc` ファイルを作成し、`.prettierrc` ファイルを参考にしてください。

## Ignore file

`.prettierignore` ファイルに、フォーマットを適用したくないファイルやフォルダを書き込むことができます。例えば、コンパイルされたファイルを含むフォルダや、リファクタリング中の特定の拡張子のファイルなどです。

> 詳細を知りたい場合は、[Prettier 公式ウェブサイト](https://prettier.io/) を参照してください。
