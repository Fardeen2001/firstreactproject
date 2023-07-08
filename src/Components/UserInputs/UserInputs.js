import React, { useState, useRef } from "react";
import classes from "./UserInputs.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
export default function UserInputs(props) {
  const userInputText = useRef();
  const userInputAge = useRef();
  const userInputCollege = useRef();
  const [error, setError] = useState();
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredName = userInputText.current.value;
    const enteredAge = userInputAge.current.value;
    const enteredCollege = userInputCollege.current.value;
    if (
      enteredName.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      enteredCollege.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid input",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age",
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge, enteredCollege);
    userInputText.current.value = "";
    userInputAge.current.value = "";
    userInputCollege.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
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
          <input id="inputText" type="text" ref={userInputText} />
          <label htmlFor="inputAge">User Age</label>
          <input id="inputAge" type="number" ref={userInputAge} />
          <label htmlFor="inputCollege">College Name</label>
          <input id="inputCollege" type="text" ref={userInputCollege} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
}
