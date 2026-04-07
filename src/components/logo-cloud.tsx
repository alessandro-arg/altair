const logos = [
  {
    name: "Webflow",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/nymiivu48d5lywhf9rpf.svg",
  },
  {
    name: "Tina",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/afqhiygywyphuou6xtxc.svg",
  },
  {
    name: "Mistral",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tyos2ayezryjskox3wzs.svg",
  },
];

const StaticLogoCloud = () => {
  return (
    <div className="w-full py-20 flex items-center justify-center">
      <div className="flex w-full flex-col items-center justify-center px-4 md:px-8">
        <p className="text-white/50 uppercase tracking-widest mb-10 font-medium">
          Trusted by developers at
        </p>
        <div className="flex justify-center items-center gap-6 flex-wrap max-w-xl mx-auto">
          {logos.map((logo, key) => (
            <img
              key={key}
              src={logo.url}
              className="h-10 w-28 px-2 brightness-0  dark:invert"
              alt={`${logo.name}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaticLogoCloud;
