import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function DropdownMobile({ LinkObj, LinkObjName}) {

    return (
        <Disclosure as="div" className="-mx-3">
        <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 dark:text-gray-200 hover:bg-gray-700">
            {LinkObjName}
            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180" />
        </DisclosureButton>
        <DisclosurePanel className="mt-2 space-y-2">
            {[...LinkObj].map((item) => (
                <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                    {item.name}
                </DisclosureButton>
            ))}
        </DisclosurePanel>
    </Disclosure>


    )
}