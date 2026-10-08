import { useState } from "react";

type User = {
  name: string;
}

function UserForm() {
  const [user, setUser] = useState<User>({ name: "" });

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ name: event.target.value });
  }

  return (
    <div>
      <label>
        Name: 
        <input type="text" value={user.name} onChange={handleNameChange} placeholder="Enter your name" />
      </label>
      <p>Hello, {user.name || "stranger"}!</p>
    </div>
  );
}

function App() {
  return <UserForm />;
}

export default App;
