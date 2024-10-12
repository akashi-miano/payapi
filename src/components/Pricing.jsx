import Footer from "./Footer";
import Nav from "./Nav";
import subsData from "../../public/subsData";
import Plan from "./Plan";
import Start from "./Start";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <>
      <Nav />
      <section className="pricing">
        <div className="container">
          <header className="my-2">
            <h1 className="title text-[#36536B] text-[3.5rem]">Pricing</h1>
          </header>
          <div className="subscriptions grid md:grid-cols-3">
            {subsData.map(({ title, desc }, idx) => (
              <Plan title={title} desc={desc} key={idx} />
            ))}
          </div>
          <div className="wrapper grid md:grid-cols-3 gap-6 mb-12">
            <PricingCard price={"$0.00"} comp={1} />
            <PricingCard price={"$249.00"} comp={2} />
            <PricingCard price={"$499.00"} comp={3} />
          </div>
        </div>
        <Start />
      </section>
      <Footer />
    </>
  );
};

export default Pricing;
