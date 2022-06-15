const notesRouter = require("express").Router();
const { createNewNote, updateDb } = require("../../lib/notes");
const { notes } = require("../../db/db");
const uniqid = require("uniqid")

router.get("/notes", (req, res) => {
    let results = notes
    res.json(results)
})

router.post("/notes", (req, res) => {
    //set id randomly
    req.body.id = uniqid()
    const note = createNewNote(req.body, notes)
    res.json(note);
})


module.exports = notesRouter;