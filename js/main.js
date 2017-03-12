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

     var buttonPos = new Point(w / 2, h * 7 / 8);
     var buttonDim = new Dimensions(75, 75);
     var buttonStyle = new Style(ELLIPSE, "#fff9c0");
     var button = new UIButton(buttonStyle, buttonPos, buttonDim);

     canvas.addElement(button);
     canvas.toggleFullScreen();
     canvas.draw();
}
