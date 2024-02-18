import * as types from './types'

interface MainUser {
    name: string,
    sex: types.Sexes,
    country: types.Countries,
    age_range: types.AgeRanges,
    focus: types.Focuses,
    nutrition: types.NutritionValues,
    level: types.Levels,
    location?: types.LocationData
}

interface TargetUser {
    sex: types.Sexes,
    country: Set<types.Countries>,
    age_range: Set<types.AgeRanges>,
    focus: Set<types.Focuses>,
    nutrition: Set<types.NutritionValues>,
    level: Set<types.Levels>
}
