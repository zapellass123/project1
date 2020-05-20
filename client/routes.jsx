import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
import JournalsWrapper from './journals/JournalsWrapper.jsx';
import About from './About.jsx';
import JournalDetail from './journals/JournalDetail.jsx';

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

FlowRouter.route('/journals/:id', {
    action(params) {
        mount(MainLayout, {
            content: (<JournalDetail id={params.id}/>)
        })
    }
});