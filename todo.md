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
- CLI で `process.argv` を解釈し、`create <title>` の最小コマンド入口を扱える
- `pnpm dev:cli -- create "Task title"` の形式で CLI を実行できる
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

CLI の責務を整理し、引数解釈・表示・Effect 実行の分離を進める。

対象ファイル:

- `apps/cli/src/index.ts`

やること:

- 引数解釈を関数へ切り出す
- 表示用メッセージ変換を関数へ切り出す
- `createTask` のドメインエラーと CLI の usage エラーをどう分けるか整理する
- 今後コマンド追加しやすい形へ `index.ts` を整える

完了条件:

- `index.ts` が単一の長いトップレベル処理ではなく、役割ごとに分かれている
- usage エラーとドメインエラーの境界がコード上で分かる
- 今後 `list` や `complete` を追加しやすい構造になっている
- `pnpm check` と `pnpm --filter @effect-task-lab/core test` が通る

## After That

- タスク一覧をインメモリで保持する設計を考える
- `list` や `complete` など CLI コマンドを追加する
- `createTask` と `completeTask` に入力検証や失敗型を広げる
- `Schema` 導入前に、今の手書きバリデーションとの違いを整理する
- title を value object 化するかを検討する

## Notes

- 学習の主目的は Effect の理解であり、実装代行はしない
- まずは `Schema` と `Layer` を使わずに最小の Effect ユースケースを作る
- `packages/core` が学習の中心で、`apps/cli` は薄い入口に保つ
- 開発ツールとして `Biome`, `Knip`, GitHub Actions CI を導入済み
- Node.js の前提は `.node-version` と `package.json#engines` で `24` 系に固定済み
- `Volta` で Node.js 24 を使用する前提
- 作業完了の確認後は `todo.md` を更新して進捗を同期する
- 次のスレッドの Codex は、まず `plan.md` と `todo.md` を読むこと
