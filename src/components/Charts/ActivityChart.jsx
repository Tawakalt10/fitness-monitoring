import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const rings = [
  {
    name: "Move",
    value: 75,
    color: "#B7F34D",
  },
  {
    name: "Exercise",
    value: 60,
    color: "#FF8A2A",
  },
  {
    name: "Stand",
    value: 45,
    color: "#2EA7E0",
  },
];

const DailyRings = () => {
  return (
    <div className="bg-[#f5f5f5]  rounded-[30px]  lg:w-[1000px] sm:w[300px] lg:mx-10 mt-8   rounded-2xl mb-5">

      {/* TOP SECTION */}
      <div  className="flex justify-between mx-6  items-center mb-10">

        <h2 className="text-gray-500 tracking-widest font-semibold p-6">
          DAILY RINGS
        </h2>

        <button className="bg-lime-300 px-5 py-2  rounded-full font-semibold">
          75% Complete
        </button>

      </div>

      {/* CHART SECTION */}
      <div className="relative flex justify-center items-center ">

        <ResponsiveContainer width={350} height={350}>

          <PieChart>

            {rings.map((ring, index) => {

              // Makes each ring smaller
              const outerRadius = 100 - index * 22;

              // Ring thickness
              const innerRadius = outerRadius - 16;

              return (

                <Pie
                  key={index}

                  data={[
                    {
                      name: ring.name,
                      value: ring.value,
                    },
                    {
                      name: "remaining",
                      value: 100 - ring.value,
                    },
                  ]}

                  dataKey="value"

                  cx="50%"
                  cy="50%"

                  innerRadius={innerRadius}
                  outerRadius={outerRadius}

                  startAngle={90}
                  endAngle={-270}

                  paddingAngle={0}
                >

                  {/* ACTIVE COLOR */}
                  <Cell fill={ring.color} />

                  {/* REMAINING GRAY */}
                  <Cell fill="#E5E7EB" />

                </Pie>

              );
            })}

          </PieChart>

        </ResponsiveContainer>

        {/* CENTER TEXT */}
        <div className="absolute flex flex-col items-center">

          <h1 className="text-5xl font-bold">
            75
          </h1>

          <p className="tracking-[4px] text-gray-500">
            SCORE
          </p>

        </div>

      </div>

      {/* BOTTOM STATS */}
      <div className="grid grid-cols-3 mt text-center">

        <div className="mb-3">
          <p className="text-gray-500 mb-1">
            Move
          </p>

          <h3 className="text-3xl font-semibold">
            450
          </h3>
        </div>

        <div>
          <p className="text-gray-500 mb-1">
            Exercise
          </p>

          <h3 className="text-3xl font-semibold">
            32m
          </h3>
        </div>

        <div>
          <p className="text-gray-500 mb-1">
            Stand
          </p>

          <h3 className="text-3xl font-semibold">
            10h
          </h3>
        </div>

      </div>

    </div>
  );
};

export default DailyRings;