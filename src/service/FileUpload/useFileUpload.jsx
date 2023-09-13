import api from "../axios";

const headers = {
  "Content-type": "multipart/form",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};

const useFile = {
  createFile: (data) => api.post("/image", data, { headers }),
  getFile: (fileName) => api.get(`/image/${fileName}`, { headers }),
     headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};

export default useFile;
