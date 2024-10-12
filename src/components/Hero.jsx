import { heroImg, msg } from "../assets";

const Hero = () => {
  return (
    <section className="hero pb-16 lg:pb-8">
      <div className="container grid lg:grid-cols-2 items-center">
        <div className="text-wrapper flow-content--m">
          <header className="max-w-[500px] mx-auto">
            <h1 className="title text-6xl font-bold text-[#36536B] py-4 text-center lg:text-left">
              Start building with our APIs for absolutely free.
            </h1>
          </header>
          <form
            action=""
            className="flex justify-between p-0 shadow-md rounded-full"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full h-full p-[1rem] outline-none rounded-full border-0 flex-1"
            />
            <button className="btn main-btn text-xs">Schedule a Demo</button>
          </form>
          <span className="flex items-center gap-2 text-[#6C8294] justify-center lg:justify-start">
            Have any questions?{" "}
            <a className="font-bold hover:cursor-pointer hover:text-black duration-300">
              Contact Us
            </a>
          </span>
        </div>
        <div className="img-wrapper translate-y-[10%] order-[-1] lg:order-[0]">
          <img
            src={heroImg}
            alt="Hero Section's Image"
            className="max-h-[550px] mx-auto"
          />
        </div>
        <div className="ball absolute rounded-full bg-slate-300 lg:h-[950px]  lg:w-[950px] right-[-15%] top-[-50%] z-[-1]"></div>
      </div>
    </section>
  );
};

export default Hero;
