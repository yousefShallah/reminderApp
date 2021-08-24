import { ADD_REMINDER, REMOVE_REMINDER, CLEAR_ALL_REMINDER } from '../types';

export const AddReminder = (text, date) => {
    const action = {
        type: ADD_REMINDER,
        text,
        date
    };
    return action;
}

export const RemoveReminder = (id) => {
    const action = {
        type: REMOVE_REMINDER,
        id
    };
    return action;
}

export const ClearAllReminder = () => {
    const action = {
        type: CLEAR_ALL_REMINDER,
    };
    console.log("remove", action);
    return action;
}