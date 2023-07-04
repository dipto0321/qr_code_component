import './styles.css';

export interface CardProps {
  imgSrc: string;
  title: string;
  description: string;
}

export const Card = ({ imgSrc, title, description }: CardProps) => {
  return (
    <div className="card-container">
      <img src={imgSrc} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};
