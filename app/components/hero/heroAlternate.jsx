
export default function HeroAlternate({ heroH1, heroH1_bold, herotext_description, herobutton_url }) {
    return (
        <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:mt-36">
                <div className="">
                    <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
                        {heroH1} <br />
                    </h1>
                    <h1 className="uppercase mb-16 text-4xl font-extrabold md:text-6xl sm:max-w-6xl sm:mx-auto text-center text-500">
                        {heroH1_bold}
                    </h1>{" "}
                    <p className="mt-8 text-2xl text-gray-800 dark:text-gray-400">
                        {herotext_description}
                    </p>
                    <div className="mt-12 grid gap-3 w-full sm:inline-flex">
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
                <div className="relative overflow-clip ms-4 -mr-20">
                    <img
                        className="hidden dark:block w-full rounded-md "
                        src={"/hero-dk.png"}
                        alt="Hero App Image"
                    />
                    <img
                        className="block dark:hidden w-full rounded-md"
                        src={"/hero-lt.png"}
                        alt="Hero App Image"
                    />
                </div>
            </div>
        </div>
    )
}

