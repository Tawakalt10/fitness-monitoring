import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const weightData = [
  { week: "W1", weight: 80 },
  { week: "W2", weight: 79 },
  { week: "W3", weight: 78.5 },
  { week: "W4", weight: 77.8 },
  { week: "W5", weight: 77 },
];

function WeightChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={weightData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="week" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="weight"
          stroke="#10B981"
          strokeWidth={3}
        />
        
      </LineChart>
    </ResponsiveContainer>
  );
}

export default WeightChart;