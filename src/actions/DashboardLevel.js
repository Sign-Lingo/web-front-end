import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useEffect } from "react";

export const DASHLEVEL_START = "DASHLEVEL_START";
export const DASHLEVEL_SUCCESS = "DASHLEVEL_SUCCESS";
export const DASHLEVEL_ERROR = "DASHLEVEL_ERROR";

export const dashLevel = (id, level) => (dispatch) => {
  dispatch({ type: DASHLEVEL_START });

  axiosWithAuth()
    .get(`/api/level_${level}/info/${id}`) //Add the user id
    .then((res) => {
      console.log("data in dashLevel action", res);
      dispatch({ type: DASHLEVEL_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: DASHLEVEL_ERROR, payload: err.error });
    });
};
