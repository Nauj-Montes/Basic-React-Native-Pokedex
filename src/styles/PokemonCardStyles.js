import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  card: {
    width: "47%",
    height: 135,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 5,
    marginVertical: 10,
    elevation: Platform.OS === "android" ? 8 : 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#f2f2f2",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardNumber: {
    fontSize: 12,
    color: "#000",
    fontWeight: "bold",
  },
  cardName: {
    fontSize: 12,
    color: "#000",
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  cardBody: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  cardBodyType: {
    position: "absolute",
    top: 0,
    left: 0,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  cardBodyTypeText: {
    fontSize: 10,
    color: "#fff",
    textTransform: "uppercase",
  },
  cardBodyImage: {
    aspectRatio: 1,
    width: 120,
    height: 120,
  },
});
