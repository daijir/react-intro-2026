export function About() {
  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">About</h1>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">React入門 2025</h2>
        <p className="text-gray-600 mb-4">
          このアプリケーションは、React入門講座の実践プロジェクトとして作成されたタスク管理アプリです。
        </p>

        <h3 className="font-semibold mb-2">使用技術</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>React + TypeScript</li>
          <li>Vite</li>
          <li>Tailwind CSS</li>
          <li>Zustand（状態管理）</li>
          <li>React Router（ルーティング）</li>
        </ul>

        <h3 className="font-semibold mt-4 mb-2">機能</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>タスクの追加・編集・削除</li>
          <li>完了状態の切り替え</li>
          <li>フィルタリング（すべて/未完了/完了）</li>
          <li>ローカルストレージへの永続化</li>
        </ul>
      </div>
    </div>
  )
}
