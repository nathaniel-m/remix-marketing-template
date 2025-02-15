export default function StoreLink({ storeLinks, width }) {
  return (
    <>
      {storeLinks.map((item) => (
        <a className="" href={item.href} aria-label="">
          <img
            className="hidden dark:flex w-52"
            src={item.buttonDark}
            alt={item.name + " Store Download"}
          />
          <img
            className="flex dark:hidden w-52"
            src={item.buttonLight}
            alt={item.name + " Store Download"}
          />
        </a>
      ))}
    </>
  );
}
