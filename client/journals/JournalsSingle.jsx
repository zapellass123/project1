import React, {Component} from 'react';

export default class JournalsSingle extends Component{
    render() {
        return (
            <li>
                {this.props.journal.text}
                {this.props.journal.complete.toString()}
            </li>
        )
    }
}