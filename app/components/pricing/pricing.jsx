import PricingCard from './pricingCard';

export default function Pricing({ plansObj, pricingHeading, pricingDescription }) {

  return (
    <div className="my-8 md:mt-24 md:mb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-base md:text-base text-gray-700 dark:text-gray-300">
      <div className="">
        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-4 md:gap-y-4">
          <h1 className="mb-8 text-gray-900 dark:text-gray-300 font-bold text-2xl md:text-3xl">
            Pricing
          </h1>
        </div>

        <p className="mb-4 font-bold">
          {pricingHeading}
        </p>
        <p className="mb-12">
          {pricingDescription}
        </p>
        <div className="mt-16 grid grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-8 md:grid-cols-2 lg:gap-x-2 lg:grid-cols-4">
          {plansObj.map((plan) => (
            <PricingCard planObj={plan} />
          ))}
        </div>
      </div>
    </div>
  );
};


