import './Card.scss';

type CardImage = {
  filename: string;
  alt: string;
};

export type CardProps = {
  image: CardImage;
  link: string;
  title: string;
  description: string;
};

const Card = ({ image, link, title, description }: CardProps) => {
  return (
    <a href={link} className="card">
      <img src={`../../assets/${image.filename}.jpg`} alt={image.alt} />
      <div className="text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default Card;
