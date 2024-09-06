import { useEffect } from "react";
import { useFetcher, useLoaderData } from "react-router-dom";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import { getOrder } from "../../services/apiSubs";
import OrderItem from "./OrderItem";

function Order() {
  const order = useLoaderData();
  const fetcher = useFetcher();

  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
    },
    [fetcher],
  );

  const { id, status, created_at, cart } = order;

  const totalPrice = cart.reduce((total, item) => total + item.totalPrice, 0);

  const createdAtDate = new Date(created_at);
  const estimatedDeliveryDate = new Date(createdAtDate.getTime() + 30 * 60000);

  const deliveryIn = calcMinutesLeft(estimatedDeliveryDate);

  return (
    <div className="space-y-8 px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">Order #{id} status</h2>

        <div className="space-x-2">
          <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-green-50">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 bg-neutral-200 px-6 py-5">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(created_at)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-xs text-neutral-500">
          (Estimated delivery: {formatDate(estimatedDeliveryDate)})
        </p>
      </div>

      <ul className="dive-neutral-200 divide-y border-b border-t">
        {cart?.map((item) => (
          <OrderItem
            item={item}
            key={item.subId}
            isLoadingIngredients={fetcher.state === "loading"}
            ingredients={
              fetcher?.data?.find((el) => el.id === item.subId)?.ingredients ??
              []
            }
          />
        ))}
      </ul>

      <div className="space-y-2 bg-neutral-200 px-6 py-5">
        <p className="text-sm font-medium text-neutral-600">
          Price sub: {formatCurrency(totalPrice)}
        </p>
        <p className="font-bold">
          To pay on delivery: {formatCurrency(totalPrice)}
        </p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  if (!params.id) {
    throw new Error("Order ID is required");
  }

  const order = await getOrder(params.id);
  return order;
}

export default Order;
