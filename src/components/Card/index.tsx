import { Infos } from "./style";
import { Card, Avatar } from 'antd';
import 'antd/dist/antd.css';

interface PersonProps {
  name: string;
  age: number;
  hobby: string;
}
const { Meta } = Card;

export const Card2 = ({ name, age, hobby }: PersonProps) => (
    
    <>
    <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://www.ainotes.org/svg/studying.svg"
      />
    }
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
    />
    <Infos>
    <h3>
    Nome: <span>{name}</span>
    </h3>
    <h4>
    Idade: <span>{age}</span>
    </h4>
    <h4>
    Hobby: <span>{hobby}</span>
    </h4>
    </Infos>
  </Card>
  </>
);