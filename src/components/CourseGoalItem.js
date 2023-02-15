const CourseGoalItem = (props) => {

     const removeData = () => {
          props.onDelete(props.id);
     }
      
     
     // props are coming from CourseGoalList.js
    return (
       <li key={props.id} onClick={removeData}>
            {props.text}
       </li>
     );
}
 
export default CourseGoalItem;