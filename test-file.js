import React from 'react';

class Foo extends React.Component {
    componentDidmount1() {
    }
    render() {
        return (
            <div>
                {this.props.items.length && `(${this.props.items.join(', ')})`} {/* BAD_LENGTH_CHECK alarm */}
            </div>
        );
    }
    componentWillunmount() {
    }
    coerce() {
      var ggg = "1";
      ggg = "";
      var cssString = "";
      var backPosition;
      if (animatedBackground.length === 3) {
          cssString += "backgroundPosition: " + backPosition + "px; "; // BAD_TYPE_COERCION alarm: Expression 'backPosition' has an undefined value and type-coerced to string type.
      }
    }
}
