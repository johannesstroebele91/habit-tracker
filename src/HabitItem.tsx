import React from "react";
import Habit from "./Habit";

interface HabitsItemProps {
    habit: Habit;
}

export const HabitItem: React.FC<HabitsItemProps> = ({habit}) => {
    return (
        <li>
            <label style={{textDecoration: habit.complete ? 'line-through' : undefined}}>
                <input type="checkbox" checked={habit.complete}/> {habit.text}
            </label>
        </li>
    );
};

