export const proList=(data)=>{
    return {
        type:"GETPROLIST",
        data
    }
}
export const cateList=(data)=>{
    return {
        type:"GETCATELIST",
        data
    }
}
export function fetchProList(params){
    return dispatch=>{
        var url = 'http://localhost:3000/product/list';
        return fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(params)
        })
        .then(res=>{
            return res.json();
            
        })
        .then(data=>{
            // console.log(data,"pro");
            dispatch(proList(data));
        })
    }
}

export function fetchPro(id){
    return dispatch=>{
        var url = `http://localhost:3000/product/list${id}`;
        return fetch(url,{method:'POST'})
        .then(res=>{
            return res.json();
            
        })
        .then(data=>{
            console.log(data,"pro");
            dispatch(proList(data));
        })
    }
}


export function fetchCateList(){
    return dispatch=>{
        var url = 'http://localhost:3000/cate/list/3';
        return fetch(url,{method:'GET'})
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            // console.log(data,"cate");
            dispatch(cateList(data))
        })
    }
}
