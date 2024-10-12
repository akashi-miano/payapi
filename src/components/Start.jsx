const Start = () => {
  return (
    <section className="start container">
      <div className="grid md:grid-cols-2 items-center pb-12">
        <header className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="title font-bold text-5xl text-[#36536B] py-4">
            Ready to start?
          </h2>
        </header>
        <form className="flex justify-between p-0 shadow-md rounded-full">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full p-[.7rem] outline-none rounded-full border-0 flex-1"
          />
          <button className="btn main-btn text-xs">Schedule a Demo</button>
        </form>
      </div>
    </section>
  );
};

export default Start;
