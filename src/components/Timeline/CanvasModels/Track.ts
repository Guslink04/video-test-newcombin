import Bar from "./Bar";
class Track {
  bars: Bar[];
  canvas: HTMLCanvasElement;
  color: string;
  context: CanvasRenderingContext2D;
  height: number;
  index: number;
  isGrabbed: boolean;
  name: string;
  y: number;
  constructor(canvas: HTMLCanvasElement, index: number) {
    this.bars = [];
    this.canvas = canvas;
    this.color = "#33415599";
    this.context = <CanvasRenderingContext2D>this.canvas.getContext("2d");
    this.height = 20;
    this.index = index;
    this.isGrabbed = false;
    this.name = `Track ${index}`;
    this.y = 0;
  }

  catchEvent(event: Event) {}

  draw() {
    this.context.fillStyle = this.color;
    if (!this.isGrabbed)
      this.context.fillRect(0, this.y, this.canvas?.width, this.height);
    else this.context.fillRect(0, this.y, this.canvas?.width, this.height);
  }
}
export default Track;
