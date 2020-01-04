import React, { Component } from 'react';
import './LocalMoney.scss';
import { tresCommas } from './../../utils/functions';

class LocalMoney extends Component {
    state = {
        cash: {
            amount: 1500.93,
            label: "checking"
        },
        creditCards: {
            amount: -1300.39,
            label: "credit card debt"
        },
        studentLoans: {
            amount: -95000.39,
            label: "student loans"
        },
        activeDisplay: {
            amount: 0,
            label: ""
        }
    }

    hoverCircle = React.createRef();
    hoverDisplay = React.createRef();

    changeHoverDisplay = this.changeHoverDisplay.bind(this);
    defaultDisplay = this.defaultDisplay.bind(this);

    changeHoverDisplay(amount, label) {
        this.setState({
            activeDisplay: {
                amount,
                label
            }
        });
    }

    defaultDisplay() {
        this.setState({
            activeDisplay: {
                amount: this.state.cash.amount,
                label: this.state.cash.label
            }
        });
    }

    componentDidMount() {
        this.defaultDisplay();
    }

    render() {
        // should be dynamic eg. function with dynamic count/css
        const creditCardCircle = <div
            ref={ this.hoverCircel }
            className="LocalMoney__hover-circle"
            onMouseOver={ () => this.changeHoverDisplay(this.state.creditCards.amount, this.state.creditCards.label) }
            onMouseLeave={ this.defaultDisplay }></div>;

        // could be an instance of right here
        const studentLoanCircle = <div
            ref={ this.hoverCircel }
            className="LocalMoney__hover-circle student-loans"
            onMouseOver={ () => this.changeHoverDisplay(this.state.studentLoans.amount, this.state.studentLoans.label) }
            onMouseLeave={ this.defaultDisplay }></div>;
        
        return (
            <div className="LocalMoney">
                { studentLoanCircle }
                { creditCardCircle }
                <div ref={ this.hoverDisplay } className="LocalMoney__hover-display">
                    <span className="LocalMoney__main-display">{ "$" + tresCommas(this.state.activeDisplay.amount) }</span>
                    { this.state.activeDisplay.label }
                </div>
            </div>
        )
    }
}

export default LocalMoney;