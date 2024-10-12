import Card from "./Card";
import cardData from "../../public/cardData";

const Services = () => {
  return (
    <section className="py-24">
      <div className="container grid md:grid-cols-3 gap-4">
        {cardData.map(({ img, title, description }, idx) => (
          <Card key={idx} img={img} title={title} description={description} />
        ))}
      </div>
    </section>
  );
};

export default Services;
