import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer";
import PageHeading from "../components/pageHeading";

export default function Privacy() {
    return (
        <div className="bg-50 dark:bg-black">
            <Navbar />
            <PageHeading heading="Privacy Policy" subheading="" />
            <p className="mb-4 text-lg text-center text-gray-500 dark:text-gray-400">
                Last updated on August 11, 2022
            </p>
            <Footer />
        </div>
    );
}
