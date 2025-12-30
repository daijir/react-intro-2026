# React入門 2026 - サンプルコード

このプロジェクトは Zenn book「React入門 2026」のサンプルコードです。

## ブランチ構成

| ブランチ   | 内容                           |
| ---------- | ------------------------------ |
| `main`     | 最新の進捗                     |
| `start`    | 03章開始時点（Viteデフォルト） |
| `part-2`   | Part 2完了（10章: フォーム）   |
| `part-3`   | Part 3完了（15章: Hooks）      |
| `part-4`   | Part 4完了（18章: UI）         |
| `part-5`   | Part 5完了（21章: 状態管理）   |

途中から始めたい場合は、対応するブランチをチェックアウトしてください。

```bash
git checkout start  # 03章から始める場合
```

## 技術スタック

- **React 19** + **TypeScript**
- **Vite 7** - 高速なビルドツール

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

ブラウザで <http://localhost:5173> にアクセスしてください。

## 利用可能なスクリプト

| コマンド          | 説明                   |
| ----------------- | ---------------------- |
| `npm run dev`     | 開発サーバーを起動     |
| `npm run build`   | 本番用ビルド           |
| `npm run preview` | ビルド結果をプレビュー |
| `npm run lint`    | ESLintでコード検証     |

## 学習の進め方

1. `npm run dev`で開発サーバーを起動
2. コードを編集して変更を確認（HMRで自動更新）
3. bookの各チャプターに沿って機能を理解
4. 自分でコードを追加・修正して学習

## 関連リンク

- [Zenn book: React入門 2026](https://zenn.dev/rasshii/books/learning-react-2026)
