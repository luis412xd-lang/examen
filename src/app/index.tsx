import { useEffect, useState } from "react";
import {
  ActivityIndicator, Button,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import { Product } from "../infrastructure/interfaces/product.interface";
import { getProducts } from "../services/actions/get-products";

export default function Index() {
  const [products, setProducts] = useState<Product[]>([]);
  const [detalle, setDetalle] = useState<Product | null>(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(() => setError(true))
      .finally(() => setCargando(false));
  }, []);

  if (cargando) return <ActivityIndicator size="large" />;

  if (error) return <Text>Error al cargar productos</Text>;

 
  if (detalle) {
    return (
      <ScrollView style={{ padding: 20 }}>
        <Button title="Volver" onPress={() => setDetalle(null)} />

        <Image
          source={{ uri: detalle.image }}
          style={{ width: 200, height: 200, alignSelf: "center" }}
          resizeMode="contain"
        />

        <Text style={{ fontSize: 22 }}>{detalle.name}</Text>
        <Text>Precio: ${detalle.price}</Text>
        <Text>Categoría: {detalle.category}</Text>
        <Text>Descripción: {detalle.description}</Text>
      </ScrollView>
    );
  }

  
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 24, textAlign: "center" }}>
        Mis Productos
      </Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setDetalle(item)}
            style={{
              padding: 15,
              margin: 10,
              backgroundColor: "white",
              borderRadius: 10,
            }}
          >
            <Image
              source={{ uri: item.image }}
              style={{ width: 100, height: 100 }}
              resizeMode="contain"
            />

            <Text>{item.name}</Text>
            <Text>Precio: ${item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}