import React from "react";

function AddCard(props) {
  const [inputText, setinputText] = React.useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setinputText((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  function handleClick() {
    props.onAdd(inputText);
    setinputText({
      title: "",
      content: "",
    });
  }

  return (
    <div className="container">
      <div className="textArea">
        <input
          type="text"
          name="title"
          value={inputText.title}
          placeholder="Title"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="content"
          value={inputText.content}
          placeholder="Content"
          onChange={handleChange}
        />
        <br />
        <button onClick={handleClick}>{props.buttonText}</button>
      </div>
    </div>
  );
}

export default AddCard;
