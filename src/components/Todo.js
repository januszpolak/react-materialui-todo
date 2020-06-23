import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Container,
  IconButton,
} from "@material-ui/core";
import { Check, Delete } from "@material-ui/icons";

const Todo = ({ title, checkTodo, id, isCompleted }) => {
  const markTodo = () => {
    checkTodo(id);
  };

  const completedStyle = isCompleted
    ? { textDecoration: "line-through" }
    : { textDecoration: "none" };

  return (
    <div>
      <Container maxWidth="sm">
        <Card
          variant="outlined"
          style={{ background: "#b2bec3", marginTop: "20px" }}
        >
          <CardContent>
            <Typography variant="h6" component="h3" style={completedStyle}>
              {title}
              <IconButton style={{ float: "right" }} onClick={markTodo}>
                <Check style={{ color: "#00b894" }} />
              </IconButton>
              <IconButton style={{ float: "right" }}>
                <Delete style={{ color: "#d63031" }} />
              </IconButton>
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Todo;
