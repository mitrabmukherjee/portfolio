import { getPublicJson } from "@/lib/publicJson";

type NavbarLink = {
  label: string;
  href: string;
};

type NavbarContent = {
  brand: string;
  links: NavbarLink[];
};

async function readNavbarContent(): Promise<NavbarContent> {
  return getPublicJson<NavbarContent>("/content/navbar.json", 300);
}

export default async function Navbar() {
  const content = await readNavbarContent();
  return (
    <header id="site-navbar" className="sticky top-0 z-50 bg-white border-b">
      <div className="mx-auto w-full py-3 flex items-center justify-between max-w-7xl">
        <a
          href="/"
          className="text-4xl font-semibold tracking-tight glossy-text text-primary uppercase"
        >
          {content.brand}
        </a>
        {content.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="px-3 py-2 rounded-md text-secondary font-semibold text-lg uppercase hover:text-primary transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}
