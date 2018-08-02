function deck(){//building the deck
    this.deck = []
    var card = 0
    for(var s=0; s<4; s++){
      for (var i=0; i<13; i++){
        card +=1
        this.deck.push({
          card: card,
          suit: s,
          rank: i
        })
      }
    }
    draw()
}
  
function draw(){//drawing the play cards
    this.play = []
    for (var i=0; i<29; i++){
      var card = Math.floor(Math.random()*52)
      play.push(deck[card])
    }
    build()
}
  
function build(){//rendering the playfield
    var position = 0
    for(var i=1; i<8; i++){
      if(i===1){
        for (var j=i; j<8; j++){
          position+=1
          card = 'cards/' + this.play[position].card + '.png'
          $('.'+ j).append($('<img>',{id: "card", src: card,}))
        }
        console.log("first")
      }
      else{
        for (var j=i; j<8; j++){
          position+=1
          $('.'+ j).append($('<img>',{id: "card", src: 'cards/53.png',}))
        }
      }
    }
}
  