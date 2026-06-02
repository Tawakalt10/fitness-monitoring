import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const weeklyCalories = [
  { day: "Mon", calories: 400 },
  { day: "Tue", calories: 650 },
  { day: "Wed", calories: 500 },
  { day: "Thu", calories: 800 },
  { day: "Fri", calories: 700 },
  { day: "Sat", calories: 900 },
  { day: "Sun", calories: 600 },
];

function CaloriesChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
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
  );
}

export default CaloriesChart;