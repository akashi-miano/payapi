import { phone2, phone3 } from "../assets";

const Ui = () => {
  return (
    <section className="easy ui relative py-24 overflow-hidden">
      <div className="container grid md:grid-cols-2 items-center">
        <div className="img-wrapper flex items-center z-[2] order-[-1] md:order-[0]">
          <img src={phone2} alt="Phone Image" />
          <img src={phone3} alt="Phone Image`" />
        </div>
        <div className="text-wrapper order-[-1]">
          <header className="flow-content--m z-[2] text-center md:text-left">
            <h2 className="title text-5xl text-[#36536B]">Simple UI & UX</h2>
            <p className="description text-[#6C8294] max-w-[450px] mx-auto md:mx-0">
              Our pre-built form is easy to integrate in your app or website’s
              checkout flow and designed to optimize conversion.{" "}
            </p>
          </header>
        </div>
      </div>
      <div className="ball absolute rounded-full bg-slate-300 md:h-[875px] lg:w-[875px] lg:right-[-30%] md:top-[-50%]"></div>
    </section>
  );
};

export default Ui;
