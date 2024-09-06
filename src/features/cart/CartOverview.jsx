import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartPrice = useSelector(getTotalCartPrice);
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  if (!totalCartQuantity) return null;

  return (
    <div className="flex items-center justify-between bg-neutral-800 px-4 py-4 text-sm text-neutral-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-neutral-300 sm:space-x-6">
        <span>{totalCartQuantity} subs</span>
        <span>{formatCurrency(totalCartPrice)}</span>

        <Link to="/cart">Open cart &rarr;</Link>
      </p>
    </div>
  );
}

export default CartOverview;
