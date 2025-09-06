import { useParams, useNavigate } from "react-router-dom";
import Section from "./Section";
import { services } from "../constants";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ServiceDetailDesignB = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const service = services.find((s) => s.id === id);

  // const formattedText = service.text.split('\n');
  const formattedText = t(`services.cards.${service.id}.text`).split("\n");
  return (
    <Section className="!pt-0 bg-n-8">
      <div
        className="container mx-auto py-12 lg:py-12"
        dir={isRTL ? "rtl" : "ltr"}
      >
        <button
          onClick={() => navigate("/")}
          className="text-sm text-blue-600 hover:underline cursor-pointer"
        >
          ← {t("services.detail.back")}
        </button>

        <div
          className={`mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch ${
            isRTL ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 18 : -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col"
          >
            <h1
              className={`text-3xl lg:text-4xl font-bold leading-tight ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              {t(`services.cards.${service.id}.title`)}
            </h1>

            <div className="mt-6 bg-white/5 p-6 rounded-xl shadow-lg flex-1">
              <div
                className={`text-gray-300 leading-relaxed space-y-2 ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {formattedText.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>

              <div
                className={`flex flex-wrap gap-3 mt-6 ${
                  isRTL ? "justify-end" : ""
                }`}
              >
                <span className="text-xs bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full">
                  {t("services.detail.badges.0")}
                </span>
                <span className="text-xs bg-green-600/20 text-green-300 px-3 py-1 rounded-full">
                  {t("services.detail.badges.1")}
                </span>
                <span className="text-xs bg-violet-600/20 text-violet-300 px-3 py-1 rounded-full">
                  {t("services.detail.badges.2")}
                </span>
              </div>

              <div
                className={`mt-6 flex gap-3 ${isRTL ? "flex-row-reverse" : ""}`}
              >
                <a
                  onClick={() => navigate("/")}
                  className="inline-block px-5 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold shadow cursor-pointer"
                >
                  {t("services.detail.buttons.contact_sales")}
                </a>

                <button
                  onClick={() => navigate("/")}
                  className="px-4 py-2 rounded-md border cursor-pointer border-white/8 text-white/90 hover:bg-white/3"
                >
                  {t("services.detail.buttons.see_all_services")}
                </button>
              </div>
            </div>

            <div className={`mt-6 space-y-3 ${isRTL ? "text-right" : ""}`}>
              {t("services.detail.optional_features", {
                returnObjects: true,
              }).map((feature, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="p-2 rounded-md bg-white/6">
                    {feature.icon}
                  </div>
                  <div>
                    <p className="font-semibold">{feature.title}</p>
                    <p className="text-xs text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -18 : 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/6 flex-1">
              {/* Service Image */}
              {service.imageUrl ? (
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full min-h-[24rem] flex items-center justify-center bg-gray-900">
                  {t("services.detail.no_image")}
                </div>
              )}

              {/* Styled Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white text-sm lg:text-base flex justify-between items-center">
                <span className="font-semibold tracking-wide">
                  {t(`services.cards.${service.id}.title`)}
                </span>
                <span className="text-blue-400 font-medium">
                  {t("services.detail.solution_label")}
                </span>
              </div>
            </div>

            <div className="mt-6 hidden lg:block sticky top-28">
              <div
                className={`p-4 rounded-xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white shadow-lg ${
                  isRTL ? "text-right" : ""
                }`}
              >
                <p className="font-semibold">
                  {t("services.detail.cta.tailored_plan")}
                </p>
                <p className="text-sm text-white/90 mt-1">
                  {t("services.detail.cta.cta_text")}
                </p>
                <div className={`mt-3 ${isRTL ? "flex justify-end" : ""}`}>
                  <span className="inline-block px-4 py-2 bg-white/10 rounded-md cursor-pointer">
                    {t("services.detail.cta.request_consultation")}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default ServiceDetailDesignB;
