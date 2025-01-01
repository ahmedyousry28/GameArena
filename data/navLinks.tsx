import { BsFillPeopleFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { MdDashboard } from "react-icons/md";
export const NAV_LINKS = [
  {
    link: "/",
    label: "Home",
    icon: <GoHomeFill />,
  },
  {
    link: "/category",
    label: "Category",
    icon: <MdDashboard />,
  },
  {
    link: "/games",
    label: "Games",
    icon: <MdDashboard />,
  },
  {
    link: "/wishlist",
    label: "WIshlist",
    icon: <FaHeart />,
  },
  {
    link: "/friends",
    label: "Friends",
    icon: <BsFillPeopleFill />,
  },
];
