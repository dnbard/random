import React from 'react';

let Player = React.createClass({
    render: function(){
        return (<section className="player">
            <div className="player-icon"></div>
            <div className="player-class"></div>
            <div className="player-spec"></div>
            <div className="player-detail">
                <div className="player-name">Shinkari Trist</div>
                <div className="player-gold">Draenei Protection Warrior</div>
            </div>
        </section>);
    }
});

export default Player;
