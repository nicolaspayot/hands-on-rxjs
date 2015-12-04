import angular from 'angular';
import { UpdateButtonController } from './update-button.controller';
import { updateButton } from './update-button.component';

export default angular.module('handsOnRxJS.header', [])
  .controller('UpdateButtonController', UpdateButtonController)
  .component('updateButton', updateButton);
