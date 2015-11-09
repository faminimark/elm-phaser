
  'use strict';
  function Interminent() {}
  Interminent.prototype = {
    create: function() {
    this.game.stage.backgroundColor = '#8FF0C0'; 
    var style = { font: '35px Arial', fill: '#d2f9e5', align: 'center'};
    this.sprite = this.game.add.sprite(this.game.world.centerX, 138, 'elm-logo');
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.scale.setTo(.7, .7);
    this.titleText = this.game.add.text(this.game.world.centerX, 400, 'Now that you have know our us\nLet\'s have a short Pop Quiz', style);
    this.titleText.anchor.setTo(0.5, 0.5);
    this.titleText.stroke = '#39604C';
    this.titleText.strokeThickness = 3;

    this.instructionsText = this.game.add.text(this.game.world.centerX, 470, 'Click anywhere to start.', { font: '24px Arial', fill: '#ffffff', align: 'center'});
    this.instructionsText.anchor.setTo(0.5, 0.5);

    },
    update: function() {
    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('play');
    }
    }
  };
  