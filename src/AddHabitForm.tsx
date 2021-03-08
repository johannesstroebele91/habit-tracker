import React, {ChangeEvent, useState} from "react";

export const AddHabitForm: React.FC = () => {
    const [newHabit, setNewHabit] = useState<string>();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewHabit((event.target.value));
    }

    return (
        <form>
            <input type="text" value={newHabit} onChange={handleChange}/>
            <button type="submit">Add Habit</button>
        </form>
    )
};
