import * as React from 'react';
import Team from '../Team'
import teamValor from '../../assets/team_valor_transparent.png';
import teamMystic from '../../assets/team_mystic_transparent.png';
import teamInstinct from '../../assets/team_instinct_transparent.png';

import { getTeams } from '../../config/calculateSchedule'

const getTeamData = (team) => {
    switch (team.team) {
        case 'valor':
            return <Team className="valor-team" img={teamValor} timeToKeep={team.time} />
        case 'instinct':
            return <Team className="instinct-team" img={teamInstinct} timeToKeep={team.time} />
        case 'mystic':
            return <Team className="mystic-team" img={teamMystic} timeToKeep={team.time} />
    }
}

const evaluateTeams = (teams) => {
    const first = getTeamData(teams["first"]);
    const second = getTeamData(teams["second"])
    return {
        first,
        second
    }
}

function Dashboard() {
    const teams = getTeams();
    const evaluatedTeams = evaluateTeams(teams);
    debugger;
    return (
        <div className="row full-height">
            <div className="col-md-6 no-margin no-padding full-height">
                {evaluatedTeams["first"]}
            </div>
            <div className="col-md-6 no-margin no-padding full-height">
                {evaluatedTeams["second"]}
            </div>
        </div>
    )
}

export default Dashboard;