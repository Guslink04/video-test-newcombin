import Ruler from "./Ruler";
import Timeline from "./Timeline";
import Track from "./Track";

interface File {
  name: string;
  duration: number;
  src: string;
}

class Bar {
  color: string;
  context: CanvasRenderingContext2D;
  dragXOffset: number;
  endInPixels: number;
  file: any;
  isBeingDragged: boolean;
  startInPixels: number;
  timeline: Timeline;
  track: Track;
  constructor(timeline: Timeline, track: Track, file: File) {
    this.timeline = timeline;
    this.context = <CanvasRenderingContext2D>(
      this.timeline.canvas.getContext("2d")
    );
    this.file = { ...file };
    this.color = this.file.color;
    this.isBeingDragged = false;
    this.startInPixels = 0;
    this.dragXOffset = 0;
    this.endInPixels = file.duration * this.timeline.ruler.pixelsPerSecond;
    this.track = track;
  }
  catchEvent(event: Event) {
    if (event.type == "mousedown") this.willBeDragged(event);
    if (event.type == "mousemove" && this.isBeingDragged) this.drag(event);
    if (event.type == "mouseup") this.drop(event);
  }

  willBeDragged(event: Event) {
    const mouseX = (event as PointerEvent).offsetX;
    const mouseY = (event as PointerEvent).offsetY;
    this.timeline.bars.sort((prevBar, currentBar) => {
      if (prevBar.startInPixels < currentBar.startInPixels) return 1;
      if (prevBar.startInPixels > currentBar.startInPixels) return -1;
      return 0;
    });
    if (this.timeline.bars.filter((bar) => bar.isBeingDragged).length) return;
    if (
      mouseX > this.startInPixels &&
      mouseX < this.endInPixels &&
      mouseY > this.track.y &&
      mouseY < this.track.y + this.track.height
    ) {
      this.dragXOffset = mouseX - this.startInPixels;
      this.isBeingDragged = true;
    }
  }
  drag(event: Event) {
    const mouseX = (event as PointerEvent).offsetX;
    const mouseY = (event as PointerEvent).offsetY;
    const length = this.file.duration * this.timeline.ruler.pixelsPerSecond;
    this.startInPixels = mouseX - this.dragXOffset;
    this.endInPixels =
      this.startInPixels +
      this.file.duration * this.timeline.ruler.pixelsPerSecond;
    this.timeline.tracks.forEach((track) => {
      if (mouseY > track.y && mouseY < track.y + this.track.height) {
        this.track = track;
      }
    });
  }
  drop(event: Event) {
    this.isBeingDragged = false;
  }
  draw() {
    this.context.fillStyle = this.color;
    this.context.fillRect(
      this.startInPixels,
      this.track.y,
      this.file.duration * this.timeline.ruler.pixelsPerSecond,
      this.track.height
    );
  }
}

export default Bar;
