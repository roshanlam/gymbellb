import * as types from './types'

export interface MainUser {
    _id: string,
    email: string,
    name: string,
    sex: types.Sexes,
    // country: types.Countries,
    // age_range: types.AgeRanges,
    focus: types.Focuses,
    nutrition: types.NutritionValues,
    level: types.Levels,
    location?: types.LocationData,
    targetUser: TargetUser
}

export interface TargetUser {
    // sex: types.Sexes,
    // country: Set<types.Countries>,
    // age_range: Set<types.AgeRanges>,
    focus: Set<types.Focuses>,
    nutrition: Set<types.NutritionValues>,
    level: Set<types.Levels>
}
