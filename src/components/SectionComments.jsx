import Comment from "./comment"

export default ({comments,removeComment}) => {
    return (
        <div>
            {
                (comments.length) > 0 
                ?
                (
                    comments.map(element => {
                        return <Comment 
                            removeComment={removeComment}
                            comment={element.comment}  
                            date={element.date}
                            email={element.email}
                            key={element.id}
                            id={element.id}
                        />
                    })
    
                ) 
                :
                <div>Seja o primeiro a comentar!</div>
            }
        </div>
    )
}