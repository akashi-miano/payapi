import Footer from "./Footer";
import Nav from "./Nav";
import Start from "./Start";
import { sponsors } from "../assets";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import classNames from "classnames";

const Contacts = () => {
  const schema = z.object({
    name: z.string().min(3).max(30),
    email: z.string().email(),
    message: z.string().min(1),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const submittedData = (data, e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <>
      <Nav />
      <section className="contacts py-16">
        <div className="container">
          <header className="mb-6">
            <h1 className="title text-[#36536B] text-[3.5rem] max-w-[730px] text-center md:text-left">
              Submit a help request and we’ll get in touch shortly.
            </h1>
          </header>
          <div className="wrapper grid md:grid-cols-2 gap-12 items-center">
            <form onSubmit={handleSubmit(submittedData)}>
              <div className="">
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className={classNames(
                    "w-full border-b p-2 border-gray-400 duration-300",
                    {
                      "border-[#FF0000] placeholder:text-[#FF0000]":
                        errors.email,
                      "border-gray-400": !errors.name,
                    }
                  )}
                  {...register("name")}
                />
                <span
                  className={classNames("text-[#FF0000] duration-300 text-xs", {
                    "opacity-100": errors.name,
                    "opacity-0": !errors.name,
                  })}
                >
                  Names must be 3 to 30 characters long!
                </span>
              </div>
              <div className="">
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  className={classNames(
                    "w-full border-b p-2 border-gray-400 duration-300",
                    {
                      "border-[#FF0000] placeholder:text-[#FF0000]":
                        errors.email,
                      "border-gray-400": !errors.email,
                    }
                  )}
                  {...register("email")}
                />
                <span
                  className={classNames("text-red-500 duration-300 text-xs", {
                    "opacity-100": errors.email,
                    "opacity-0": !errors.email,
                  })}
                >
                  Input a valid email address!
                </span>
              </div>
              <div className="">
                <input
                  type="text"
                  id="cn"
                  placeholder="Company Name"
                  className="w-full border-b p-2 border-gray-400"
                  {...register("company")}
                />
              </div>
              <div className="">
                <input
                  type="text"
                  id="title"
                  placeholder="Title"
                  className="w-full border-b p-2 border-gray-400"
                  {...register("title")}
                />
              </div>
              <div className="">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  className="w-full border-b p-2 border-gray-400 min-h-[150px] max-h-[250px] vertical"
                  {...register("message")}
                ></textarea>
                <span
                  className={classNames("text-red-500 duration-300", {
                    "opacity-100": errors.message,
                    "opacity-0": !errors.message,
                  })}
                ></span>
              </div>
              <div className="flex items-center gap-4 my-4">
                <input type="checkbox" id="cb" />
                <label
                  htmlFor="cb"
                  className="text-[#36536B] max-w-[400px] text-md select-none"
                >
                  Stay up-to-date with company announcements and updates to our
                  API
                </label>
              </div>
              <button type="submit" className="btn btn--primary">
                Submit
              </button>
            </form>
            <div className="flow-content--m">
              <header>
                <h2 className="text-[#36536B] max-w-[400px] text-2xl !font-medium title text-center md:text-left">
                  Join the thousands of innovators already building with us
                </h2>
              </header>
              <div className="img-wrapper">
                <img src={sponsors} alt="List of sponsors" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Start />
      <Footer />
    </>
  );
};

export default Contacts;
