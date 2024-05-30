import Note from "./Note";

function CreateCard(c) {
  return <Note key={c.id} title={c.title} content={c.content} />;
}

export default CreateCard;
