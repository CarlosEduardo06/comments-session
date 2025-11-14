import { useState } from "react"

export default ({addComment}) => {
    const [email,setEmail] = useState("")
    const [textArea, setTextArea] = useState("")
    const [maxLengthTextArea, setMaxLengthTextArea] = useState(0)
    
    const handleSubmit = (ev) => {
        ev.preventDefault()
        addComment({email,comment:textArea})
        setEmail("")
        setTextArea("")
        setMaxLengthTextArea(0)
    }

    return(
        <form onSubmit={handleSubmit} action="" className="form-comment-card">
            <div>
                <label htmlFor="email">Email</label>    
                <input onChange={
                    (ev) => setEmail(ev.target.value)} 
                    name="email" 
                    id="email" 
                    type="email" 
                    value={email}
                    required={true}
                    />
            </div>

            <div className="text-area-form-input-box">
                <span id="max-length-text-area">{maxLengthTextArea}/300</span>
                <label htmlFor="comment">Comentário</label>
                <textarea
                    onChange={(ev) => {
                        setTextArea(ev.target.value)
                        setMaxLengthTextArea(ev.target.value.length)
                        }}
                    value={textArea}
                    name="comment" 
                    id="comment"
                    required={true}
                    maxLength={300}
                    ></textarea>
            </div>

            <input type="submit" value="Enviar Comentário" />
            <hr />
        </form>
    )
}