import { Link } from "@inertiajs/react";
import { Button } from "./ui/button";
import { ChevronRight, Heart, ShoppingBag, User, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function AppHeader() {
    const categories = ['women', 'men', 'kids', 'babies']
    const subcategories = ['t-shirt & bratop', 'kemeja, blus, & polo', 'luaran', 'sweater', 'celana', 'rok & gaun', 'aksesoris', 'dalaman']

    const [hoveredCategory, setHoveredCategory] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMouseEnter = () => {
        setHoveredCategory(true);
    };

    const handleMouseLeave = () => {
        setHoveredCategory(false);
    };

    return (
        <header className={`p-2 sm:p-3 md:p-4 xl:p-5 fixed left-0 w-full top-0 transition-all ease-in-out ${hoveredCategory || isScrolled ? 'bg-white' : 'bg-transparent'}`}>
            <div className="flex items-center justify-between max-w-[1440px] mx-auto">
                <Link href="/" className="font-extrabold text-3xl uppercase">apalah</Link>

                <nav>
                    <ul className="flex items-center gap-5">
                        {categories.map((item, index) => (
                            <li key={index}>
                                <Link href="#" className="app-header-link" onMouseEnter={handleMouseEnter}>{item}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* <div className="flex items-center gap-3">
                    <Button className="cursor-pointer rounded-full" size={'icon'} variant={'ghost'}><Heart /></Button>
                    <Button className="cursor-pointer rounded-full" size={'icon'} variant={'ghost'}><ShoppingBag /></Button>
                    <Button className="cursor-pointer rounded-full" size={'icon'} variant={'ghost'}><User /></Button>
                </div> */}
                <div className="flex items-center gap-5">
                    <Link href="/login" className="app-header-link">Login</Link>
                    <span>|</span>
                    <Link href="/signup" className="app-header-link">Signup</Link>
                </div>
            </div>

            <div className={`transition-all ease-in-out ${hoveredCategory ? 'opacity-100 visible' : 'opacity-0 invisible'} w-full absolute left-0 top-full right-0 bg-white border-b `} id="subcategories" onMouseLeave={handleMouseLeave}>
                <div className="w-full max-w-7xl pb-10 pt-12 mx-auto relative" onClick={handleMouseLeave}>
                    <Button variant={'ghost'} size={'icon'} className="absolute top-0 -right-2 rounded-full cursor-pointer"><X /></Button>
                    <div className="grid grid-cols-4 gap-10">
                        {subcategories.map((item, index) => (
                            <Link key={index} href="#" className="app-header-sublink">
                                <span>{item}</span>
                                <ChevronRight className="w-4 h-4" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    )
}