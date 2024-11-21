import { useEffect, useState } from "react";
import { CocktailDto } from "@/dto/cocktailDto";

export const useGetCocktails = () => {
  const [cocktails, setCocktails] = useState<[] | CocktailDto[]>([]);

  useEffect(() => {
    const fetchCocktails = async () => {
      const letters = "abcdefghijklmnopqrstuvwxyz".split("");
      let allCocktails: CocktailDto[] = [];

      for (const letter of letters) {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${letter}`);
        const data = await response.json();
        if (data.drinks) {
          allCocktails = [...allCocktails, ...data.drinks];
        }
      }

      // Remove duplicates based on cocktail ID
      const uniqueCocktails = Array.from(new Map(allCocktails.map(cocktail => [cocktail.idDrink, cocktail])).values());

      // Sort cocktails by ID
      uniqueCocktails.sort((a, b) => a.idDrink.localeCompare(b.idDrink));

      setCocktails(uniqueCocktails);
    };

    fetchCocktails();
  }, []);

  return cocktails;
};