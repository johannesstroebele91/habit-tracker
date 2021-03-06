import React from 'react';
import {HabitItem} from "./HabitItem";
import Habit from "./Habit";

const habits: Habit[] = [
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
    return <HabitItem habit={habits[1]}/>;
};

export default App;
