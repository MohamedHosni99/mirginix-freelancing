import { motion } from "framer-motion";
import Section from "./Section";
import Heading from "./Heading";
import { services } from "../constants";
import Arrow from "../assets/svg/Arrow";
import ClipPath from "../assets/svg/ClipPath";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Services = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <Section id="services">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title={t("services.title")}
        />

        {/* Services Cards */}
        <motion.div
                  className="flex flex-wrap gap-10 mb-10 items-center justify-center"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6 }}
                >
                  {services.map((item, index) => (
                    <motion.div
                      key={item.id}
                      className="block group relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] min-h-[22rem]"
                      style={{ backgroundImage: `url(${item.backgroundUrl})` }}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <div className="relative z-2 flex flex-col  p-[2.5rem] h-full">
                        <h5 className={`h5 mb-5 ${isRTL ? "text-right" : "text-left"}`}>{t(`services.cards.${item.id}.title`)}</h5>
                        <p className="body-2 mb-6 text-n-3 line-clamp-6">{t(`services.cards.${item.id}.text`)}</p>
                        <div className="flex items-center mt-auto">
                          <img
                            src={item.iconUrl}
                            alt={t(`services.cards.${item.id}.title`)}
                            width={48}
                            height={48}
                          />
                          <button
                            onClick={() => navigate(`/service-detail/${item.id}`)}
                            className="flex items-center ml-auto cursor-pointer"
                          >
                            <p className="font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                              {t('services.explore')}
                            </p>
                            <Arrow />
                          </button>
                        </div>
                      </div>
        
                      <div
                        className="absolute inset-0.5 bg-n-8"
                        style={{ clipPath: "url(#serviceClip)" }}
                      >
                        <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-20">
                          {item.imageUrl && (
                            <img
                              src={item.imageUrl}
                              width={380}
                              height={362}
                              alt={t(`services.cards.${item.id}.title`)}
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>
                      </div>
                      <ClipPath />
                    </motion.div>
                  ))}
                </motion.div>

        {/* Key Features & Flexible Plans Section */}
        <motion.section
          className="relative mt-16 rounded-3xl overflow-hidden bg-[url('../service.webp')] bg-cover bg-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

          <div
            className={`relative z-10 container mx-auto grid lg:grid-cols-2 gap-10 p-10 ${
              isRTL ? "lg:grid-flow-col-dense" : ""
            }`}
          >
            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className={`text-white ${isRTL ? "text-right lg:mr-auto" : "text-left"}`}
            >
              <h3 className="text-3xl font-bold mb-6">
                {t("services.key_features.title")}
              </h3>
              <div className="space-y-4">
                {t("services.key_features.points", { returnObjects: true }).map(
                  (point, idx) => (
                    <motion.div
                      key={idx}
                      className={`flex items-start gap-3 ${
                        isRTL ? "flex-row-reverse" : ""
                      }`}
                      initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-n-2 mt-2"></div>
                      <p className="text-lg text-gray-300">{point}</p>
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>

            {/* Flexible Plans */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-white ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              <h3 className="text-3xl font-bold mb-6">
                {t("services.flexible_plans.title")}
              </h3>
              <p className="text-gray-300 mb-6">
                {t("services.flexible_plans.description")}
              </p>
              <ul
                className={`space-y-3 text-gray-200 ${
                  isRTL ? "pr-4" : "pl-4"
                }`}
              >
                {t("services.flexible_plans.points", { returnObjects: true }).map(
                  (point, idx) => (
                    <li
                      key={idx}
                      className={`flex items-start gap-2 ${
                        isRTL ? "flex-row-reverse" : ""
                      }`}
                    >
                      <span className="text-n-2">•</span>
                      <span>{point}</span>
                    </li>
                  )
                )}
              </ul>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </Section>
  );
};

export default Services;
