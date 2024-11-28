
export const getArticles = async () => {
    const modules = import.meta.glob("../routes/articles.*.mdx",{ eager: true });

    const build = await import("virtual:remix/server-build");
    const articles = Object.entries(modules).map(([file, article]) => {
      let id = file.replace("../", "").replace(/\.mdx$/, "");
      let slug = build.routes[id].path;
      if (slug === undefined) throw new Error(`No route for ${id}`);
          return {
        slug,
        frontmatter: article.frontmatter,
      };
    });
    return sortBy(articles, (article) => article.frontmatter.published, "desc");
  };

  function sortBy(
  arr,
  key,
  dir
) {
  return arr.sort((a, b) => {
    const res = compare(key(a), key(b));
    return dir === "asc" ? res : -res;
  });
}

function compare(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}