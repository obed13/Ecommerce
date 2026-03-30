import { Search, ShoppingCart, Heart, User, Menu, X } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-orange-600 shadow-md">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20 relative">
                    {/* --- MODO BUSQUEDA MÓVIL (Overlay) --- */}
                    {isSearchOpen && (
                        <div className="absolute inset-0 z-50 bg-orange-600 flex items-center px-4 sm:hidden">

                            <div className="flex-1 flex items-center bg-white rounded-full overflow-hidden h-11 shadow-sm">
                                <input type="text" autoFocus placeholder="Buscar productos..." className="flex-1 px-5 text-sm outline-none text-gray-700" />

                                <button className="px-4 text-orange-600 hover:text-orange-800 transition-colors cursor-pointer">
                                    <Search size={20} />
                                </button>
                            </div>

                            <button onClick={() => setIsSearchOpen(false)} className="ml-3 text-white cursor-pointer p-1">
                                <X size={28} />
                            </button>

                        </div>
                    )}
                    {/* IZQUIERDA */}
                    <div className="flex items-center gap-3">
                        <button className="sm:hidden text-white cursor-pointer hover:bg-orange-700 p-1 rounded-md transition">
                            <Menu size={28} />
                        </button>

                        <Link to="/">
                            <img src="/images/logo.png" alt="logo" className="h-8 sm:h-10 object-contain" />
                        </Link>
                    </div>
                    {/* CENTRO - Buscador Desktop */}
                    <div className="hidden sm:flex flex-1 max-w-2xl mx-6 bg-white rounded-full overflow-hidden h-11 shadow-sm">
                        <input type="text" placeholder="Buscar productos..." className="flex-1 px-5 text-sm outline-none text-gray-700" />
                        <button className="px-5 bg-black text-white transition-colors cursor-pointer">
                            <Search size={20} />
                        </button>
                    </div>

                    {/* DERECHA - Iconos */}
                    <div className="flex items-center gap-3">

                        <button onClick={() => setIsSearchOpen(true)} className="sm:hidden text-white cursor-pointer hover:opacity-80 transition p-1">
                            <Search size={24} />
                        </button>

                        <button className="hidden sm:block text-white cursor-pointer hover:scale-110 transition p-1">
                            <Heart size={24} />
                        </button>

                        <button className="text-white cursor-pointer hover:scale-110 transition p-1">
                            <User size={24} />
                        </button>

                        <button className="relative text-white cursor-pointer hover:scale-110 transition p-1">
                            <ShoppingCart size={24} />
                            <span className="absolute top-0 right-0 bg-white text-orange-600 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-orange-600">
                                0
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar