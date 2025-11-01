import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Languages,
  X,
  PhoneCall,
  MessageCircleMore,
  MapPin,
} from "lucide-react";
import "./App.css";

function App() {
  const [lang, setLang] = useState("ar");
  const [fullscreenImage, setFullscreenImage] = useState(null);

  useEffect(() => {
    document.title =
      lang === "ar" ? "🎪 السيرك الروسي العالمي 🎪" : "🎪 Мировой Русский Цирк 🎪";
  }, [lang]);

  const toggleLang = () => setLang(lang === "ar" ? "ru" : "ar");

  const text = {
    ar: {
      title: "🎪 السيرك الروسي العالمي 🎪",
      subtitle: "✨ عروض تخطف الأنفاس... متعة لا تُنسى 🎟️",
      paragraph: `انضم إلينا في عالمٍ مليءٍ بالمغامرة والإثارة!  
شاهد أجرأ العروض من الأكروبات المحترفين 🤸‍♂️،  
واستمتع برؤية الأسود المدربة 🦁،  
واختبر سحر الخدع البصرية ✨ في تجربة فريدة تجمع بين الحماس والدهشة.  
استعد لرحلة لا تُنسى مع السيرك الروسي العالمي! 🎭`,
      paragraph2: `🎟️ أسعار التذاكر:  
💎 *VIP*: 2000 جنيه مصري  
🎫 *عادية*: 1500 جنيه مصري  
👦 *الأطفال من 5 إلى 10 سنوات*: 700 جنيه مصري  

📞 للحجز والاستفسار تواصل معنا عبر ↓`,
      footer: " بواسطة أحمد بكري",
    },
    ru: {
      title: "🎪 Мировой Русский Цирк 🎪",
      subtitle: "✨ Захватывающие шоу... Незабываемые эмоции 🎟️",
      paragraph: `Добро пожаловать в мир удивительных приключений и веселья!  
Увидьте смелых акробатов 🤸‍♂️,  
наслаждайтесь выступлением дрессированных львов 🦁  
и откройте магию иллюзий ✨ — всё это в одном великолепном шоу!  
Приготовьтесь к незабываемому путешествию с Мировым Русским Цирком! 🎭`,
      paragraph2: `🎟️ Цены на билеты:  
💎 *VIP*: 2000 египетских фунтов  
🎫 *Обычный билет*: 1500 фунтов  
👦 *Дети от 5 до 10 лет*: 700 фунтов  

📞 Для бронирования и информации свяжитесь с нами ↓`,
      footer: "Переведено Ахмедом Бакри",
    },
  };

  const images = [
    "/photo/ffa1.jpeg",
    "/photo/ffa2.jpeg",
    "/photo/ffa3.jpeg",
    "/photo/ffa4.jpeg",
  ];

  return (
    <div className="app">
      {/* ===== Header ===== */}
      <header className="header">
        <div>
          <h1 className="glow-text">{text[lang].title}</h1>
          <motion.p
            className="header-sub"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            {text[lang].subtitle}
          </motion.p>
        </div>

        <motion.button
          onClick={toggleLang}
          className="translate-btn"
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.8 }}
          title="تبديل اللغة / Сменить язык"
        >
          <Languages size={30} />
        </motion.button>
      </header>

      {/* ===== Hero Video ===== */}
      <section className="hero">
        <motion.video
          autoPlay
          muted
          loop
          playsInline
          className="background-video"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <source src="/vedio/ffss.mp4" type="video/mp4" />
        </motion.video>
      </section>

      {/* ===== Paragraph ===== */}
      <motion.div
        className="glow-paragraph fancy-text"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8 }}
      >
        <p>{text[lang].paragraph}</p>
      </motion.div>

      {/* ===== Gallery ===== */}
      <section className="gallery">
        {images.map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="image-card"
            onClick={() => setFullscreenImage(img)}
          >
            <img src={img} alt={'show-${i + 1}'} />
          </motion.div>
        ))}
      </section>

      {/* ===== Tickets & Contact ===== */}
      <motion.div
        className="ticket-section"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, type: "spring" }}
      >
        <motion.p
          className="ticket-text fancy-text"
          animate={{
            textShadow: [
              "0 0 15px #ffd700",
              "0 0 35px #ff9900",
              "0 0 15px #ffd700",
            ],
          }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          {text[lang].paragraph2}
        </motion.p>

        {/* Social Icons */}
        <div className="footer-icons">
          <a href="https://wa.me/201015836376" target="_blank" rel="noreferrer">
            <MessageCircleMore size={38} />
          </a>
          <a href="tel:+201015836376" target="_blank" rel="noreferrer">
            <PhoneCall size={38} />
          </a>
          <a
            href="https://maps.app.goo.gl/QWyc2B4KHYbS949y9"
            target="_blank"
            rel="noreferrer"
          >
            <MapPin size={38} />
          </a>
        </div>
      </motion.div>

      {/* ===== Fullscreen Image ===== */}
      <AnimatePresence>
        {fullscreenImage && (
          <motion.div
            className="fullscreen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={fullscreenImage}
              alt="fullscreen"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <button
              className="close-btn"
              onClick={() => setFullscreenImage(null)}
            >
              <X size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== Footer ===== */}
      <footer className="footer">
        <p className="footer-text">
          {lang === "ar" ? " بواسطة " : "Переведено "}
          <span className="mystic-glow">أحمد بكري</span>
        </p>
      </footer>
    </div>
  );
}

export default App;