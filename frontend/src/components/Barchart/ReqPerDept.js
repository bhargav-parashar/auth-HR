import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";


const ReqPerDept = ({data}) => {
  return (
    <ResponsiveContainer width="100%" height="85%">
      <BarChart
        layout="vertical"
        data={data}
        margin={{  right: 20, left: 40 }}
        barCategoryGap={10}
        style={{cursor:'pointer'}}
      >
        <CartesianGrid
          stroke="#ccc"
          strokeWidth={0.5}
          vertical={false}
          horizontal={false}
        />
        <XAxis type="number" />
        <YAxis dataKey="department" type="category" interval={0} width={100} />
        <Tooltip
          cursor={false}
          contentStyle={{
            opacity: "0.9",
            color: "black",
          }}
        />
        <Legend />
        <Bar dataKey="leave" stackId="a" fill="#8884d8" barSize={14} />
        <Bar dataKey="relocation" stackId="a" fill="#82ca9d" barSize={14} />
        <Bar dataKey="resignation" stackId="a" fill="#ff7f7f" barSize={14} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ReqPerDept;
