import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name : {type : String, required : true},
    email : {type: String, required : true, unique : true},
    password : {type: String, required : true},
    skillsOffered : [String],
    skillsNeeded : [String],
}, {
    timestamps: true,
});

export default mongoose.models.User || mongoose.model("User", userSchema);