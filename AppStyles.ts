import { StyleSheet } from "react-native";

interface StylesProps {
  container: object;
  title: object;
  inputContainer: object;
  input: object;
  addButton: object;
  addButtonText: object;
  task: object;
  taskTextContainer: object;
  taskText: object;
  completedTask: object;
  deleteButton: object;
  deleteButtonText: object;
  prioritySelector: object;
  priorityButton: object;
  activePriority: object;
  priorityButtonText: object;
  high: object;
  medium: object;
  low: object;
  [key: string]: any;
}

const styles: StylesProps = StyleSheet.create({
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
    marginTop: 60,
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
  prioritySelector: {
    flexDirection: "row",
    marginVertical: 10,
  },
  priorityButton: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: "#e9ecef",
  },
  activePriority: {
    backgroundColor: "#20c997",
  },
  priorityButtonText: {
    fontSize: 16,
    color: "#343a40",
  },
  high: {
    borderColor: "#e63946",
    borderWidth: 2,
  },
  medium: {
    borderColor: "#f8f9fa",
    borderWidth: 1,
  },
  low: {
    borderColor: "#20c997",
    borderWidth: 2,
  },
  filterContainer: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "space-between"
  },
  filterButton: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: "#e9ecef",
  },
  activeFilter: {
    backgroundColor: "#20c997",
  },
  filterButtonText: {
    fontSize: 16,
    color: "#343a40",
  },

  // Modal Styles
  modalContainer: {
    position: "absolute",
    top: 100,
    left: 20,
    right: 20,
    backgroundColor: "#f8f9fa",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 1000,
  },
  modalButton: {
    padding: 10,
    backgroundColor: "#e9ecef",
    borderRadius: 5,
    marginBottom: 10,
    alignItems: "center"
  },
  closeModalButton: {
    padding: 10,
    backgroundColor: "#e63946",
    borderRadius: 5,
    alignItems: "center"
  },
  closeModalText: {
    color: "#f8f9fa",
    fontSize: 16,
    fontWeight: "bold",
  },  
});

export default styles;
