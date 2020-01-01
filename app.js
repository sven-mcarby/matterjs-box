window.addEventListener('load', function() {
	
	//Fetch our canvas
	var canvas = document.getElementById('world');
	
	//Setup Matter JS
	var engine = Matter.Engine.create();
	var world = engine.world;
	var render = Matter.Render.create({
		canvas: canvas,
		engine: engine,
		options: {
			width: 1500,
			height: 1500,
			background: 'transparent',
			wireframes: false,
            showAngleIndicator: false,
            borderStroke:'black'
		}
	});
    
    var ball1 = Matter.Bodies.circle(100,100, 50,{
      render: {
          fillStyle:'red',
          strokeStyle: 'black',
          lineWidth: 1
      }
    })


	//Add a ball
	var ball = Matter.Bodies.circle(250, 250, 50, {
		density: 0.04,
		friction: 0.01,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
            fillStyle: 'yellow',
            strokeStyle: 'black',
            lineWidth: 1
        }
    });
    
var polygon = Matter.Bodies.polygon(100,30,7,45,{
    density:0.06,
    friction: 0.02,
    frictionAir: 0.0004,
    restitution: 0.4,
    render:{
        fillStyle:'green',
        strokeStyle: 'black',
        lineWidth:1
    }
})
    Matter.World.add(world, polygon);
	Matter.World.add(world, ball);
	
	//Add a floor
	var floor = Matter.Bodies.rectangle(250, 520, 1500, 40, {
		isStatic: true, //An immovable object
		render: {
			visible:true
		}
    });
    
    var wall = Matter.Bodies.rectangle(0,100,20,700,{
        isStatic: true,
        render:{
            visible: true
        }
    })
    var polygon1 = Matter.Bodies.polygon(100,30,7,45,{
        density:0.06,
        friction: 0.02,
        frictionAir: 0.0004,
        restitution: 0.4,
        render:{
            fillStyle:'green',
            strokeStyle: 'black',
            lineWidth:1
        }
    })

    var polygon2 = Matter.Bodies.polygon(100,30,7,45,{
        density:0.06,
        friction: 0.02,
        frictionAir: 0.0004,
        restitution: 0.4,
        render:{
            fillStyle:'green',
            strokeStyle: 'black',
            lineWidth:1
        }
    })

    Matter.World.add(world, [polygon1, polygon2, wall, ball1]);
	Matter.World.add(world, floor);
	
	//Make interactive
	var mouseConstraint = Matter.MouseConstraint.create(engine, { //Create Constraint
		element: canvas,
		constraint: {
			render: {
	        	visible: true
	    	},
	    	stiffness:0.8
	    }
	});
	Matter.World.add(world, mouseConstraint);
	
	//Start the engine
	Matter.Engine.run(engine);
	Matter.Render.run(render);
	
});