const Plan = ({ title, desc }) => {
  return (
    <div>
      <header className="flow-content--s">
        <h2 className="text-[#BA4270] text-[2rem]">{title}</h2>
        <p className="text-[#6C8294] max-w-[350px]">{desc}</p>
      </header>
    </div>
  );
};

export default Plan;
