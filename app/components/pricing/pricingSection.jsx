import { Switch } from '@headlessui/react'
import { useState } from 'react'

import PricingCard from './pricingCard';

export default function PricingSection({ plans, pricingHeading, pricingDescription }) {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className="my-8 md:mt-24 md:mb-20 max-w-[85rem] mx-auto px-4 sm:px-6 lg:py-14 lg:px-8 text-base md:text-base text-gray-700 dark:text-gray-300">
      <h2 className="mt-24 sm:max-w-[85rem] font-black text-6xl text-500 tracking-wide uppercase text-center sm:mx-auto">
        {pricingHeading}
      </h2>
      <p className=" text-gray-900 dark:text-gray-400 tracking-wide sm:text-lg text-4xl md:text-4xl mt-10 md:mt-16 mb-16 sm:max-w-[85rem] text-center sm:mx-auto ">
        {pricingDescription}
      </p>
      <div className="flex justify-center items-center">
        <label className="min-w-14 text-sm text-gray-600 dark:text-gray-300 me-3">Monthly</label>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-gray-800 dark:bg-gray-800 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-500"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
          />
        </Switch>
        <label className="relative min-w-14 text-sm text-gray-600 dark:text-gray-300 ms-3">
          Annual</label>
      </div>
      <div className="mt-16 grid grid-cols-1 items-center gap-y-8 sm:mt-20 sm:gap-y-8 md:grid-cols-2 lg:gap-x-6 lg:grid-cols-4">
        {plans.map((plan) => (
          <PricingCard planObj={plan} />
        ))}
      </div>
    </div>
  );
};


