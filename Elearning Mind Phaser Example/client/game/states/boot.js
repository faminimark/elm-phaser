
'use strict';

function Boot() {
}

Boot.prototype = {
  preload: function() {
  	this.game.stage.backgroundColor = 'rgb(0, 125, 193)';
    this.load.image('preloader', 'assets/images/preloader.gif');
  },
  create: function() {
    this.game.input.maxPointers = 1;
    this.game.state.start('preload');
  }
};
