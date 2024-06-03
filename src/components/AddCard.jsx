import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { Zoom } from "@mui/material";

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
  const [isExpand, setExpand] = React.useState(false);

  function expand() {
    setExpand(true);
  }

  return (
    <div className="container">
      <div
        className="textArea"
        style={{ padding: isExpand ? "10px 20px 50px" : "5px 20px 10px" }}
        onClick={expand}
      >
        {isExpand ? (
          <input
            type="text"
            name="title"
            value={inputText.title}
            placeholder="Title"
            onChange={handleChange}
          />
        ) : null}
        <br />
        <input
          type="text"
          name="content"
          value={inputText.content}
          placeholder="Take a note..."
          onChange={handleChange}
        />
        <br />
        <Zoom in={isExpand}>
          <Fab
            style={{ width: "40px", height: "40px", minHeight: "40px" }}
            onClick={handleClick}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </div>
    </div>
  );
}

export default AddCard;
