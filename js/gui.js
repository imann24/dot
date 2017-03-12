/**
 * @author: Isaiah Mann
 * @desc: GUI scripts
 */

class UICanvas
{
     constructor(paper, pen)
     {
          this.paper = paper;
          this.originalSize = new Dimensions(paper.width, paper.height);
          this.pen = pen;
          this.elements = [];
          this.isFullScreen = false;
     }

     toggleFullScreen()
     {
          if(this.isFullScreen)
          {
               this.paper.width = this.originalSize.width;
               this.paper.height = this.originalSize.height;
          }
          else
          {
               this.paper.width = screen.width;
               this.paper.height = screen.height;
          }
          this.isFullScreen = !this.isFullScreen;
     }

     addElement(elem)
     {
          this.elements.push(elem);
     }

     draw()
     {
          this.pen.clearRect
          (
               0,
               0,
               this.paper.width,
               this.paper.height
          );
          for(var i = 0; i < this.elements.length; i++)
          {
               this.elements[i].draw(this.pen);
          }
     }
}

class Dimensions
{
     constructor(width, height)
     {
          this.width = width;
          this.height = height;
     }
}

class Point
{
     constructor(x, y)
     {
          this.x = x;
          this.y = y;
     }
}

class Style
{
     constructor(shape, fill, image)
     {
          this.shape = shape;
          this.fill = fill;
          this.image = image;
     }

     hasImage()
     {
          return this.image != null;
     }
}

class UIElement
{
     constructor(style, position, dimensions)
     {
          this.style = style;
          this.position = position;
          this.dimensions = dimensions;
     }

     draw(pen)
     {
          pen.fillStyle = this.style.fill;
          if(this.style.shape == RECTANGLE)
          {
               // Draws from the center:
               pen.fillRect
               (
                    this.position.x - this.dimensions.width / 2,
                    this.position.y - this.dimensions.height / 2,
                    this.dimensions.width,
                    this.dimensions.height
               );
          }
          else if(this.style.shape == ELLIPSE)
          {
               pen.beginPath();
               pen.ellipse
               (
                    this.position.x,
                    this.position.y,
                    this.dimensions.width,
                    this.dimensions.height,
                    0,
                    0,
                    2 * Math.PI
               );
               pen.fill();
          }
     }
}

class UIButton extends UIElement
{
     draw(pen)
     {
          super.draw(pen);
     }
}
