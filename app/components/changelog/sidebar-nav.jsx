
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

export default function SidebarNav({ docs, topics }) {

    return (
        <div className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-gray-700 dark:[&::-webkit-scrollbar-thumb]:bg-gray-500">
            <nav className="p-3 mt-8 w-full flex flex-col flex-wrap">
            <a className="px-4 py-2 my-4 bg-500 text-white rounded-md hover:bg-600 focus:outline-none focus:ring-2 focus:ring-500 focus:ring-offset-2" href="/docs" aria-label="">Docs Home</a>
                {topics.topics.map((topic) => (
                    <div className="w-full max-w-lg">
                        <Disclosure as="div" className="py-1 px-2" defaultOpen={false}>
                            <DisclosureButton className="group flex w-full items-center justify-between">
                                <span className="capitalize text-sm/6 font-medium dark:text-gray-300 group-data-[hover]:text-gray-600 dark:group-data-[hover]:text-white/80">
                                    {topic}
                                </span>
                                <ChevronRightIcon className="size-5 dark:fill-gray-300 dark:group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                            </DisclosureButton>

                            {docs.sort((a, b) => a.frontmatter.order - b.frontmatter.order).map((doc) => (
                                <DisclosurePanel className="mt-2 ml-2 text-sm/5 dark:text-gray-200">
                                    {doc.topic === topic ? <a className="text-sm/5 dark:text-gray-100 dark:hover:text-500 hover:text-600" href={"/docs/" + doc.slug}>{doc.frontmatter.title}</a> : ""}
                                </DisclosurePanel>
                            ))}
                        </Disclosure>
                    </div>
                ))}
            </nav>
        </div>
    )
}