import mongoose from "mongoose";

const chatSchema = mongoose.Schema({
    name: {type:String},
    image: {type: String},
    message: {type: String},
})

export default mongoose.model("chat", chatSchema);