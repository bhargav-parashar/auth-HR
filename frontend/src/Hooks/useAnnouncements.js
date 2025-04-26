import { useState, useEffect } from "react";
import axios from "axios";
import config from "../config/config";
import { useSnackbar } from "notistack";

const useAnnouncements = () => {
  const[isAnnLoading, setIsAnnLoading] = useState(false);
  const [announcements, setAnnouncements] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  //GET ANNOUNCEMENTS
  const getAnnouncements = async () => {
    const URL = `${config.endpoint}/hr/announcements`;
    try {
      setIsAnnLoading(true);
      const { data } = await axios.get(URL, { withCredentials: true });
      setAnnouncements(data);
    } catch (err) {
      console.log(err);
    }finally{
      setIsAnnLoading(false);
    }
  };
  useEffect(() => {
    getAnnouncements();
  }, []);

  //CREATE ANNOUNCEMENT
 const handleCreateAnnouncment = async (ann, handleModalClose) => {
    const URL = `${config.endpoint}/hr/create-announcement`;
    const body = {
      body: ann,
    };

    try {
      setIsAnnLoading(true);
      const newAnn = await axios.post(URL, body, { withCredentials: true });
      if (newAnn.status === 200) {
        getAnnouncements();
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
  const handleUpdateAnnouncment = async (id, ann, handleModalClose) => {
    const URL = `${config.endpoint}/hr/update-announcement`;
    try {
      setIsAnnLoading(true);
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
    }finally{
      setIsAnnLoading(false);
      handleModalClose();
    }
  };

  //DELETE ANNOUNCEMENT
  const handleDeleteAnnouncment = async (id, handleModalClose) => {
    const URL = `${config.endpoint}/hr/delete-announcement`;
    try {
      setIsAnnLoading(true);
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
    }finally{
      setIsAnnLoading(false);
      handleModalClose();
    }
  };

  return {
    announcements,
    handleCreateAnnouncment,
    handleUpdateAnnouncment,
    handleDeleteAnnouncment,
    isAnnLoading
  };
};

export default useAnnouncements;
