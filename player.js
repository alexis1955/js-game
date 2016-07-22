var player = {
  x : 0,
  y :100,
  velX : 0,
  velY : 0,
  spriteNum : 0,
  ticks : 0,
  sprites: [document.getElementById("playerf1"),
           document.getElementById("playerf2"),
           document.getElementById("playerf3"),
           document.getElementById("playerf4"),
          ],
  update: function(){
    this.ticks++;
    this.x = this.x + this.velX;
    this.y = this.y + this.velY;
    if (this.velX !=0 || this.velY !=0)
      if(this.ticks % 20 === 0)
        this.spriteNum = this.spriteNum + 1;
    if (this.spriteNum > 3)  this.spriteNum = 0;
  },
  render: function(){
    if(this.dir == "right")
      flipctx();
      //ctx.fillRect(this.x, this.y, 300, 85)
    ctx.drawImage(this.sprites[this.spriteNum], this.x, this.y, 200, 200);
    if(this.dir == "right")
      restorectx(ctx)

  }
};

function flipctx(){
  ctx.save();;
  ctx.translate(player.x + 50,0);
  ctx.scale(-1,1);
  ctx.translate(-player.x-50,0);
}

function restorectx(ctx){
  ctx.restore();
}
