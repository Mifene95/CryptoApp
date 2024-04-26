import Logo from "./logo/Logo";
import Home from "./home/Home";
import Portfolio from "./portfolio/Portfolio";
import Search from "./search/Search";
import DropDown from "./dropdown/DropDown";
import Theme from "./theme/Theme";
export default function Navbar() {
  return (
    <div className="flex flex-row justify-between">
      <Logo />
      <div className="flex flex-row gap-6">
        <Home />
        <Portfolio />
      </div>
      <div className="flex flex-row gap-4">
        <div>
          <Search />
        </div>
        <DropDown />
        <Theme />
      </div>
    </div>
  );
}
