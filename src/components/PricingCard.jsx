import {
  services1List,
  services2List,
  services3List,
} from "../../public/services";
import { ImCheckmark } from "react-icons/im";

const servicesMap = {
  1: services1List,
  2: services2List,
  3: services3List,
};

const PricingCard = ({ price, comp }) => {
  const servicesList = servicesMap[comp];

  return (
    <div className="wrapper">
      <header>
        <span className="price text-[#36536B] text-[3.5rem]">{price}</span>
      </header>

      <ul className="wrapper border-y-2 py-4 mb-6">
        {servicesList.map(({ service, included }, idx) => (
          <li
            key={idx}
            className={included ? "text-[#36536B]" : "text-gray-400"}
          >
            <div className=" flex items-center gap-2">
              {
                <ImCheckmark
                  className={
                    included ? "text-[#BA4270] opacity-1" : "opacity-0"
                  }
                />
              }
              <span>{service}</span>
            </div>
          </li>
        ))}
      </ul>
      <a href="" className="btn btn--primary">
        Request Access
      </a>
    </div>
  );
};

export default PricingCard;
