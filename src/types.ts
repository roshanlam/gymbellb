import { countries } from "../utils/countries";

export type Sexes = 'male' | 'female' | 'other';
export type AgeRanges = '<18' | '18-30' | '30-40' | '40+';
export type Focuses = 'casual' | 'bodybuilding' | 'powerlifting' | 'cardio';
export type NutritionValues = 'idk/idc' | 'stable' | 'bulking' | 'cutting';
export type Levels = 'newbee' | 'beginner' | 'intermediate' | 'advanced';
export type Countries = typeof countries[number];

export type LocationData = {
    coords: {
      speed?: number;
      longitude: number;
      latitude: number;
      accuracy?: number;
      heading?: number;
      altitude?: number;
      altitudeAccuracy?: number;
    };
    timestamp?: number;
  };
