
import { ADD_REMINDER, REMOVE_REMINDER, CLEAR_ALL_REMINDER } from "../types"
import { bake_cookie, read_cookie } from 'sfcookies'

const Reminder = (state=[], action) => {

    let reminders = null;

    state = read_cookie('Reminders')

    if(action.type === ADD_REMINDER){
        reminders = [...state, {text: action.text, date: action.date, id: Math.random()}]
        bake_cookie('Reminders', reminders)
        return reminders;
    }
    else if (action.type === REMOVE_REMINDER){
        reminders = state.filter(reminder => reminder.id != action.id)
        bake_cookie('Reminders', reminders)
        return reminders;
    }
    else if (action.type === CLEAR_ALL_REMINDER) {
        reminders = []
        bake_cookie('Reminders', reminders)
    }
    else return state;
}

export default Reminder;