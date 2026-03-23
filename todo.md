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
- CLI で `completeTask` の失敗をハンドリングし、`TaskNotFoundError` を人間向けメッセージへ変換できる
- `pnpm dev:cli` で `Task not found: task-999` の表示を確認済み
- `Biome` 導入済み
- `Knip` 導入済み
- GitHub Actions の CI 導入済み
- Node.js は `24` 系を前提に固定済み
- `Vitest` 導入済み
- `createTask`, `listTasks`, `completeTask` のユースケーステストを追加済み
- `Effect.either` を使って失敗ケースを値として検証できる状態
- `apps/api` と `apps/web` は未着手

## Next Task

`createTask` に入力バリデーションを導入し、失敗を型で扱えるようにする。

対象ファイル:

- `packages/core/src/create-task.ts`
- `packages/core/src/task-error.ts`
- `packages/core/src/create-task.test.ts`
- 必要なら `apps/cli/src/index.ts`

やること:

- `createTask` で空文字や空白だけの title を拒否する
- `TaskNotFoundError` とは別に、title 用の最小エラー型を追加する
- `createTask` の戻り値を成功と失敗の両方を持つ `Effect` にする
- `create-task.test.ts` に失敗ケースを追加する
- 必要なら CLI でも `createTask` の失敗を表示に変換する

完了条件:

- 空 title で `createTask` が失敗する
- 失敗が `throw` ではなく失敗型として表現される
- `create-task.test.ts` に成功と失敗の両ケースがある
- `pnpm check` と `pnpm --filter @effect-task-lab/core test` が通る

## After That

- タスク一覧をインメモリで保持する設計を考える
- `createTask` と `completeTask` に入力検証や失敗型を広げる
- CLI で固定文字列ではなく引数を扱う準備をする
- `Schema` 導入前に、今の手書きバリデーションとの違いを整理する

## Notes

- 学習の主目的は Effect の理解であり、実装代行はしない
- まずは `Schema` と `Layer` を使わずに最小の Effect ユースケースを作る
- `packages/core` が学習の中心で、`apps/cli` は薄い入口に保つ
- 開発ツールとして `Biome`, `Knip`, GitHub Actions CI を導入済み
- Node.js の前提は `.node-version` と `package.json#engines` で `24` 系に固定済み
- `Volta` で Node.js 24 を使用する前提
- 作業完了の確認後は `todo.md` を更新して進捗を同期する
- 次のスレッドの Codex は、まず `plan.md` と `todo.md` を読むこと
