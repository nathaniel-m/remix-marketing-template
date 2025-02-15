import StoreLink from "./storeLink.jsx";

export default function Cta({ ctaText, storeLinks }) {
  console.log(ctaText);
  return (
    <div className="bg-400 dark:bg-400">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">{ctaText.heading} </span>
          <span className="block text-100 dark:text-100">
            {ctaText.heading_bold}
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <StoreLink storeLinks={storeLinks} />
        </div>
      </div>
    </div>
  );
}

