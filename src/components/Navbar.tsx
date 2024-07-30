import { Component, useState } from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import LogoImage from "../assets/logo.png";
import { ContactUs } from "./ContactUs";

type NavbarProps = {
  coursesRef: any;
  servicesRef: any;
  faqRef: any;
  homeRef: any;
};

interface RouteProps {
  reference: any;
  label: string;
}

export const Navbar = ({
  coursesRef,
  servicesRef,
  faqRef,
  homeRef,
}: NavbarProps) => {
  const routeList: RouteProps[] = [
    {
      reference: homeRef,
      label: "Home",
    },
    {
      reference: coursesRef,
      label: "Courses",
    },
    {
      reference: servicesRef,
      label: "Services",
    },
    {
      reference: faqRef,
      label: "FAQ",
    },
  ];
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky border-b-[1px] shadow-sm top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          {/* mobile */}
          <span className="flex md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"} className="bg-white">
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    HRA SOLUTIONS
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ reference, label }: RouteProps) => (
                    <button
                      key={label}
                      onClick={() => {
                        window.scrollTo({
                          top: reference.current.offsetTop,
                          behavior: "smooth",
                        });
                        setIsOpen(false);
                      }}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          <NavigationMenuItem className="font-bold flex">
            <a href="/" className="ml-2 font-bold text-xl flex">
              <img src={LogoImage} width="200" height="100" />
            </a>
          </NavigationMenuItem>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <button
                key={i}
                onClick={() => {
                  window.scrollTo({
                    top: route.reference.current.offsetTop,
                    behavior: "smooth",
                  });
                }}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </button>
            ))}
          </nav>

          <ContactUs />
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
