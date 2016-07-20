var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var bg = document.getElementById("bg")
c.width = window.innerWidth;
c.height = window.innerHeight*.9;

var player = {
  x : 0,
  y :100,
  velX : 0,
  velY : 0,
  sprite: document.getElementById('player'),
  update: function(){
    this.x = this.x + this.velX;
    this.y = this.y + this.velY;
  },
  render: function(){
      //ctx.fillRect(this.x, this.y, 300, 85)
      ctx.drawImage(this.sprite, this.x, this.y);
  }
};

function animate(){
  ctx.drawImage(bg, 0 , 0, c.width, c.height)
  player.update();
  player.render();
  window.requestAnimationFrame(animate);
}

animate()

$(document).keydown(function(e){
  if (e.keyCode == 37) player.velX = -5;
  if (e.keyCode == 38) player.velY = -5;
  if (e.keyCode == 39) player.velX = 5;
  if (e.keyCode == 40) player.velY = 5;

});
$(document).keyup(function(e){
  if (e.keyCode == 37) player.velX = 0;
  if (e.keyCode == 38) player.velY = 0;
  if (e.keyCode == 39) player.velX = 0;
  if (e.keyCode == 40) player.velY = 0;
});
