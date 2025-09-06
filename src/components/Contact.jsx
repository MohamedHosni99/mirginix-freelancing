import { motion } from "framer-motion";
import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          setSending(false);
          setSuccess(true);
          setError(false);
          form.current.reset();
        },
        () => {
          setSending(false);
          setError(true);
          setSuccess(false);
        }
      );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <Section id="contact">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title={t("contact.title")}
        />
        <div
          className={`flex flex-col  items-center justify-between h-full min-h-[70vh] ${
            isRTL ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          {/* Left Form */}
          <motion.div
            className={`w-full lg:w-1/2 max-w-[30rem] mb-8 lg:mb-0 ${
              isRTL ? "text-right" : "text-left"
            }`}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-4 w-full"
            >
              <motion.h3
                className="h3 text-n-2 mb-3 md:mb-6"
                variants={itemVariants}
              >
                {t("contact.heading")}
              </motion.h3>

              <motion.div variants={itemVariants}>
                <label className="mb-2 block">{t("contact.name")}</label>
                <input
                  name="user_name"
                  className={`p-3 w-full rounded-md border border-gray-300 ${
                    isRTL
                      ? "text-right placeholder:text-right"
                      : "text-left placeholder:text-left"
                  }`}
                  type="text"
                  placeholder={t("contact.name_placeholder")}
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="mb-2 block">{t("contact.email")}</label>
                <input
                  name="user_email"
                  className={`p-3 w-full rounded-md border border-gray-300 ${
                    isRTL
                      ? "text-right placeholder:text-right"
                      : "text-left placeholder:text-left"
                  }`}
                  type="email"
                  placeholder={t("contact.email_placeholder")}
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="mb-2 block">{t("contact.message")}</label>
                <textarea
                  name="message"
                  className={`p-3 w-full rounded-md border border-gray-300 ${
                    isRTL
                      ? "text-right placeholder:text-right"
                      : "text-left placeholder:text-left"
                  }`}
                  rows={6}
                  placeholder={t("contact.message_placeholder")}
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <Button type="submit" disabled={sending}>
                  {sending ? t("contact.sending") : t("contact.send")}
                </Button>
              </motion.div>

              <motion.div variants={itemVariants}>
                {success && (
                  <p className="text-n-3 text-sm mt-2">
                    {t("contact.success")}
                  </p>
                )}
                {error && (
                  <p className="text-red-600 text-sm mt-2">
                    {t("contact.error")}
                  </p>
                )}
              </motion.div>
            </form>
          </motion.div>

          {/* Animation */}
          <motion.div
            className="w-full lg:w-[45%] flex justify-center lg:justify-end items-start lg:items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
          >
            <DotLottieReact
              autoplay
              loop
              src="animations/Contact Us.json"
              className="w-full max-w-[450px] h-[300px] md:h-[520px] max-h-[80vh] object-contain"
            />
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
