"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ChevronRight, LogIn, LogOut, MenuIcon, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { useSession } from "next-auth/react";

const navItems = [
  {
    name: "HOME",
    url: "/",
  },
  {
    name: "BLOG",
    url: "/blog",
  },
  {
    name: "GALLERY",
    url: "/gallery",
  },
  {
    name: "CONTACT",
    url: "/contact",
  },
  {
    name: "BOOKING",
    url: "/booking",
  },
];

const NavBar = () => {
  const { status, data: session } = useSession();
  const [activeNav, setActiveNav] = useState(false);
  const pathname = usePathname();

  const changeActiveNav = () => {
    if (window.scrollY >= 50) {
      setActiveNav(true);
    } else {
      setActiveNav(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeActiveNav);

      return () => {
        window.removeEventListener("scroll", changeActiveNav);
      };
    }
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 px-4 py-5 lg:px-10 lg:py-6 ${
        activeNav
          ? "border-b-[1px] border-gray-100 bg-white/90 text-black/80 backdrop-blur-md"
          : pathname !== "/"
            ? "bg-white text-black/80"
            : "border-transparent bg-transparent text-primary-foreground"
      } z-30 flex items-center justify-between uppercase duration-500`}
    >
      <aside className="flex items-center gap-[2px]">
        <Link
          href="/"
          className="text-md font-bold md:text-lg"
          style={{ fontWeight: "bolder" }}
        >
          Lensart Media
        </Link>
      </aside>

      <aside className="flex items-center gap-4">
        <nav className="hidden text-xs md:block">
          <NavigationMenu className="flex list-none items-center">
            {navItems.map((link) => (
              <NavigationMenuItem key={link.name}>
                <Link href={link.url} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      `rounded-none ${pathname === link.url ? `text-primary` : `hover:text-primary/70`}`,
                    )}
                  >
                    {link.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}

            {/* Authentication */}
            <NavigationMenuItem key={"auth"}>
              {status === "loading" && <div>Loading...</div>}
              {status === "authenticated" && (
                <div className="inline-flex items-center gap-1 text-lg font-medium text-gray-800">
                  <div className="group inline-flex items-center gap-x-2 rounded-md bg-primary px-3 py-2 text-xs font-medium capitalize text-white focus:outline-none">
                    <User size={20} /> {session.user?.name}
                  </div>
                  <Link
                    href="/api/auth/signout"
                    className="hover:text-secondary_color_transparent ml-3 inline-block"
                  >
                    <LogOut size={20} />
                  </Link>
                </div>
              )}
              {status === "unauthenticated" && (
                <Link
                  href="/api/auth/signin"
                  className="hover:text-secondary_color_transparent ml-3 inline-block"
                >
                  <LogIn size={20} />
                </Link>
              )}
            </NavigationMenuItem>
          </NavigationMenu>
        </nav>

        {/* Menu Toggler */}
        <Sheet>
          <SheetTrigger asChild>
            <MenuIcon className="cursor-pointer md:hidden" />
          </SheetTrigger>
          <SheetContent
            side={"left"}
            className="z-50 border-white bg-white text-black"
          >
            <SheetHeader>
              <SheetTitle className="mt-5 text-primary">
                LENSART MEDIA
              </SheetTitle>

              <SheetDescription>
                <div className="mt-5 grid grid-cols-1 gap-2 text-primary-foreground">
                  {navItems.map((menu) => (
                    <SheetClose asChild key={menu.name}>
                      <Link
                        href={menu.url}
                        className={`inline-flex w-full items-center justify-between border-b-[1px] border-white/90 px-2 py-2 transition-colors duration-300 ${pathname === menu.url ? `text-primary` : `text-black/80 hover:text-primary`}`}
                      >
                        {menu.name} <ChevronRight />
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </SheetDescription>
            </SheetHeader>

            <SheetFooter className="absolute bottom-[5%] left-[50%] translate-x-[-50%]">
              <SheetClose asChild>
                <div className="flex w-full items-center justify-center gap-7 text-black/90">
                  {status === "loading" && <div>Loading...</div>}
                  {status === "authenticated" && (
                    <div className="mt-5 inline-flex w-full items-center justify-around gap-1 text-lg font-medium text-gray-800">
                      <div className="group inline-flex items-center gap-x-2 rounded-md bg-primary px-3 py-2 text-xs font-medium capitalize text-white focus:outline-none">
                        <User size={20} /> {session.user?.name}
                      </div>
                      <Link
                        href="/api/auth/signout"
                        className="ml-3 inline-flex items-center gap-2 rounded-md bg-red-600 px-4 py-2 text-sm text-white"
                      >
                        <LogOut size={20} /> Logout
                      </Link>
                    </div>
                  )}
                  {status === "unauthenticated" && (
                    <Link
                      href="/api/auth/signin"
                      className="ml-3 mt-5 inline-block text-primary"
                    >
                      <LogIn size={20} />
                    </Link>
                  )}
                </div>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </aside>
    </header>
  );
};

interface Props {
  className?: string;
  href: string;
  title: string;
  children: ReactNode;
}

const ListItem = ({ className, title, children, href }: Props) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-sm bg-transparent p-3 leading-none no-underline outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm capitalize leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export default NavBar;
