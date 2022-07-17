import Timeline from "./Timeline";
import { video } from "../../Video/stores/video";

class Needle {
  color: string;
  context: CanvasRenderingContext2D;
  isBeingDragged: boolean;
  timeline: Timeline;
  triangleHeight: number;
  triangleWidth: number;
  x: number;
  constructor(timeline: Timeline) {
    this.x = 50;
    this.triangleWidth = 20;
    this.triangleHeight = 20;
    this.color = "#ec4899";
    this.timeline = timeline;
    this.context = <CanvasRenderingContext2D>(
      this.timeline.canvas.getContext("2d")
    );
    this.isBeingDragged = false;
  }
  catchEvent(event: Event) {
    if (event.type == "mousedown") this.willBeDragged(event);
    if (event.type == "mousemove" && this.isBeingDragged) this.drag(event);
    if (event.type == "mouseup") this.drop(event);
  }

  willBeDragged(event: Event) {
    const mouseX = (event as PointerEvent).offsetX;
    const mouseY = (event as PointerEvent).offsetY;
    if (
      mouseX > this.x - this.triangleWidth * 0.5 &&
      mouseX < this.x + this.triangleWidth * 0.5 &&
      mouseY > 0 &&
      mouseY < this.triangleHeight
    ) {
      this.isBeingDragged = true;
    }
  }
  evaluateVideoColor() {
    let currentColor = "#334155";
    this.timeline.bars.forEach((bar) => {
      if (this.x > bar.startInPixels && this.x < bar.endInPixels) {
        currentColor = bar.color;
      }
    });
    video.value.setColor(currentColor);
  }
  drag(event: Event) {
    const mouseX = (event as PointerEvent).offsetX;
    this.x = mouseX;
  }
  drop(event: Event) {
    this.evaluateVideoColor();
    this.isBeingDragged = false;
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
    this.context.lineTo(this.x, this.timeline.canvas.height);
    this.context.stroke();
    this.context.closePath();
  }
}

export default Needle;
