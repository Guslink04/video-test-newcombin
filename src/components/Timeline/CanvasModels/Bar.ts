import Ruler from "./Ruler";
import Track from "./Track";

interface File {
  name: string;
  duration: number;
  src: string;
}

class Bar {
  canvas: HTMLCanvasElement;
  color: string;
  context: CanvasRenderingContext2D;
  endInPixels: number;
  file: any;
  isBeingDragged: boolean;
  ruler: Ruler;
  startInPixels: number;
  track: Track;
  constructor(
    canvas: HTMLCanvasElement,
    ruler: Ruler,
    track: Track,
    file: File
  ) {
    this.canvas = canvas;
    this.color = "#fff";
    this.context = <CanvasRenderingContext2D>this.canvas.getContext("2d");
    this.file = { ...file };
    this.isBeingDragged = false;
    this.ruler = ruler;
    this.startInPixels = 0;
    this.endInPixels = file.duration * this.ruler.pixelsPerSecond;
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
    if (
      mouseX > this.startInPixels &&
      mouseX < this.endInPixels &&
      mouseY > this.track.y &&
      mouseY < this.track.y + this.track.height
    ) {
      this.isBeingDragged = true;
    }
    return;
  }
  drag(event: Event) {
    const mouseX = (event as PointerEvent).offsetX;
    const mouseY = (event as PointerEvent).offsetY;
    const length = this.file.duration * this.ruler.pixelsPerSecond;
    this.startInPixels = mouseX - length * 0.5;
    this.endInPixels = mouseX + length * 0.5;
  }
  drop(event: Event) {
    this.isBeingDragged = false;
  }

  draw() {
    this.context.fillStyle = this.color;
    this.context.fillRect(
      this.startInPixels,
      this.track.y,
      this.file.duration * this.ruler.pixelsPerSecond,
      this.track.height
    );
  }
}

export default Bar;
