import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useGetCocktails } from '@/hooks/useGetCocktails';


export default function AllCocktailsPage({ recepies }: { recepies: any[] }) {

    const router = useRouter();

    const handlePressSinglePage = (id: string) => {
        router
        .push(`/${id}`);
    };


    const cocktails = useGetCocktails();

return (
    <>
        <View style={styles.container}>
            <Text style={styles.title}>Cocktail App</Text>
            <Text style={styles.subtitle}>Ici découvrez des cocktails de tout genre</Text>
            <FlatList
                data={cocktails}
                keyExtractor={(item) => item.idDrink}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handlePressSinglePage(item.idDrink)}>
                        <View style={styles.cocktail}>
                            <Image source={{ uri: item.strDrinkThumb }} style={styles.image} />
                            <Text style={styles.name}>{item.strDrink}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    </>
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
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    },
});


