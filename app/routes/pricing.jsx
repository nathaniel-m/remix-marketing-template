import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/cloudflare";
import { useState } from 'react'

import FeatureTable from '../components/pricing/featureTable.jsx'
import Footer from "../components/footer";
import Navbar from "../components/navbar/navbar";
import PageHeading from "../components/pageHeading.jsx";
import PricingSection from '../components/pricing/pricingSection.jsx'
import * as pricing from '../resources/pricing.json'
import * as features from '../resources/features.json'

export const loader = async () => {
    const pricingData = pricing
    const featureData = features

    return json({ pricingData: pricingData, featureData: featureData });
};

export default function Pricing() {
    const { pricingData, featureData } = useLoaderData();
    const [enabled, setEnabled] = useState(false)

    return (
        <>
            <Navbar />
            <PageHeading heading={pricingData.pricingHeading} subheading={pricingData.pricingDescription} />
            <PricingSection plans={pricingData.plans}
                pricingHeading=""
                pricingDescription="" />
            <FeatureTable featureData={featureData} />
            <Footer />
        </>
    );
}