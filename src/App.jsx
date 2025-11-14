import "./App.css"; 
import CardComment from "./components/CardComment.jsx"
import FormComment from "./components/FormComment.jsx";
import SectionComments from "./components/SectionComments.jsx";
import useCommentsCollection from "./hooks/useCommentsCollection.js";


export default () => {
  const {comments,addComment} = useCommentsCollection();

  return (
      <CardComment>
        <FormComment addComment={addComment} ></FormComment>
        <SectionComments comments={comments}></SectionComments>
      </CardComment>
  )
}