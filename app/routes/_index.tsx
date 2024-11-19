import type { MetaFunction } from "@remix-run/cloudflare";
import {
  AdjustmentsVerticalIcon,
  PhotoIcon,
  TagIcon,
  RocketLaunchIcon,
  ClockIcon,
  LinkSlashIcon,
  CodeBracketIcon,
  DocumentDuplicateIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";

import Cta from "../components/cta.jsx"
import Features from "../components/features.jsx"
import Hero from "../components/hero/hero.jsx"
import Navbar from "../components/navbar/navbar.jsx";
import ProductImage from "../components/product-image.jsx"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const featuresObj = [
    {
      id: 1,
      heading: "Intuitive Admin",
      description: "The admin panel is designed to provide simple and intuitive management",
      icon: AdjustmentsVerticalIcon,
    },
    {
      id: 2,
      heading: "Bulk Editing Tags",
      description: "Save time and effort, especially for stores with large inventories.",
      icon: TagIcon,
    },
    {
      id: 3,
      heading: "Bulk Editing Images",
      description: "Improve your Shopify store's SEO and user experience",
      icon: PhotoIcon,
    },
    {
      id: 4,
      heading: "Broken Link Repairs",
      description: "Google uses broken links as a quality signal, so broken links can hurt your rankings",
      icon: LinkSlashIcon,
    },
    {
      id: 5,
      heading: "Image Optimizer",
      description:
        "Improve your store's performance, user experience, and search engine rankings.",
      icon: BoltIcon,
    },
    {
      id: 6,
      heading: "Speed Optimizer",
      description: "Help your store perform better and provide a better user experience",
      icon: RocketLaunchIcon,
    },
    {
      id: 7,
      heading: "Integrate JSON-LD",
      description: "Become more search engine friendly and improve user experience.",
      icon: CodeBracketIcon,
    },
    {
      id: 8,
      heading: "Duplicate content elimination",
      description: "Duplicate content can confuse search engines and hurt your rankings",
      icon: DocumentDuplicateIcon,
    },
    {
      id: 9,
      heading: "Meta Tags Optimizer",
      description: "Optimizing meta tags on a your store can improve SEO and increase sales",
      icon: ClockIcon,
    },
  ];

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
        featuresObj={featuresObj}
        featuresHeading={"All the features you need to manage all of your customers questions"}
      />
    </>
  );
}


