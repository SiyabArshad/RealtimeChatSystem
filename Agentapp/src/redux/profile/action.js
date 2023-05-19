import profileConstant from "./constant";
import origin from "../../helpers/api"
import axios from "axios"

export const GetProfile=(payload)=>{
    return async(dispatch)=>{
        const {data}=await axios.get(`${origin}/api/user/`,{
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': payload?.token,
                'clientid':payload?.clientid
              }
        })
        dispatch({
            type:profileConstant.getprofile,
            payload:data
        })
    }
}