/**
 * @author: Isaiah Mann
 * @desc: GUI scripts
 */

class UICanvas
{
     constructor(paper, pen)
     {
          this.paper = paper;
          this.pen = pen;
          this.elements = [];
     }

     addElement(elem)
     {
          this.elements.push(elem);
     }

     draw()
     {
          for(var i = 0; i < this.elements.length; i++)
          {
               this.elements[i].draw(this.pen);
          }
     }
}

class UIElement
{
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
