export default function PageHeading({ heading, subheading }) {

    return (
        <div className="mt-10 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28 text-center sm:mx-auto sm:max-w-[85rem]">
            <h1 className="mb-8 text-6xl text-gray-800 dark:text-gray-200 font-bold md:text-6xl ">
                {heading}
            </h1>
            <p className=" text-gray-900 dark:text-gray-400 tracking-wide sm:text-lg text-4xl md:text-4xl mt-10 md:mt-16 mb-16 sm:max-w-[85rem] text-center sm:mx-auto ">
                {subheading}
            </p>
        </div>
    );
};