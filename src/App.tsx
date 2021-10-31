import "./style.ts";
import { Input } from "./components/Input";
import { useState } from "react";
import { Card } from "./components/Card";
import { Container, Content } from "./style";

function App() {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [hobby, setHobby] = useState<string>("");

  interface User {
    name: string;
    age: number;
    hobby: string;
  }

  const [users, setUsers] = useState<User[]>([] as User[]);

  const handleSubmit = (name: string, age: number, hobby: string) => {
    const person = { name, age, hobby };
    setUsers([...users, person]);
    setName("");
    setAge(0);
    setHobby("");
  };

  return (
    <Container>
      <Content>
        <Input
          placeholder="nome"
          label="nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="idade"
          label="idade"
          type="number"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
        />
        <Input
          placeholder="hobby"
          label="hobby"
          value={hobby}
          onChange={(e) => setHobby(e.target.value)}
        />
        <button onClick={() => handleSubmit(name, age, hobby)}>Enviar</button>
      </Content>
      <h1>Cards cadastrados:</h1>
      <ul>
        {users.map((person) => (
          <Card
            key={person.age}
            name={person.name}
            age={person.age}
            hobby={person.hobby}
          />
        ))}
      </ul>
    </Container>
  );
}

export default App;