import axios from "axios";

const util = {
  setSwitches: async (switches: boolean[]) => {
    return await axios.post("/set", { switches });
  },
};

export default util;
