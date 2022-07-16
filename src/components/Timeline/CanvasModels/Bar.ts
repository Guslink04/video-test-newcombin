import Ruler from "./Ruler";
import Track from "./Track";

interface File {
  name: string;
  duration: number;
  src: string;
}

class Bar {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  start: number;
  end: number;
  track: Track;
  ruler: Ruler;
  file: any;
  color: string;
  constructor(
    canvas: HTMLCanvasElement,
    ruler: Ruler,
    track: Track,
    file: File
  ) {
    // Aquí se define
    this.start = 0;
    this.end = file.duration;
    this.color = "#fff";
    this.canvas = canvas;
    this.context = <CanvasRenderingContext2D>this.canvas.getContext("2d");
    // Aquí se define
    this.track = track;
    this.ruler = ruler;
    this.file = { ...file };
  }
  draw() {
    console.log("Draw bar called");
    this.context.fillStyle = this.color;
    this.context.fillRect(
      this.start * this.ruler.pixelsPerSecond,
      this.track.y,
      this.end * this.ruler.pixelsPerSecond,
      this.track.height
    );
  }
}

export default Bar;
