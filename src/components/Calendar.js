import React from 'react';
import { PostList } from './Post'

class Calendar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            startdate: "",
            enddate: "",
            items: []
        };
    }

    handleChange(event) {
        if (event.target.name === "startdate") {
            this.setState({ startdate: event.target.value });
        } else if (event.target.name === "enddate") {
            this.setState({ enddate: event.target.value });
        }
    }

    addItem() {
        this.setState({ items: [...this.state.items, { startDate: this.state.startdate, endDate: this.state.enddate }], startdate: "", enddate: "" });
    }

    removeItem(index) {
        const items = this.state.items.filter((e, idx) => idx !== index);
        this.setState({ items });
    }

    cancelCourse = () => {
        this.setState({
            startdate: "",
            enddate: "",
        });
    }

    render() {
        return (
            <div>
                <div>Start date</div>
                <input
                    name="startdate"
                    type="date"
                    value={this.state.startdate}
                    onChange={this.handleChange.bind(this)} />

                <div>End date</div>
                <input
                    name="enddate"
                    type="date"
                    value={this.state.enddate}
                    onChange={this.handleChange.bind(this)} />

                <button onClick={() => this.addItem()}>Add</button>
                <button onClick={() => this.cancelCourse()}>Clear</button>
                <PostList postList={this.state.items}
                    removeItem={this.removeItem.bind(this)}
                />
            </div>
        )
    }
}

export default Calendar;
