var _ = require('lodash');

var initialState = {
    count:0,
    count1:0,
    lists:{},
    carts: []
}

function reducer(state=initialState,action){
    switch(action.type){
        case "INCREASE":
            // return {count: state.count +1}
            return Object.assign({},state,{count: state.count + 1});
        case "DECREASE":
            return Object.assign({},state,{count1: state.count1 - 1});
            // return {count1: state.count1 - 1}
        case "GETLISTS":
            return Object.assign({},state,{lists: action.data});
        case "ADDTOCART":
            // 找这个产品有没有加入过，如果没有加入过，数量为1
            // 如果有加入过，数量再 +1
            var pos = _.findIndex(state.carts, { 'id':action.data.id });
            if(pos === -1){
                action.data.quantity = 1;
            }else{
                action.data.quantity = state.carts[pos].quantity +1;
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

export default reducer;