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
 const handleCreateAnnouncment = async (ann, handleModalClose, setIsAnnLoading) => {
    const URL = `${config.endpoint}/hr/create-announcement`;
    const body = {
      body: ann,
    };

    try {
      const newAnn = await axios.post(URL, body, { withCredentials: true });
      if (newAnn.status === 200) {
        await getAnnouncements();
        enqueueSnackbar(`Announcement added!`, { variant: "success" });
      }
    } catch (err) {
      console.log(err);
    }finally{
      setIsAnnLoading(false);
      handleModalClose();
    }
  };

  //UPDATE ANNOUNCEMENT
  const handleUpdateAnnouncment = async (id, ann, handleModalClose, setIsAnnLoading) => {
    const URL = `${config.endpoint}/hr/update-announcement`;
    try {
      const updatedAnn = await axios.put(
        URL,
        { id: id, body: ann },
        { withCredentials: true }
      );
      if (updatedAnn.status === 200) {
        await getAnnouncements();
        enqueueSnackbar(`Announcement updated!`, { variant: "success" });
      }
    } catch (err) {
      console.log(err);
    }finally{
      setIsAnnLoading(false);
      handleModalClose();
    }
  };

  //DELETE ANNOUNCEMENT
  const handleDeleteAnnouncment = async (id, handleModalClose, setIsAnnLoading) => {
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
        await getAnnouncements();
        enqueueSnackbar(`Announcement deleted!`, { variant: "success" });
      }
    } catch (err) {
      console.log(err);
    }finally{
      setIsAnnLoading(false);
      handleModalClose();
    }
  };

  return {
    announcements,
    handleCreateAnnouncment,
    handleUpdateAnnouncment,
    handleDeleteAnnouncment
  };
};

export default useAnnouncements;
