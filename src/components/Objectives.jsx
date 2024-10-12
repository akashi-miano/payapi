import objectives from "../../public/objects";

const Objectives = () => {
  return (
    <div className="py-6">
      <div className="wrapper flow-content--m text-center md:text-left">
        {objectives.map(({ title, desc }, idx) => (
          <header className="obj-grid" key={idx}>
            <h2 className="text-[#36536B] text-2xl mb-4 md:mb-0">{title}</h2>
            <p className="max-w-[450px] text-[#6C8294] mx-auto md:mx-0">
              {desc}
            </p>
          </header>
        ))}
      </div>
    </div>
  );
};

export default Objectives;
