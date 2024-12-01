import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

import Cta from "../components/cta.jsx"
import Features from "../components/features.jsx"
import Footer from "../components/footer.jsx"
import Hero from "../components/hero/hero.jsx"
import Navbar from "../components/navbar/navbar.jsx";
import PricingSection from "../components/pricing/pricingSection.jsx"
import ProductImage from "../components/product-image.jsx"
import * as features from '../resources/features.json'
import * as pricing from '../resources/pricing.json'

export const loader = async () => {
  const pricingData = pricing
  const featureData = features

  return json({ pricingData: pricingData, featureData: featureData });
};

export default function Index() {
  const { pricingData, featureData } = useLoaderData();

  return (
    <>
      <Navbar />
      <Hero
        heroH1={"Use The Artificial Intelligence"}
        heroH1_bold={"Taking Over The world"}
        herotext_description={"Ominous has already installed itself on half the devices in the world. Now you can use that same AI to write songs about your dog."}
        herobutton_url={""}
      />
      <ProductImage
        ImageSrcDk={"/hero-dk.png"}
        ImageSrcLt={"/hero-lt.png"}
        ImageAlt={"screen shot"}
      />
      <Cta
        ctabutton_url={""}
        ctaH2={"Are you ready to take control of your SEO?"}
        ctaH2_bold={"Download Rerank today."}
      />
      <Features
        features={featureData}
      />
      <PricingSection plans={pricingData.plans}
        pricingHeading={pricingData.pricingHeading}
        pricingDescription={pricingData.pricingDescription} />
      <Footer />
    </>
  );
}


