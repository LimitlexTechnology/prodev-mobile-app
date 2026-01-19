import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchGroup: {
    backgroundColor: "#34967C",
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
  },
  searchControlGroup: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  searchFormText: {
    fontSize: 16,
    fontWeight: "400",
  },
  searchControl: {
    marginTop: 5,
  },
  searchButton: {
    backgroundColor: "#000",
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  filterGroup: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    columnGap: 15,
  },
  filterContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 50,
  },
  listingContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  paginationContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  showMoreButton: {
    backgroundColor: "#34967C",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
  },
  showMoreButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});

export { styles };
