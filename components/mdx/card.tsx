interface CardProps {
  text: string;
}

const Card = ({ text }: CardProps) => {
  return (
    <section className="w-full bg-neutral-800 py-6 tracking-tight">
      <p>{text}</p>
    </section>
  );
};

export default Card;
