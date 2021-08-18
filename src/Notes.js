import React from "react";
import { notes, scales } from "./Data";

function Notes({ root, scale }) {
  const scalenotes = [];
  let selectedScale = scales[scale];
  let note =0;

  for (const i of selectedScale) {
    note = notes.indexOf(root) + i;
    note %= notes.length;
    scalenotes.push(notes[note]);
  }

  return (
    <div>
      {scalenotes}
    </div>
  )
}

export default Notes;