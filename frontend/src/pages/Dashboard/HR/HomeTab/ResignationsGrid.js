import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Stack, Typography, Button, Paper } from "@mui/material";
import dateConverter from "../../../../utility/dateConverter";

const ResignationsGrid = ({
  handleBack,
  selectedReqTab,
  penRequests,
  handleResignationReview
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
        bgcolor:'primary.inactive3',
        borderRadius: "0.6rem",
      }}
    >
      <Stack p={1} gap={2} direction="row" sx={{ width: "100%" }}>
        <Button
          onClick={handleBack}
          size="small"
          sx={{
            bgcolor:'primary.contrast',
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
              <TableCell align="left">Last Working Day</TableCell>
              <TableCell align="left">Requested By</TableCell>
              <TableCell align="left">Requested On</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody key={1}>
            {penRequests.resignations &&
              penRequests.resignations.length > 0 &&
              penRequests.resignations.map((item, idx) => (
                <TableRow
                  key={item.id || `resignaiton-${idx}`}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell align="left">{idx + 1}</TableCell>
                  <TableCell align="left">
                    {dateConverter(item?.lwd)}
                  </TableCell>
                  <TableCell align="left">
                    {item?.userDetails[0]?.username}
                  </TableCell>
                  <TableCell align="left">
                    {dateConverter(item?.createdAt)}
                  </TableCell>
                  <TableCell align="left">
                    <Button
                      onClick={() => handleResignationReview(item._id)}
                      sx={{
                        bgcolor:'primary.contrast',
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

export default ResignationsGrid;
