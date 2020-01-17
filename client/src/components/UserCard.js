import React from "react";
import { Card, CardText, Button } from "reactstrap";

export default function UserCard(props) {
  return (
    <Card
      style={{
        width: "50%",
        height: "20vh",
        display: "flex",
        justifyContent: "center",
        marginLeft: "25%",
        marginTop: "5%"
      }}
    >
      <CardText style={{ fontSize: "30px" }}>{props.name}</CardText>
      <CardText style={{ fontSize: "30px" }}>{props.bio}</CardText>
      {/* <Button onClick={props.handleDelete}>Delete</Button> */}
    </Card>
  );
}
