import React from 'react';

class Hello extends React.Component {
    componentDidmount() {
    }
    render() {
        <div>Hello</div>; // BAD_REACT_API_RETURN_VALUE alarm because 'render()' does not return this React element.
    }
}
