export default ({id,comment,email,date,removeComment}) => {
    return (
        <div className="box-comment">
            <h5>{email}</h5>
            <p>{comment}</p>
            <span>{date}</span>
            <button onClick={() => removeComment(id)}>Remover</button>
        </div>
    )
}