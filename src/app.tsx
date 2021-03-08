import React, {useState} from 'react';
import {Button} from 'antd';

import {HabitList} from "./components/habit-list";
import {AddHabitForm} from "./components/add-habit-form";
import {Navbar} from './components/navbar';

import {initialHabits} from "./habit-mock-data";

import 'antd/dist/antd.less'; // or 'antd/dist/antd.less'
import './styles.less';

const App: React.FC = () => {

    // Toggle state of checkboxes
    const [habits, setHabits] = useState(initialHabits);
    const toggleHabit: ToggleHabit = selectedHabit => {
        const newHabits = habits.map(habit => {
            if (habit === selectedHabit) {
                return {
                    ...habit,
                    complete: !habit.complete
                };
            }
            return habit;
        });
        setHabits(newHabits);
    };

    // Set a new habit and handling empty input for button submission
    const addHabit: AddHabit = newHabit => {
        newHabit.trim() !== "" &&
        setHabits([...habits, {text: newHabit, complete: false}]);
    };

    // Display components
    return (
        <div className={"app"}>
            <React.Fragment>
                <Navbar/>
                <div className={"lists"}>
                    <div>
                        <HabitList habits={habits} toggleHabit={toggleHabit}/>
                        <AddHabitForm addHabit={addHabit}/>
                        <div className="App">
                            <Button type="primary">Button</Button>
                        </div>
                    </div>
                    <div>
                        <HabitList habits={habits} toggleHabit={toggleHabit}/>
                        <AddHabitForm addHabit={addHabit}/>
                        <div className="App">
                            <Button type="primary">Button</Button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </div>
    );
};

export default App;
