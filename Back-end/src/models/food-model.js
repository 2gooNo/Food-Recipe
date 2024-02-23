import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema({
    name: String,
    description: String,
    category: [String],
    recipes: [
        {
            recipe: String,
            size: String,
        }
    ],
    instruction: [
        {
            step: Number,
            description: String,
        }
    ],
    images: [String]
})