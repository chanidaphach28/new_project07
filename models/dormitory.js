import mongoose , {Schema}  from "mongoose";

const dormitorySchema = new Schema(
    {
        roomtype: String,
        dor_name: String,
        dor_img:String,
        location: String,
        price:Integer ,
        detail:String
    },
    {timestamps:true,}
);
const Dors =  mongoose.models.Dors || mongoose.model("Dors",dormitorySchema);
export default Dors;