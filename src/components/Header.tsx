import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, SearchIcon } from "lucide-react";
import Link from "next/link";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Movies",
    href: "/movies",
  },
  {
    name: "Khmer Dubbed",
    href: "/khmer-dubbed",
  },
];

const Header = () => {
  return (
    <header className="sticky top-0 left-0 right-0 bg-black bg-opacity-30 z-10 shadow-md px-4">
      <nav className="h-16 content-center text-center">
        <Link href="/" className="cursor-pointer">
          navbar
        </Link>
      </nav>
    </header>
  );
};

export default Header;
