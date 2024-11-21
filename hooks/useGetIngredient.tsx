import { useEffect, useState } from "react";
import { CocktailDto } from "@/dto/cocktailDto";

export const useGetCocktails = () => {
  const [cocktails, setCocktails] = useState<[] | CocktailDto[]>([]);

  useEffect(() => {
    const fetchCocktails = async () => {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`);
        const data = await response.json();
      }
      setCocktails(uniqueCocktails);
    };

    fetchCocktails();
  }, []);

  return cocktails;
};