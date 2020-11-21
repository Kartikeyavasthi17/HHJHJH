class food{

    constructor()
    {
        this.lastFed;
        this.foodStock;

        this.image =loadImage("Milk.png");
    }

    display()
    {
      var x =80,y=100;

      imageMode(CENTER);
      image(this.image,50,200,70,70);

      if(this.foodStock!=0)
      {
        for(var i=0; i<this.foodStock; i++)
        {
          if(i%10 == 0)
          {
            x=80;
            y=y+50;
          }
          image(this.image,x,y,50,50);
          x=x+30;
        }
      }
    

    }
    

    getfood()
    {
      foodStock =database.ref("Food");
    foodStock.on("value",function(data){
      foodS =data.val();
    })
    }


     updateFood()
{
  if(foodS <= 0)
  {
    foodS=0;
  }else{
    foodS=foodS-1;
  }
  
  database.ref('/').update({
    Food:foodS
  })

}
}
