import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useLoaderData } from "@remix-run/react";
import Navbar from "../components/navbar/navbar.jsx";
import Footer from "../components/footer.jsx"
import PageHeading from "../components/pageHeading.jsx";

import * as faqs from '../data/faq.json'
import * as app from '../data/app.json'

export const loader = async () => {
    const faqData = faqs
    const appData = app

    return Response.json({ faqData: faqData, appData: appData });
};

export default function Index() {
    const { faqData, appData  } = useLoaderData();

    return (
        <>
            <Navbar navBarLinks = {appData.navBarLinks} storeLinks={appData.appStoreLinks} />
            <PageHeading heading={faqData.faqHeading} subheading={faqData.faqSubheading} />
            <div className="max-w-4xl mx-auto">
                {faqData.sections.map((sections) => (
                    <Disclosure as="div" className="my-8">
                        <DisclosureButton className="group flex w-full items-center justify-between rounded-sm py-2 pl-3 pr-3.5 text-xl font-semibold text-gray-900 dark:bg-gray-900 dark:text-gray-200 hover:bg-100 dark:hover:bg-gray-700">
                            {sections.name}
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180" />
                        </DisclosureButton>
                        <DisclosurePanel className="mt-2 space-y-2">
                            {sections.faq.map((faq) => (
                                <Disclosure as="div" className="mx-4">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-xl font-semibold text-gray-900 dark:text-gray-200 hover:bg-100 dark:hover:bg-gray-600">
                                        {faq.question}
                                        <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180" />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 mx-4 text-lg space-y-2 text-gray-900 dark:text-gray-300">
                                        {faq.answer}
                                    </DisclosurePanel>
                                </Disclosure>
                            ))}
                        </DisclosurePanel>
                    </Disclosure>
                ))}
            </div>
             <Footer
                    footerLinks={appData.footerLinks}
                    socialLinks={appData.socialLinks}
                  />
        </>
    )
}