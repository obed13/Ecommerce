import { useState, useEffect, useRef } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";


// Arreglo temporal de categorías con las rutas que mencionaste
const staticCategories = [
    { id: 1, name: "Audífonos", image: "/images/audifono.png" },
    { id: 2, name: "Computadoras", image: "/images/computadora.png" },
    { id: 3, name: "Muebles", image: "/images/silla.png" },
    { id: 4, name: "Herramientas", image: "/images/taladro.png" },
    { id: 5, name: "Teléfonos", image: "/images/telefonos.png" },
    { id: 6, name: "Gaming", image: "/images/audifono.png" },
    { id: 7, name: "Oficina", image: "/images/silla.png" },
    { id: 8, name: "Construcción", image: "/images/taladro.png" },
    { id: 9, name: "Celulares", image: "/images/telefonos.png" },
    { id: 10, name: "Audios", image: "/images/audifono.png" },
];


const CategoriesCarousel = () => {
    const categories = staticCategories;


    const scrollRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(false);


    const updateArrows = () => {
        const el = scrollRef.current;
        if (!el) return;
        setShowLeftArrow(el.scrollLeft > 5);
        setShowRightArrow(el.scrollLeft + el.clientWidth < el.scrollWidth - 5);
    };


    const scroll = (direction) => {
        const el = scrollRef.current;
        if (!el) return;
        const scrollAmount = el.clientWidth * 0.8;
        el.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };


    useEffect(() => {
        updateArrows();
        const timer = setTimeout(updateArrows, 100);


        window.addEventListener("resize", updateArrows);
        return () => {
            window.removeEventListener("resize", updateArrows);
            clearTimeout(timer);
        };
    }, [categories]);


    return (
        <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 mt-8">
            <div className="relative group/arrows">
                {showLeftArrow && (
                    <button
                        onClick={() => scroll("left")}
                        className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-2.5 shadow-xl border border-gray-100 hover:bg-gray-50 transition-all cursor-pointer"
                        aria-label="Anterior"
                    >
                        <ArrowLeftIcon size={24} className="text-gray-800" />
                    </button>
                )}


                {/* Slider */}
                <div
                    ref={scrollRef}
                    onScroll={updateArrows}
                    className="
            grid
            grid-flow-col
            sm:flex
            gap-x-4
            sm:gap-x-[27px]
            gap-y-6
            overflow-x-auto
            scroll-smooth
            no-scrollbar
            snap-x
            snap-mandatory
            py-4
          "
                    style={{
                        display: "grid",
                        gridTemplateRows:
                            window.innerWidth < 640 && categories.length > 5
                                ? "repeat(2, min-content)"
                                : "repeat(1, min-content)",
                        gridAutoFlow: "column",
                    }}
                >
                    {categories.map((cat, index) => {
                        const imageUrl = cat.image || "https://via.placeholder.com/150";


                        return (
                            <Link
                                key={cat.id || index}
                                to={`/shop?category=${encodeURIComponent(cat.name)}`}
                                className="
                  flex
                  flex-col
                  items-center
                  flex-shrink-0
                  w-20
                  sm:w-24
                  md:w-28
                  lg:w-30
                  xl:w-[136px]
                  snap-start
                  group
                "
                            >
                                {/* Círculo */}
                                <div className="rounded-full flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-30 lg:h-30 xl:w-[136px] xl:h-[136px] bg-[#fedbbb] shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg relative overflow-hidden">
                                    <img
                                        src={imageUrl}
                                        alt={cat.name}
                                        className="w-[75%] h-[75%] object-contain transition-transform duration-300 group-hover:scale-110"
                                        onLoad={updateArrows}
                                    />
                                </div>


                                {/* Texto */}
                                <p className="mt-3 text-center text-[11px] sm:text-xs md:text-sm font-bold text-gray-700 leading-tight break-words w-full">
                                    {cat.name}
                                </p>
                            </Link>
                        );
                    })}
                </div>


                {/* Flecha derecha */}
                {showRightArrow && (
                    <button
                        onClick={() => scroll("right")}
                        className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-2.5 shadow-xl border border-gray-100 hover:bg-gray-50 transition-all cursor-pointer"
                        aria-label="Siguiente"
                    >
                        <ArrowRightIcon size={24} className="text-gray-800" />
                    </button>
                )}
            </div>
        </div>
    );
};


export default CategoriesCarousel;