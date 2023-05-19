
import { authContants } from "./constant";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const getCurrentuser=()=>{
    return async(dispatch)=>{
        const jsonValue = await AsyncStorage.getItem('agentchatapp')
        const currentuser=jsonValue != null ? JSON.parse(jsonValue) : null;//data will come form async storage
            dispatch({
                type:authContants.currentuser,
                payload:currentuser
            })
    }
}

export const loginaction = (payload) => {
    return async (dispatch) => {
      try {
        const jsonValue = JSON.stringify(payload);
        const dataofuser = await AsyncStorage.setItem('agentchatapp', jsonValue);
        dispatch({
          type: authContants.login,
          payload: payload,
        });
      } catch (error) {
        console.log("Error in loginaction: ", error);
      }
    };
  };
  
export const logoutaction=()=>{
    return async(dispatch)=>{
        //logic comes here
        await AsyncStorage.removeItem('agentchatapp')
        dispatch({
            type:authContants.logout
        })
    }
}