import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#343a40",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#f8f9fa",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    padding: 15,
    fontSize: 18,
    backgroundColor: "#f8f9fa",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  addButton: {
    backgroundColor: "#20c997",
    padding: 15,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#f8f9fa",
  },
  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    padding: 15,
    borderRadius: 5,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  taskTextContainer: {
    flex: 1,
    marginRight: 10,
  },
  taskText: {
    fontSize: 18,
  },
  completedTask: {
    fontSize: 18,
    textDecorationLine: "line-through",
    color: "#adb5bd",
  },
  deleteButton: {
    backgroundColor: "#e63946",
    padding: 8,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  deleteButtonText: {
    color: "#f8f9fa",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
