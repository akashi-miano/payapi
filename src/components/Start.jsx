const Start = () => {
  return (
    <section className="start py-20 overflow-hidden">
      <div className="container grid md:grid-cols-2">
        <header>
          <h2 className="title font-bold text-5xl">Ready to start?</h2>
        </header>
        <form action="" className="rounded-full">
          <div className="form__wrapper flex items-center relative max-w-[35rem] rounded-full shadow-lg">
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
      </div>
    </section>
  );
};

export default Start;
