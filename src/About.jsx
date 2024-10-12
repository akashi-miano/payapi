import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Objectives from "./components/Objectives";
import Start from "./components/Start";
import TeamCard from "./components/TeamCard";
import team from "../public/team";

const About = () => {
  {
    console.log(team);
  }
  return (
    <>
      <Nav />
      <section className="py-16 ">
        <div className="container">
          <div className="wrapper obj-height">
            <header className="mb-6">
              <h1 className="text-4xl text-[#36536B] max-w-[400px] mx-auto md:mx-0">
                We empower innovators by delivering access to the financial
                system
              </h1>
            </header>
            <Objectives />
            <div className="wrapper grid md:grid-cols-3 gap-6">
              {team.map(({ title, count }, idx) => (
                <TeamCard title={title} count={count} key={idx} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Start />
      <Footer />
    </>
  );
};

export default About;
