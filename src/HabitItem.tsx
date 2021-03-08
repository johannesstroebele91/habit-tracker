import React from "react";

interface HabitsItemProps {
    habit: Habit;
    toggleHabit: ToggleHabit;
}

export const HabitItem: React.FC<HabitsItemProps> = ({habit, toggleHabit}) => {
    return (
        <li>
            <label style={{textDecoration: habit.complete ? 'line-through' : undefined}}>
                <input type="checkbox" checked={habit.complete} onChange={() => toggleHabit(habit)}/> {habit.text}
            </label>
        </li>
    );
};


