export const getListData=(data)=>{
    return {
        type:'GETNEWSLISTS',
        data
    }
}

export function fetchNewsList(params){
    return dispatch=>{
        var url = 'http://localhost:3000/news/list';
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
        type:'GETNEWSCATE',
        data
    }
}

export function fetchNewsCate(){
    return dispatch=>{
        var url = `http://localhost:3000/cate/list/${1}`;
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

export const getNew=(data)=>{
    return {
        type:'GETNEW',
        data
    }
}

export function fetchNew(id){
    return dispatch=>{
        var url = `http://localhost:3000/news/data/${id}`;
        return fetch(url, {  
            method: 'get',
           })
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            dispatch(getNew(data))
        })
    }
}

export const getComments=(data)=>{
    return {
        type:'GETCOMMENTS',
        data
    }
}

export function fetchComments(data){
    return dispatch=>{
        var url = 'http://localhost:3000/comments/list';
        return fetch(url,{  
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
            dispatch(getComments(data))
        })
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

export function searchNews(params){
    return dispatch=>{
        dispatch(search(params))
    }
}

export const changeComment= (data)=>{
    return {
        type: 'CHANGECOMMENTAREA',
        data
    }
}

export function changeCommentArea(params){
    return dispatch=>{
        dispatch(changeComment(params))
    }
}

export function addComment(data){
    return dispatch=>{
        var url = 'http://localhost:3000/comments/data';
        return fetch(url,{  
            method: 'post',
            body:JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
              }
           })
    }
}