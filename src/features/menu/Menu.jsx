import { useLoaderData } from "react-router-dom";
import { getSubs } from "../../services/apiSubs";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();

  return (
    <ul className="divide-y divide-neutral-200 px-2">
      {menu.map((subs) => (
        <MenuItem subs={subs} key={subs.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getSubs();
  return menu;
}

export default Menu;
