import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react';

class CreateEvent extends Component {
    state = {
        title: '',
        date: '',
        city: '',
        venue: '',
        hostedBy: '',
    }
    componentDidMount () {
        if (this.props.selectEvent !== null){
            this.setState({
                ...this.props.selectEvent
            });
        }
    }
    formSubmitHandler = (evt) => {
        evt.preventDefault();
        this.props.creatNewEvent(this.state);
    }

    inputChangeHandler = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    render() {
        return (
            <Segment>
                <Form onSubmit={this.formSubmitHandler}>
                    <Form.Field>
                        <label>Event Title</label>
                        <input 
                        onChange={this.inputChangeHandler}
                        value={this.state.title}
                        name="title" 
                        placeholder="First Name" />
                    </Form.Field>
                    <Form.Field>
                        <label>Event Date</label>
                        <input
                        onChange={this.inputChangeHandler}
                        value={this.state.date}
                        name="date" 
                        type="date" placeholder="Event Date" />
                    </Form.Field>
                    <Form.Field>
                        <label>City</label>
                        <input
                        onChange={this.inputChangeHandler}
                        value={this.state.city}
                        name="city" 
                        placeholder="City event is taking place" />
                    </Form.Field>
                    <Form.Field>
                        <label>Venue</label>
                        <input
                         onChange={this.inputChangeHandler}
                         value={this.state.venue}
                         name="venue" 
                         placeholder="Enter the Venue of the event" />
                    </Form.Field>
                    <Form.Field>
                        <label>Hosted By</label>
                        <input 
                        onChange={this.inputChangeHandler}
                        value={this.state.hostedBy}
                        name="hostedBy" 
                        placeholder="Enter the name of person hosting" />
                    </Form.Field>
                    <Button positive type="submit">
                        Submit
                      </Button>
                    <Button type="button" onClick={this.props.cancelForm}>Cancel</Button>
                </Form>
            </Segment>
        )
    }
}

export default CreateEvent;
