const journey = [
  {
    years: "2025 - Present",
    role: "freelance web developer & design",
    institusional: "home",
  },
  {
    years: "2021 - 2025",
    role: "Store crew",
    institusional: "Indomarco Prismatama",
  },
  {
    years: "2018 - 2021",
    role: "Student",
    institusional: "High Scool Tridharma 2 Bogor",
  },
];
const Journey = () => {
  return (
    <div className="flex flex-col">
      <h2 className="h2 mb-8">
        Education & <span className="text-accent">Experience</span>
      </h2>
      {journey.map((item, index) => {
        const { institusional, role, years } = item;
        return (
          <div key={index} className="flex items-center gap-12 w-full">
            <div className="flex flex-col w-max justify-center items-center">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <div className="w-1 h-[180px] bg-white/10"></div>
            </div>
            <div className="max-w-[500px]">
              <p className="mb-6 text-lg text-white/50 ">{years}</p>
              <p className="h4 mb-2">{role}</p>
              <p className="text-lg text-white/50">{institusional}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Journey;
