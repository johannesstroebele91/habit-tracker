type Habit = {
    text: string;
    complete: boolean;
}

type ToggleHabit = (selectedHabit: Habit) => void;

type AddHabit = (newHabit: string) => void;
