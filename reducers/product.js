var initialState={
    proList:{},
    cateList:{}
}
function proData(state=initialState,action){
    switch(action.type){
    case "GETPROLIST":
        return Object.assign({},state,{proList:action.data});
    case "GETCATELIST":
        // return {
        //     ...state,
        //     cateList:[...state.carts,action.data] 
        // }
        return Object.assign({},state,{cateList:action.data});        
    default:
        return state;
    }
}
export default proData;