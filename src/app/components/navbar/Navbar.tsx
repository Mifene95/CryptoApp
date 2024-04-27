import Logo from "./logo/Logo";
import Home from "./home/Home";
import Portfolio from "./portfolio/Portfolio";
import Search from "./search/Search";
import DropDown from "./dropdown/DropDown";
import Theme from "./theme/Theme";
export default function Navbar() {
  return (
    <div className="flex flex-row justify-between mt-2 h-48 items-center">
      <Logo />
      <div className="flex flex-row gap-6 h-48">
        <Home />
        <Portfolio />
      </div>
      <div className="flex flex-row gap-4 mr-16">
        <Search />
        <DropDown />
        <Theme />
      </div>
    </div>
  );
}
