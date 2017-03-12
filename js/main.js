/**
 * @author: Isaiah Mann
 * @desc: Runs the application
 */

function main()
{
     var w = screen.width;
     var h = screen.height;

     var paper = document.getElementById("mainCanvas");
     var pen = paper.getContext("2d");
     var canvas = new UICanvas(paper, pen);

     var buttonPos = new Point(w / 2, h * 3 / 4);
     var buttonDim = new Dimensions(100, 100);

     var button = new UIButton(buttonPos, buttonDim);

     canvas.addElement(button);
     canvas.toggleFullScreen();
     canvas.draw();
}
