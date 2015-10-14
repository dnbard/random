import React from 'react';
import ReactDOM from 'react-dom';
import Item from 'components/item';
import Player from 'components/player';

var Application = React.createClass({
    render: function () {
        return (<section className="container">
            <Item />
            <section className="text-roll">Select the better wielder:</section>
            <Player />
            <Player />
            <Player />
            <Player />
            <Player />
        </section>);
    }
});

ReactDOM.render(<Application /> , document.querySelector('.app'));
