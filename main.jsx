var React = require('react');
var Pager = require( 'react-pager' );

var PagerDemo = React.createClass({
    getInitialState: function () {
        return {
            total:        11,
            current:      7,
            visiblePages: 3
        };
    },

    handlePageChanged: function ( newPage ) {
        this.setState({ current : newPage });
    },

    render: function() {
        return (<Pager total={this.state.total}
                       current={this.state.current}
                       titles={{
                           first:   'First',
                           prev:    '\u00AB',
                           prevSet: '...',
                           nextSet: '...',
                           next:    '\u00BB',
                           last:    'Last'
                       }}

                       visiblePages={this.state.visiblePages}
                       onPageChanged={this.handlePageChanged}/>);
    }
});

React.render(<PagerDemo />, document.body);