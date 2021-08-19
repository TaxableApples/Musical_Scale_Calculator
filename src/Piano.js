import React from "react";
import "./App.css";

function Piano(scalenotes) {
  return (
    <div className="pianobox">
      <div className="piano">
        <div style={{ left: 0 }} className="whitekey">
          <div className="keylabel">
            {scalenotes.scalenotes.indexOf("C") > -1 ? "C" : ""}
          </div>
        </div>
        <div style={{ left: 34 }} className="blackkey">
          <div className="keylabel">
            {scalenotes.scalenotes.indexOf("Db") > -1 ? "Db" : ""}
          </div>
        </div>
        <div style={{ left: 50 }} className="whitekey">
          <div className="keylabel">
            {scalenotes.scalenotes.indexOf("D") > -1 ? "D" : ""}
          </div>
        </div>
        <div style={{ left: 84 }} className="blackkey">
          <div className="keylabel">
            {scalenotes.scalenotes.indexOf("Eb") > -1 ? "Eb" : ""}
          </div>
        </div>
        <div style={{ left: 100 }} className="whitekey">
          <div className="keylabel">
            {scalenotes.scalenotes.indexOf("E") > -1 ? "E" : ""}
          </div>
        </div>
        <div style={{ left: 150 }} className="whitekey">
          <div className="keylabel">
            {scalenotes.scalenotes.indexOf("F") > -1 ? "F" : ""}
          </div>
        </div>
        <div style={{ left: 187 }} className="blackkey">
          <div className="keylabel">
            {scalenotes.scalenotes.indexOf("Gb") > -1 ? "Gb" : ""}
          </div>
        </div>
        <div style={{ left: 200 }} className="whitekey">
          <div className="keylabel">
            {scalenotes.scalenotes.indexOf("G") > -1 ? "G" : ""}
          </div>
        </div>
        <div style={{ left: 235 }} className="blackkey">
          <div className="keylabel">
            {scalenotes.scalenotes.indexOf("Ab") > -1 ? "Ab" : ""}
          </div>
        </div>
        <div style={{ left: 250 }} className="whitekey">
          <div className="keylabel">
            {scalenotes.scalenotes.indexOf("A") > -1 ? "A" : ""}
          </div>
        </div>
        <div style={{ left: 285 }} className="blackkey">
          <div className="keylabel">
            {scalenotes.scalenotes.indexOf("Bb") > -1 ? "Bb" : ""}
          </div>
        </div>
        <div style={{ left: 300 }} className="whitekey">
          <div className="keylabel">
            {scalenotes.scalenotes.indexOf("B") > -1 ? "B" : ""}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Piano;
