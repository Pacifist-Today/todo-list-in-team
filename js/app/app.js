'use strict'

import {View} from './view.js'
import {Model} from './model.js'
import {Controller} from './controller.js'


const controller = new Controller(new View() ,new Model());

controller.start();

