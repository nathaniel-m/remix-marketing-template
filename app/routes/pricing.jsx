import { useLoaderData } from "@remix-run/react";
import { useState } from 'react'

import FeatureTable from '../components/pricing/featureTable.jsx'
import Footer from "../components/footer";
import Navbar from "../components/navbar/navbar";
import PageHeading from "../components/pageHeading.jsx";
import PricingSection from '../components/pricing/pricingSection.jsx'
import * as pricing from '../data/pricing.json'
import * as features from '../data/features.json'
import * as app from '../data/app.json'

export const loader = async () => {
    const pricingData = pricing
    const featureData = features
    const appData = app

    return Response.json({ appData: appData, pricingData: pricingData, featureData: featureData });
};

export default function Pricing() {
    const { appData, pricingData, featureData } = useLoaderData();
    const [enabled, setEnabled] = useState(false)

    return (
        <>
            <Navbar navBarLinks = {appData.navBarLinks} />
            <PageHeading heading={pricingData.pricingHeading} subheading={pricingData.pricingDescription} />
            <PricingSection plans={pricingData.plans}
                pricingHeading=""
                pricingDescription="" />
            <FeatureTable featureData={featureData} />
            <Footer />
        </>
    );
}