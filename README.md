# Musical_Scale_Calculator
React app - Created with CodeSandbox

This project calculates musical scale notes from the diatonic scale using set theory and clock arythmetic. 

This project can be adapted to any app that requires you to represent dynamic diagrams of musical scales on any musical instrument. You may remove the piano element and replace it with any musical diagram, i.e. guitar chord or scales, sheet music, tabs etc. 

Set theory works well with programming since it is a 0-based-numbering system. Any musical scale can be represented in set theory as 'intervals' or the number of steps between each note. Since I am calculating western musical scales, I will base everything on the diatonic scale: ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]

Start on any note in the diatonic scale set above and count 0, 1, 2, 3, etc. If you reach the end of the set, start at the beggining and keep counting 5, 6, 7, etc. Add the numbers that represent the notes that you want into a new set.

Examples: 
Lets say we want to calculate a C major chord. ["C", "E", "G"], so this would be starting at C [0, 4, 7]

Now we can use that same set [0, 4, 7] to caclulate any major chord. For instance, if you start counting at "D" instead, you get the D major chord: ["D", "F#", "A"]. 

[0, 4, 7] will always represent a major chord no matter where you start.

To make scales, you just need more notes. [0, 2, 3, 5, 7, 8, 10] is the minor scale and [0, 2, 4, 5, 7, 9, 11] is the major scale.

To implement your own custom scales, add them to the 'scales' object in Data.js
