import { getArticles } from "../lib/articles.server.jsx";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => Response.json(await getArticles());

export default function Index() {
    const articles = useLoaderData();
return(
    <>
    {articles}
    Hi!
    </>
)

}
