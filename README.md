# 📝 React ToDoアプリ with Storybook

React と Storybook を使用したシンプルで機能的な ToDo アプリケーションです。

![ToDo App](https://github.com/user-attachments/assets/c03c4aac-e3d6-4fb9-a87a-905eb03c1f38)

## 🚀 機能

- ✅ タスクの追加
- ✅ タスクの完了/未完了の切り替え
- ✅ タスクの削除
- ✅ 完了数のカウント表示
- ✅ レスポンシブデザイン
- ✅ Storybook によるコンポーネントのドキュメント化

## 📦 コンポーネント構成

### TodoApp
メインアプリケーションコンポーネント。全体の状態管理とレイアウトを担当します。

### TodoInput
新しいタスクを入力するためのコンポーネント。

### TodoList
タスクのリストを表示するコンポーネント。

### TodoItem
個々のタスクを表示し、完了状態の切り替えと削除機能を提供します。

## 🛠️ 技術スタック

- **React 19.2.0** - UI ライブラリ
- **Storybook 9.1.13** - コンポーネント開発・ドキュメント化ツール
- **Create React App** - プロジェクトのセットアップ
- **CSS** - スタイリング

## 📋 セットアップ

### 必要な環境

- Node.js (推奨: v14 以上)
- npm または yarn

### インストール

```bash
# リポジトリのクローン
git clone https://github.com/coffisomaeda/storybook-test.git

# ディレクトリに移動
cd storybook-test

# 依存関係のインストール
npm install
```

## 🎯 使い方

### 開発サーバーの起動

```bash
npm start
```

ブラウザで http://localhost:3000 を開くとアプリが表示されます。

### Storybook の起動

```bash
npm run storybook
```

ブラウザで http://localhost:6006 を開くと Storybook が表示されます。

![Storybook](https://github.com/user-attachments/assets/8a75b19a-269b-4136-9466-9bf9880e16d0)

### ビルド

```bash
# React アプリのビルド
npm run build

# Storybook のビルド
npm run build-storybook
```

## 📚 Storybook のストーリー

各コンポーネントには以下のストーリーが用意されています：

### TodoApp
- Default - デフォルト状態のアプリケーション

### TodoItem
- Default - 通常のタスク項目
- Completed - 完了したタスク項目
- Long Text - 長いテキストのタスク項目

### TodoInput
- Default - デフォルトの入力フォーム
- Custom Placeholder - カスタムプレースホルダー

### TodoList
- Empty - タスクが空の状態
- With Todos - タスクがある状態
- Many Todos - 多数のタスクがある状態

![TodoItem Component](https://github.com/user-attachments/assets/1d754956-2325-4f89-ad82-7ef6a340b172)

## 🎨 デザイン

- モダンなグラデーション背景
- 直感的な UI/UX
- ホバーエフェクトとアニメーション
- 完了したタスクの視覚的な区別（取り消し線とグレーアウト）

## 📝 コンポーネント API

### TodoItem Props
```javascript
{
  todo: {
    id: number,        // タスクの一意な ID
    text: string,      // タスクのテキスト
    completed: boolean // 完了状態
  },
  onToggle: (id) => void,  // 完了状態を切り替える関数
  onDelete: (id) => void   // タスクを削除する関数
}
```

### TodoInput Props
```javascript
{
  onAdd: (text) => void,      // タスクを追加する関数
  placeholder: string         // 入力欄のプレースホルダー（オプション）
}
```

### TodoList Props
```javascript
{
  todos: Array<{
    id: number,
    text: string,
    completed: boolean
  }>,
  onToggle: (id) => void,  // 完了状態を切り替える関数
  onDelete: (id) => void   // タスクを削除する関数
}
```

## 🤝 コントリビューション

プルリクエストを歓迎します！大きな変更の場合は、まず issue を開いて変更内容を議論してください。

## 📄 ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。

## 👨‍💻 作成者

- GitHub: [@coffisomaeda](https://github.com/coffisomaeda)

## 🙏 謝辞

- React チーム
- Storybook チーム
- Create React App チーム
