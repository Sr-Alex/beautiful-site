import { useEffect } from "react";
import { useState } from "react";

import { Sun, Moon } from "lucide-react";

function NavBar() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const handleToogleTheme = () => {
    return setTheme(theme == "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.documentElement.classList.value = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className="flex items-center w-full h-16 px-6 border-b-2 border-b-proj-black dark:border-b-proj-gray">
      <button className="w-8 h-8" onClick={handleToogleTheme}>
        {theme == "light" ? <Sun className="w-full h-auto stroke-proj-purple" /> : <Moon className="w-full h-auto stroke-proj-green"/>}
      </button>
    </header>
  );
}

export default NavBar;
