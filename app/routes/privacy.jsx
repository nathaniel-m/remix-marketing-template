import { useLoaderData } from "@remix-run/react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer";
import PageHeading from "../components/pageHeading";

import * as app from '../data/app.json'

export const loader = async () => {
    const appData = app

    return Response.json({ appData: appData });
};

export default function Privacy() {
    const { appData } = useLoaderData();

    return (
        <div className="bg-50 dark:bg-black">
            <Navbar navBarLinks = {appData.navBarLinks } storeLinks={appData.appStoreLinks}/>
            <PageHeading heading="Privacy Policy" subheading="" />
            <p className="mb-4 text-lg text-center text-gray-500 dark:text-gray-400">
                Last updated on August 11, 2022
            </p>
            <Footer
        footerLinks={appData.footerLinks}
        socialLinks={appData.socialLinks}
      />
        </div>
    );
}
