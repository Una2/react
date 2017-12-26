export const commentList=(data)=>{
    return {
        type:"GETCOMLIST",
        data
    }
}


export function fetchCommentList(params){
    return dispatch=>{
        var url = 'http://localhost:3000/comment/lists';
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
            dispatch(commentList(data));
        })
    }
}
