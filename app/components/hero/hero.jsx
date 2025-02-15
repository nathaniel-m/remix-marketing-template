import StoreLink from "../storeLink.jsx";

export default function Hero({ heroText, storeLinks }) {
  return (
    <div className="mt-14 md:mt-36">
      <div className=" ">
        <main className="mt-10 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28 ">
          <h1 className="mb-4 text-4xl text-gray-700 dark:text-gray-200 font-black md:text-6xl sm:max-w-[85rem] text-center sm:mx-auto">
            {heroText.heading} <br />
          </h1>
          <h1 className="uppercase mb-16 text-4xl font-extrabold md:text-6xl sm:max-w-[85rem] sm:mx-auto text-center text-500">
            {heroText.heading_bold}
          </h1>
          <p className=" text-gray-900 dark:text-gray-400 tracking-wide sm:text-lg text-4xl md:text-4xl mt-10 md:mt-16 mb-16 sm:max-w-[85rem] text-center sm:mx-auto ">
            {heroText.subtext}
          </p>
          <div className="align-center flex items-center justify-center">
            <StoreLink storeLinks={storeLinks} />
          </div>
        </main>
      </div>
    </div>
  );
}
