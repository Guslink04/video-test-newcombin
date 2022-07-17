import Bar from "./Bar";
import Timeline from "./Timeline";
class Track {
  bars: Bar[];
  color: string;
  context: CanvasRenderingContext2D;
  height: number;
  index: number;
  timeline: Timeline;
  isGrabbed: boolean;
  name: string;
  y: number;
  constructor(timeline: Timeline, index: number) {
    this.bars = [];
    this.color = "#33415599";
    this.timeline = timeline;
    this.context = <CanvasRenderingContext2D>(
      this.timeline.canvas.getContext("2d")
    );
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
      this.context.fillRect(
        0,
        this.y,
        this.timeline.canvas?.width,
        this.height
      );
    else
      this.context.fillRect(
        0,
        this.y,
        this.timeline.canvas?.width,
        this.height
      );
  }
}
export default Track;
