import { useState } from "react";
import { Stack, Paper, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import GridPill from "./GridPill";
import { reqHistoryPills } from "../../constants/constants";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import dateConverter from "../../utility/dateConverter";

const RequestsGrid = ({ requests }) => {
  const [type, setType] = useState(1);

  const leaves = requests?.leaves;
  const relocations = requests?.relocations;
  const resignations = requests?.resignations;

  const handleTabChange = (val) => {
    setType(val);
  };

  const getColor = (status) => {
    if (status === "approved") {
      return "green";
    } else if (status === "rejected") {
      return "red";
    } else {
      return "primary.light";
    }
  };

  return (
    <>
      <Stack mb={1} direction="row" gap={1} justifyContent="flex-start">
        {reqHistoryPills.map((pill) => (
          <GridPill
            key={pill.id}
            id={pill.id}
            label={pill.label}
            type={type}
            handleTabChange={handleTabChange}
          />
        ))}
      </Stack>

      {leaves && type === 1 && (
        <TableContainer component={Paper}>
          <Table
            sx={{
              "& .MuiTableCell-root": {
                padding: "4px 8px",
                fontSize: "0.8rem",
                lineHeight: 1.4,
              },
              "& .MuiTableRow-root": {
                height: "32px",
              },
            }}
            aria-label="dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="left">Category</TableCell>
                <TableCell align="left">Submitted On</TableCell>
                <TableCell align="left">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody key={123}>
              {leaves &&
                leaves.map((item, idx) => (
                  <TableRow
                    key={item.id || `leave-${idx}`}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {idx + 1}
                    </TableCell>
                    <TableCell align="left">{item.leaveType}</TableCell>
                    <TableCell align="left">
                      {dateConverter(item?.createdAt)}
                    </TableCell>
                    <TableCell
                      sx={{ color: getColor(item.status) }}
                      align="left"
                    >
                      {item.status}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {(!leaves || leaves.length === 0) && type === 1 && (
        <Stack
          gap={1}
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            height: "40%",
            width: "100%",
            border: "1px solid",
            borderColor: "primary.inactive",
          }}
        >
          <FolderOpenIcon sx={{ color: "primary.inactive" }} />
          <Typography sx={{ color: "primary.inactive" }}>No items</Typography>
        </Stack>
      )}
      {relocations && type === 2 && (
        <TableContainer component={Paper}>
          <Table
            sx={{
              "& .MuiTableCell-root": {
                padding: "4px 8px",
                fontSize: "0.8rem",
                lineHeight: 1.4,
              },
              "& .MuiTableRow-root": {
                height: "32px",
              },
            }}
            aria-label="dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="left">Category</TableCell>
                <TableCell align="left">Submitted On</TableCell>
                <TableCell align="left">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody key={2}>
              {relocations &&
                relocations.map((item, idx) => (
                  <TableRow
                    key={item.id || `relocation-${idx}`}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {idx + 1}
                    </TableCell>
                    <TableCell align="left">Relocation</TableCell>
                    <TableCell align="left">
                      {dateConverter(item?.createdAt)}
                    </TableCell>
                    <TableCell
                      sx={{ color: getColor(item.status) }}
                      align="left"
                    >
                      {item.status}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {(!relocations || relocations.length === 0) && type === 2 && (
        <Stack
          gap={1}
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            height: "40%",
            width: "100%",
            border: "1px solid",
            borderColor: "primary.inactive",
          }}
        >
          <FolderOpenIcon sx={{ color: "primary.inactive" }} />
          <Typography sx={{ color: "primary.inactive" }}>No items</Typography>
        </Stack>
      )}
      {resignations && type === 3 && (
        <TableContainer component={Paper}>
          <Table
            sx={{
              "& .MuiTableCell-root": {
                padding: "4px 8px",
                fontSize: "0.8rem",
                lineHeight: 1.4,
              },
              "& .MuiTableRow-root": {
                height: "32px",
              },
            }}
            aria-label="dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="left">Category</TableCell>
                <TableCell align="left">Last Working Day</TableCell>
                <TableCell align="left">Submitted On</TableCell>
                <TableCell align="left">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody key={3}>
              {resignations &&
                resignations.map((item, idx) => (
                  <TableRow
                    key={item.id || `resignation-${idx}`}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {idx + 1}
                    </TableCell>
                    <TableCell align="left">Resignation</TableCell>
                    <TableCell align="left">
                      {dateConverter(item?.lwd)}
                    </TableCell>
                    <TableCell align="left">
                      {dateConverter(item?.createdAt)}
                    </TableCell>
                    <TableCell
                      sx={{ color: getColor(item.status) }}
                      align="left"
                    >
                      {item.status}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {(!resignations || resignations.length === 0) && type === 3 && (
        <Stack
          gap={1}
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            height: "40%",
            width: "100%",
            border: "1px solid",
            borderColor: "primary.inactive",
          }}
        >
          <FolderOpenIcon sx={{ color: "primary.inactive" }} />
          <Typography sx={{ color: "primary.inactive" }}>No items</Typography>
        </Stack>
      )}
    </>
  );
};

export default RequestsGrid;
