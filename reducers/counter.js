var _ = require('lodash');

var initialState = {
    count:0,
    count1:0,
    lists:{},
    carts: []
}


function reducer(state=initialState,action){
//    console.log( action.data,123);
    switch(action.type){
        case "INCREASE":
            // return {count: state.count +1}
            return Object.assign({},state,{count: state.count + 1});
        case "DECREASE":
            return Object.assign({},state,{count1: state.count1 - 1});
            // return {count1: state.count1 - 1}
        case "GETLISTS":
            return Object.assign({},state,{lists: action.data});
        case "REMOVEGOOD":
            var cartsList=state.carts; 
            console.log(action,"REMOVEGOOD,action")
            for(var i=0;i<cartsList.length;i++){
                if(cartsList[i]._id==action.data._id){
                    cartsList.splice(i,1)
                }
            }
        return Object.assign({},state,{lists: action.data});
        case "DECREASES":
            var  cartsList=state.carts; 
            for(var i=0;i<cartsList.length;i++){
                if(cartsList[i]._id=action.data._id){
                    cartsList[i].count--;
                }
            }
            return Object.assign({},state,{cartsList:cartsList});
        case "ADDTOCART":
            // 找这个产品有没有加入过，如果没有加入过，数量为1
            // 如果有加入过，数量再 +1
            var cartsList=state.carts;
            var isHave=false;
            for(var i=0;i<cartsList.length;i++){
                if(cartsList[i]._id==action.data._id){
                    var index=i;
                    isHave=true;
                    break;
                }
            }
            if(isHave){
                cartsList[index].count++;
            }else{
               action.data.count=1;
               cartsList.push(action.data) 
            }
            return Object.assign({},state,{cartsList:cartsList})

          
    
        default:
            return state;
    }
}

export default reducer;