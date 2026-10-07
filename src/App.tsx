type GreetingProps = {
  name: string,
  age: number
  language?: 'ja' | 'en'
}

function Greeting({ name, age, language = 'ja' }: GreetingProps) {
  if (language === 'en') {
    return <p>Hello, {name}. You are {age} years old.</p>
  }
  return <p>こんにちは、{name}さん。あなたは{age}歳です。</p>
}

function App() {
  return <Greeting name="太郎" age={30} />
}

export default App