  
        var speed = 8;
        var xLocation = 0;
        var yLocation = 250;
        var width = 10;
        var height = 10;
        
        //game map region 
      Crafty.init(500,350, document.getElementById('game'));
        //first floor
       
      Crafty.e('Floor, 2D, Canvas, Color')
      .attr({x: xLocation, y: yLocation, w: width, h: height})
      .color('green');
        
      for (var i = 0; i <100; i++){
          if ( Math.random()>.5){
              var horizontalShift = (500 - xLocation) * Math.random();// + xLocation;
              xLocation = horizontalShift;
              console.log("xLocation = " + xLocation);
              if (Math.random()>.5){
                  var verticalShift = (350 - yLocation) * Math.random();// + yLocation;
                  yLocation = verticalShift;
                  console.log("yLocation = " + yLocation);
              }
              else{
                  var verticalShift = (350 - yLocation) * Math.random();// - yLocation;
                  yLocation = verticalShift;
                  console.log("yLocation = " + yLocation);
              }
          }
            else{
                var horizontalShift = (500 - xLocation) * Math.random();// - xLocation;;
                xLocation = horizontalShift;
                console.log("xLocation = " + xLocation);
            }
          Crafty.e('Floor, 2D, Canvas, Color')
          .attr({x: xLocation, y: yLocation, w: width, h: height})
          .color('green');
      }
        
        
      Crafty.e('2D, Canvas, Color, Fourway, Gravity')
      .attr({x: 0, y: 0, w: 10, h: 10})
      .color('#F00')
      .fourway(speed)
      .gravity('Floor');