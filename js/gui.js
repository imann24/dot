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

class UIElement
{
     constructor(position, dimensions)
     {
          this.position = position;
          this.dimensions = dimensions;
     }

     draw(pen)
     {
          // To be overriden in subclasses
     }
}

class UIButton extends UIElement
{
     draw(pen)
     {
          super.draw(pen);
          pen.fillRect(0, 0, 100, 100);
     }
}
