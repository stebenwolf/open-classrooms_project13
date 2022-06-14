// @ts-nocheck
import axios from "axios";
import {decodeToken} from "react-jwt";

const baseURL = "http://localhost:3001";

/**
 * Calls the relevant function, according to the type of request we need
 * @param {string} type - the type of request we want to send.
 * @param {Object} userData - The  data we want to post.
 * @returns {Promise <Object>}
 */
async function PostData(type, userData) {
  let data;
  switch (type) {
    case "UserLogin":
      data= UserLogin({userData});
      break;
    case "UserInfos":
      data= UserInfos(userData);
      break;
    case "UpdateUserName":
      data = UpdateUserName({userData});
      break;
    default:
      console.error("Aucun type trouvé");
      break;
  }
  return data;
}

/**
 * Checks if the user logs in.
 * @param {Object} id - The  ID of the user.
 * @returns {Promise <Object>}
 */
async function UserLogin({userData}) {

  if (decodeToken(localStorage.getItem("token"))) {
    const reconnect = UserInfos();
    return reconnect;
  } else { // == si pas de token, ou si token pas au bon format:
    const {data}  = await axios.post(`${baseURL}/api/v1/user/login`, userData)
      .then(response => response)
      .catch(function (error) {
        console.error(error);
      });
      return data;
  }
}

/**
 * Fetches the user infos
 * @param {}
 * @returns {Promise <Object>}
 */
async function UserInfos(token) {
  const auth = {
      headers: {
        'Authorization': 'Bearer '+localStorage.getItem("token")
      }
    }; 
  const { data } = await axios
    .post(`${baseURL}/api/v1/user/profile`, null, auth)
    .then(response => response)
    .catch((error) => {
      console.error(error)
    });
  return data;

}



/**
 * Updates the user's names
 * @param
 */

async function UpdateUserName({userData}) {
  const auth = {
    headers: {
      'Authorization' : 'Bearer '+localStorage.getItem("token")
    }
  };
  const {data} = await axios
    .put(`${baseURL}/api/v1/user/profile`, userData, auth)
    .then(response => response)
    .catch((error) => {
      console.error(error)
    });
  return data;
}


export default PostData;