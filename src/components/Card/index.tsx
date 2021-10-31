import { ContainerCard } from "./style";

interface PersonProps {
  name: string;
  age: number;
  hobby: string;
}

export const Card = ({ name, age, hobby }: PersonProps) => (
  <ContainerCard>
    <h3>
      Nome: <span>{name}</span>
    </h3>
    <h4>
      Idade: <span>{age}</span>
    </h4>
    <h4>
      Hobby: <span>{hobby}</span>
    </h4>
  </ContainerCard>
);