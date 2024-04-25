import Logo from "./logo/Logo";
import Home from "./home/Home";
import Portfolio from "./portfolio/Portfolio";
import Search from "./search/Search";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between">
      <Logo />
      <div className="flex flex-row gap-6">
        <Home />
        <Portfolio />
      </div>
      <div>
        <Search />
      </div>
    </div>
  );
}
