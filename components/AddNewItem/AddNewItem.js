import {
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/reducers/todos/todos";
import { useState } from "react";

function AddNewItem({ navigation }) {
  const changeThemes = useSelector((state) => state.themes.theme.darkMode);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  return (
    <View
      style={[
        styles.containerAddNewItem,
        changeThemes ? styles.containerTodo : styles.lightTodo,
      ]}
    >
      <View style={{ gap: "8px" }}>
        <Text style={changeThemes ? styles.textDark : styles.textLight}>
          what to do:
        </Text>
        <TextInput
          multiline
          onChange={(e) => setInputValue(e.target.value)}
          style={styles.txtInput}
          placeholder="Do this and that."
        />
      </View>

      <TouchableWithoutFeedback
        onPress={() => {
          if (inputValue.length != 0) {
            dispatch(addItem({ todo: inputValue }));
            navigation.navigate("TODO");
          }
        }}
      >
        <Text
          style={[
            styles.btnAdd,
            changeThemes ? styles.textBtnDark : styles.textBtnLight,
          ]}
        >
          Add
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
}
const styles = StyleSheet.create({
  textBtnLight: {
    color: "#38373D",
    backgroundColor: "#7935CF",
  },
  textBtnDark: {
    color: "#DFDEE9",
    backgroundColor: "#413A4A",
  },

  textLight: { color: "#38373D" },

  textDark: { color: "#DFDEE9" },

  lightTodo: {
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "16px",
    height: "100vh",
    backgroundColor: "#B6B0D7",
  },

  containerTodo: {
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "16px",
    height: "100vh",
    backgroundColor: "#555266",
  },

  containerAddNewItem: {
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "16px",
    paddingBottom: "10px",
    backgroundColor: "#555266",
    height: "100vh",
    color: "#fff",
  },
  txtInput: {
    borderColor: "transparent",
    width: "100%",
    height: "80px",
    borderRadius: "8px",
    backgroundColor: "#DFDEE9",
    paddingTop: "12px",
    paddingBottom: "12px",
    paddingLeft: "16px",
    paddingRight: "16px",
  },

  btnAdd: {
    width: "70px",
    height: "40px",
    textAlign: "center",
    borderRadius: "100px",
    padding: "10px",
    marginTop: "13px",
  },
});

export default AddNewItem;
