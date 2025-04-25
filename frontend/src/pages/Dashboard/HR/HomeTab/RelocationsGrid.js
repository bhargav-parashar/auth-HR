import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Stack, Box, Typography, Button, Paper } from "@mui/material";
import { format, formatDistance, addDays } from "date-fns";

const RelocationsGrid = ({
  handleBack,
  selectedReqTab,
  penRequests,
  handleRelocationReview,
  isMobile,
}) => {
  return (
    <Stack
      p={1}
      mb={2}
      gap={1}
      direction="column"
      alignItems="space-between"
      justifyContent="flex-start"
      sx={{
        width: "100%",
        height: "100%",
        bgcolor: "primary.inactive3",
        borderRadius: "0.6rem",
      }}
    >
      <Stack p={1} gap={2} direction="row" sx={{ width: "100%" }}>
        <Button
          onClick={handleBack}
          size="small"
          sx={{
            bgcolor: "primary.contrast",
            "&:hover": {
              backgroundColor: "secondary.dark",
            },
          }}
        >
          {`< Home `}
        </Button>
        <Typography variant="h6">{`Pending ${selectedReqTab}`}</Typography>
      </Stack>
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
              <TableCell align="left">Sl No</TableCell>
              {!isMobile && (
                <TableCell align="left">Current Location</TableCell>
              )}
              <TableCell align="left">Requested Location</TableCell>
              <TableCell align="left">Requested By</TableCell>
              <TableCell align="left">Requested On</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody key={1}>
            {penRequests.relocations &&
              penRequests.relocations.length > 0 &&
              penRequests.relocations.map((item, idx) => (
                <TableRow
                  key={item.id || `relocation-${idx}`}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell align="left">{idx + 1}</TableCell>
                  {!isMobile && (
                    <TableCell align="left">
                      {item?.userDetails[0]?.location}
                    </TableCell>
                  )}

                  <TableCell align="left">{item.location}</TableCell>
                  <TableCell align="left">
                    {item?.userDetails[0]?.username}
                  </TableCell>
                  <TableCell align="left">
                    {format(item.createdAt, "PPP")}
                  </TableCell>
                  <TableCell align="left">
                    <Button
                      onClick={() => handleRelocationReview(item._id)}
                      sx={{
                        bgcolor: "primary.contrast",
                        "&:hover": {
                          backgroundColor: "secondary.dark",
                        },
                      }}
                      size="small"
                    >
                      Review
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default RelocationsGrid;
