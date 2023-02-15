const CourseGoalItem = (props) => {

// props are coming from CourseGoalList.js
    return (
       <li key={props.id}>
            {props.text}
       </li>
     );
}
 
export default CourseGoalItem;