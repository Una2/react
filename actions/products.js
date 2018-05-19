export const getListData=(data)=>{
    return {
        type:'GETPROSLISTS',
        data
    }
}

export function fetchProsList(params){
    return dispatch=>{
        var url = 'http://localhost:3000/products/list';
        var data = params;
        return fetch(url, {  
            method: 'post',
            body:JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
              }
           })
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            dispatch(getListData(data))
        })
    }
}

export const getCateData=(data)=>{
    return {
        type:'GETPROSCATE',
        data
    }
}

export function fetchProsCate(){
    return dispatch=>{
        var url = `http://localhost:3000/cate/list/${3}`;
        return fetch(url, {  
            method: 'get',
           })
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            dispatch(getCateData(data))
        })
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

export const changecate = (data)=>{
    return {
        type: 'CHANGECATE',
        data
    }
}

export function changeCate(params){
    return dispatch=>{
        dispatch(changecate(params))
    }
}

export const changepage= (data)=>{
    return {
        type: 'CHANGEPAGE',
        data
    }
}

export function changePage(params){
    return dispatch=>{
        dispatch(changepage(params))
    }
}

export const search= (data)=>{
    return {
        type: 'SEARCH',
        data
    }
}

export function searchPros(params){
    return dispatch=>{
        dispatch(search(params))
    }
}