import React, {useState} from 'react';
import {HabitList} from "./HabitList";
import {AddHabitForm} from "./AddHabitForm";
import Nav from "./Nav";
import '../styles.css';
import {initialHabits} from "../HabitMockData";

const App: React.FC = () => {

    // Toggle state of checkboxes
    const [habits, setHabits] = useState(initialHabits);
    const toggleHabit: ToggleHabit = selectedHabit => {
        const newHabits = habits.map(habit => {
            if (habit === selectedHabit) {
                return {
                    ...habit,
                    complete: !habit.complete
                };
            }
            return habit;
        });
        setHabits(newHabits);
    };

    // Set a new habit and handling empty input for button submission
    const addHabit: AddHabit = newHabit => {
        newHabit.trim() !== "" &&
        setHabits([...habits, {text: newHabit, complete: false}]);
    };

    // Display components
    return (
            <React.Fragment>
                <Nav/>
                <HabitList habits={habits} toggleHabit={toggleHabit}/>
                <AddHabitForm addHabit={addHabit}/>
            </React.Fragment>
    );
};

export default App;
