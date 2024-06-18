import { code } from "../assets";

const Easy = () => {
  return (
    <section className="easy py-12">
      <div className="container grid md:grid-cols-2 items-center">
        <div className="img-wrapper">
          <img src={code} alt="Code IDE" />
        </div>
        <div className="text-wrapper">
          <header className="flow-content--m">
            <h2 className="title text-5xl text-[#36536B]">Easy to implement</h2>
            <p className="description text-[#6C8294] max-w-[450px]">
              Our API comes with just a few lines of code. You’ll be up and
              running in no time. We built our documentation page to integrate
              payments functionality with ease.
            </p>
          </header>
        </div>
      </div>
    </section>
  );
};

export default Easy;
