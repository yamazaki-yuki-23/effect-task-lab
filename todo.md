# TODO

## Current Status

- リポジトリ初期化済み
- `pnpm` workspace 化済み
- ルート、`packages/core`、`apps/cli` の最小構成あり
- `Task` 型と `createTask` ユースケースを `packages/core` に実装済み
- `listTasks` ユースケースを実装済み
- `completeTask` ユースケースを実装済み
- `TaskNotFoundError` を導入し、`completeTask` が失敗を返せる状態になっている
- `InvalidTaskTitleError` を導入し、`createTask` が空 title で失敗を返せる状態になっている
- CLI は `Effect.gen` で複数の Effect を組み立てる形へ更新済み
- CLI で `completeTask` の失敗をハンドリングし、`TaskNotFoundError` を人間向けメッセージへ変換できる
- CLI で `createTask` の失敗もハンドリングでき、`InvalidTaskTitleError` と `TaskNotFoundError` の両方を表示へ変換できる
- `pnpm dev:cli` で `Task not found: task-999` の表示を確認済み
- `Biome` 導入済み
- `Knip` 導入済み
- GitHub Actions の CI 導入済み
- Node.js は `24` 系を前提に固定済み
- `Vitest` 導入済み
- `createTask`, `listTasks`, `completeTask` のユースケーステストを追加済み
- `Effect.either` を使って失敗ケースを値として検証できる状態
- `createTask` の成功・失敗テストを通して、手書きバリデーションを Effect の失敗型で表現できている
- `apps/api` と `apps/web` は未着手

## Next Task

CLI で固定値ではなく引数を受け取り、最小のユーザー入力を扱えるようにする。

対象ファイル:

- `apps/cli/src/index.ts`

やること:

- `process.argv` から最小限のコマンド引数を受け取る
- まずは `create <title>` のような単純な入口だけに絞る
- 引数不足や不正なコマンドを CLI 側で人間向けメッセージに変換する
- `core` のユースケース呼び出しと CLI 引数処理の責務を分ける

完了条件:

- `pnpm dev:cli -- create \"Task title\"` のような実行で動作確認できる
- 引数不足や不正コマンドで CLI 側のメッセージが出る
- `core` は引き続きユースケースだけを担当し、引数解釈は CLI 側に留まる
- `pnpm check` と `pnpm --filter @effect-task-lab/core test` が通る

## After That

- タスク一覧をインメモリで保持する設計を考える
- `createTask` と `completeTask` に入力検証や失敗型を広げる
- `Schema` 導入前に、今の手書きバリデーションとの違いを整理する
- title を value object 化するかを検討する
- CLI 入口を増やす前に、ユースケースの組み立てを関数へ切り出す

## Notes

- 学習の主目的は Effect の理解であり、実装代行はしない
- まずは `Schema` と `Layer` を使わずに最小の Effect ユースケースを作る
- `packages/core` が学習の中心で、`apps/cli` は薄い入口に保つ
- 開発ツールとして `Biome`, `Knip`, GitHub Actions CI を導入済み
- Node.js の前提は `.node-version` と `package.json#engines` で `24` 系に固定済み
- `Volta` で Node.js 24 を使用する前提
- 作業完了の確認後は `todo.md` を更新して進捗を同期する
- 次のスレッドの Codex は、まず `plan.md` と `todo.md` を読むこと
