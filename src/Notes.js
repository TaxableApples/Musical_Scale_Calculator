import React from "react";
import { notes, scales } from "./Data";
import Piano from "./Piano";

function Notes({ root, scale }) {
  let scalenotes = [];
  let selectedScale = scales[scale];
  let note = 0;

  for (let i of selectedScale) {
    note = notes.indexOf(root) + i;
    note %= notes.length;
    scalenotes.push(notes[note]);
  }

  return (
    <div>
      <Piano scalenotes={scalenotes} />
    </div>
  );
}

export default Notes;
