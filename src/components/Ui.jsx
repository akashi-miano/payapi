import { phone2, phone3 } from "../assets";

const Ui = () => {
  return (
    <section className="easy ui relative py-16 overflow-hidden">
      <div className="container grid md:grid-cols-2 items-center">
        <div className="img-wrapper flex items-center">
          <img src={phone2} alt="Phone Image" />
          <img src={phone3} alt="Phone Image`" />
        </div>
        <div className="text-wrapper order-[-1]">
          <header className="flow-content--m">
            <h2 className="title text-5xl text-[#36536B]">Simple UI & UX</h2>
            <p className="description text-[#6C8294] max-w-[450px]">
              Our pre-built form is easy to integrate in your app or website’s
              checkout flow and designed to optimize conversion.{" "}
            </p>
          </header>
        </div>
      </div>
      <div className="ball absolute rounded-full bg-slate-300 h-[800px] w-[800px] right-[-26%] top-[-35%] z-[-1]"></div>
    </section>
  );
};

export default Ui;
