var _ = require('lodash');

var initialState = {
    prosLists:{},
    prosCate:{},
    carts: [],
    cateids:[],
    page:1,
    search:'',
    limit:10
}

function products(state=initialState,action){
    switch(action.type){
        case "GETPROSLISTS":
            return Object.assign({},state,{prosLists: action.data});
        case "GETPROSCATE":
            return Object.assign({},state,{prosCate: action.data});
        case "CHANGECATE":
            return Object.assign({},state,{cateids: action.data});
        case "CHANGEPAGE":
            return Object.assign({},state,{page: action.data});
        case "SEARCH":
            return Object.assign({},state,{search: action.data});     
        case "ADDTOCART":
            var pos = _.findLastIndex(state.carts, { '_id':action.data._id });
            if(pos === -1){
                action.data.quantity = action.data.quantity;
            }else{
                action.data.quantity = state.carts[pos].quantity + action.data.quantity;
            }
            return {
                ...state,
                carts: [...state.carts,action.data]
            }
           return state;
           
        default:
            return state;
    }
}

export default products;