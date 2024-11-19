
export default function Hero({ heroH1, heroH1_bold, herotext_description, herobutton_url }) {
    return (
        <div className="mt-14 md:mt-36">
            <div className=" ">
                <main className="mt-10 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28 ">
                    <h1 className="mb-4 text-4xl text-gray-700 dark:text-gray-200 font-black md:text-6xl sm:max-w-6xl text-center sm:mx-auto">
                        {heroH1} <br />
                    </h1>
                    <h1 className="uppercase mb-16 text-4xl font-extrabold md:text-6xl sm:max-w-6xl sm:mx-auto text-center text-500">
                        {heroH1_bold}
                    </h1>{" "}
                    <p className=" text-gray-900 dark:text-gray-400 tracking-wide sm:text-lg text-4xl md:text-4xl mt-10 md:mt-16 mb-16 sm:max-w-6xl text-center sm:mx-auto ">
                        {herotext_description}
                    </p>
                    <div className="mt-10 sm:mt-8 sm:flex sm:justify-center">
                        <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white">
                            <img
                                className="hidden dark:block h-28 sm:h-20"
                                src={"/apple-download-dk.svg"}
                                alt="apple store download"
                            />
                            <img
                                className="block dark:hidden h-28 sm:h-20"
                                src={"/apple-download-lt.svg"}
                                alt="apple store download"
                            />
                        </button>
                        <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white">
                            <img
                                className="hidden dark:block h-28 sm:h-20"
                                src={"/google-download-dk.svg"}
                                alt="google play download"
                            />
                            <img
                                className="block dark:hidden h-28 sm:h-20"
                                src={"/google-download-lt.svg"}
                                alt="google play download"
                            />
                        </button>
                    </div>
                </main>
            </div>
        </div>
    )
}