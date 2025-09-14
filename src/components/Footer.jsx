import Section from "./Section";
import { socials, contactDetails } from "../constants";
import logo from "/logo.webp";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <Section className="!px-0 !py-5 border-t border-n-6 backdrop-blur relative overflow-hidden">
      <div className="container flex lg:justify-between justify-center items-center gap-10 flex-col lg:flex-row">
        <div className="flex flex-col items-start gap-4 sm:items-start">
          <div className="flex mx-auto lg:mx-0 items-center">
            <img src={logo} width={100} height={100} alt="Logo" className="mb-4" />
          </div>

          <div className="flex flex-col gap-3">
            {contactDetails.map((item) => (
              <a href={item.href} key={item.id} className="flex items-center gap-3 cursor-pointer">
                <img src={item.iconUrl} width={18} height={18} alt={item.title} />
                <p className="text-n-3 text-sm">{item.text}</p>
              </a>
            ))}
          </div>

          <div className={`flex flex-col ${isRTL ? "items-end" : "items-start"} gap-4`}>
            <h3 className="text-n-3">{t("footer.follow_us")}</h3>
            <ul className="flex gap-5 flex-wrap">
              {socials.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-transform duration-300 hover:scale-105"
                >
                  <img src={item.iconUrl} width={16} height={16} alt={item.title} />
                </a>
              ))}
            </ul>
          </div>
        </div>

        <p className="caption text-n-4 lg:block mt-auto">
          © {new Date().getFullYear()}. {t("footer.rights")}
        </p>
      </div>

      {/* Decorative watermark (faded logo) */}
      <div aria-hidden="true" className="pointer-events-none hidden lg:flex absolute top-0 right-0 h-full w-1/3 items-center justify-center">
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(90deg, rgba(2,6,23,0) 40%, rgba(59,130,246,0.06) 80%)'
        }} />
        <img
          src={logo}
          alt=""
          aria-hidden="true"
          style={{
            width: 300,
            height: 'auto',
            opacity: 0.2,
            transform: 'rotate(6deg)',
            filter: 'blur(2px) saturate(0.9)'
          }}
        />
      </div>
    </Section>
  );
};

export default Footer;
