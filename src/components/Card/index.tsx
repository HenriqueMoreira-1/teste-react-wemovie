import { useState } from "react";
import { CardContainer, CardContent, Image, Title, Price, Button, CounterText } from "./styles";
import { MdAddShoppingCart } from "react-icons/md";
import { convertDotIntoComma } from "../../utils/stringHelpers";

interface ICard {
  image: string;
  title: string;
  price: number
}

const Card: React.FC<ICard> = ({ image, title, price }) => {
  const priceWithComma = convertDotIntoComma(price);

  const [counter, setCounter] = useState(0);

  const handleAddToCart = () => { 
    setCounter((prev) => prev + 1);
  }

  return (
    <CardContainer>
      <CardContent>
        <Image src={image} />
        <Title>{title}</Title>
        <Price>R$ {priceWithComma}</Price>
        <Button onClick={handleAddToCart}>
          <MdAddShoppingCart width={13}/>
          <CounterText>{counter}</CounterText>
          Adicionar ao carrinho
        </Button>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
