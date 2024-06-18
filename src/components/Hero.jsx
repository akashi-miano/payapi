import { heroImg, msg } from "../assets";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container grid md:grid-cols-2 items-center">
        <div className="text-wrapper flow-content--m">
          <header className="max-w-[500px]">
            <h1 className="title text-6xl font-bold text-[#36536B] py-4">
              Start building with our APIs for absolutely free.
            </h1>
          </header>
          <form action="" className="shadow-lg rounded-full">
            <div className="form__wrapper flex items-center relative max-w-[35rem] rounded-full">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-6 py-2 outline-none rounded-full"
              />
              <button className="btn main-btn text-xs absolute right-0 min-h-[45px]">
                Schedule a Demo
              </button>
            </div>
          </form>
          <span className="flex items-center gap-2 text-[#6C8294]">
            Have any questions?{" "}
            <a className="font-bold hover:cursor-pointer hover:text-black duration-300">
              Contact Us
            </a>
          </span>
        </div>
        <div className="img-wrapper translate-y-[10%]">
          <img
            src={heroImg}
            alt="Hero Section's Image"
            className="max-h-[550px] mx-auto"
          />
        </div>
        <div className="ball absolute rounded-full bg-slate-300 h-[950px] w-[950px] right-[-15%] top-[-50%] z-[-1]"></div>
      </div>
    </section>
  );
};

export default Hero;
