import broadcastConstant from "./constant";
const initialState={
    broadcast:false
}

export const broadcastReducer=(state = initialState, action)=>{
    switch (action.type) {
        case broadcastConstant.getbroadcast:
          return {
            ...state,
            broadcast: action.payload,
          };
        case broadcastConstant.updateBroadcast:
          return {
            ...state,
            broadcast: action.payload,
          };
       default:
          return state;
      }
}