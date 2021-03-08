type Habit = {
    text: string;
    complete: boolean;
}

type ToggleHabit =  (selectedHabit: Habit) => void;
