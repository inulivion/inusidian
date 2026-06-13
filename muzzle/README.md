## データベース操作（Drizzle）

### マイグレーションファイルの生成

スキーマ（`src/server/db/schema/index.ts`）変更後に実行する。

```bash
pnpm drizzle-kit generate
```

生成されたファイルは `src/server/db/migrations/` に出力される。

### マイグレーションの適用

```bash
pnpm drizzle-kit migrate
```

### Drizzle Studio（GUI）

```bash
pnpm drizzle-kit studio
```

ブラウザで `https://local.drizzle.studio` を開く。
