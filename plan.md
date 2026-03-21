# Effect 学習ガイドライン: タスク管理アプリを段階的に育てる

## Summary

- 題材は `タスク管理アプリ` とし、`CLI -> REST API -> React + Vite の最小UI` の順で拡張する。
- 実装は学習者が担当し、AI は `学習順の提示 / 設計相談 / 実装方針のレビュー / デバッグ支援 / テスト観点の提示` に徹する。
- 主目的は、Effect の主要概念を読むことではなく、`自分で機能追加しながら設計を育てられること`。
- フロントエンドは最終確認用の薄い層として扱い、Effect 学習の主戦場は CLI と API に置く。

## 学習フェーズ

### フェーズ1: 最小CLI

- 機能は `追加 / 一覧 / 完了 / 削除` のみ。
- 永続化は `インメモリ` で開始。
- 学ぶ範囲は `The Effect Type` `Creating Effects` `Running Effects` `Using Generators` `Building Pipelines`。
- 到達基準は、`Effect<Success, Error, Requirements>` の3要素を読めて、基本的な CLI 処理を Effect で組めること。

### フェーズ2: 入力検証とエラー設計

- CLI 入力を `Schema` で検証する。
- `TaskNotFound` `ValidationError` などのドメインエラーを明示する。
- 学ぶ範囲は `Expected Errors` `Fallback` `Matching` `Schema Getting Started` `Schema Basic Usage`。
- 到達基準は、`throw` に頼らず失敗を型で扱えること。

### フェーズ3: Requirements と Layer

- `TaskRepository` `IdGenerator` `Clock` などの依存をサービスとして切り出す。
- `インメモリ実装` と `ファイル保存実装` を差し替え可能にする。
- 学ぶ範囲は `Managing Services` `Managing Layers` `Scope` `Configuration`。
- 到達基準は、ユースケースが具体実装から分離され、Layer 差し替えで動作を変えられること。

### フェーズ4: REST API 化

- CLI で作った `domain` と `application` を流用し、HTTP 入出力層を追加する。
- エンドポイントは `POST /tasks` `GET /tasks` `PATCH /tasks/:id/complete` `DELETE /tasks/:id` に限定。
- リクエスト/レスポンスの検証も `Schema` で統一する。
- 到達基準は、同じユースケースを CLI と API の両方から使えること。

### フェーズ5: React + Vite の最小UI

- UI は `一覧表示 / 追加 / 完了 / 削除` のみ。
- フロントは `React + Vite`、通信はまず `fetch` を使う。
- `TanStack Query` や状態管理ライブラリは最初は入れない。
- Effect をフロント全面に持ち込まず、まずは「Effect で作った API を使う」ことに集中する。
- 到達基準は、バックエンドの設計を崩さず UI から一連の操作を確認できること。

## 重要な設計ルール

- 早い段階で固定する中核型
  - `TaskId`
  - `TaskTitle`
  - `TaskStatus`
  - `Task`
- ユースケースは CLI / API で共通化する
  - `createTask`
  - `listTasks`
  - `completeTask`
  - `deleteTask`
- 失敗型は `unknown` に逃がさず明示する
  - `ValidationError`
  - `TaskNotFound`
  - `DuplicateTask`
  - `PersistenceError`
- レイヤ責務は大きく4つに留める
  - `domain`
  - `application`
  - `infrastructure`
  - `entrypoints` (`cli` / `http`)
- フロント導入後も、原則として変更対象は `presentation` と API 呼び出し層に留め、`domain` と `application` は触らない。

## テストと確認項目

- CLI
  - 追加、一覧、完了、削除が正しく動く。
- ドメイン / ユースケース
  - 不正入力、存在しない ID、重複などが期待通り失敗する。
- Layer
  - インメモリ実装とファイル実装で同じユースケーステストが通る。
- API
  - リクエスト検証、エラー変換、HTTP ステータスが正しい。
- UI
  - 一覧取得、追加、完了、削除が API 経由で反映される。
  - エラー時に最低限の表示ができる。

## AI の関わり方

- 実装そのものは代行しない。
- 各フェーズで AI が行うのは次に限定する。
  - 今読むべきドキュメント範囲の絞り込み
  - 次に実装する最小タスクの提示
  - 設計レビュー
  - エラー原因の切り分け
  - テスト観点の提案
  - コードレビュー
- 学習者が詰まったら、`完成コード` ではなく `方針 / 分解 / ヒント / レビュー` を返す前提にする。

## Assumptions

- 学習の主軸はバックエンドで、フロントは最後の確認フェーズ。
- フロントの採用ライブラリは `React + Vite`。
- UI は作り込まない。目的は見た目ではなく、API と状態遷移の理解。
- 公式ドキュメントは全読しない。優先範囲は `Getting Started` `Error Management` `Requirements Management` `Schema` `Testing` に限定する。
- 最終目標は「Effect の用語を説明できること」ではなく、「小さなアプリを自力で育てながら Effect の設計判断ができること」。
