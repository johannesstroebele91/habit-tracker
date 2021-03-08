import React, {useState} from 'react';
import {HabitList} from "./HabitList";

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
x        </React.Fragment>
    );
};

export default App;
