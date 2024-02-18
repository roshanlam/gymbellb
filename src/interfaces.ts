import * as types from './types'

export interface MainUser {
    name: string,
    sex: types.Sexes,
    country: string,
    age_range: types.AgeRanges,
    focus: types.Focuses,
    nutrition: types.NutritionValues,
    level: types.Levels
    email: string,
    password: string
}


export interface TargetUser {
    sex: types.Sexes,
    country: Set<types.Countries>,
    age_range: Set<types.AgeRanges>,
    focus: Set<types.Focuses>,
    nutrition: Set<types.NutritionValues>,
    level: Set<types.Levels>
}
