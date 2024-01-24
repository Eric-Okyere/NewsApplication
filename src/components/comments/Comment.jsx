import React from 'react'
import Profile from "../../assets/Eric.jpg"
import {FiMessageSquare, FiEdit2, FiTrash} from "react-icons/fi"
import CommentForm from './CommentForm';
import {AiOutlineSend} from "react-icons/ai"



const Comment = ({comment, logginedUserId, affectedComment, setAffectedComment, 
    addComment, parentId=null, updateComment, deleteComment, replies
}) => {
    const isUserLoggined = Boolean(logginedUserId);
    const commentBelongToUser = logginedUserId=== comment.user._id
    const isReplying = affectedComment && affectedComment.type === "replying" &&
     affectedComment._id===comment._id
    const repliedCommentId = parentId ? parentId: comment._id;
    const replyOnUserId = comment.user._id;

// FOR EDITING
const isEditing = affectedComment && affectedComment.type === "editing" && 
affectedComment._id===comment._id



  return (
    <div className='flex flex-wrap items-start gap-x-3 bg-slate-300 p-3 rounded-lg'>
        <img  src={Profile} alt='profile' className='w-10 h-10 rounded-full object-cover' />
        <div className='flex-1 flex flex-col'>
            <h5 className='font-bold font-serif ' >{comment.user.name}</h5>
            
            <span className='text-sm font-mono'>
                {new Date(comment.createdAt).toLocaleDateString(
                    "en-US",{
                        hour:"2-digit"
                
                    }
                )}
            </span>

            {!isEditing &&(
            <p className='font-serif mt-3'>{comment.desc}</p>
            )
            }

            
            {isEditing && (
            <CommentForm btnLabel={<AiOutlineSend className='w-7 h-7 text-green-700' />}   
            formSubmitHandler={(value)=> updateComment( value, comment._id)}
            formCancelHandler={()=>setAffectedComment(null)}
            initialText = {comment.desc}
            />
            )}


            <div className='flex items-center gap-x-3 text-sm mt-3 mb-3'>
           
           {isUserLoggined && (
        <button className='flex items-center space-x-2' onClick={()=>setAffectedComment({type: "replying", _id:comment._id})}>
            <FiMessageSquare className='w-4 h-auto' />
            <span>Reply</span>

            </button>
           )
           }

           {commentBelongToUser && (<>
            <button className='flex items-center space-x-2'
            onClick={()=>setAffectedComment({type: "editing", _id:comment._id})}
            >
                <FiEdit2 className='w-4 h-auto' />
                <span>Edit</span>
            </button>

            <button className='flex items-center space-x-2'
            onClick={()=>deleteComment(comment._id)}
            >
                <FiTrash className='w-4 h-auto' />
                <span>Delete</span>
            </button>
           </>) }
           
            </div>

{/* Add replies */}
            {isReplying && (
                <CommentForm btnLabel={<AiOutlineSend className='w-7 h-7 text-green-700' />} 
                formSubmitHandler={(value)=> addComment( value, repliedCommentId, replyOnUserId)}
                formCancelHandler={()=>setAffectedComment(null)}
                />
            )}

            {/* Get Replies */}
        {replies.length > 0 && (
            <div>
                {replies.map((reply)=>(
                    <Comment key={reply._id} addComment={addComment} affectedComment={affectedComment}
                     setAffectedComment={setAffectedComment}
                     comment={reply}
                     deleteComment={deleteComment}
                     logginedUserId={logginedUserId}
                     replies={[]}
                     updateComment={updateComment}
                     parentId={comment._id}
                     />
                ))}
            </div>
        )}
            </div>
        </div>
  )
}

export default Comment