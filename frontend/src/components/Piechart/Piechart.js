import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f7f", "rgb(149, 185, 218)"];

const PieChartComponent = ({ data }) => {

  return (
    <ResponsiveContainer width="100%" height="85%">
      <PieChart>
        <Pie
          style={{cursor:'pointer'}}
          data={data}
          dataKey="employees"
          nameKey="location"
          cx="50%"
          cy="50%"
          outerRadius={{xs:40, md:50, xs:60}}
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
