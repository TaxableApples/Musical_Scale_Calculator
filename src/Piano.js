import React from "react";
import "./App.css";
import { pianolayout, pianokeys, notes, noteStyles } from "./Data";

function Piano(scalenotes) {
  return (
    <div className="pianobox">
      <div className="piano">
        {notes.map((e, i) => (
          <div
            key={e + i}
            style={{ left: +`${pianolayout[i]}` }}
            className={`${pianokeys[i]}`}
          >
            <div
              className={`keylabel 
                      ${
                        scalenotes.notes.indexOf(e) > -1
                          ? noteStyles[scalenotes.notes.indexOf(e)]
                          : ""
                      }`}
            >
              {scalenotes.notes.indexOf(e) > -1 ? e : ""}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Piano;
