# TODO

## Current Status

- リポジトリ初期化済み
- `pnpm` workspace 化済み
- ルート、`packages/core`、`apps/cli` の最小構成あり
- `Task` 型と `createTask` ユースケースを `packages/core` に実装済み
- `listTasks` ユースケースを実装済み
- `completeTask` ユースケースを実装済み
- `TaskNotFoundError` を導入し、`completeTask` が失敗を返せる状態になっている
- CLI は `Effect.gen` で複数の Effect を組み立てる形へ更新済み
- `pnpm dev:cli` で task 一覧が表示されることを確認済み
- `Biome` 導入済み
- `Knip` 導入済み
- GitHub Actions の CI 導入済み
- Node.js は `24` 系を前提に固定済み
- `Vitest` 導入済み
- `createTask`, `listTasks`, `completeTask` のユースケーステストを追加済み
- `Effect.either` を使って失敗ケースを値として検証できる状態
- `apps/api` と `apps/web` は未着手

## Next Task

CLI で `completeTask` の失敗をハンドリングし、失敗型と表示を分離する。

対象ファイル:

- `apps/cli/src/index.ts`

やること:

- `completeTask` の失敗ケースを CLI 側で扱う
- `Effect.either(...)` か `Effect.match(...)` を使って成功と失敗を分岐する
- `TaskNotFoundError` を人間向けメッセージへ変換する
- 成功時は task 一覧を表示し、失敗時はエラーメッセージを表示する

完了条件:

- CLI が成功時と失敗時で出力を分けられる
- `core` は失敗型を返すだけで、表示責務は CLI 側に留まる
- `pnpm check` と `pnpm --filter @effect-task-lab/core test` が通る

## After That

- title の扱いを見直し、入力バリデーション導入前の準備をする
- タスク一覧をインメモリで保持する設計を考える
- `createTask` と `completeTask` に入力検証や失敗型を広げる
- CLI で固定文字列ではなく引数を扱う準備をする

## Notes

- 学習の主目的は Effect の理解であり、実装代行はしない
- まずは `Schema` と `Layer` を使わずに最小の Effect ユースケースを作る
- `packages/core` が学習の中心で、`apps/cli` は薄い入口に保つ
- 開発ツールとして `Biome`, `Knip`, GitHub Actions CI を導入済み
- Node.js の前提は `.node-version` と `package.json#engines` で `24` 系に固定済み
- `Volta` で Node.js 24 を使用する前提
- 作業完了の確認後は `todo.md` を更新して進捗を同期する
- 次のスレッドの Codex は、まず `plan.md` と `todo.md` を読むこと
