import { navigation } from "../constants";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg.jsx";
import { HambugerMenu } from "./design/Header.jsx";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const { t, i18n } = useTranslation();

  const isRTL = i18n.language === "ar"; // check if Arabic

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
  };

  return (
    <div className={`fixed   top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'}`}>
      <div className={`flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-2 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
        {/* Logo */}
        <a className={`${isRTL ? 'w-[4.5rem] ml-auto' : 'w-[4.5rem] mr-auto'} block z-50 `} href="#hero">
          <img src="/logo.webp" alt="Logo" width={90} height={20} />
        </a>

        {/* Navigation */}
        <nav className={`${openNavigation ? 'flex' : 'hidden'} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:bg-transparent lg:mx-auto`}>
          <div className={`relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row ${isRTL ? 'lg:justify-end' : 'lg:justify-start'}`}>
            {navigation.map((item) => (
              <ScrollLink
                key={item.id}
                to={item.url.replace("#", "")}
                offset={-100}
                onClick={handleClick}
                className="cursor-pointer block relative font-code-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-4 py-3 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 xl:px-8"
              >
                {t(`header.navigation.${item.title.toLowerCase()}`)}
              </ScrollLink>
            ))}
          </div>
          <HambugerMenu />
        </nav>

        {/* Contact Button */}
        <Button className="hidden lg:flex mx-auto" href="#contact">
          {t('header.contact_button')}
        </Button>

        {/* Language Switch */}
        <Button
          className={`${isRTL ? 'ml-2 lg:ml-4' : 'mr-2 lg:mr-4'} transition border border-n-6 rounded-lg px-3 py-2 text-xs lg:text-sm`}
          onClick={toggleLanguage}
        >
          {i18n.language === "en" ? t('header.language.ar') : t('header.language.en')}
        </Button>

        {/* Hamburger Menu */}
        <Button className={`${isRTL ? 'mr-auto' : 'ml-auto'} lg:hidden transition`} px="px-3" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
