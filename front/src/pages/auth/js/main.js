// Test import of styles
import '@/styles/index.scss';


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
