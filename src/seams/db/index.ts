import type { CollectionConfig } from "../config/types";
import mongoose, { model, Model } from "mongoose";

export let collections: Record<string, Model<any>> = {};

const FIELD_TYPE_MAP: Record<string, any> = {
    text: String,
    password: String,
    tags: [String],
    number: Number,
    textarea: String,
    select: String,
    checkbox: Boolean,
    file: String, // Add file type to FIELD_TYPE_MAP
    image: String, // Add image type to FIELD_TYPE_MAP
};

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/seams");

export const initDB = async (coll: CollectionConfig[]) => {
    coll.forEach((collection) => {
        const schema = new mongoose.Schema({
                id: String,
                ...collection.fields.reduce((acc, field) => {
                        return {
                                ...acc,
                                [field.name]: FIELD_TYPE_MAP[field.type],
                        };
                }, {}),
        });
        collections[collection.slug] = mongoose.model(collection.slug, schema);
    });
};

