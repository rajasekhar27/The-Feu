"use client";

import optimiseImage from "@/helper/optimiseImage";

//our team list
const ourTeam = [
  {
    id: 1,
    image: `/images/OurTeam1.png`,
    name: "Joe Francis",
    description: "Executive Chef",
  },
  {
    id: 2,
    image: "/images/OurTeam5.png",
    name: "Vittal Venkatesh",
    description: "Sous Chef",
  },
  {
    id: 3,
    image: "/images/OurTeam2.png",
    name: "Ganesh Rai",
    description: "Thai Chef",
  },
  {
    id: 4,
    image: "/images/OurTeam3.png",
    name: "Rahul",
    description: "CDP Continental",
  },
  {
    id: 5,
    image: "/images/OurTeam4.png",
    name: "Syed Ali",
    description: "Sous Chef",
  },
  {
    id: 6,
    image: "/images/OurTeam6.png",
    name: "Gazal Malkani",
    description: "Commi Chef",
  },
];

const AboutOurTeam = () => {
  return (
    <div className="flex flex-col justify-center items-center containerCenter mt-6 md:mt-36">
      <div className="border-t-2 border-b-2 border-ownChocoGray py-[8px] md:pt-6 md:pb-6">
        <p className="font-sanford text-xl md:text-4xl font-[400] text-[#000000]">
          Our Team
        </p>
      </div>

      <div className="mt-[24px] md:mt-[40px]  grid grid-cols-2 md:grid-cols-3  justify-items-center  w-full">
        {ourTeam.map((e) => (
          <div
            key={e.id}
            className={`flex flex-col  justify-center items-center mb-[24px] w-[120px] md:w-[250px]  ${
              e.id === 5 && `  md:pb-[55px]`
            }
            ${e.id === 2 && `md:pb-[55px]`}
           
            ${e.id === 6 && `  md:mt-[-40px] mt-[-20px]`} ${
              e.id === 3 && `  md:pt-[30px]`
            }`}
          >
            <img
              className={`hidden md:block mt-12 ${e.id === 1 && ` md:mt-24`} ${
                e.id === 6 && ` `
              }`}
              src={optimiseImage(e.image)}
              alt="image"
            />
            <img
              className={`md:hidden w-[85px] h-[120px] mt-5  ${
                e.id === 1 && `pt-[25px]  `
              }  ${e.id === 6 && ` h-[150px] pt-[30px] `}`}
              src={optimiseImage(e.image)}
              alt="image"
            />
            <p className="font-sanford mt-[16px] text-[16px] md:text-[27px]">
              {e.name}
            </p>
            <p className="text-[14px] md:text-[18px] font-nunito text-center mt-[4px] md:mt-[16px]">
              {e.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutOurTeam;
