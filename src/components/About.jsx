import { motion } from "framer-motion";
import Button from "./Button";
import Section from "./Section";
import { useTranslation } from "react-i18next";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const About = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <Section id="about">
      <div
        className={`container lg:gap-20 flex flex-col items-center justify-center lg:justify-between ${
          isRTL ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        {/* Left Text Section */}
        <motion.div
          className={`max-w-[35rem] ${
            isRTL ? "text-right" : "text-left"
          } mb-8 lg:mb-0`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 custom={1} variants={textVariants} className="h2 mb-2 md:mb-3">
            {t("about.title")}
          </motion.h2>
          <motion.p custom={2} variants={textVariants} className="body-2 mb-6 text-n-3">
            {t("about.paragraph")}
          </motion.p>

          <motion.h3 custom={3} variants={textVariants} className="h3 text-n-2 mb-2">
            {t("about.vision_title")}
          </motion.h3>
          <motion.p custom={4} variants={textVariants} className="body-2 mb-6 text-n-3">
            {t("about.vision_paragraph")}
          </motion.p>

          <motion.h3 custom={5} variants={textVariants} className="h3 text-n-2 mb-2">
            {t("about.mission_title")}
          </motion.h3>
          <motion.p custom={6} variants={textVariants} className="body-2 mb-6 text-n-3">
            {t("about.mission_paragraph")}
          </motion.p>

          <motion.div custom={7} variants={textVariants}>
            <Button href="#contact">{t("about.button")}</Button>
          </motion.div>
        </motion.div>

        {/* Right Video Section */}
        <motion.div
          className="w-full lg:w-[45%] flex justify-center lg:justify-end items-start lg:items-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          whileHover={{ scale: 1.03 }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.4)] border border-gray-700/40">
            <video
              className="w-full max-w-[450px] h-[300px] md:h-[520px] max-h-[80vh] object-cover"
              src="/videos/video2.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              poster="/images/about-preview.jpg"
            />
            {/* Optional glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-cyan-400/5 pointer-events-none"></div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
