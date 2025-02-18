export default function Footer({ footerLinks, socialLinks }) {
  const copyrightYear = new Date().getFullYear();

  return (
    <footer className="mx-auto mt-32 w-full max-w-container px-4 sm:px-6 lg:px-8">
      <div className="border-t border-gray-900 dark:border-500 py-10">
        <div className="mt-16 mb-4 flex items-center justify-center space-x-4 text-lg font-semibold leading-6 text-gray-600">
          {footerLinks.map((item) => (
            <a key={item.name} href={item.href} className="hover:text-700">
              {item.name}
            </a>
          ))}
        </div>
        <p className="mt-5 text-center text-sm leading-6 text-900">
          © {copyrightYear} Trinity River Software. All rights reserved.
        </p>
      </div>
    </footer>
  );
}