import { socialLinks } from "~/data/socialLinks"

export function Info() {
  return (
    <>
      <span className="text-3xl font-semibold whitespace-nowrap select-none">Hoàng Anh Tuấn</span>

      <ul className="flex flex-nowrap gap-x-5">
        {socialLinks.map(({ href, label, icon: Icon }, index) => {
          return (
            <li key={index} className="flex h-9 w-9 items-center justify-center">
              <a
                className="text-[1.5rem] transition-all duration-300 hover:scale-125"
                href={href}
                target="_blank"
                rel="noopener"
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
