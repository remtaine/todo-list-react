import React, { Component } from "react";
import uniqid from "uniqid";
import Overview from "./components/Overview";
class App extends Component {
    constructor() {
        super();

        this.state = {
            task: {
                text: '',
                id: uniqid(),
                order: 1,
            },
            tasks: [],
        };
    }

    handleChange = (e) => {
        this.setState({
            task : {
                text: e.target.value,
                id: this.state.task.id,
                order: this.state.task.order,
            }
        });
    }
    
    onSubmitTask = (e) => {
        e.preventDefault();
        console.log("SUBMITTED " + this.state.task.text);
        this.setState({
            tasks: this.state.tasks.concat(this.state.task),
            task: {
                text: '',
                id: uniqid(),
                order: this.state.task.order + 1,
            },
        });
    };

    render() {
        const {task, tasks} = this.state;
        return (
            <div>
                <form onSubmit={this.onSubmitTask}>
                    <label htmlFor="taskInput">Enter task</label>
                    <input
                        onChange={this.handleChange}
                        value={task.text}
                        type="text"
                        id="taskInput"
                    />
                    <button type="submit">
                        Add Task
                    </button>
                </form>
                <Overview tasks={tasks} />
            </div>
        );
    }
}


export default App;
