// models/MainUser.ts
import mongoose from 'mongoose';
import { Sexes, AgeRanges, Focuses, NutritionValues, Levels } from '../types'; 
import { MainUser } from '../interfaces';

const mainUserSchema = new mongoose.Schema<MainUser>({
    name: { type: String, required: true },
    sex: { type: String, required: true },
    country: { type: String, required: true },
    age_range: { type: String, required: true },
    focus: { type: String, required: true },
    nutrition: { type: String, required: true },
    level: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});

const MainUserModel = mongoose.model<MainUser>('User', mainUserSchema);

export default MainUserModel;
