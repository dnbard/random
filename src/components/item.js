import React from 'react';

let Item = React.createClass({
    render: function(){
        return (<section className="item">
            <div className="item-icon"></div>
            <div className="item-detail">
                <div className="item-name">Warmongering Gladiator's Quickblade</div>
                <div className="item-gold">Item Level 705 (735 PvP)</div>
                <div className="item-cols">
                    <div>One-Hand</div>
                    <div>Sword</div>
                </div>
                <div className="item-cols">
                    <div>853 - 1586 Damage</div>
                    <div>Speed 2.60</div>
                </div>
                <div>(469.18 damage per second)</div>
                <div>+144 Agility</div>
                <div>+216 Stamina</div>
                <div>+96 Critical Strike</div>
                <div>+96 Mastery</div>
            </div>
        </section>);
    }
});

export default Item;
