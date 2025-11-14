import Comment from "./comment"

export default ({comments}) => {
    console.log(comments)
    return (
        <div>
            {
                (comments.length) > 0 
                ?
                (
                    comments.map(element => {
                        return <Comment 
                            comment={element.comment}  
                            date={element.date}
                            email={element.email}
                            key={element.id}
                        />
                    })
    
                ) 
                :
                <div>Seja o primeiro a comentar!</div>
            }
        </div>
    )
}