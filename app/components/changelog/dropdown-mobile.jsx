import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function DropdownMobile({ docs, topics }) {

    return (
        <Disclosure as="div" className="-mx-3">
            <DisclosureButton className="capitalize group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 dark:text-gray-200 hover:bg-gray-700">
                {topics}
                <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="mt-2 space-y-2">
                {[...docs].map((doc) => (
                    <div>
                        {doc.topic === topics ? <a className="pl-4 text-sm/5 dark:text-gray-400" href={"/docs/" + doc.slug}>{doc.frontmatter.title}</a> : ""}
                    </div>

                ))}
            </DisclosurePanel>
        </Disclosure>
    )
}