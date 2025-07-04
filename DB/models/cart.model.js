import {Schema, Types, model,mongoose} from "mongoose";
const cartSchema = new Schema({
    userId:{
        type:Types.ObjectId,
        ref:'User',
        required:true,
        unique:true,
         },

   products:[
    {
        productId:{
       type:Types.ObjectId,
       ref:'Product',
       required:true,
        },
        quantity:{
         type:Number,
           default:1,
        }
    }
   ]

   },
    {
        timestamps:true,
    });

    const cartModel =  mongoose.models.Cart||model('Cart',cartSchema);
    export default cartModel;