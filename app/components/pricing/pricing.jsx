import PricingCard from './pricingCard';

export default function Pricing({ plansObj, pricingHeading, pricingDescription }) {

  return (
    <div className="my-8 md:mt-24 md:mb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-base md:text-base text-gray-700 dark:text-gray-300">
      <div className="">
        <div className="text-center">
          <h2 className="mt-24 sm:max-w-6xl font-black text-6xl text-500  tracking-wide uppercase text-center sm:mx-auto">
            {pricingHeading}
          </h2>
          <p className=" text-gray-900 dark:text-gray-400 tracking-wide sm:text-lg text-4xl md:text-4xl mt-10 md:mt-16 mb-16 sm:max-w-6xl text-center sm:mx-auto ">
            {pricingDescription}
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-8 md:grid-cols-2 lg:gap-x-2 lg:grid-cols-4">
          {plansObj.map((plan) => (
            <PricingCard planObj={plan} />
          ))}
        </div>
      </div>
    </div>
  );
};


