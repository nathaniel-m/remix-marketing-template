import { CheckIcon } from '@heroicons/react/20/solid'

export default function PricingCard({ planObj }) {
  return (
    <div
      className='bg-100 dark:bg-gray-800 sm:mx-8 lg:mx-0 lg:rounded-tr-3xl rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 h-full'
    >
      <h3
        className='text-600 dark:text-500 text-base font-semibold leading-7'
      >
        {planObj.name}
      </h3>
      <p className="mt-4 flex items-baseline gap-x-2">
        <span
          className='text-gray-900 dark:text-gray-300 text-5xl font-semibold tracking-tight'
        >
          {planObj.price ? planObj.price : 'FREE'}
        </span>
        <span className='text-gray-700 dark:text-gray-500 text-base'>{planObj.price ? "/month" : ''} </span>
      </p>
      <p className='text-gray-700 dark:text-gray-300 mt-6 text-base leading-7'>
        {planObj.description}
      </p>
      <ul
        role="list"
        className='text-gray-700 dark:text-gray-300 mt-8 space-y-3 text-sm leading-6 sm:mt-10'
      >
        {planObj.features.map((feature) => (
          <li key={feature.id} className="flex gap-x-3">
            <CheckIcon
              aria-hidden="true"
              className='text-600 dark:text-500 h-6 w-5 flex-none'
            />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};


