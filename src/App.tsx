import React, {useState} from 'react';
import {HabitList} from "./HabitList";
import {AddHabitForm} from "./AddHabitForm";

const initialHabits: Array<Habit> = [
    {
        text: 'Walk the dog',
        complete: false,
    },
    {
        text: 'Walk the dog',
        complete: true,
    },
    {
        text: 'Walk the dog',
        complete: false,
    },
];

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

    // Set a new habit
    const addHabit: AddHabit = newHabit => {
        setHabits([...habits, {text: newHabit, complete: false}])
    };

    // Display components
    return (
        <React.Fragment>
            <HabitList habits={habits} toggleHabit={toggleHabit}/>
            <AddHabitForm addHabit={addHabit} />
        </React.Fragment>
    );
};

export default App;
