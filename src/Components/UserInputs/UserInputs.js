import React, { useState } from "react";
import classes from "./UserInputs.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
export default function UserInputs(props) {
  const [userInputText, setUserInputText] = useState("");
  const [userInputAge, setUserInputAge] = useState("");
  const [error, setError] = useState();
  const submitHandler = (e) => {
    e.preventDefault();
    if (userInputText.trim().length === 0 || userInputAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid input",
      });
      return;
    }
    if (+userInputAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age",
      });
      return;
    }
    props.onAddUser(userInputText, userInputAge);
    setUserInputText("");
    setUserInputAge("");
  };
  const userInputTextHandler = (e) => {
    setUserInputText(e.target.value);
  };
  const userInputAgeHandler = (e) => {
    setUserInputAge(e.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="inputText">User Name</label>
          <input
            id="inputText"
            type="text"
            value={userInputText}
            onChange={userInputTextHandler}
          />
          <label htmlFor="inputAge">User Age</label>
          <input
            id="inputAge"
            type="number"
            value={userInputAge}
            onChange={userInputAgeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}
