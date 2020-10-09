import { FAILURE, GET, POST, PUT, REQUEST, SUCCESS } from "../../ActionType";
import { USER } from "../../constants";

const initialState = {
  loading: false,
  errorMessage: null,
  user: " ",
};

const ReducerUser = (state = initialState, action) => {
  const response = action.response;

  switch (action.type) {
    case REQUEST(GET(USER)):
      console.log("fal", response);
      return { ...state, loading: true };
    case SUCCESS(GET(USER)):
      return {
        ...state,
        loading: false,
        user: response.user,
      };
    case FAILURE(GET(USER)):
      return { ...state, errorMessage: action.error.message, loading: false };

    default:
      return state;
  }
};

export { ReducerUser };
