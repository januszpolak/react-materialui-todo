import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Container,
  IconButton,
} from "@material-ui/core";
import { Check, Delete } from "@material-ui/icons";

const Todo = ({ title }) => {
  return (
    <div>
      <Container maxWidth="sm">
        <Card
          variant="outlined"
          style={{ background: "#b2bec3", marginTop: "20px" }}
        >
          <CardContent>
            <Typography
              variant="h6"
              component="h3"
              style={{ textAlign: "center" }}
            >
              {title}
              <IconButton style={{ float: "right" }}>
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
