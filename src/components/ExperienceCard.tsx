import ExperienceInterface from "./ExperienceInterface";

function ExperienceCard({
  company,
  position,
  timeline,
  address,
  imagePath,
  link,
  responsible,
}: ExperienceInterface) {
  return (
    <section className="pb-[10rem] sm:pb-[6rem]">
      <div className="flex flex-col gap-8 sm:flex-row">
        <figure className="flex items-center justify-center">
          <img
            src={imagePath}
            alt={company}
            className="w-[18rem] sm:w-[10rem]"
          />
        </figure>
        <div className="sm:pl-6">
          <p className="font-bold text-3xl md:text-5xl pb-4 tracking-wide">
            {position}
          </p>
          <a
            className="font-medium text-3xl text-[#8b8b8b] tracking-wide transition-all duration-300 hover:cursor-pointer hover:text-[#1abf7f]"
            onClick={() => window.open(link)}
          >
            &#x40; {company}
          </a>
        </div>
        <div className="sm:ml-auto sm:text-right flex flex-col justify-between">
          <p className="font-bold text-3xl pb-4">{timeline}</p>
          <p className="font-medium text-3xl text-[#8b8b8b]">{address}</p>
        </div>
      </div>
      <div className="pt-7">
        <ol className="pl-[4rem] sm:pl-[6rem] list-disc">
          {responsible.map((item, index) => (
            <li
              key={index}
              className="text-2xl text-[#c6c6c6] leading-[3.5rem]"
            >
              {item}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default ExperienceCard;
