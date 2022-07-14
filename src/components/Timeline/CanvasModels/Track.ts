import Bar from "./Bar";
class Track {
  bars: Bar[];
  canvas: HTMLCanvasElement;
  color: string;
  context: CanvasRenderingContext2D;
  height: number;
  index: number;
  name: string;
  y: number;
  constructor(canvas: HTMLCanvasElement, index: number) {
    this.bars = [];
    this.canvas = canvas;
    this.color = "#33415599";
    this.context = <CanvasRenderingContext2D>this.canvas.getContext("2d");
    this.height = 30;
    this.index = index;
    this.name = `Track ${index}`;
    this.y = 0;
  }
  draw() {
    this.context.fillStyle = this.color;
    this.context.fillRect(0, this.y, this.canvas?.width, this.height);
  }
}
export default Track;
