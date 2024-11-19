

export default function Features({ featuresObj, featuresHeading }) {

  return (
    <div className="my-8 md:my-48 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="">
        <div className="text-center">
          <h2 className="my-24 sm:max-w-6xl font-black text-6xl text-500  tracking-wide uppercase text-center sm:mx-auto">
            {featuresHeading}
          </h2>
        </div>
        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-4 md:gap-y-4">
          {featuresObj.map((feature) => (
            <div key={feature.id} className="relative">
              <div className="py-12 px-2 relative ">
                <div className="ml-4 mb-1 h-16 w-16 bg-transparent">
                  <feature.icon className="size-12 text-500 dark:text-400" />
                </div>
                <p className="ml-4 mb-4 text-2xl font-medium text-gray-900 dark:text-gray-100 ">
                  {feature.heading}
                </p>
                <p className="mt-2 mx-4 text-xl text-gray-600 dark:text-gray-200 font-normal">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
