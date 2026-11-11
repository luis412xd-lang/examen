import { Image, Text, TouchableOpacity } from "react-native";
import { Product } from "../infrastructure/interfaces/product.interface";

interface Props {
  product: Product;
  onPress: () => void;
}

export const ProductCard = ({ product, onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "white",
        padding: 15,
        margin: 10,
        borderRadius: 10,
        alignItems: "center",
      }}
    >
      <Image
        source={{ uri: product.image }}
        style={{ width: 120, height: 120 }}
        resizeMode="contain"
      />

      <Text style={{ fontSize: 16, fontWeight: "bold" }}>
        {product.name}
      </Text>

      <Text style={{ color: "green", fontSize: 18 }}>
        ${product.price.toFixed(2)}
      </Text>
    </TouchableOpacity>
  );
};