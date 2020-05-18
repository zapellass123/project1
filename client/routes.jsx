import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
import JournalsWrapper from './journals/JournalsWrapper.jsx';

FlowRouter.route('/', {
    action() {
        mount(MainLayout, {
            content: (<JournalsWrapper />)
        })
    }
});