import { countries } from "../utils/countries";

export type Sexes = 'male' | 'female' | 'other';
export type AgeRanges = '<18' | '18-30' | '30-40' | '40+';
export type Focuses = 'casual' | 'bodybuilder' | 'powerlifter' | 'cardio';
export type NutritionValues = 'idk/idc' | 'stable' | 'bulking' | 'cutting';
export type Levels = 'newbee' | 'beginner' | 'intermediate' | 'advanced';
export type Countries = typeof countries[number];
