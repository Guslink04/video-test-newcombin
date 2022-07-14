class Needle {
  x: number;
  triangleWidth: number;
  triangleHeight: number;
  canvas: HTMLCanvasElement;
  color: string;
  context: CanvasRenderingContext2D;
  constructor(canvas: HTMLCanvasElement) {
    this.x = 50;
    this.triangleWidth = 20;
    this.triangleHeight = 20;
    this.canvas = canvas;
    this.color = "#ec4899";
    this.context = <CanvasRenderingContext2D>this.canvas.getContext("2d");
  }
  draw() {
    this.context.fillStyle = this.color;
    this.context.beginPath();
    this.context.moveTo(this.x, 0);
    this.context.lineTo(this.x + this.triangleWidth * 0.5, 0);
    this.context.lineTo(this.x, this.triangleHeight);
    this.context.lineTo(this.x - this.triangleWidth * 0.5, 0);
    this.context.closePath();
    this.context.fill();

    this.context.beginPath();
    this.context.strokeStyle = this.color;
    this.context.moveTo(this.x, this.triangleHeight);
    this.context.lineTo(this.x, this.canvas.height);
    this.context.stroke();
    this.context.closePath();
  }
}

export default Needle;
