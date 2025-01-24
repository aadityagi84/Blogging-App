const Header = () => {
  const avtar =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp-aEwxcuZa7v5xr9Q_LXnEhKUIyyHW2mquA&s";

  return (
    <div className="flex items-center justify-end  px-2 ">
      {/* Notification Icons */}

      {/* User Section */}
      <div className="flex items-center gap-4">
        <span className="text-gray-700">
          Hello, <span className="font-semibold text-green-600  ">Admin</span>
        </span>
        <img src={avtar} alt="User Avatar" className="w-10 h-10 rounded-full" />
      </div>
    </div>
  );
};

export default Header;
