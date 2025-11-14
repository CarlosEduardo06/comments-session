export default ({comment,email,date}) => {
    return (
        <div className="box-comment">
            <h5>{email}</h5>
            <p>{comment}</p>
            <span>{date}</span>
        </div>
    )
}