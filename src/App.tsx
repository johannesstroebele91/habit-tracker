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
    return (
        <React.Fragment>
            <HabitList habits={habits} toggleHabit={toggleHabit}/>
            <AddHabitForm/>
        </React.Fragment>
    );
};

export default App;
