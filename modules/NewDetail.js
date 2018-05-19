import React,{Component}  from 'react';
import {connect} from 'react-redux';
import {fetchNew,fetchComments,changeCommentArea,addComment} from '../actions/news';
import NavLink from './NavLink';

class NewDetail extends Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        this.props.fetchNew(this.props.params._id);
        this.props.fetchComments({newid:this.props.params._id,rows:100});
    }
    gobacks(){
        this.props.history.goBack() 
    }
    handleChange(e){
        this.props.changeCommentArea(e.target.value);
    }
    handleSubmit(e){
        if(this.props.commentArea){
            this.props.addComment({newid:this.props.params._id,name:'匿名',comment:this.props.commentArea});
            this.props.fetchComments({newid:this.props.params._id,rows:100});
            this.refs.commentarea.value='';
        }
    }
    render(){
        const {news,fetchNew,comments,fetchComments,changeCommentArea,commentArea} = this.props;
        var output = [];
        if(comments.rows&&comments.rows.length>0){
            for(let i=0;i<comments.rows.length;i++){
                output.push(
                    <tr key={i}>
                        <th scope="row">{i+1}</th>
                        <td>{comments.rows[i].comment}</td>
                        <td>{comments.rows[i].name}</td>
                        <td>{comments.rows[i].date}</td>
                    </tr>
                )
            }
        }else{
            output.push(
                <tr>
                    <th scope="row">暂无评论</th>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            )
        }
        return (
            <div>
                <button type="button" 
                className="btn btn-primary" 
                onClick={ ()=>this.gobacks() }
                style={{float:'right'}}>
                返回
                </button>
                <div className="page-header" style={{textAlign:'center'}}>
                    <h1>{news.title}</h1>
                </div>
                <div>
                    <p>
                        {news.content}
                    </p>    
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">评论区</div>  
                    <table className="table">
                        <tbody>
                            {output} 
                        </tbody>
                    </table>
                </div>
                <form action="javaScript:void(0)">
                    <textarea ref='commentarea' className="form-control" rows="3" onChange={ (e)=>this.handleChange(e) }></textarea>
                    <button type="button" className="btn btn-success" style={{float:'right'}} onClick={ (e)=>this.handleSubmit(e) }>发表评论</button>
                </form>

            </div>
        )
    }
}
const getValue = (state)=>{
    return {
        news: state.news.news,
        comments: state.news.comments,
        commentArea: state.news.commentArea,
    }
}
const NewDetailContext = connect(getValue,{fetchNew,fetchComments,changeCommentArea,addComment})(NewDetail)

module.exports = NewDetailContext;