# React入門 2025 - サンプルコード

このプロジェクトは Zenn book「React入門 2025」のサンプルコードです。

## 技術スタック

- **React 19** + **TypeScript**
- **Vite** - 高速なビルドツール
- **Tailwind CSS** - ユーティリティファーストCSS
- **Zustand** - 軽量な状態管理
- **React Router** - クライアントサイドルーティング
- **TanStack Query** - サーバー状態管理

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

ブラウザで http://localhost:5173 にアクセスしてください。

## ディレクトリ構成

```text
src/
├── components/     # 再利用可能なコンポーネント
│   ├── TaskForm.tsx
│   ├── TaskItem.tsx
│   ├── TaskList.tsx
│   └── FilterTabs.tsx
├── hooks/          # カスタムフック
├── stores/         # Zustandストア
│   └── taskStore.ts
├── types/          # TypeScript型定義
│   └── task.ts
├── pages/          # ページコンポーネント
│   ├── Home.tsx
│   └── About.tsx
├── App.tsx         # ルートコンポーネント
└── main.tsx        # エントリーポイント
```

## 利用可能なスクリプト

| コマンド | 説明 |
|---------|------|
| `npm run dev` | 開発サーバーを起動 |
| `npm run build` | 本番用ビルド |
| `npm run preview` | ビルド結果をプレビュー |
| `npm run lint` | ESLintでコード検証 |

## 機能

- タスクの追加・編集・削除
- タスクの完了状態の切り替え
- フィルタリング（すべて/未完了/完了）
- ローカルストレージへの永続化

## 学習の進め方

1. `npm run dev`で開発サーバーを起動
2. コードを編集して変更を確認（HMRで自動更新）
3. bookの各チャプターに沿って機能を理解
4. 自分でコードを追加・修正して学習
