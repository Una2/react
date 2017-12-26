export const newsList=(data)=>{
    return {
        type:"GETNEWSLIST",
        data
    }
}
export const oneNews=(data)=>{
    return {
        type:"GETONENEWS",
        data
    }
}
export const cateList=(data)=>{
    return {
        type:"GETCATELIST",
        data
    }
}

export function fetchNewsList(params){
    return dispatch=>{
        var url = 'http://localhost:3000/news/dataList';
        return fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
                
            },
            body:JSON.stringify(params)
        })
        .then(res=>{
            return res.json();
            
        })
        .then(data=>{
            dispatch(newsList(data));
            
        })
    }
}
export function fetchOneNews(params){
    return dispatch=>{
        var url = 'http://localhost:3000/news/data/'+params;
        return fetch(url,{
            method:'get',     
        })
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            dispatch(oneNews(data));
            console.log(data,'齐真真')
        })
    }
}

export function fetchCateList(){
    return dispatch=>{
        var url = 'http://localhost:3000/cate/list/1';
        return fetch(url,{method:'GET'})
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            dispatch(cateList(data))
        })
    }
}

export function fetchNewsCate(id){
    return dispatch=>{
        var url = `http://localhost:3000/cate/data${id}`;
        return fetch(url,{method:'GET'})
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            dispatch(newsCate(data))
        })
    }
}
export function fetchNewsComment(id){
    return dispatch=>{
        var url = `http://localhost:3000/cate/data${id}`;
        return fetch(url,{method:'GET'})
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            dispatch(newsCate(data))
        })
    }
}

