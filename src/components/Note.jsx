function Note(props) {
  return (
    <div className="row">
      <div className="note">
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </div>
    </div>
  );
}

export default Note;
