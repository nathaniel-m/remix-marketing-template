import {
    Popover,
    PopoverButton,
    PopoverPanel,
} from '@headlessui/react'
import { ChevronDownIcon} from '@heroicons/react/20/solid'


export default function Dropdown({ LinkObj, LinkObjName }) {

    return (
        <Popover className="relative">
        <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 dark:text-gray-200 hover:text-600 dark:hover:text-400">
            {LinkObjName}
            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400 dark:text-gray-200 hover:text-600 dark:hover:text-400" />
        </PopoverButton>
        <PopoverPanel
            transition
            className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white dark:bg-gray-700 shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
        >
            <div className="p-4">
                {LinkObj.map((item) => (
                    <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50 dark:hover:bg-gray-500"
                    >
                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-500 group-hover:bg-white dark:group-hover:bg-gray-800">
                            <item.icon aria-hidden="true" className="size-6 text-gray-600 dark:text-gray-200 group-hover:text-400" />
                        </div>
                        <div className="flex-auto">
                            <a href={item.href} className="block font-semibold text-gray-900 dark:text-gray-200">
                                {item.name}
                                <span className="absolute inset-0" />
                            </a>
                            <p className="mt-1 text-gray-600 dark:text-gray-300">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </PopoverPanel>
    </Popover>

    )

}