import React from "react";
import { Card, CardText, button } from "reactstrap";

export default function UserCard(props) {
  return (
    <Card>
      <CardText>{props.name}</CardText>
      <CardText>{props.bio}</CardText>
    </Card>
  );
}
