import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer";

export default function Privacy() {
    return (
        <div className="bg-50 dark:bg-black">
            <Navbar />
            <div className="mt-14 md:mt-36">
                <div className="mt-10 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28 text-center sm:mx-auto sm:max-w-6xl">
                    <h1 className="mb-8 text-6xl text-gray-800 dark:text-gray-200 font-bold md:text-6xl ">
                       Privacy Policy
                    </h1>
                    <p className="mb-4 text-lg text-gray-500 dark:text-gray-400">
                        Last updated on August 11, 2022
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
