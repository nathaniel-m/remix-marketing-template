
export default function Cta({ ctabutton_url, ctaH2, ctaH2_bold }) {
  return (
    <div className="bg-400 dark:bg-400">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">{ctaH2} </span>
          <span className="block text-100 dark:text-100">
            {ctaH2_bold}
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white">
            <img
              className="hidden dark:block h-14"
              src={"/apple-download-dk.svg"}
              alt="apple store download"
            />
            <img
              className="block dark:hidden h-14"
              src={"/apple-download-lt.svg"}
              alt="apple store download"
            />
          </button>
          <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white">
            <img
              className="hidden dark:block h-14"
              src={"/google-download-dk.svg"}
              alt="google play download"
            />
            <img
              className="block dark:hidden h-14"
              src={"/google-download-lt.svg"}
              alt="google play download"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

