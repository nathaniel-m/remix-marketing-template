import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import Navbar from "../components/navbar/navbar.jsx";
import Footer from "../components/footer.jsx"
import PageHeading from "../components/pageHeading.jsx";

import * as faqs from '../resources/faq.json'

export const loader = async () => {
    const faqData = faqs
    return json({ faqData: faqData });
};

export default function Index() {
    const { faqData } = useLoaderData();

    return (
        <>
            <Navbar />
            <PageHeading heading={faqData.faqHeading} subheading={faqData.faqSubheading} />
            <div class="max-w-4xl mx-auto">
                {faqData.sections.map((sections) => (
                    <Disclosure as="div" className="my-8">
                        <DisclosureButton className="group flex w-full items-center justify-between rounded-sm py-2 pl-3 pr-3.5 text-xl font-semibold text-gray-900 dark:bg-gray-900 dark:text-gray-200 hover:bg-100 dark:hover:bg-gray-700">
                            {sections.name}
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180" />
                        </DisclosureButton>
                        <DisclosurePanel className="mt-2 space-y-2">
                            {sections.faq.map((faq) => (
                                <Disclosure as="div" className="mx-4">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-xl font-semibold text-gray-900 dark:text-gray-200 hover:bg-gray-600">
                                        {faq.question}
                                        <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180" />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        <DisclosureButton
                                            key={faq.question}
                                            as="a"
                                            href={""}
                                            className="block rounded-lg py-2 pl-6 pr-3 text-lg font-semibold text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
                                        >
                                            {faq.answer}
                                        </DisclosureButton>
                                    </DisclosurePanel>
                                </Disclosure>
                            ))}
                        </DisclosurePanel>
                    </Disclosure>
                ))}
            </div>
            <Footer />
        </>
    )
}