import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";


const fetchProduct=async()=>{
  const resp = await fetch("https://dummyjson.com/products");
  const data = await resp.json(); 
  //console.warn("fetch",data.products);
  return data.products


}


const Products = ({navigation}) => {
  const{isLoading,error,data:products}=useQuery({queryKey:["products"],queryFn:fetchProduct})
  // const [products, setProducts] = useState([]);
  // const [isLoading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  const getProduct = async () => {
    setLoading(true);
    setError(null);
    try {
      const resp = await fetch("https://dummyjson.com/products");
      const data = await resp.json();

      console.warn("data", data.products);
      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   getProduct();
  // }, []);

  if (isLoading) {
    return <ActivityIndicator size="large" color="#34ghdg"></ActivityIndicator>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=> navigation.navigate('single')}>
        <Text style={styles.heading}>Customers also purchased</Text>
      </TouchableOpacity>
      <View>
        <ScrollView>
          {
            <View style={styles.grid}>
              {products.map((product) => (
                <View key={product.id} style={styles.productContainer}>
                  <View style={styles.imageContainer}>
                    <Image
                      source={{ uri: product.thumbnail }}
                      style={styles.image}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={styles.detailsContainer}>
                    <Text style={styles.productName}>{product.title}</Text>
                    <Text style={styles.productPrice}>{product.price}</Text>
                  </View>
                </View>
              ))}
            </View>
          }
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginHorizontal: "auto",
    maxWidth: 360,
    padding: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  grid: {
    marginTop: 6,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  productContainer: {
    flexBasis: "48%", // Adjust this value as needed
    marginBottom: 10,
  },
  imageContainer: {
    aspectRatio: 1,
    overflow: "hidden",
    borderRadius: 8,
    backgroundColor: "#ccc",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  detailsContainer: {
    marginTop: 4,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  productName: {
    fontSize: 14,
    color: "#333",
    textAlign: "justify",
  },
  productColor: {
    marginTop: 1,
    fontSize: 12,
    color: "#555",
  },
  productPrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
});

export default Products;
