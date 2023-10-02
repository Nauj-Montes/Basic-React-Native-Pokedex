import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "transparent",
  },
  cardContainer: {
    backgroundColor: "#fff",
    elevation: 3,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: -11,
    left: -26,
  },
  icon: {
    marginRight: 12,
  },
  statContainer: {
    marginBottom: 16,
  },
  statName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  progressBarContainer: {
    height: 10,
    backgroundColor: "#EAEAEA",
    borderRadius: 5,
    marginTop: 4,
  },
  progressBar: {
    height: "100%",
    borderRadius: 5,
  },
  baseStat: {
    fontSize: 16,
    color: "gray",
  },
});
