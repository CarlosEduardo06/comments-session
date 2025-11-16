import { useState } from "react"
const localStorageComments = "comments"


export default () => {
    const [comments, setComments] =  useState(() => {
        const storedComments = localStorage.getItem(localStorageComments)
        if (!storedComments) return []
        return JSON.parse(storedComments)
    })
    
    const addComment = ({email,comment}) => {
        const id = Math.floor(Math.random() * 1000)
        const date = new Date()

        const newComment = {
            id,
            email,
            comment,
            date: `${date.getDate()}-${(date.getMonth() + 1)}-${date.getFullYear()}`
            
        }

        console.log(newComment);

        setComments(currentState => {
            const newComments = [...currentState,newComment] ;
            localStorage.setItem(localStorageComments, JSON.stringify(newComments));
            return newComments;
        })
    }

    const removeComment = (id) => {
        setComments(currentState => {
            const newState = currentState.filter(comment => comment.id !== id);
            localStorage.setItem(localStorageComments, JSON.stringify(newState));
            return newState;
        })
    }

    return {comments,addComment, removeComment}
}