import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const Barchart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        style={{ cursor: "pointer" }}
        layout="vertical"
        data={data}
        margin={{ top: 10, bottom: 5, right: 20, left: 40 }}
      >
        <CartesianGrid
          stroke="#ccc"
          strokeWidth={0.5}
          vertical={false}
          horizontal={false}
        />
        <XAxis type="number" />
        <YAxis dataKey="department" type="category" interval={0} width={80} />
        <Tooltip
          cursor={false}
          contentStyle={{
            backgroundColor: "transparent",
            border: "none",
            boxShadow: "none",
            color: "transparent",
          }}
        />
        <Bar dataKey="employees" fill="#8884d8" barSize={18} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Barchart;
