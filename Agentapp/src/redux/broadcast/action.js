import broadcastconstant from "./constant";
import origin from "../../helpers/api"
import axios from "axios"

export const GetBroadCast=(payload)=>{
    return async(dispatch)=>{
            const {data}=await axios.get(`${origin}/api/user/companyinfo`,{
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': payload?.token,
                    'clientid':payload?.clientid
                  }
            })
            dispatch({
                type:broadcastconstant.getbroadcast,
                payload:data?.confidentiality==='all'?true:false,
            })
        
    }
}

export const UpdateBroadCast=(payload)=>{
    return async(dispatch)=>{
        const {data}=await axios.put(`${origin}/api/user/companyinfo`,{confidentiality: payload?.broadcast?"indivisual":"all"},{
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': payload?.token,
                'clientid':payload?.clientid
              }
        })
        dispatch({
            type:broadcastconstant.getbroadcast,
            payload:data?.confidentiality==='all'?true:false,
        })
    
}
}

// if(state===false)
// {
//     //set to all
//     await http.put(`http://localhost:5000/api/user/companyinfo`,{confidentiality:"all"})
//     setbd(true)
// }
// else
// {
//     //set to indivisual
//     await http.put(`http://localhost:5000/api/user/companyinfo`,{confidentiality:"indivisual"})
//     setbd(false)
// }