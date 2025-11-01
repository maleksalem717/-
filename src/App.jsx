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
  const [lang, setLang] = useState("ru"); // يبدأ بالروسي
  const [fullscreenImage, setFullscreenImage] = useState(null);

  useEffect(() => {
    document.title =
      lang === "ar"
        ? "🎪 السيرك الروسي العالمي 🎪"
        : "🎪 Мировой Русский Цирк 🎪";
  }, [lang]);

  const toggleLang = () => setLang(lang === "ar" ? "ru" : "ar");

  const text = {
    ar: {
      title: "🎪 السيرك الروسي العالمي 🎪",
      subtitle: "✨ عروض تخطف الأنفاس... متعة لا تُنسى 🎟️",
      paragraph: `انضم إلينا في عالمٍ مليءٍ بالمغامرة والإثارة!  
شاهد أجرأ العروض من الأكروبات المحترفين 🤸‍♂️،  
واستمتع برؤية الأسود المدربة 🦁،  
واختبر سحر الخدع البصرية ✨ في تجربة تجمع بين الحماس والدهشة.  
احجز الآن لتعيش تجربة لا مثيل لها من السحر والإثارة مع السيرك الروسي العالمي! 🎭`,
      paragraph2: `🎟️ أسعار التذاكر:  
💎 *VIP*: 2000 جنيه مصري  
🎫 *عادية*: 1500 جنيه مصري  
👦 *الأطفال من 5 إلى 10 سنوات*: 700 جنيه مصري  

📞 للحجز والاستفسار تواصل معنا عبر ↓`,
      translated: " By_Ahmed Bakry",
    },
    ru: {
      title: "🎪 Мировой Русский Цирк 🎪",
      subtitle: "✨ Незабываемое зрелище, где магия встречает реальность 🎟️",
      paragraph: `Погрузитесь в захватывающий мир огней, адреналина и волшебства!  
Увидьте смелых акробатов, поражающих воображение 🤸‍♂️,  
насладитесь великолепием дрессированных львов 🦁,  
и ощутите магию невероятных иллюзий ✨, которые заставят вас затаить дыхание.  
Не упустите шанс — бронируйте билеты прямо сейчас и испытайте шоу, которое невозможно забыть! 🎭`,
      paragraph2: `🎟️ Цены на билеты:  
💎 *VIP*: 2000 египетских фунтов  
🎫 *Обычный билет*: 1500 фунтов  
👦 *Дети от 5 до 10 лет*: 700 фунтов  

📞 Для бронирования и информации свяжитесь с нами ↓`,
      translated: "Переведено Ахмедом Бакри",
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
          <p className="header-sub">{text[lang].subtitle}</p>
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
      <section className="hero fullscreen-section">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="background-video"
        >
          <source src="/vedio/ffss.mp4" type="video/mp4" />
        </video>
      </section>

      {/* ===== Animated Paragraph ===== */}
      <section className="fullscreen-section">
        <motion.div
          className="glow-paragraph fancy-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <p>{text[lang].paragraph}</p>
        </motion.div>
      </section>

      {/* ===== Gallery ===== */}
      <section className="gallery fullscreen-section">
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
      <section className="ticket-section fullscreen-section">
        <motion.p
          className="ticket-text fancy-text"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.2 }}
        >
          {text[lang].paragraph2}
        </motion.p>

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
      </section>

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
          <span className="mystic-glow">{text[lang].translated}</span>
        </p>
      </footer>
    </div>
  );
}

export default App;