import Bar from "./Bar";
class Track {
  name: string;
  bars: Bar[];
  index: number;
  constructor(index: number) {
    this.index = index;
    this.name = `Track ${index}`;
    this.bars = [];
  }
}
export default Track;
