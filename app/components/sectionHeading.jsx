export default function SectionHeading({ heading, subheading }) {

    return (
        <>
            <h2 className="mt-24 sm:max-w-[85rem] font-black text-6xl text-500 tracking-wide uppercase text-center sm:mx-auto">
                {heading}
            </h2>
            <p className=" text-gray-900 dark:text-gray-400 tracking-wide sm:text-lg text-4xl md:text-4xl mt-10 md:mt-16 mb-16 sm:max-w-[85rem] text-center sm:mx-auto ">
                {subheading}
            </p>
        </>
    );
};