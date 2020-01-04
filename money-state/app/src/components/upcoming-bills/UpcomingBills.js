import React, { Component } from 'react';
import './UpcomingBills.scss';
// import { tresCommas } from './../../utils/functions';

class UpcomingBills extends Component {
    state = {

    }

    render() {
        return (
            <div className="UpcomingBills">
                <div className="UpcomingBills__top-lable">
                    <h2>Bills</h2>
                </div>
                <div className="UpcomingBills__bills"></div>
            </div>
        );
    }
}

export default UpcomingBills;