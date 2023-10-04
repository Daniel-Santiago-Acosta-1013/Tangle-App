import { StyleSheet } from "react-native";
import StylesProps from "../../types/styles.types";

const lightTheme = {
  backgroundColor: "#f8f9fa",
  textColor: "#343a40",
  inputBackgroundColor: "#e9ecef",
  buttonColor: "#20c997",
  buttonText: "#f8f9fa",
};

const darkTheme = {
  backgroundColor: "#343a40",
  textColor: "#f8f9fa",
  inputBackgroundColor: "#495057",
  buttonColor: "#20c997",
  buttonText: "#343a40",
};

const styles: StylesProps = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: lightTheme.backgroundColor,
  },
  darkContainer: {
    backgroundColor: darkTheme.backgroundColor,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: lightTheme.textColor,
    marginBottom: 20,
    marginTop: 60,
  },
  darkText: {
    color: darkTheme.textColor,
  },
  inputContainer: {
    marginBottom: 20,
    height: 280,
  },
  marginB: {
    marginBottom: 10,
  },
  input: {
    flex: 1,
    padding: 15,
    fontSize: 18,
    backgroundColor: lightTheme.inputBackgroundColor,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderWidth: 1, // Añadir bordes
    borderColor: "#aaa",
    color: lightTheme.textColor, // añadir color de texto para el modo claro
  },
  darkInput: {
    backgroundColor: darkTheme.inputBackgroundColor,
    color: darkTheme.textColor, // añadir color de texto para el modo oscuro
  },
  addButton: {
    backgroundColor: "#20c997",
    padding: 15,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    width: "100%",
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
    borderWidth: 1, // Añadir bordes
    borderColor: "#aaa",
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
    justifyContent: "space-between",
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
    top: "25%",
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
    alignItems: "center",
  },
  closeModalButton: {
    padding: 10,
    backgroundColor: "#e63946",
    borderRadius: 5,
    alignItems: "center",
  },
  closeModalText: {
    color: "#f8f9fa",
    fontSize: 16,
    fontWeight: "bold",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)", // Un fondo semitransparente
    zIndex: 999,
  },
  fullScreenButton: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },

  // Update Styles
  updateButton: {
    backgroundColor: "#FFD700",
    padding: 8,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  updateButtonText: {
    color: "#343a40",
    fontSize: 16,
    fontWeight: "bold",
  },

  // Theme Toggle
  themeToggle: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: lightTheme.buttonColor,
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  darkThemeToggle: {
    backgroundColor: darkTheme.buttonColor,
  },

  // Date Input
  dateInput: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#aaa",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    margin: 5,
  },
  darkDateInput: {
    backgroundColor: darkTheme.inputBackgroundColor,
  },
});

export { lightTheme, darkTheme };
export default styles;
