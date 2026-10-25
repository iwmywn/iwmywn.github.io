import { socialLinks } from "~/data/socialLinks"

export function Info() {
  return (
    <>
      <span
        translate="no"
        className="notranslate text-3xl font-semibold whitespace-nowrap select-none"
      >
        Hoàng Anh Tuấn
      </span>

      <ul className="flex flex-nowrap gap-x-5">
        {socialLinks.map(({ href, label, icon: Icon }) => {
          const isExternal = !href.startsWith("mailto:")
          return (
            <li key={href} className="flex h-9 w-9 items-center justify-center">
              <a
                className="text-[1.5rem] transition-all duration-300 hover:scale-125"
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                aria-label={label}
              >
                <Icon />
              </a>
            </li>
          )
        })}
      </ul>
    </>
  )
}
