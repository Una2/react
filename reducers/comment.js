var initialState={
    commentList:{},
}
function comData(state=initialState,action){
    switch(action.type){
    case "GETCOMLIST":
        return Object.assign({},state,{commentList:action.data});     
    default:
        return state;
    }
}
export default comData;