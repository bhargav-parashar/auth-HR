import { useState } from "react";
import { Box, Stack, Paper, Typography } from "@mui/material";
import { format } from "date-fns";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import GridPill from "./GridPill";

const RequestsGrid = ({ requests }) => {
  const [type, setType] = useState(0);

  const leaves = requests?.leaves;
  const relocations = requests?.relocations;
  const resignations = requests?.resignations;
  
  
  return (
    <>
      <Stack mb={1} direction="row" gap={1} justifyContent='flex-start'>
        <GridPill label="Leaves" />
        <GridPill label="Relocations" />
        <GridPill label="Resignations" />
      </Stack>

      {type === 0 && (
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
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Submitted On</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {leaves &&
                leaves.map((item, idx) => (
                  <TableRow
                    key={item.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {idx + 1}
                    </TableCell>
                    <TableCell align="left">{item.leaveType}</TableCell>
                    <TableCell align="left">{item.status}</TableCell>
                    <TableCell align="left">
                      {format(item.createdAt, "dd MMM, yyyy")}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {type === 1 && (
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
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Submitted On</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {leaves &&
                leaves.map((item, idx) => (
                  <TableRow
                    key={item.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {idx + 1}
                    </TableCell>
                    <TableCell align="left">{item.leaveType}</TableCell>
                    <TableCell align="left">{item.status}</TableCell>
                    <TableCell align="left">
                      {format(item.createdAt, "dd MMM, yyyy")}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {type === 2 && (
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
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Submitted On</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {leaves &&
                leaves.map((item, idx) => (
                  <TableRow
                    key={item.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {idx + 1}
                    </TableCell>
                    <TableCell align="left">{item.leaveType}</TableCell>
                    <TableCell align="left">{item.status}</TableCell>
                    <TableCell align="left">
                      {format(item.createdAt, "dd MMM, yyyy")}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default RequestsGrid;
