import * as React from 'react';

function Team(props) {
    return (
        <div className={`${props.className} full-height`}>
            <img className="bg pulse" src={props.img} />
            <div className="text-center">
                <h1>{props.timeToKeep}</h1>
            </div>
        </div>
    )
}

export default Team;