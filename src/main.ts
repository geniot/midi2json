import fs from "fs"
import { Midi } from "./Midi"

// load a midi file in the browser
const midiData = fs.readFileSync(process.argv[2])
const midi = new Midi(midiData)
// write the output
fs.writeFileSync(process.argv[3], JSON.stringify(midi.toJSON()))
