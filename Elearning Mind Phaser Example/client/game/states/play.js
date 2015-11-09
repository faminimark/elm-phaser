
  'use strict';
  function Play() {}
  Play.prototype = {
    preload: function(){
      this.game.load.json('questions', '/assets/js/question.json');
    },
    create: function() {
      this.game.stage.backgroundColor = 'rgb(127,204,127)'; 
      this.button = this.game.add.image(-180, 0, "button");
      this.button.visible = false;
      this.questions = this.game.cache.getJSON('questions').questions;
      this.page = 0;
      this.questionsTitle  = this.game.add.text(this.game.stage.width/2, 100, this.questions[this.page].title, {fontSize: '33px', fill: '#fff'} );
      this.questionsTitle.anchor.set(0.5);
      this.questionsBody  = this.game.add.text(this.game.stage.width/2, 200, this.questions[this.page].question, {fontSize: '25px', fill: '#fff', align: 'center'});
      this.questionsBody.anchor.set(0.5, 0);
      this.questionsBody.wordWrap = true;
      this.questionsBody.wordWrapWidth = this.game.stage.width - 80;
      var self = this;
      this.game.score = 0;
      this.loadQuestion();
      this.page++;
      // this.pageUp.inputEnabled = true;
      // this.pageUp.input.useHandCursor = true;
      // this.pageUp.events.onInputDown.add(this.prevPage, this);
    },
    update: function() {

    },
    loadQuestion: function(){
      this.buttonGroup = this.game.add.group();
      this.buttonLabelGroup = this.game.add.group();
      var yPosition = 450;
      for(var i = 0; this.questions[this.page].choices.length > i; i++){
        var buttons = this.game.add.button(this.game.width/2, yPosition, 'button', this.clickListener, this);
        buttons.anchor.setTo(0.5, 0.5);
        buttons.answer = this.questions[this.page].choices[i];
        buttons.correct = this.questions[this.page].answer;
        var buttonLabel = this.game.add.text(this.game.width/2, yPosition, this.questions[this.page].choices[i], {
            font: "normal 22px open-sans",
            fill: "#000"
        });
        this.buttonGroup.add(buttons);
        this.buttonLabelGroup.add(buttonLabel);

        buttonLabel.anchor.setTo(0.5, 0.5);
        yPosition = yPosition - 55;
                
      }
    },
    clickListener: function(x) {
                  if(x.answer == x.correct)
            {
              this.game.score++;
            }
      this.buttonGroup.removeChildren();;
      this.buttonLabelGroup.removeChildren();
      if(this.page < this.questions.length){
        this.questionsTitle.setText(this.questions[this.page].title);
        this.questionsBody.setText(this.questions[this.page].question);
        this.loadQuestion();
        this.page++;
      }else{
        this.game.state.start("gameover");
      }

      // this.game.state.start('play');
    }
  };
  