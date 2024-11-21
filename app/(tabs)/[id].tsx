import { Text, View, ScrollView, StyleSheet, Image} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useState, useEffect } from 'react';
import { useGetCocktailById } from '@/hooks/useGetCocktailById';

export default function SinglePage() {

  const params =  useLocalSearchParams();
  const cocktailId = parseInt(params.id);

  const cocktail = (useGetCocktailById(cocktailId));

  if (!cocktail || cocktail === undefined) { 
    return <Text>Loading...</Text>;
  }

  return (
   
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>{cocktail.strDrink}</Text>
        <Image source={{ uri: cocktail.strDrinkThumb }} style={styles.image} />
        <Text style={styles.subtitle}>Ingredients</Text>
        {Array.from({ length: 20 }, (_, i) => i + 1).map(index => {
  const ingredient = (cocktail as { [key: string]: any })[`strIngredient${index}`];
  return ingredient ? <Text key={index}>{ingredient}</Text> : null;
})}
        <Text style={styles.subtitle}>Instructions</Text>
        <Text>{cocktail.strInstructions}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
});