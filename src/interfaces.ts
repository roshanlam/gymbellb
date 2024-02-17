import * as types from './types.js'

interface MainUser {
    name: string,
    sex: types.Sexes,
    country: string,
    age_range: types.AgeRanges,
    focus: types.Focuses,
    nutrition: types.NutritionValues,
    level: types.Levels
}

interface TargetUser {
    sex: types.Sexes,
    country: string,
    age_range: Set<types.AgeRanges>,
    focus: Set<types.Focuses>,
    nutrition: Set<types.NutritionValues>,
    level: Set<types.Levels>
}
