
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
    return articles;

    

    // const modules = import.meta.glob<{ frontmatter: Frontmatter }>(
    //   "../routes/blog.*.mdx",
    //   { eager: true }
    // );
    // const build = await import("virtual:remix/server-build");



    // const posts = Object.entries(modules).map(([file, post]) => {
    //   let id = file.replace("../", "").replace(/\.mdx$/, "");
    //   let slug = build.routes[id].path;
    //   if (slug === undefined) throw new Error(`No route for ${id}`);
  
    //   return {
    //     slug,
    //     frontmatter: post.frontmatter,
    //   };
    // });
    // return sortBy(posts, (post) => post.frontmatter.published, "desc");
  };