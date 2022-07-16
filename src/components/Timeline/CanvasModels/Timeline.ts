import Ruler from "./Ruler";
import Needle from "./Needle";
import Track from "./Track";
import Bar from "./Bar";

class Timeline {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  end: number;
  needle: Needle;
  ruler: Ruler;
  start: number;
  pixelsPerSecond: number;
  tracks: Track[];
  bars: Bar[];
  constructor(canvasId: string) {
    this.end = 300000;
    this.start = 0;
    this.tracks = [];
    this.bars = [];
    this.pixelsPerSecond = 2;

    this.canvas = <HTMLCanvasElement>document.getElementById(canvasId);
    this.context = <CanvasRenderingContext2D>this.canvas.getContext("2d");
    this.ruler = new Ruler(this.canvas, this.pixelsPerSecond, 30);
    this.needle = new Needle(this.canvas);

    this.addNewTrack();
    this.resizeCanvas();
  }
  resizeCanvas() {
    this.canvas.width = window.innerWidth * 2;
    this.canvas.height = <number>this.canvas.parentElement?.clientHeight;
    this.draw();
  }
  addNewTrack() {
    // Demo tracks
    this.tracks.push(new Track(this.canvas, this.tracks.length + 1));
    this.tracks.push(new Track(this.canvas, this.tracks.length + 1));
    this.tracks.push(new Track(this.canvas, this.tracks.length + 1));
    this.tracks.push(new Track(this.canvas, this.tracks.length + 1));
  }
  addNewBar(fileObjectAsString: string) {
    if (this.tracks.length > 0)
      this.bars.push(
        new Bar(
          this.canvas,
          this.ruler,
          this.tracks[0],
          JSON.parse(fileObjectAsString)
        )
      );
  }
  draw() {
    this.drawBackground();
    this.drawRuler();
    this.drawTracks();
    this.drawBars();
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
  drawBars() {
    this.bars.forEach((bar) => {
      bar.draw();
    });
  }
  drawNeedle() {
    this.needle.draw();
  }
}

export default Timeline;
