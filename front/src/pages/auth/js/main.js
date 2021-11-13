
// boostrap js
import 'bootstrap'


import {
    StateController
} from '../../../js/export';

import ButtonsController from './ButtonsController';

// subscribe to state changes
StateController.subscribeAll([
    {
        fn: ButtonsController.stateChanged, 
        that: ButtonsController
    }
]);
