import './App.css';
import { useState } from 'react';
import CourseGoalForm from './components/CourseGoalForm';
import CourseGoalList from './components/CourseGoalList';

const DUMMY_DATA = [
  { id: '1', text: 'Do all exercises!'  },
  { id: '2', text: 'Finish the course!'  },
  { id: '3', text: 'Kesk!'  },
]

function App() {

  const [courseGoals, setCourseGoals] = useState(DUMMY_DATA);

  
  const saveGoalHander = (courseGoal) => {
    setCourseGoals(prevData => {
      return [courseGoal, ...prevData];
    })
  }

  const deleteItemHandler = (goalId) => {
    setCourseGoals(prevData => {
      const updatedGoals = prevData.filter(goal => goal.id !== goalId)
      return updatedGoals;
    });
  }
   

  return (
    <div>
      <CourseGoalForm onSaveGoal={saveGoalHander}/>
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler}/>
    </div>
    
  );
}

export default App;
