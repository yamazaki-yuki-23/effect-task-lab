# effect-task-lab

Effect TypeScript を使ったタスク管理アプリのサンプルプロジェクトです。

このリポジトリは、CLI、REST API、Web UI へ段階的に拡張できる構成を前提にしています。

## Project Structure

```text
effect-task-lab/
  apps/
    cli/
  packages/
    core/
  .github/
```

- `packages/core`
  - 共有ドメインとユースケース
- `apps/cli`
  - CLI アプリケーション

## Requirements

- Node.js 24
- pnpm 10

## Setup

```bash
pnpm install
```

## Available Commands

```bash
pnpm dev:cli
pnpm build
pnpm lint
pnpm format
pnpm check
pnpm knip
```

## Tooling

- TypeScript
- Effect
- pnpm workspace
- Biome
- Knip
- GitHub Actions

## License

MIT
