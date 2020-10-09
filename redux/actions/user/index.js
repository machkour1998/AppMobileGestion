import { GET, REQUEST } from "../../ActionType";
import { USER } from "../../constants";

export const getUser = (email) => {
  return {
    type: REQUEST(GET(USER)),
    email,
    loading: true,
  };
};
