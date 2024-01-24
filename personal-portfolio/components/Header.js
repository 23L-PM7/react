import { menuItems } from "@/data/menuItems";

import { MainMenu } from "./MainMenu";
import { ThemeChanger } from "./ThemeChanger";
import { Logo } from "./icons/Logo";

export function Header() {
  return (
    <div className="flex justify-between p-4 border-2">
      <Logo />
      <MainMenu items={menuItems} />
      <ThemeChanger />
      <a href="cv.jpg" className="hidden px-4 py-2 text-white bg-black rounded md:block hover:bg-slate-500" download>
        Download
      </a>
    </div>
  );
}
