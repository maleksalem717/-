import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe2,
  X,
  PhoneCall,
  MessageCircle,
  MapPin,
} from "lucide-react";
import "./App.css";

function App() {
  const [lang, setLang] = useState("ru");
  const [fullscreenImage, setFullscreenImage] = useState(null);

  useEffect(() => {
    document.title = lang === "ar" ? "السيرك الروسي" : "Русский цирк";
  }, [lang]);

  const toggleLang = () => setLang(lang === "ar" ? "ru" : "ar");

  const text = {
    ar: {
      title: "السيرك الروسي",
      paragraph: `استعد لعروض تبهر الحواس 🎪 — موسيقى، ألوان، وأداء لا مثيل له.
      السيرك الروسي يأتيكم بأقوى العروض العالمية ومواهب تخطف الأنفاس.`,
      mid: `✨ تذاكر السيرك متاحة الآن ✨  
      🎟️ تذكرة VIP بسعر 2000 جنيه  
      🎟️ التذكرة العادية 1500 جنيه  
      👶 الأطفال من عمر سنتين إلى 8 سنوات بـ 700 جنيه فقط  
      👼 الأطفال أقل من سنتين مجانًا 🎁  
      لا تفوت الفرصة لتعيش تجربة أسطورية تجمع بين الخيال والإبداع والعروض النارية 💫🔥`,
      footer: "بواسطة Ahmed Bakri",
    },
    ru: {
      title: "Русский цирк",
      paragraph: `Добро пожаловать в магию 🎪 — свет, движение и фантазия.
      Русский цирк представляет грандиозные шоу с мировыми артистами!`,
      mid: `✨ Билеты уже в продаже ✨  
      🎟️ VIP — 2000 ег. фунтов  
      🎟️ Обычный билет — 1500 ег. фунтов  
      👶 Дети от 2 до 8 лет — 700 ег. фунтов  
      👼 До 2 лет — бесплатно 🎁  
      Не упустите шанс стать частью легендарного шоу, где реальность встречает волшебство 💫🔥`,
      footer: "от Ahmed Bakri",
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
      {/* Header */}
      <header className="header">
        <h1 className="glow-text">{text[lang].title}</h1>
        <motion.button
          onClick={toggleLang}
          className="translate-btn"
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 1 }}
          title="ترجمة / Перевод"
        >
          <Globe2 size={28} />
        </motion.button>
      </header>

      {/* Hero Video */}
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

      {/* Main Paragraph */}
      <motion.p
        className="glow-paragraph"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8 }}
      >
        {text[lang].paragraph}
      </motion.p>

      {/* New Ticket Section */}
      <motion.div
        className="ticket-section"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, type: "spring" }}
      >
        <motion.p
          className="ticket-text"
          animate={{ textShadow: ["0 0 20px #ff00ff", "0 0 40px #00eaff", "0 0 20px #ff00ff"] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          {text[lang].mid}
        </motion.p>
      </motion.div>

      {/* Gallery */}
      <section className="gallery">
        {images.map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1, rotate: 1 }}
            className="image-card"
            onClick={() => setFullscreenImage(img)}
          >
            <img src={img} alt={'show-${i + 1}'} />
          </motion.div>
        ))}
      </section>

      {/* Fullscreen Image */}
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
            <button className="close-btn" onClick={() => setFullscreenImage(null)}>
              <X size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-icons">
          <a href="tel:+201015836376" target="_blank" rel="noreferrer">
            <PhoneCall size={28} />
          </a>
          <a href="https://wa.me/201015836376" target="_blank" rel="noreferrer">
            <MessageCircle size={28} />
          </a>
          <a
            href="https://maps.app.goo.gl/QWyc2B4KHYbS949y9"
            target="_blank"
            rel="noreferrer"
          >
            <MapPin size={28} />
          </a>
        </div>
        <p className="footer-text">{text[lang].footer}</p>
      </footer>
    </div>
  );
}

export default App;