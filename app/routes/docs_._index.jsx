import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/cloudflare";

import { getDocs } from "../lib/docs.server.jsx";
import Navbar from '../components/changelog/navbar.jsx';
import Sidebar from '../components/changelog/sidebar.jsx';
import Footer from "../components/changelog/footer.jsx"

export const loader = async () => {
    const { docs, topics } = await getDocs()

    return json({ docs: docs, topics: topics });
};

export default function Index() {
    const { docs, topics } = useLoaderData();

    return (
        <>
            <Navbar docs={docs} topics={topics} />
            <Sidebar docs={docs} topics={topics} />
            <div className="w-full lg:ps-64">
                <div className="mx-auto max-w-7xl px-8">
                    <div className="mx-auto max-w-2xl py-16 lg:max-w-none ">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-200">Documentation</h2>
                        <p className=" text-gray-900 dark:text-gray-400 tracking-wide sm:text-lg text-xl mb-16 sm:max-w-[85rem] sm:mx-auto ">
                            This is the documentaion.
                        </p>
                        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 ">
                            {topics.topics.map((topic) => (
                                <div className="group relative ">
                                    <div className="w-full rounded-t-lg bg-gradient-to-br from-200 to-400 dark:bg-gradient-to-br dark:from-400 dark:to-600 object-cover aspect-video" >
                                    </div>
                                    <div className="pb-11 mb-6 w-full rounded-b-lg object-cover text-base font-semibold bg-gray-100 dark:bg-gray-800 aspect-video">
                                        <h3 className="text-lg pt-6 pl-6 pb-2 text-gray-700 dark:text-gray-200 capitalize">
                                            {topic}
                                        </h3>
                                        {docs.map((doc) => (
                                            <p className="pl-6">
                                                {doc.topic === topic ? <a className="text-sm/5 text-gray-600 dark:text-gray-300 dark:hover:text-500 hover:text-600" href={"/docs/" + doc.slug}>{doc.frontmatter.title}</a> : ""}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
