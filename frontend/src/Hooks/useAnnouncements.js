import { useState, useEffect } from "react";
import axios from "axios";
import config from "../config/config";
import { useSnackbar } from "notistack";

const useAnnouncements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  //GET ANNOUNCEMENTS
  const getAnnouncements = async () => {
    const URL = `${config.endpoint}/hr/announcements`;
    try {
      const { data } = await axios.get(URL, { withCredentials: true });
      setAnnouncements(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAnnouncements();
  }, []);

  //CREATE ANNOUNCEMENT
 const handleCreateAnnouncment = async (ann) => {
    const URL = `${config.endpoint}/hr/create-announcement`;
    const body = {
      body: ann,
    };

    try {
      const newAnn = await axios.post(URL, body, { withCredentials: true });
      if (newAnn.status === 200) {
        getAnnouncements();
        enqueueSnackbar(`Announcement added!`, { variant: "success" });
      }
    } catch (err) {
      console.log(err);
    }
  };

  //UPDATE ANNOUNCEMENT
  const handleUpdateAnnouncment = async (id, ann) => {
    const URL = `${config.endpoint}/hr/update-announcement`;
    try {
      const updatedAnn = await axios.put(
        URL,
        { id: id, body: ann },
        { withCredentials: true }
      );
      if (updatedAnn.status === 200) {
        getAnnouncements();
        enqueueSnackbar(`Announcement updated!`, { variant: "success" });
      }
    } catch (err) {
      console.log(err);
    }
  };

  //DELETE ANNOUNCEMENT
  const handleDeleteAnnouncment = async (id) => {
    const URL = `${config.endpoint}/hr/delete-announcement`;
    try {
      const deletedAnn = await axios.delete(
        URL,
        { 
          withCredentials: true, 
          data : {id : id}
        }
      );
      if (deletedAnn.status === 200) {
        getAnnouncements();
        enqueueSnackbar(`Announcement deleted!`, { variant: "success" });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return {
    announcements,
    handleCreateAnnouncment,
    handleUpdateAnnouncment,
    handleDeleteAnnouncment,
  };
};

export default useAnnouncements;
