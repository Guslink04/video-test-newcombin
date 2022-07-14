import Ruler from "./Ruler";
import Needle from "./Needle";
import Track from "./Track";
class Timeline {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  end: number;
  needle: Needle;
  ruler: Ruler;
  start: number;
  pixelsPerSecond: number;
  tracks: Track[];
  constructor(canvasId: string) {
    this.end = 30000;
    this.start = 0;
    this.tracks = [];
    this.pixelsPerSecond = 50;

    this.canvas = <HTMLCanvasElement>document.getElementById(canvasId);
    this.context = <CanvasRenderingContext2D>this.canvas.getContext("2d");
    this.ruler = new Ruler(this.canvas, this.pixelsPerSecond, 2);
    this.needle = new Needle(this.canvas);

    this.addNewTrack();
    this.resizeCanvas();
  }
  resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = 320;
    this.draw();
  }
  addNewTrack() {
    this.tracks.push(new Track(this.canvas, this.tracks.length + 1));
    this.tracks.push(new Track(this.canvas, this.tracks.length + 1));
    this.tracks.push(new Track(this.canvas, this.tracks.length + 1));
    this.tracks.push(new Track(this.canvas, this.tracks.length + 1));
  }
  draw() {
    this.drawBackground();
    this.drawRuler();
    this.drawTracks();
    this.drawNeedle();
  }
  drawBackground() {
    this.context.fillStyle = "#0F172A";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
  drawRuler() {
    this.ruler.draw();
  }
  drawTracks() {
    const paddingTop = 50;
    const gap = 3;
    this.tracks.forEach((track, index) => {
      track.y = index * (track.height + gap) + paddingTop;
      track.draw();
    });
  }
  drawBars() {}
  drawNeedle() {
    this.needle.draw();
  }
}

export default Timeline;
