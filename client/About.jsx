import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class About extends Component{
    
    // setVar() {
    //     Session.set('Meteor.loginButtons.dropdownVisible','true');
    // }
    
    render() {
        return (
            <ReactCSSTransitionGroup
                component="div"
                transitionName="route"
                transitionEnterTimeout={600}
                transitionAppearTimeout={600}
                transitionLeaveTimeout={400}
                transitionAppear={true}>                    
                <h1>About Us</h1>
                <p>I'm baby hashtag cred banjo austin poutine jianbing. Semiotics swag portland coloring book blue bottle tote bag hot chicken. Master cleanse typewriter pug blue bottle cliche leggings edison bulb trust fund pork belly lomo williamsburg kogi. Master cleanse meh photo booth meditation. 90's health goth air plant scenester cliche gochujang hella you probably haven't heard of them pinterest flannel.</p>
                {/* <button onClick={this.setVar}>Sign Up</button> */}
            </ReactCSSTransitionGroup>
        )
    }
}