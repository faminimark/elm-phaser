
  'use strict';
  function Article() {}
  Article.prototype = {
    preload: function(){
      this.game.load.json('instruction', '/assets/js/instruction.json');
    },
    create: function() {
     
      this.instruction = this.game.cache.getJSON('instruction').instructions;
       // console.log(this.instruction[0]);
      this.page = 0;
      this.instructionTitle  = this.game.add.text(this.game.stage.width/2, 100, this.instruction[this.page].title, {fontSize: '33px', fill: '#fff'} );
      this.instructionTitle.anchor.set(0.5);
      this.instructionBody  = this.game.add.text(this.game.stage.width/2, 200, this.instruction[this.page].body, {fontSize: '25px', fill: '#ddd', align: 'center'});
      this.instructionBody.anchor.set(0.5, 0);
      this.instructionBody.wordWrap = true;
      this.instructionBody.wordWrapWidth = this.game.stage.width - 80;
      this.pageUp = this.game.add.text(20, this.game.height - 40, "< Previous",{fontSize: '15px', fill: '#fff'});
      this.pageUp.inputEnabled = true;
      this.pageUp.input.useHandCursor = true;
      this.pageUp.events.onInputDown.add(this.prevPage, this);

      this.pageDown = this.game.add.text(this.game.width - 80, this.game.height - 40, "next >",{fontSize: '15px', fill: '#fff'});
      this.pageDown.inputEnabled = true;
      this.pageDown.input.useHandCursor = true;
      this.pageDown.events.onInputDown.add(this.nextPage, this);
      this.page++;
    },
    update: function() {

    },
    nextPage: function(){

      if(this.page < this.instruction.length){
        this.instructionTitle.setText(this.instruction[this.page].title);
        this.instructionBody.setText(this.instruction[this.page].body);
        this.page++;
      }else{
        this.clickListener();
      }
    },
    prevPage: function(){
      if(this.page != 0){
        this.instructionTitle.setText(this.instruction[this.page].title);
        this.instructionBody.setText(this.instruction[this.page].body);
        this.page--;
      }else{
        this.page = this.page;
      }
      
    },
    clickListener: function() {
      this.game.state.start('interminent');
    }
  };
  