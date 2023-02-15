import { useState } from "react";

const CourseGoalForm = (props) => {
    const [enteredValue, setEnteredValue] = useState('');

    const dataChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    }
     
    const formSubmitHandler = (event) => {
        event.preventDefault();
        console.log(enteredValue);

        const goalData = {
            text: enteredValue
        };

        props.onSaveGoal(goalData);
    }

    return ( 
        <form onSubmit={formSubmitHandler}>
            <label>Course Goal</label>
            <br/>
            <input type='text' onChange={dataChangeHandler}></input>
            <br/>
            <button type='submit'>Submit</button>
        </form>
     );
}
 
export default CourseGoalForm;