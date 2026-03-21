# TODO

## Current Status

- リポジトリ初期化済み
- `pnpm` workspace 化済み
- ルート、`packages/core`、`apps/cli` の最小構成あり
- `pnpm dev:cli` で `CLI entrypoint` の表示を確認済み
- `packages/core` はまだ空で、Task ドメインは未実装
- `apps/api` と `apps/web` は未着手

## Next Task

`packages/core` に最小の Task ドメインと `createTask` ユースケースを追加する。

対象ファイル:

- `packages/core/src/task.ts`
- `packages/core/src/create-task.ts`
- `packages/core/src/index.ts`
- `apps/cli/src/index.ts`

やること:

- `TaskId`, `TaskStatus`, `Task` 型を定義する
- `createTask(title: string): Effect.Effect<Task>` を作る
- `core` から re-export する
- CLI から `createTask("Learn Effect")` を呼んで結果を表示する

完了条件:

- `pnpm dev:cli` で task オブジェクトが表示される
- CLI 側に Task 生成ロジックを書かない
- `createTask` は `Effect.succeed(...)` を返す

## After That

- title の扱いを見直し、入力バリデーション導入前の準備をする
- `listTasks` ユースケースを追加する
- タスク一覧をインメモリで保持する設計を考える
- CLI で固定文字列ではなく引数を扱う準備をする

## Notes

- 学習の主目的は Effect の理解であり、実装代行はしない
- まずは `Schema` と `Layer` を使わずに最小の Effect ユースケースを作る
- `packages/core` が学習の中心で、`apps/cli` は薄い入口に保つ
- 次のスレッドの Codex は、まず `plan.md` と `todo.md` を読むこと
