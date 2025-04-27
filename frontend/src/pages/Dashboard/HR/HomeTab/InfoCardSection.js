import { Stack } from "@mui/material";
import DashInfoCard from "../../../../components/Cards/DashInfoCard";

const InfoCardSection = ({
  totalEmployees,
  avgLeaveBal = 0,
  attrition = 0,
  currMonthHires = { currMonthHires },
  isLoading
}) => {
  return (
    <Stack
      gap={1}
      sx={{
        borderRadius: "0.6rem",
        width: "100%",
        cursor: "pointer",
        height: "100%",
      }}
    >
      <Stack gap={1} direction="row" sx={{ width: "100%", height: "100%" }}>
        <DashInfoCard
          label="Total Employees"
          value={totalEmployees}
          isLoading={isLoading}
          
        />
        <DashInfoCard
          label="Avg Leave Balance"
          value={`${avgLeaveBal}`}
          isLoading={isLoading}
        />
      </Stack>
      <Stack gap={1} direction="row" sx={{ width: "100%", height: "100%" }}>
        <DashInfoCard
          label="Attrition Rate"
          value={`${attrition}%`}
          isLoading={isLoading}
        />
        <DashInfoCard
          label="Current Month Hires"
          value={currMonthHires}
          isLoading={isLoading}
        />
      </Stack>
    </Stack>
  );
};

export default InfoCardSection;
