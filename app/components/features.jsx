import SectionHeading from '../components/sectionHeading.jsx'

export default function Features({ features }) {

  return (
    <div className="my-8 md:mt-48 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading heading={features.featuresHeading} subheading={features.featuressubeading} />
      <div className="md:grid md:grid-cols-3 lg:gap-x-10 lg:gap-y-10 gap-x-8 gap-y-8">
        {features.sections.map((feature) => (
          <>
            {feature.features.map((feature) => (
              <div className="py-12 px-2 relative border-2 border-500 rounded-xl">
                <p className="ml-4 mb-4 text-2xl font-medium text-gray-900 dark:text-gray-100 ">
                  {feature.name}
                </p>
                <p className="mt-2 mx-4 text-xl text-gray-600 dark:text-gray-200 font-normal">
                  {feature.description}
                </p>
              </div>
            ))}
          </>
        ))}
      </div>
    </div>
  );
};
