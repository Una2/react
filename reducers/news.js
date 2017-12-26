
var initialState = {
    newsList:{},
    cateList:{},
    oneNews:{}
}

function newsData(state=initialState,action){
    switch(action.type){
       case "GETNEWSLIST":
           return Object.assign({},state,{newsList: action.data});
     case "GETCATELIST":
        return Object.assign({},state,{cateList: action.data});
     case "GETONENEWS":
        return Object.assign({},state,{oneNews:action.data});
     default:
            return state;
    }
}

export default newsData;