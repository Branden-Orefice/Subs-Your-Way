import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-neutral-200 bg-green-500 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Subs Your Way
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
