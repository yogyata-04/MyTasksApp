import Note from "../model/Note.js";

export async function getAllNotes(_,res){
    try{
        const notes= await Note.find().sort({createdAt: -1}); // -1 means newest first, 1 means oldest first
        res.status(200).json(notes);
    }catch(error){
        console.error("Error in getAllNotes controller", error);
        res.status(500).json({message:"Internal server error"});
    }
}

export async function getNoteById(req,res){
    try{
        const NoteById=await Note.findById(req.params.id);
        res.status(200).json(NoteById);
    }catch(error){
        res.status(500).json({message:"Internal sever error"});
    }
}

export async function createNote(req,res){
    res.status(201).send("You just created the notes");
    try{
        const {title, description} = req.body 
        const newNote= new Note({title, description})
        await newNote.save()
        res.status(201).json({message:"Note created successfully"});
    }catch(error){
        console.error("Error in createNote controller", error);
        res.status(500).json({message:"Internal server error"});
    }
}

export async function updateNote(req,res){
    try{
        const {title, description} =req.body;
        const updatedNote= await Note.findByIdAndUpdate(req.params.id,{title,description},{new:true})
        
        if(!updatedNote){
            return res.status(404).json({message: "Note not found"})
        }
        res.status(200).send("Note updated successfully");
    }catch(error){
        console.error("Error in updateNote controller", error);
        res.status(500).json({message:"Internal server error"});
    }
}

export async function deleteNote(req,res){
    try{
        const deletedNote=await Note.findByIdAndDelete(req.params.id);
        if(!deletedNote){
            return res.status(404).json({message: "Note not found"})
        }
        console.log(deletedNote);
        res.status(200).json({message:"Note deleted successfully"});
    }catch(error){
        console.error("Error in deletedNote controller", error);
        res.status(500).json({message:"Internal server error"});
    }
}