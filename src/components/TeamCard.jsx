const TeamCard = ({ title, count }) => {
  return (
    <div className="border-y-2  py-4">
      <header className="flex flex-col gpa-2">
        <h3 className="text-[#6C8294] overflow-hidden">{title}</h3>
        <span className="text-[#BA4270] text-5xl py-2">{count}</span>
      </header>
    </div>
  );
};

export default TeamCard;
