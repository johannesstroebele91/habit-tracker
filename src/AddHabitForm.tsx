import React, {useState} from "react";

export const AddHabitForm: React.FC = () => {
    const [newHabit, setNewHabit] = useState<string>();

    return (
        <form>
            <input type="text" value={newHabit}/>
            <button type="submit">Add Habit</button>
        </form>
    )
};
