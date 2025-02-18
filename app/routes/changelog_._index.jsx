import { getChangeLogs } from "../lib/changelog.server.jsx";
import { useLoaderData } from "@remix-run/react";
import ChangeLogImage from "../components/changelog/changelogImage.jsx";
import Navbar from "../components/navbar/navbar.jsx";
import Footer from "../components/footer.jsx"
import PageHeading from "../components/pageHeading.jsx";
import * as app from '../data/app.json'

export const loader = async () => {
    const changeLogs = await getChangeLogs()
    const appData = app

    return Response.json({ appData: appData, changeLogs: changeLogs });
};


export default function Index() {
    const { appData, changeLogs  } = useLoaderData();

    return (
        <>
            <Navbar navBarLinks = {appData.navBarLinks} storeLinks = {appData.appStoreLinks} />
            <div className="">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <PageHeading heading="Changelog" subheading="" />
                    <div className="mx-auto max-w-3xl sm:mt-16 sm:pt-16">
                        {changeLogs.map((changes) => (
                            <div className="grid grid-cols-3 gap-x-10 gap-y-24">
                                <div className="flex justify-end text-nowrap dark:text-gray-200">
                                    {changes.date}
                                </div>
                                <div className="flex-auto col-span-2 justify-start">
                                    <h3 className="justify-start md:text-lg font-semibold text-gray-800 dark:text-gray-200">
                                        {changes.headline}
                                    </h3>
                                    <p className="flex-auto mt-1 mb-10 text-gray-500 dark:text-gray-300">
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
            <Footer  footerLinks = {appData.footerLinks} socialLinks = {appData.socialLinks} />
        </>
    )
}
