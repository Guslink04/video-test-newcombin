import Needle from "./Needle";
import Track from "./Track";
class Timeline {
  start: number;
  end: number;
  tracks: Track[];
  needle: Needle;
  canvas: HTMLCanvasElement;
  context: any;
  constructor(canvasId: string) {
    this.start = 0;
    this.end = 30000;
    this.tracks = [];
    this.needle = new Needle();
    this.canvas = <HTMLCanvasElement>document.getElementById(canvasId);
    this.context = this.canvas.getContext("2d");
  }
  addNewTrack() {
    this.tracks.push(new Track(this.tracks.length + 1));
  }
  draw() {
    this.context.fillStyle = "#012";
    this.context.fillRect(
      0,
      0,
      this.canvas?.clientWidth,
      this.canvas?.clientHeight
    );
  }
}

export default Timeline;
