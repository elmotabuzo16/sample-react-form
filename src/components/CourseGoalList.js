import CourseGoalItem from "./CourseGoalItem";

const CourseGoalList = (props) => {
    return ( 
        <ul>
            {props.items.map(goal => (
                <CourseGoalItem key={goal.id} text={goal.text}></CourseGoalItem>
            ))}
        </ul>
     );
}
 
export default CourseGoalList;