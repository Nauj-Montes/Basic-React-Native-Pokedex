import { useQuery } from "react-query";
import { getPokemonInfoApi } from "../api/pokemonAPI";

export function usePokemonInfo(id) {
  return useQuery(["pokemon", id], async () => getPokemonInfoApi(id));
}
