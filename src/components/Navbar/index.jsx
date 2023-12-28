import Link from "next/link";
import InputSearch from "./InputSearch";
import UserActionButton from "./userActionButton";

const Navbar = () => {
  return (
    <header className="bg-color-accent2">
      <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2">
        <Link href="/" className="font-bold text-2xl">
          GEEKANIME
        </Link>
        <InputSearch />
        <UserActionButton/>
      </div>
    </header>
  );
};

export default Navbar;