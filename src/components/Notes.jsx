import DeleteIcon from "@mui/icons-material/Delete";

function Notes(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <div className="row">
      <div className="card">
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <button className="DeleteIcon" onClick={handleClick}>
          <DeleteIcon style={{ color: "#f5ba13" }} />
        </button>
      </div>
    </div>
  );
}
export default Notes;
