const notes = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
const pianokeys = [
  "whitekey",
  "blackkey",
  "whitekey",
  "blackkey",
  "whitekey",
  "whitekey",
  "blackkey",
  "whitekey",
  "blackkey",
  "whitekey",
  "blackkey",
  "whitekey"
];
const pianolayout = [0, 34, 50, 84, 100, 150, 187, 200, 235, 250, 285, 300];
const noteStyles = [
  "root",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth",
  "seventh"
];

const scales = {
  Major: [0, 2, 4, 5, 7, 9, 11],
  Minor: [0, 2, 3, 5, 7, 8, 10]
};

export { notes, scales, pianokeys, pianolayout, noteStyles };
