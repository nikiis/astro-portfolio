import type { CardProps } from '../Card/Card';
import Card from '../Card/Card';
import './CardGrid.scss';

type CardGridProps = {
  cards: CardProps[];
};

const CardGrid = ({ cards }: CardGridProps) => {
  return (
    <div className="grid">
      {cards.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          link={card.link}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default CardGrid;
