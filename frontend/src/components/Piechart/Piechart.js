import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f7f"];

const PieChartComponent = ({ data, isMobile }) => {
  const outRad = isMobile ? 40 : 60;
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          style={{cursor:'pointer'}}
          data={data}
          dataKey="employees"
          nameKey="location"
          cx="50%"
          cy="50%"
          outerRadius={outRad}
          fill="#8884d8"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
      
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
