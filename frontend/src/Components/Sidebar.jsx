import { NavLink } from "react-router-dom";
import Logo from "../assets/Main-logo.png";
import { AiOutlineLogin } from "react-icons/ai";
import { FaRegFileAlt, FaList, FaHome } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", icon: <FaHome />, path: "/" },
    { name: "Table", icon: <FaList />, path: "/table" },
    { name: "Order Detail", icon: <FaRegFileAlt />, path: "/order" },
    { name: "Profile", icon: <FaUserPlus />, path: "/users" },
    { name: "Login", icon: <AiOutlineLogin />, path: "/login" },
  ];

  return (
    <div>
      <div>
        <img
          src={Logo}
          alt="Logo"
          className="mx-auto w-[150px] object-contain"
        />
      </div>
      <nav>
        <ul className="space-y-2 mt-6">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center text-[17px] gap-2 px-4 py-2 rounded-lg ${
                    isActive
                      ? "bg-green-200 text-green-600 font-semibold border-l-4 border-green-600"
                      : "text-gray-700 hover:bg-gray-200"
                  }`
                }
              >
                {item.icon}
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
