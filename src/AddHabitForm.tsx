import React, {ChangeEvent, FormEvent, useState} from "react";

interface AddHabitFormProps {
    addHabit: AddHabit;
}
export const AddHabitForm: React.FC<AddHabitFormProps> = ({addHabit}) => {

    // Handle change of input
    const [newHabit, setNewHabit] = useState("");
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewHabit((event.target.value));
    };

    // Handle submit of the new habit
    const handleSubmit = (event: FormEvent<HTMLButtonElement>) => {
        event.preventDefault(); // prevent default form submitting
        addHabit(newHabit);
    };

    return (
        <form>
            <input type="text" value={newHabit} onChange={handleChange}/>
            <button type="submit" onClick={handleSubmit}>Add Habit</button>
        </form>
    )
};
