import { StyleSheet, Text, View } from "react-native";
import EmaiPassAuth from "./EmaiPassAuth";
import Products from "./Products";
import Singleproduct from "./Singleproduct";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const Stack = createStackNavigator();
const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="">
          <Stack.Screen name="Home" component={EmaiPassAuth} />
          <Stack.Screen name="Details" component={Products} />
          <Stack.Screen name="single" component={Singleproduct}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>

    //   <View style={styles.container}>
    //  <Products />
    //   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
