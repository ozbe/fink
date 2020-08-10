import React from 'react';
import { connect } from 'react-redux';

const Messages = ({ messages }) => (
    <div>
        {
            messages.map((text, index) => (
                <p key={index}>{text}</p>
            ))
        }
    </div>
);

export default connect(
    ({ messages }) => ({ messages })
)(Messages);