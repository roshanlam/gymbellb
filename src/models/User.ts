// models/MainUser.ts
/*import mongoose from 'mongoose';
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
*/

import mongoose, { Document } from 'mongoose';
import bcrypt from 'bcrypt';

interface IUser extends Document {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.pre<IUser>('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

const User = mongoose.model<IUser>('User', userSchema);
export default User;
