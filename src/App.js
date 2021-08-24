import React from 'react'
import { connect } from 'react-redux'
import { AddReminder, RemoveReminder, ClearAllReminder } from './actions'
import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from './img/logo.png';

import './index.css';

class App extends React.Component {

    state={
        text: '',
        date: ''
    }

    renderReminders = () => {
        const {reminders} = this.props;

        return(
            <ul className="list-group">
                {reminders && reminders.map(remd => {
                        return(
                            <li className="list-group-item" key={remd.id}>
                                <div className="item-continer">
                                    <div>
                                        <div> <span className="to-do-item"> {remd.text} </span> </div>
                                        <div> <span className="moment"> {moment(new Date(remd.date)).fromNow()} </span> </div>
                                    </div>
                                    <div className="remove-btn" onClick={() => this.props.RemoveReminder(remd.id)}> 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                            <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
                                        </svg> 
                                    </div>
                                </div>
                            </li>                
                        )
                    })
                }
            </ul>
        )
    }

    render(){
        const { text, date } = this.state;
        console.log("this.props", this.props);
        return (
            <div className="body-continer">
                <div className="app-continer">
                    <div className="reminder-continer"> 
                        <div className="img-logo">
                            <img src={Image} /> 
                        </div>
                        <div className="reminder-tittle">
                            <h2> What Should To Do </h2>
                        </div>
                        <form class="row g-2 needs-validation" novalidate>
                            <input className="form-control" 
                            type="text" 
                            value={text}
                            onChange={e => this.setState({text: e.target.value})}
                            required
                            placeholder="Enter What you think!" />
                            
                            <DatePicker
                            value={date}
                            className="form-control"
                            selected={date}
                            onChange={(date) => this.setState({date: date})}
                            showTimeSelect
                            timeFormat="HH:mm"
                            dateFormat="MMMM d, yyyy h:mm aa"
                            timeCaption="time"
                            placeholderText={new Date()}
                            />
                            <div className="btns">
                                <button type="submit" className="btn btn-primary add-btn" onClick={() => {
                                    text && this.props.AddReminder(text, date) 
                                    this.setState({text: '', date: ''})
                                }}>
                                    Add Reminder 
                                </button>
                                <button className="btn btn-danger clear-btn" onClick={(e) => {
                                    e.preventDefault() ;
                                    this.props.ClearAllReminder()
                                }}> Clear Reminders </button>
                            </div>
                        </form>
                    </div>
                    <div className="box-item">
                        {this.renderReminders()}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{ reminders: state }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         AddReminder: () => dispatch(AddReminder()),
//     }
// }

export default connect(mapStateToProps, {AddReminder, RemoveReminder, ClearAllReminder})(App);