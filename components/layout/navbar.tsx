"use client";
import { ChevronsDown, Github, Menu } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { ToggleTheme } from "./toogle-theme";

interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
}

const routeList: RouteProps[] = [
  // {
  //   href: "#testimonials",
  //   label: "Testimonials",
  // },
  // {
  //   href: "#team",
  //   label: "Team",
  // },
  // {
  //   href: "#contact",
  //   label: "Contact",
  // },
  // {
  //   href: "#faq",
  //   label: "FAQ",
  // },
];

const featureList: FeatureProps[] = [
  // {
  //   title: "Showcase Your Value ",
  //   description: "Highlight how your product solves user problems.",
  // },
  // {
  //   title: "Build Trust",
  //   description:
  //     "Leverages social proof elements to establish trust and credibility.",
  // },
  // {
  //   title: "Capture Leads",
  //   description:
  //     "Make your lead capture form visually appealing and strategically.",
  // },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="bg-transparent bg-opacity-30 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky z-40 rounded-2xl flex justify-between items-center p-2">
      <Link href="/" className="font-bold text-lg flex items-center">
        <Image
          src="/logo.svg"
          alt="Solhound"
          className="p-1 mr-2 rounded-md object-cover drop-shadow transition-all duration-300 ease-in-out hover:drop-shadow-xl hover:scale-110"
          width={50}
          height={50}
        />
        <span
          className="font-black text-2xl tracking-wider transform transition-transform duration-200 ease-out hover:scale-[102%]"
          style={{ textShadow: "0 3px 10px rgba(255,255,255,0.2)" }}
        >
          <span className="text-primary ">S</span>olhound.<span className="text-primary">app</span>
        </span>
      </Link>
      {/* <!-- Mobile --> */}
      {/* <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <ChevronsDown className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" />
                    
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />
              <ToggleTheme />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div> */}

      {/* <!-- Desktop --> */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          {/* <NavigationMenuItem>
            <NavigationMenuTrigger className="text-base">
              Features
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[600px] grid-cols-2 gap-5 p-4">
                <Image
                  src="/logo.png"
                  alt="Solhound"
                  className="w-1/2 flex text-center rounded-md object-cover"
                  width={200}
                  height={200}
                />
                <ul className="flex flex-col gap-2">
                  {featureList.map(({ title, description }) => (
                    <li
                      key={title}
                      className="rounded-md p-3 text-sm hover:bg-muted"
                    >
                      <p className="mb-1 font-semibold leading-none text-foreground">
                        {title}
                      </p>
                      <p className="line-clamp-2 text-muted-foreground">
                        {description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem> */}

          <NavigationMenuItem>
            {routeList.map(({ href, label }) => (
              <NavigationMenuLink key={href} asChild>
                <Link href={href} className="text-base px-2">
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex">
        <ToggleTheme />
      </div>
    </header>
  );
};
