# TODO

## Current Status

- リポジトリ初期化済み
- `pnpm` workspace 化済み
- ルート、`packages/core`、`apps/cli` の最小構成あり
- `Task` 型と `createTask` ユースケースを `packages/core` に実装済み
- `pnpm dev:cli` で task オブジェクトが表示されることを確認済み
- `Biome` 導入済み
- `Knip` 導入済み
- GitHub Actions の CI 導入済み
- Node.js は `24` 系を前提に固定済み
- `apps/api` と `apps/web` は未着手

## Next Task

`packages/core` に `listTasks` ユースケースを追加し、CLI から複数の Effect を呼ぶ形へ進める。

対象ファイル:

- `packages/core/src/list-tasks.ts`
- `packages/core/src/index.ts`
- `apps/cli/src/index.ts`

やること:

- `listTasks(): Effect.Effect<ReadonlyArray<Task>>` を作る
- 初回は永続化せず、CLI 側で配列を組み立ててもよい
- `core` から re-export する
- CLI で `createTask` と `listTasks` を順に呼び、複数の Effect を扱う

完了条件:

- `pnpm dev:cli` で複数 task を含む一覧が表示される
- `listTasks` は `Effect.succeed(...)` を返す
- `core` 側のユースケースを CLI から呼ぶ構造を維持する

## After That

- title の扱いを見直し、入力バリデーション導入前の準備をする
- タスク一覧をインメモリで保持する設計を考える
- `completeTask` を追加する
- CLI で固定文字列ではなく引数を扱う準備をする

## Notes

- 学習の主目的は Effect の理解であり、実装代行はしない
- まずは `Schema` と `Layer` を使わずに最小の Effect ユースケースを作る
- `packages/core` が学習の中心で、`apps/cli` は薄い入口に保つ
- 開発ツールとして `Biome`, `Knip`, GitHub Actions CI を導入済み
- Node.js の前提は `.node-version` と `package.json#engines` で `24` 系に固定済み
- 次のスレッドの Codex は、まず `plan.md` と `todo.md` を読むこと
