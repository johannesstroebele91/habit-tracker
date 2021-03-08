import React from "react";
import { Card } from 'antd';

interface HabitsItemProps {
    habit: Habit;
    toggleHabit: ToggleHabit;
}

export const HabitItem: React.FC<HabitsItemProps> = ({habit, toggleHabit}) => {
    return (
        <div>
            <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <label style={{textDecoration: habit.complete ? 'line-through' : undefined}}>
                    <input type="checkbox" checked={habit.complete} onChange={() => toggleHabit(habit)}/> {habit.text}
                </label>
            </Card>
        </div>
    );
};


