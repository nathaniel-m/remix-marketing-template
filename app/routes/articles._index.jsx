import { getArticles } from "../lib/articles.server.jsx";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => Response.json(await getArticles());

export default function Index() {
    const articles = useLoaderData();
    console.log(articles)
return(
    <>
    <div className="p-10">
      <ul className="space-y-8">
        {articles.map((article) => (
          <li key={article.slug}>
            {article.slug}
          </li>
        ))}
      </ul>
    </div>
    </>
)

}
