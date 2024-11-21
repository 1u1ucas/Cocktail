

import { useEffect, useState } from "react";
import { CocktailDto } from "@/dto/cocktailDto";

export const useGetCocktailById = (cocktailId: number) => {
  const [cocktail, setCocktail] = useState<null | CocktailDto>(null);


  useEffect(() => {
    const fetchCocktails = async () => {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`);
        const data = await response.json();

        setCocktail(data.drinks[0]);
    };

    fetchCocktails();
  }, []);

  return cocktail;
};