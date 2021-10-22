import { StateController } from '../../../js/export';
import ButtonsController from './ButtonsController';
import ProfileController from './ProfileController';
import UIController from './UIController';

StateController.subscribe(ProfileController.stateChanged, ProfileController);
StateController.subscribe(UIController.stateChanged, UIController);