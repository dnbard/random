var React = require('react');
var ReactDOM = require('react-dom');

var Application = React.createClass({
    render: function () {
        return (<section>
            APPLICATION
        </section>);
    }
});

ReactDOM.render(<Application /> , document.querySelector('.app'));
