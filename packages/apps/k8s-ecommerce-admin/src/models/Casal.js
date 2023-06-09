import {model, models, Schema} from "mongoose";

const CasalSchema = new Schema({
  name:String,
}, {
  timestamps: true,
});

export const Casal = models?.Casal || model('Casal', CasalSchema);