import React from "react";
import { Card, CardText, Button } from "reactstrap";

export default function UserCard(props) {
  return (
    <Card>
      <CardText>{props.name}</CardText>
      <CardText>{props.bio}</CardText>
      {/* <Button onClick={props.handleDelete}>Delete</Button> */}
    </Card>
  );
}
