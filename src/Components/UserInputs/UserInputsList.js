import React from "react";
import Card from "../UI/Card";
import classes from "./UserInputsList.module.css";
function UserInputsList(props) {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((item) => (
          <li key={item.id}>
            {item.userName} ({item.userAge} Years Old) {item.userCollege}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UserInputsList;
