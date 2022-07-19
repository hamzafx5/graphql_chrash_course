import mongoose from "mongoose";

export const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["Not STarted", "In Progress", "Completed"],
        required: true,
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Client",
    },
});

const Project = mongoose.model("Project", ProjectSchema);

export default Project;
