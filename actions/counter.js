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

export function fetchList(params={page:1}){
    return dispatch=>{
        const start = 20 * (params.page -1);
        var url = `api/v2/movie/top250?start=${start}`;
        return fetch(url)
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            dispatch(getListData(data))
        })
    }
}