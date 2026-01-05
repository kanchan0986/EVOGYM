import FooterNavigation from "@/navigation/footer-navigation";
import MainNavigation from "@/navigation/main-navigation";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";

type Props = {};

export default function RootLayout({}: Props) {
  // Navbar scrolling effect

  const [isTopOfThePage, setIsTopOfThePage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () =>
      window.scrollY === 0 ? setIsTopOfThePage(true) : setIsTopOfThePage(false);

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <MainNavigation isTopOfThePage={isTopOfThePage} />
      <Outlet />
      <FooterNavigation />
    </>
  );
}
