
'use client'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { navLinks } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
  
const MobileNav = () => {
    const pathname = usePathname();

  return (
    <Sheet>
  <SheetTrigger className="flex gap-5 justify-center item-center">
  <Link href="/" className="sidebar-logo my-5">
          <Image
            src="/assets/images/logo-text.svg"
            alt="logo"
            width={180}
            height={180}
          />
        </Link>
    
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle> </SheetTitle>
      <SheetDescription>
      {navLinks.map((link) => {
                const isActive = link.route === pathname

                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element group ${
                      isActive ? "bg-purple-gradient" : "text-gray-700"
                    }
`}
                  >
                    <Link className="sidebar-link" href={link.route}>
                        <Image src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && 'brightness-200'}`}
                        />
                        {link.label}
                    </Link>
                  </li>
                );
              })}
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

  )
}

export default MobileNav