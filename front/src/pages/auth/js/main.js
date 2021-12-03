

// boostrap js
import 'bootstrap'
import Core from '../../../js/Core';

import {
    StateController
} from '../../../js/export';

import ButtonsController from './ButtonsController';
// load core
Core.load();



// subscribe to state changes
StateController.subscribeAll([
    {
        fn: ButtonsController.stateChanged, 
        that: ButtonsController
    }
]);
