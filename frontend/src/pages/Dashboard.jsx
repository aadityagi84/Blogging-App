import ChartOrder from "../Components/LineChart";
import PieChartData from "../Components/PieChart";
import IconOrder from "../assets/Icon_Order.png";
import IconDeliver from "../assets/icon Delivered.png";
import IconComplete from "../assets/icon-complete.png";
import IconCancel from "../assets/items-cancel.png";

const Dashboard = () => {
  const cards = [
    {
      img: IconOrder,
      data: "Total Orders",
      count: 75,
    },
    {
      img: IconComplete,
      data: "Total Orders",
      count: 357,
    },
    {
      img: IconCancel,
      data: "Total Canceled",
      count: 65,
    },
    {
      img: IconDeliver,
      data: "Total Revenue",
      count: "$128",
    },
  ];

  return (
    <div className=" py-6">
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-4  ">
        {cards.map((data, index) => (
          <div
            key={index}
            className="bg-white border   lg:p-8 p-4 rounded-xl flex gap-2 items-center justify-center "
          >
            <div>
              <img src={data.img} className="w-[60px] h-[60px]" />
            </div>
            <div>
              <div>
                <span className="text-[25px] leading-[25px] font-bold">
                  {data.count}
                </span>
              </div>
              <div>
                <span className="lg:text-sm text-[12px]">{data.data}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid lg:grid-cols-2  gap-4 py-6 ">
        <div className="bg-white rounded-md border p-4">
          <h2 className="font-semibold pl-4 text-[20px]">PieChart</h2>
          <p className="text-sm  pl-4 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adip
          </p>
          <div className="mt-10"></div>
          <PieChartData />
        </div>
        <div className="">
          <ChartOrder />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
