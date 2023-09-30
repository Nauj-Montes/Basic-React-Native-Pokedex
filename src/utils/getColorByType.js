import { POKEMON_TYPES_COLORS } from "./constants";

export const getColorByType = (type) => {
  return POKEMON_TYPES_COLORS[type];
};
