import { Box, Stack, Paper, Typography } from "@mui/material";
import avatar from "../../../../assets/avatar.svg";
import { format } from "date-fns";
import EditIcon from "@mui/icons-material/Edit";

const Details = ({
  isHR,
  user,
  isMobile,
  isGrid,
  isReview,
  handleModalOpen,
  setSelectedUser,
  setIsEdit
}) => {

  handleClick = () =>{
    setIsEdit(true);
    setSelectedUser(user);
    handleModalOpen();
  }
  return (
    <Box
      p={1}
      flex={1}
      onClick={ handleClick}
      sx={{
        cursor: "pointer",
        height: "50%",
        borderRadius: "0.6rem",
        bgcolor: isReview ? "" : "primary.inactive3",
        boxShadow:
          " rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        transition: !isReview
          ? "transform 0.3s ease, background-color 0.3s ease"
          : "",
        "&:hover": {
          transform: !isReview ? "scale(1.015)" : "",
          border: "1px solid",
          borderColor: !isReview ? "primary.light" : "",
        },
      }}
    >
      {!isGrid && (
        <Typography pt={1} pl={1} variant={isMobile ? "h6" : "h5"}>
          Employee Details
        </Typography>
      )}

      <Stack mt={isGrid ? 1 : 2} direction="row" sx={{ position: "relative" }}>
        {isHR && (
          <EditIcon
            sx={{
              position: "absolute",
              right: -5,
              top: -16,
              width: "5%",
              color:"primary.light"
            }}
          />
        )}

        <Box
          component="img"
          m={1}
          sx={{
            border: "2px solid white",
            borderRadius: "50%",
            height: "20%",
            width: "20%",
            bottom: 0,
            right: 0,
          }}
          alt="profile"
          src={avatar}
        />

        <Stack justifyContent="center" sx={{ minWidth: "100px" }}>
          <Typography
            fontWeight="bold"
            color="primary.light"
            variant="caption"
            mr={1}
          >{`Name`}</Typography>
          <Typography
            fontWeight="bold"
            color="primary.light"
            variant="caption"
            mr={1}
          >{`Department`}</Typography>
          <Typography
            fontWeight="bold"
            color="primary.light"
            variant="caption"
            mr={1}
          >{`Location`}</Typography>
          <Typography
            fontWeight="bold"
            color="primary.light"
            variant="caption"
            mr={1}
          >{`Joining Date`}</Typography>
        </Stack>
        <Stack justifyContent="center" sx={{ width: "10%" }}>
          <Typography
            fontWeight="bold"
            color="primary.inactive"
            variant="caption"
            mr={1}
          >{`:`}</Typography>
          <Typography
            fontWeight="bold"
            color="primary.inactive"
            variant="caption"
            mr={1}
          >{`:`}</Typography>
          <Typography
            fontWeight="bold"
            color="primary.inactive"
            variant="caption"
            mr={1}
          >{`:`}</Typography>
          <Typography
            fontWeight="bold"
            color="primary.inactive"
            variant="caption"
            mr={1}
          >{`:`}</Typography>
        </Stack>
        <Stack justifyContent="center" sx={{ width: "100%" }}>
          <Typography variant="caption">
            {user?.username.length > 12 && isHR
              ? `${user?.username.slice(0, 12)}...`
              : user?.username}
          </Typography>
          <Typography variant="caption">{user?.department}</Typography>
          <Typography variant="caption">{user?.location}</Typography>
          <Typography variant="caption">
            {user?.createdAt ? format(user?.createdAt, "dd MMM, yyyy") : ""}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Details;
