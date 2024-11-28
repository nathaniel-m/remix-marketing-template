
export const getDocs = async () => {
  const modules = import.meta.glob("../routes/docs.*.mdx", { eager: true });
  const build = await import("virtual:remix/server-build");

  const docs = Object.entries(modules).map(([file, doc]) => {
    let id = file.replace("../", "").replace(/\.mdx$/, "");

    let slug = build.routes[id].path;
    const splitSlug = slug.split("/")

    const topic = splitSlug[0]
    if (slug === undefined) throw new Error(`No route for ${id}`);
    return {
      "topic": topic,
      slug,
      frontmatter: doc.frontmatter,
    };
  });

  const topics = getTopics(docs)
  return ({ docs, topics })
};

function getTopics(docs) {
  let topics = [];

  Object.entries(docs).forEach(([key, value]) => {

    if (!topics.includes(value.topic)) {
      topics.push(value.topic);
    }
  });

  return { topics }
}
