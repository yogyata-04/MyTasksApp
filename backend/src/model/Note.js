import mongoose from "mongoose";

// 1. Create schema
// 2. Create model based off of that schema

const noteSchema= new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        // createAt:{
        //     type: Date,
        //     required: true,
        // }
    },
    {
        timestamps: true, //createdAt, updatedAt
    },
)

const Note = mongoose.model("Note",noteSchema);

export default Note;


