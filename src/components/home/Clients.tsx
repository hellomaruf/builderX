// components/SaasTrustedBusiness.tsx
import Image from "next/image";
import Marquee from "react-fast-marquee";
import client1 from "../../../public/assets/img/bus-img.svg";
import client2 from "../../../public/assets/img/bus-img2.svg";
import client3 from "../../../public/assets/img/bus-img3.svg";
import client4 from "../../../public/assets/img/bus-img5.svg";
import client5 from "../../../public/assets/img/bus-img6.svg";

type Client = {
  value?: {
    image: string;
  };
};

type Clients = {
  clients?: Client[];
};

const staticClients: Client[] = [
  {
    value: {
      image: client1,
    },
  },
  {
    value: {
      image: client2,
    },
  },
  {
    value: {
      image: client3,
    },
  },
  {
    value: {
      image: client4,
    },
  },
  {
    value: {
      image: client5,
    },
  },
  {
    value: {
      image: client1,
    },
  },
  {
    value: {
      image: client2,
    },
  },
  {
    value: {
      image: client3,
    },
  },
  {
    value: {
      image: client4,
    },
  },
  {
    value: {
      image: client5,
    },
  },
];

export default function Clients({ clients }: Clients) {
  const combinedClients = [...staticClients, ...(clients || [])];

  return (
    <div className="bg-[#E4F3FF] pt-0 lg:pt-[50px] py-[50px] lg:py-[80px]">
      <div className="flex items-center">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="px-4 text-black font-bold">
          TRUSTED BY THOUSANDS BUSINESS
        </span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      <div className="mt-[40px] lg:mt-[70px]">
        <Marquee speed={50}>
          <div className="flex items-center">
            {combinedClients.map((item, index) => (
              <div
                className="bg-white mr-[20px] lg:mr-[30px] border border-[#00000026] rounded-[10px] h-[80px] lg:h-[112px] px-4 lg:px-8 flex items-center justify-center hover:scale-105 transition-transform duration-300"
                key={index}
              >
                <Image
                  src={item?.value?.image || "/placeholder.png"}
                  height={100}
                  width={100}
                  alt="business-img"
                  className="w-[80px] lg:w-[110px]"
                />
              </div>
            ))}
          </div>
        </Marquee>

        <div className="mt-[20px] lg:mt-[30px]">
          <Marquee direction="right" speed={50}>
            <div className="flex items-center">
              {combinedClients.map((item, index) => (
                <div
                  className="bg-white mr-[20px] lg:mr-[30px] border border-[#00000026] rounded-[10px] h-[80px] lg:h-[112px] px-4 lg:px-8 flex items-center justify-center hover:scale-105 transition-transform duration-300"
                  key={index}
                >
                  <Image
                    src={item?.value?.image || "/placeholder.png"}
                    height={100}
                    width={100}
                    alt="business-img"
                    className="w-[80px] lg:w-[110px]"
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}
