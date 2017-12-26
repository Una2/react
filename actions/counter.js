export const increase = ()=>{
    return {
        type: 'INCREASE'
    }
}

export const decrease = ()=>{
    return {
        type: 'DECREASE'
    }
}

export const getListData=(data)=>{
    return {
        type:'GETLISTS',
        data
    }
}
//加入购物车
export const addToCartFunc = (data)=>{
    return {
        type: 'ADDTOCART',
        data
    }
}

export function addToCart(params){
    return dispatch=>{
        dispatch(addToCartFunc(params))
    }
}

export const decToCartFunc = (data)=>{
    return {
        type: 'DECREASES',
        data
    }
}
export function decToCart(params){
    return dispatch=>{
        dispatch(decToCartFunc(params))
    }
}
export const remCartFunc = (data)=>{
    return {
        type: 'REMOVEGOOD',
        data
    }
}
export function remCart(params){
    return dispatch=>{
        dispatch(remCartFunc(params))
    }
}

export function fetchList(params={page:1}){
    return dispatch=>{
        // params.page=1
        const start = 20 * (params.page -1);
        // var url = `api/v2/movie/top250?start=${start}`;
        var url='http://localhost:3000/product/list';
        return fetch(url,
            { method:"POST",
            body:params,
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(params)
        })
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            console.log(data,"****")
            dispatch(getListData(data))
        })
    }
}
