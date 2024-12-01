import { useState } from 'react'
import { useLoaderData } from "@remix-run/react";
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import DropdownMobile from "../changelog/dropdown-mobile.jsx"

export const loader = async () => {
    const { docs, topics } = await getDocs()

    return json({ docs: docs, topics: topics });
};

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { docs, topics } = useLoaderData();

    return (
        <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap mt-7 w-full text-sm ">
            <nav className="px-4 flex basis-full items-center w-full mx-auto">
                <div className="me-5 lg:me-0 lg:hidden">
                    <a className="" href="/" aria-label="">
                        <img
                            className="hidden dark:block w-56"
                            src={"/logo-dk.svg"}
                            alt="App Logo"
                        />
                        <img
                            className="block dark:hidden w-56"
                            src={"/logo-lt.svg"}
                            alt="App Logo"
                        />
                    </a>
                </div>
                <div className="w-full flex items-center justify-end ms-auto md:justify-between gap-x-1 md:gap-x-3">
                    <div className="flex flex-row items-center justify-end gap-1">
                        <div className="flex lg:hidden justify-end">
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(true)}
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200"
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon aria-hidden="true" className="size-6" />
                            </button>
                        </div>
                        <div className="relative inline-flex">
                            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                                <div className="fixed inset-0 z-10" />
                                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-gray-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                                    <div className="flex items-center justify-between">
                                        <a className="" href="/" aria-label="">
                                            <img
                                                className="hidden dark:block w-32 sm:w-48"
                                                src={"/logo-dk.svg"}
                                                alt="App Logo"
                                            />
                                            <img
                                                className="block dark:hidden w-32 sm:w-48"
                                                src={"/logo-lt.svg"}
                                                alt="App Logo"
                                            />
                                        </a>
                                        <button
                                            type="button"
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200"
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <XMarkIcon aria-hidden="true" className="size-6" />
                                        </button>
                                    </div>
                                    <div className="mt-6 flow-root">
                                        <div className="-my-6 divide-y divide-gray-500/10">
                                            <div className="space-y-2 py-6">
                                                {topics.topics.map((topic) => (
                                                    <DropdownMobile docs={docs} topics={topic} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </DialogPanel>
                            </Dialog>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}