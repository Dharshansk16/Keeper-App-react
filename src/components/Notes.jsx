function Notes(props) {
  return (
    <div className="row">
      <div className="card">
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </div>
    </div>
  );
}
export default Notes;
