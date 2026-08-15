"use clien";

import React, { useRef, useState, UIEvent } from "react";
import styles from "./Slider.css";

interface SliderProps {
  slides: { id: number; content: React.ReactNode }[];
}

const ScrollSlider = ({ slides }: SliderProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollLeft = container.scrollLeft;
    const slideWidth = container.clientWidth;

    const newIdx = Math.round(scrollLeft / slideWidth);
    if (newIdx !== activeIdx) {
      setActiveIdx(newIdx);
    }
  };

  const scrollToSlide = (idx: number) => {
    if (!scrollRef.current) return;
    const slideWidth = scrollRef.current.clientWidth;
    scrollRef.current.scrollTo({
      left: idx * slideWidth,
      behavior: "smooth",
    });
  };
};

export default ScrollSlider;


// "use client";

// import React, { useRef, useState, UIEvent } from "react";
// import styles from "./ScrollSlider.module.css";

// interface SliderProps {
//   slides: { id: number; content: React.ReactNode }[];
// }

// export default function ScrollSlider({ slides }: SliderProps) {
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const [activeIdx, setActiveIdx] = useState(0);

//   // Определяем, какой слайд сейчас по центру, чтобы подсветить точку
//   const handleScroll = (e: UIEvent<HTMLDivElement>) => {
//     const container = e.currentTarget;
//     const scrollLeft = container.scrollLeft;
//     const slideWidth = container.clientWidth;
    
//     // Вычисляем индекс текущего слайда
//     const newIdx = Math.round(scrollLeft / slideWidth);
//     if (newIdx !== activeIdx) {
//       setActiveIdx(newIdx);
//     }
//   };

//   // Клик по точкам для плавной прокрутки к нужному слайду
//   const scrollToSlide = (idx: number) => {
//     if (!scrollRef.current) return;
//     const slideWidth = scrollRef.current.clientWidth;
//     scrollRef.current.scrollTo({
//       left: idx * slideWidth,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <div className={styles.wrapper}>
//       {/* Контейнер-лента скроллится пальцем или мышкой */}
//       <div className={styles.container} ref={scrollRef} onScroll={handleScroll}>
//         {slides.map((slide) => (
//           <div key={slide.id} className={styles.slide}>
//             {slide.content}
//           </div>
//         ))}
//       </div>

//       {/* Точки пагинации */}
//       <div className={styles.dots}>
//         {slides.map((_, idx) => (
//           <button
//             key={idx}
//             className={`${styles.dot} ${idx === activeIdx ? styles.dotActive : ""}`}
//             onClick={() => scrollToSlide(idx)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }


// .wrapper {
//   position: relative;
//   width: 100%;
// }

// .container {
//   display: flex;
//   overflow-x: auto; /* Включаем горизонтальный скролл */
//   scroll-snap-type: x mandatory; /* 🔑 Включаем примагничивание по оси X */
//   scroll-behavior: smooth;
//   scrollbar-width: none; /* Прячем дефолтный скроллбар в Firefox */
// }

// .container::-webkit-scrollbar {
//   display: none; /* Прячем дефолтный скроллбар в Chrome/Safari */
// }

// .slide {
//   min-width: 100%; /* 🔑 Каждый слайд строго равен ширины родителя */
//   flex-shrink: 0;
//   scroll-snap-align: center; /* 🔑 Магнитим слайд ровно по центру экрана */
//   box-sizing: border-box;
// }

// /* Стили для точек */
// .dots {
//   display: flex;
//   justify-content: center;
//   gap: 8px;
//   margin-top: 15px;
// }
// .dot {
//   width: 10px;
//   height: 10px;
//   border-radius: 50%;
//   background: #ccc;
//   border: none;
//   cursor: pointer;
//   transition: background 0.3s;
// }
// .dotActive {
//   background: #333;
// }
