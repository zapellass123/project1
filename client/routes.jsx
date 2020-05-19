import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
import JournalsWrapper from './journals/JournalsWrapper.jsx';
import About from './About.jsx';

FlowRouter.route('/', {
    action() {
        mount(MainLayout, {
            content: (<JournalsWrapper />)
        })
    }
});

FlowRouter.route('/about', {
    action() {
        mount(MainLayout, {
            content: (<About />)
        })
    }
});