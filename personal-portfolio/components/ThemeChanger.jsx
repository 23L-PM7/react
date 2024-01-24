import { useEffect, useState } from "react";
import { LuMoonStar } from "react-icons/lu";
import { MdOutlineWbSunny } from "react-icons/md";

export function ThemeChanger() {
  const [theme, setTheme] = useState("light"); // dark

  function changeTheme() {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }

  // called only once after component creation. (Component Uuseh uydee gants udaa ajilladag)
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    setTheme(localTheme);
    document.documentElement.classList.add(localTheme);

    console.log("Called only once");
  }, []);

  console.log("Called every Render");

  return (
    <button onClick={changeTheme}>
      {theme === "light" && <MdOutlineWbSunny />}
      {theme === "dark" && <LuMoonStar />}
    </button>
  );
}
