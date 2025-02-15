import { useLoaderData } from "@remix-run/react";

import Cta from "../components/cta.jsx"
import Features from "../components/features.jsx"
import Footer from "../components/footer.jsx"
import Hero from "../components/hero/hero.jsx"
import Navbar from "../components/navbar/navbar.jsx";
import PricingSection from "../components/pricing/pricingSection.jsx"
import ProductImage from "../components/product-image.jsx"
import * as features from '../data/features.json'
import * as pricing from '../data/pricing.json'
import * as app from '../data/app.json'

export const loader = async () => {
  const pricingData = pricing
  const featureData = features
  const appData = app

  return Response.json({ pricingData: pricingData, featureData: featureData, appData: appData });
};

export default function Index() {
  const { pricingData, featureData, appData } = useLoaderData();

  return (
    <>
      <Navbar navBarLinks = {appData.navBarLinks} storeLinks = {appData.appStoreLinks} />
      <Hero
        heroText={appData.heroText}
        storeLinks = {appData.appStoreLinks}
      />
      <ProductImage
        ImageSrcDk={"/hero-dk.png"}
        ImageSrcLt={"/hero-lt.png"}
      />
      <Cta
        ctaText={appData.ctaText}
        storeLinks = {appData.appStoreLinks}
      />
      <Features
        features={featureData}
      />
      <PricingSection plans={pricingData.plans}
        pricingHeading={pricingData.pricingHeading}
        pricingDescription={pricingData.pricingDescription} />
      <Footer footerLinks = {appData.footerLinks} socialLinks = {appData.socialLinks} />
    </>
  );
}


