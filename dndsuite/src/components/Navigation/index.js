import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";

const links = [
  { href: "/", text: "Home" },
  {
    href: null,
    text: "Tools",
    dropdown: [
      {
        href: "/ledger",
        text: "Ledger",
        className: "line-through text-gray-500 cursor-not-allowed",
        title: "Coming soon!",
      },
    ],
  },
  {
    href: "https://github.com/zuedev/dndsuite.zue.dev",
    text: "Development",
    target: "_blank",
  },
];

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center p-4 h-16 bg-black text-white">
      <div className="flex items-center space-x-4">
        <img src="/dndsuite_cropzoom.png" alt="DNDSuits Logo" className="h-8" />
        <div className="flex space-x-4">
          {links.map((link) => (
            <div key={link.href}>
              {link.href ? (
                <a
                  href={link.href}
                  className={`"group-hover:underline decoration-dotted" ${link.className}`}
                  target={link.target || "_self"}
                  title={link.title}
                >
                  {link.text}
                </a>
              ) : (
                <div className="group">
                  <span
                    href="#"
                    className={`"group-hover:underline decoration-dotted" ${link.className}`}
                  >
                    {link.text} ▾
                  </span>
                  <div className="hidden group-hover:block absolute bg-black text-white p-2 pt-6 space-y-2">
                    {link.dropdown.map((sublink) => (
                      <a
                        key={sublink.href}
                        href={sublink.href}
                        className={`"block hover:underline" ${sublink.className}`}
                        target={sublink.target || "_self"}
                        title={sublink.title}
                      >
                        {sublink.text}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div>
        <SignedIn>
          <SignOutButton className="bg-red-500 text-white px-2 py-1" />
        </SignedIn>
        <SignedOut>
          <SignInButton className="bg-blue-500 text-white px-2 py-1" />
        </SignedOut>
      </div>
    </nav>
  );
}
