import { Avatar } from "@mui/material";
import { useState } from "react";
import { MdMoreVert } from "react-icons/md";
import { TiUserAdd } from "react-icons/ti";

const TableData = () => {
  const tableconfig = [
    {
      id: 1,
      name: "John Brown",
      age: 45,
      address: "New York No. 1 Lake Park",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMCuPxcJQEb63pRIWd2ULvQ2EN0w4CK8YLjg&s",
    },
    {
      id: 2,
      name: "Jim Green",
      age: 27,
      address: "London No. 1 Lake Park",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZhuNRmHVpLTQc8Psu3ikk86pzn9-tBo_hjm6F0wjdNw9y9k_uPGba_9ua8CG3E7yc0GI&usqp=CAU",
    },
    {
      id: 3,
      name: "Joe Black",
      age: 31,
      address: "Sidney No. 1 Lake Park",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMCuPxcJQEb63pRIWd2ULvQ2EN0w4CK8YLjg&s",
    },
    {
      id: 4,
      name: "John Brown",
      age: 45,
      address: "New York No. 1 Lake Park",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMCuPxcJQEb63pRIWd2ULvQ2EN0w4CK8YLjg&s",
    },
    {
      id: 5,
      name: "Jim Green",
      age: 27,
      address: "London No. 1 Lake Park",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZhuNRmHVpLTQc8Psu3ikk86pzn9-tBo_hjm6F0wjdNw9y9k_uPGba_9ua8CG3E7yc0GI&usqp=CAU",
    },
    {
      id: 6,
      name: "Joe Black",
      age: 31,
      address: "Sidney No. 1 Lake Park",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMCuPxcJQEb63pRIWd2ULvQ2EN0w4CK8YLjg&s",
    },
  ];

  const [activeDropdown, setActiveDropdown] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = 5;
  const totalPages = Math.ceil(tableconfig.length / recordsPerPage);

  const toggleDropdown = (currentId) => {
    setActiveDropdown((prevId) => (prevId === currentId ? null : currentId));
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // Get current records
  const startIndex = (currentPage - 1) * recordsPerPage;
  const currentRecords = tableconfig.slice(
    startIndex,
    startIndex + recordsPerPage
  );

  return (
    <div className="flex flex-col mt-4">
      <div className="-m-1.5 overflow-x-auto ">
        <div className="p-1.5 min-w-full inline-block align-middle ">
          <div className="border rounded-lg divide-y bg-white divide-gray-200">
            <div className="py-3 px-4 flex items-center justify-between">
              <div className="relative max-w-xs">
                <label className="sr-only">Search</label>
                <input
                  type="text"
                  name="hs-table-with-pagination-search"
                  id="hs-table-with-pagination-search"
                  className="py-2 px-3 ps-9 block w-full border-gray-200 border-2 outline-none shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Search for items"
                />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
                  <svg
                    className="size-4 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                </div>
              </div>
              <div className="">
                <button className="bg-green-200 px-4 py-2 rounded-md flex gap-2 text[20px] items-center  text-green-600 font-semibold">
                  {" "}
                  <TiUserAdd className="text-[20px]" />
                  Add User
                </button>
              </div>
            </div>
            <div className="overflow-hidden ">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3 px-4 pe-0"></th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start font-medium text-gray-900 uppercase"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start  font-medium text-gray-900 uppercase"
                    >
                      Age
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start font-medium text-gray-900 uppercase"
                    >
                      Address
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-end  font-medium text-gray-900 uppercase"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {currentRecords.map((person, index) => (
                    <tr key={index}>
                      <td className="py-3 ps-4">
                        <Avatar src={person.avatar} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                        {person.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {person.age}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {person.address}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <button
                          onClick={() => toggleDropdown(person.id)}
                          className={`${
                            activeDropdown === person.id
                              ? "bg-green-200 text-green-600 rounded-full"
                              : ""
                          } text-[24px] duration-300 transition-all w-[40px] h-[40px] p-2`}
                        >
                          <MdMoreVert />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="py-1 px-4">
              <nav
                className="flex items-center space-x-2"
                aria-label="Pagination"
              >
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  className="p-2.5 text-sm rounded-full disabled:opacity-50"
                  disabled={currentPage === 1}
                >
                  «
                </button>
                {[...Array(totalPages).keys()].map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handlePageChange(idx + 1)}
                    className={`w-[40px] h-[40px] text-[15px] rounded-full ${
                      currentPage === idx + 1
                        ? "bg-blue-500 text-white"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  className="p-2.5 text-sm rounded-full disabled:opacity-50"
                  disabled={currentPage === totalPages}
                >
                  »
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableData;
