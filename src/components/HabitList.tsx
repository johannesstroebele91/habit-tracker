import React from "react";
import {HabitItem} from "./HabitItem";

interface HabitListProps {
    habits: Array<Habit>;
    toggleHabit: ToggleHabit;
}
export const HabitList:React.FC<HabitListProps> = ({ habits, toggleHabit}) => {
    return (
        <ul>
            {habits.map(habit => {
                return <HabitItem key={habit.text} habit={habit} toggleHabit={toggleHabit}/>
            })}
        </ul>
    )
};
