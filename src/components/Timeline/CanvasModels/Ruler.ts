class Ruler {
  canvas: HTMLCanvasElement;
  color: string;
  context: CanvasRenderingContext2D;
  pixelsPerSecond: number;
  stepDistanceInPixels: number;
  stepInSeconds: number;

  constructor(
    canvas: HTMLCanvasElement,
    pixelsPerSecond: number = 2,
    stepInSeconds: number = 5
  ) {
    this.canvas = canvas;
    this.color = "#fff";
    this.context = <CanvasRenderingContext2D>this.canvas.getContext("2d");
    this.pixelsPerSecond = pixelsPerSecond;
    this.stepInSeconds = stepInSeconds;
    this.stepDistanceInPixels = 5;
  }
  draw() {
    const stepsNumber = this.calculateMinStepsNumber();
    this.context.font = "11px sans-serif";
    this.context.fillStyle = "#fff";
    for (let i = 0; i < stepsNumber; i++) {
      this.context.fillText(
        `${i * this.stepInSeconds}`,
        this.stepInSeconds * this.pixelsPerSecond * i,
        20
      );
      this.context.beginPath();
      this.context.strokeStyle = this.color;
      this.context.moveTo(this.stepInSeconds * this.pixelsPerSecond * i, 0);
      this.context.lineTo(this.stepInSeconds * this.pixelsPerSecond * i, 5);
      this.context.stroke();
      this.context.closePath();
    }
  }
  calculateMinStepsNumber() {
    return Math.round(
      this.canvas.width / (this.stepInSeconds * this.pixelsPerSecond)
    );
  }
}

export default Ruler;
