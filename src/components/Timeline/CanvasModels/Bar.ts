class Bar {
  start: number;
  end: number;
  track: number;
  file: any;
  constructor(track: number, file: Object) {
    // Aquí se define
    this.start = 0;
    this.end = 0;
    // Aquí se define
    this.track = track;
    this.file = { ...file };
  }
}

export default Bar;
