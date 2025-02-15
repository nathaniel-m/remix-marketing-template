//inspired by https://remix-blog-mdx.fly.dev/
import { getArticles } from "../lib/articles.server.jsx";
import { useLoaderData } from "@remix-run/react";
import ArticleImage from "../components/article/articleimage.jsx";
import Navbar from "../components/navbar/navbar.jsx";
import Footer from "../components/footer.jsx"
import PageHeading from "../components/pageHeading.jsx";

import * as app from '../data/app.json'

export const loader = async () => {
    const articles = await getArticles()

    const appData = app

    return Response.json({ appData: appData, articles: articles });
};

//export const loader = async () => Response.json(await getArticles());

export default function Index() {
    const { appData, articles  } = useLoaderData();

    return (
        <>
            <Navbar navBarLinks = {appData.navBarLinks} />
            <PageHeading heading="" subheading="" />
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        {articles.map((article) => (
                            <article className="flex max-w-xl flex-col items-start  ">
                                {article.frontmatter.image ? <ArticleImage imageName={article.frontmatter.image} /> : ""}
                                <div className="group relative">
                                    <h3 className="mt-3 text-2xl font-semibold text-600 dark:text-500 group-hover:text-gray-400 dark:group-hover:text-gray-600">
                                        <a href={"/articles/" + article.slug}>
                                            <span className="absolute inset-0" />
                                            {article.frontmatter.title}
                                        </a>
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-lg text-gray-600 dark:text-gray-200">{article.frontmatter.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
           
            <Footer />
        </>
    )

}
