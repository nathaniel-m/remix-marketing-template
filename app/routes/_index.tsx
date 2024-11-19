import type { MetaFunction } from "@remix-run/cloudflare";

import Navbar from "../components/navbar/navbar.jsx";
import Hero from "../components/hero/hero.jsx"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <Navbar />
      <Hero
        heroH1={"Use The Artificial Intelligence"}
        heroH1_bold={"Taking Over The world"}
        herotext_description={"Ominous has already installed itself on half the devices in the world. Now you can use that same AI to write songs about your dog."}
        herobutton_url={""}
      />
    </>
  );
}


