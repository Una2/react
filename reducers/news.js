var initialState = {
    newsLists:{},
    newsCate:{},
    news:{},
    comments:{},
    cateids:[],
    page:1,
    search:'',
    limit:10,
    commentArea:''
}

function news(state=initialState,action){
    switch(action.type){
        case "GETNEWSLISTS":
            return Object.assign({},state,{newsLists: action.data});
        case "GETNEWSCATE":
            return Object.assign({},state,{newsCate: action.data});
        case "GETNEW":
            return Object.assign({},state,{news: action.data});
        case "GETCOMMENTS":
            return Object.assign({},state,{comments: action.data});
        case "CHANGECATE":
            return Object.assign({},state,{cateids: action.data});
        case "CHANGEPAGE":
            return Object.assign({},state,{page: action.data});
        case "SEARCH":
            return Object.assign({},state,{search: action.data});
        case "CHANGECOMMENTAREA":
            return Object.assign({},state,{commentArea: action.data})
        default:
            return state;
    }
}

export default news;