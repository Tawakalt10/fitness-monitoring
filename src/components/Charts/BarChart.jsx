import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { FaHeart } from "react-icons/fa";

const weeklyCalories = [
  { day: "Mon", calories: 200 },
  { day: "Tue", calories: 650 },
  { day: "Wed", calories: 500 },
  { day: "Thu", calories: 800 },
  { day: "Fri", calories: 700 },
  { day: "Sat", calories: 400 },
  // { day: "Sun", calories: 600 },
];

function CaloriesChart() {
  return (

     <div className="w-30rem rounded-2xl border-b-amber-100 bg-gray-100 p-4">
    <ResponsiveContainer width="100%" height={300}>
     
          <button className="text-lime-500 text-3xl  rounded-2xl "> <FaHeart className=" "/> </button>
      <BarChart data={weeklyCalories}>
        <CartesianGrid strokeDasharray="3 3" />
        
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey="calories"
          fill="#bef264"
          radius={[6, 6, 0, 0]}
        />
      </BarChart>
      
    
    </ResponsiveContainer>
    </div>
  );
}

export default CaloriesChart;