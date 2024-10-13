import { useState, useEffect } from "react";
import Image from "next/image";
import SunImage from '../../public/icons/sun.png';
import MoonImage from '../../public/icons/moon.png';

const ThemeToggle = () => {
    // Använd en boolean istället för en sträng
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Kontrollera om dark mode är aktiverat i localStorage eller via systeminställningar
        const darkModeFromStorage = localStorage.getItem('theme') === 'dark';
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (darkModeFromStorage || prefersDarkMode) {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        if (newMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full transition-colors duration-300"
        >
            <div
                className={` shadow-lg border flex w-20 h-10 rounded-full transform transition-transform duration-300 ${isDarkMode ? 'bg-slate-600' : 'bg-blue-200'}`}
            >
                <Image
                    src={isDarkMode ? MoonImage : SunImage}
                    alt={isDarkMode ? 'Moon icon' : 'Sun icon'}
                    width={40}
                    height={20}
                    className={`p-1 transition-transform duration-300 ${isDarkMode ? 'translate-x-9' : 'translate-x-1'}`}
                />
            </div>
        </button>
    );
};

export default ThemeToggle;
