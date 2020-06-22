import React, { useState } from "react";
import { FormControl } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  const styles = {
    button: {
      background: "linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)",
      boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .30)",
      color: "white",
      fontWeight: "bold",
      marginTop: "20px",
      height: "50px",
    },
    form: {
      marginTop: "10%",
    },
  };
  return (
    <div>
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth={true} style={styles.form}>
            <TextField
              label="Wpisz zadanie do zrobienia"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Button style={styles.button} type="submit">
              Dodaj zadanie
            </Button>
          </FormControl>
        </form>
      </Container>
    </div>
  );
};

export default TodoForm;
