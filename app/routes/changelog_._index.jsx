import { getChangeLogs } from "../lib/changelog.server.jsx";
import { useLoaderData } from "@remix-run/react";
import ChangeLogImage from "../components/changelog/changelogImage.jsx";
import Navbar from "../components/navbar/navbar.jsx";
import Footer from "../components/footer.jsx"
import PageHeading from "../components/pageHeading.jsx";

export const loader = async () => Response.json(await getChangeLogs());

export default function Index() {
    const changeLogs = useLoaderData();

    return (
        <>
            <Navbar />
            <div className="">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <PageHeading heading="Changelog" subheading="" />
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-16 sm:pt-16">
                        {changeLogs.map((changes) => (
                            <div className="flex gap-x-10">
                                <div className="flex-auto text-nowrap dark:text-gray-200">
                                    {changes.date}
                                </div>
                                <div className="flex-auto">
                                    <h3 className="md:text-lg font-semibold text-gray-800 dark:text-gray-200">
                                        {changes.headline}
                                    </h3>
                                    <p className="mt-1 mb-10 text-gray-500 dark:text-gray-300">
                                        {changes.content}
                                    </p>
                                    {changes.image ? <ChangeLogImage imageName={changes.image} /> : ""}
                                    {changes.helpdeskUrl ? <a href={"/" + changes.helpdeskUrl} className="pt-10 text-600 hover:text-400">Read More  →</a> : ""}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
