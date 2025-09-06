import { motion } from "framer-motion";
import Button from "./Button";
import Section from "./Section";
import { useTranslation } from "react-i18next";
import { curve } from "../assets";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Hero = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <Section className="pt-[5rem] -mt-[5.25rem]" id="hero">
      <div
        className={`container flex flex-col items-center justify-center lg:justify-between lg:gap-20 ${
          isRTL ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        {/* Left Text Section */}
        <motion.div
          className={`max-w-[35rem] ${
            isRTL ? "lg:text-right text-center" : "text-center lg:text-left"
          } mb-8 lg:mb-0`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1
            custom={1}
            variants={textVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-10"
          >
            {t("hero.heading_line1")}
            <span className="block relative text-blue-400">
              {t("hero.heading_line2")}
              <img
                className={`absolute top-full w-[24rem] mt-2 ${
                  isRTL
                    ? "right-1/2 lg:right-0 translate-x-1/2 lg:translate-x-0"
                    : "left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0"
                }`}
                src={curve}
                alt="curve"
              />
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={textVariants}
            className="text-base md:text-lg text-gray-300 leading-relaxed mb-8"
          >
            {t("hero.paragraph")}
          </motion.p>

          <motion.div custom={3} variants={textVariants}>
            <Button href="#contact">{t("hero.button")}</Button>
          </motion.div>
        </motion.div>

        {/* Right Video Section */}
        <motion.div
          className="w-full lg:w-[45%] flex justify-center lg:justify-end items-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          whileHover={{ scale: 1.03 }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.4)] border border-gray-700/40">
            <video
              className="w-full h-auto object-cover"
              src="/videos/video1.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
            />
            {/* Optional glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-cyan-400/5 pointer-events-none"></div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Hero;
