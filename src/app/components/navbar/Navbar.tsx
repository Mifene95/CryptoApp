import Logo from "./logo/Logo";
import Home from "./home/Home";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between">
      <Logo />
      <Home />
    </div>
  );
}
