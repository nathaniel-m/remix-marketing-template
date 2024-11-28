import { Outlet } from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/cloudflare";

import Navbar from '../components/changelog/navbar.jsx';
import Sidebar from '../components/changelog/sidebar.jsx';
import Footer from "../components/changelog/footer.jsx"

import { getDocs } from "../lib/docs.server.jsx";

export const loader = async () => {
    const { docs, topics } = await getDocs()

    return json({ docs: docs, topics: topics });
};

export default function Component() {
    const { docs, topics } = useLoaderData();

    return (
        <>
            <Navbar />
            <Sidebar docs= {docs} topics={topics} />
            <div className="">
                <div className="mt-24 mx-auto max-w-xl px-6 lg:px-8">
                    <div className="prose 
                    prose-h1:text-gray-900 
                    prose-h2:text-gray-900 
                    prose-h3:text-gray-900 
                    prose-h4:text-gray-900 
                    prose-h5:text-gray-900 
                    prose-h6:text-gray-900 
                    prose-p:text-gray-900 
                    prose-li:text-gray-900
                    dark:prose-h1:text-gray-200 
                    dark:prose-h2:text-gray-200
                    dark:prose-h3:text-gray-200
                    dark:prose-h4:text-gray-200 
                    dark:prose-h5:text-gray-200
                    dark:prose-h6:text-gray-200
                    dark:prose-p:text-gray-300 
                    dark:prose-li:text-gray-300
                    dark:prose-a:text-600
                    dark:hover:prose-a:text-gray-300
                    dark:prose-code:text-gray-200
                    dark:prose-pre:bg-gray-800
                    dark:prose-code:prose-pre:text-gray-300
                    ">
                        <Outlet />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}