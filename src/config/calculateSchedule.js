import * as moment from 'moment';
const schedule = require('./schedule.json');


export const getTeams = () => {
    const day = moment().format('dddd').toLowerCase();
    return schedule[day]
}