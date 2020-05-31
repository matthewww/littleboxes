	function AddSquares(thisObj)
	{
        var scriptName = "Fill screen in a spiral matrix";
        var layers = app.project.activeItem.layers;
        
        x = 96;
        y = 90;

		
        var n=10;
        for(var i=0; i<n; i++)
        {        
            var myShapeLayer = layers.addShape();
            DrawShape(myShapeLayer);
            var newX = x + (x*2*i);
            var newY = y;
            
             myShapeLayer.property("Position").setValue([newX , newY]);
         }

	
	}

    function DrawShape(myShapeLayer)
    {
            var myShapeLayerContents = myShapeLayer.property("ADBE Root Vectors Group");
            var myShapeGroup = myShapeLayerContents.addProperty("ADBE Vector Group");
            var myRect = myShapeGroup.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
            myRect.property("Size").setValue([192,180]);
            var myShapeFill = myShapeGroup.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
            myShapeFill.property("Color").setValue([100/255,200/255,200/255]);
     }
        
	
	
	AddSquares(this);