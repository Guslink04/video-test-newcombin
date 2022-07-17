import Timeline from "./Timeline";

class Ruler {
  timeline: Timeline;
  color: string;
  context: CanvasRenderingContext2D;
  pixelsPerSecond: number;
  stepDistanceInPixels: number;
  stepInSeconds: number;

  constructor(
    timeline: Timeline,
    pixelsPerSecond: number = 2,
    stepInSeconds: number = 30
  ) {
    this.color = "#fff";
    this.timeline = timeline;
    this.context = <CanvasRenderingContext2D>(
      this.timeline.canvas.getContext("2d")
    );
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
        this.convertSecondsToTimeNotation(i * this.stepInSeconds),
        this.stepInSeconds * this.pixelsPerSecond * i,
        20
      );
      this.context.beginPath();
      this.context.strokeStyle = this.color;
      this.context.moveTo(this.stepInSeconds * this.pixelsPerSecond * i, 0);
      this.context.lineTo(this.stepInSeconds * this.pixelsPerSecond * i, 5);
      this.context.stroke();
      this.context.closePath();
      this.context.beginPath();
      this.context.strokeStyle = this.color;
      this.context.moveTo(
        this.stepInSeconds * this.pixelsPerSecond * i +
          this.stepInSeconds * this.pixelsPerSecond * 0.5,
        0
      );
      this.context.lineTo(
        this.stepInSeconds * this.pixelsPerSecond * i +
          this.stepInSeconds * this.pixelsPerSecond * 0.5,
        2
      );
      this.context.stroke();
      this.context.closePath();
    }
  }
  calculateMinStepsNumber() {
    return Math.round(
      this.timeline.canvas.width / (this.stepInSeconds * this.pixelsPerSecond)
    );
  }
  convertSecondsToTimeNotation(durationInSeconds: number) {
    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds % 3600) / 60);
    const seconds = Math.floor(durationInSeconds) % 60;
    let ret = "";
    if (hours > 0) ret += `${hours}:${minutes < 10 ? "0" : ""}`;
    ret += `${minutes}:${seconds < 10 ? "0" : ""}`;
    ret += `${seconds}`;
    return ret;
  }
}

export default Ruler;
