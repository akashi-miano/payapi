import { allies } from "../assets";

const Work = () => {
  return (
    <section className="allies py-16 bg-[#1B262F] text-white">
      <div className="container grid md:grid-cols-2 items-center">
        <header className="flow-content--m">
          <h2 className="title text-5xl mb-4">Who we work with</h2>
          <p className="description max-w-[450px] text-[#dedede]">
            Today, millions of people around the world have successfully
            connected their accounts to apps they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their users.{" "}
          </p>
          <a href="" className="secondary-btn">
            About Us
          </a>
        </header>
        <div className="img-wrapper">
          <img src={allies} alt="Ally Companies List" />
        </div>
      </div>
    </section>
  );
};

export default Work;
