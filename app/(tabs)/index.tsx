import { Text, View, Image, FlatList, TouchableOpacity, ScrollView, StyleSheet, Button, TextInput, Alert } from "react-native";
import { useRouter } from 'expo-router';
import { useState } from "react";
import { CocktailDto } from "@/dto/cocktailDto";
import { useGetCocktails } from "@/hooks/useGetCocktails";


export default function Index() {
 const [search, setSearch] = useState('');

  const router = useRouter();


  const cocktails = useGetCocktails();

  const handlePressAllPages = () => {
    router.push('cocktails');
  };

  const handleDisplayMessage = () => {
    Alert.alert("Vous avez un nouveau message", "T ou ????");
  };

  const lastSixCocktails = cocktails.slice(-6);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Cocktail App</Text> 
        <Text style={styles.subtitle}>Ici découvrez des cocktails de tout genre</Text>
        <FlatList
        horizontal
          data={lastSixCocktails}
          keyExtractor={(item) => item.idDrink}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => router.push(`/${item.idDrink}`)}>
              <View style={styles.cocktail}>
                <Image source={{ uri: item.strDrinkThumb }} style={styles.image} />
                <Text style={styles.name}>{item.strDrink}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
        <Button title="All Cocktails" onPress={handlePressAllPages} />
        <Button title="Message" onPress={handleDisplayMessage} />
        
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
    marginBottom: 20,
  },
  cocktail: {
    padding: 10,
    margin: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  name: {
    textAlign: 'center',
    marginTop: 5,
  },
});
