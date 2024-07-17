import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Svg, Path } from "react-native-svg";
import { useDispatch, useSelector } from "react-redux";
import { changeDone } from "../../redux/reducers/todos/todos";

function Todo({ navigation }) {
  const changeThemes = useSelector((state) => state.themes.theme.darkMode);
  const todosItem = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <View
      style={[
        styles.containerTodos,
        changeThemes ? styles.containerTodo : styles.lightTodo,
      ]}
    >
      {console.log(todosItem)}

      <View
        style={{
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        {todosItem.map((item) => (
          <View
            style={[
              {
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
                marginTop: "10px",
                marginBottom: "10px",
              },
              changeThemes ? styles.hrDark : styles.hrLight,
            ]}
          >
            <Text
              style={[
                {
                  marginBottom: "20px",
                },
                changeThemes ? styles.textAddTodoDark : styles.textAddTodoLight,
              ]}
              onPress={() => dispatch(changeDone({ id: item.id }))}
            >
              {item.text}
            </Text>

            <TouchableOpacity>
              <Svg
                style={[
                  {
                    opacity: item.isDone ? "100%" : "0",
                  },
                  { marginBottom: "20px" },
                ]}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  d="M10 16.4L6 12.4L7.4 11L10 13.6L16.6 7L18 8.4L10 16.4Z"
                  fill={changeThemes ? "#DFDEE9" : "#38373D"}
                />
              </Svg>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <View style={{ alignItems: "flex-end" }}>
        <TouchableOpacity
          style={[
            styles.btnAdd,
            changeThemes ? styles.btnAddDark : styles.btnAddLight,
          ]}
          onPress={() => navigation.navigate("Add New Item")}
        >
          {changeThemes === true ? (
            <Svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M11 13H5V11H11V5H13V11H19V13H13V19H11V13Z"
                fill="#DFDEE9"
              />
            </Svg>
          ) : (
            <Svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M11 13H5V11H11V5H13V11H19V13H13V19H11V13Z"
                fill="#38373D"
              />
            </Svg>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hrDark: {
    borderColor: "#FFFFFF26",
    borderBottomWidth: "1px",
  },

  hrLight: {
    borderColor: "#00000026",
    borderBottomWidth: "1px",
  },

  textAddTodoDark: {
    color: "#DFDEE9",
  },

  textAddTodoLight: {
    color: "#38373D",
  },

  containerTodos: {
    justifyContent: "space-between",
    paddingBottom: "90px",
  },

  lightTodo: {
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingTop: "16px",
    height: "100vh",
    backgroundColor: "#B6B0D7",
  },

  btnAddDark: {
    backgroundColor: "#413A4A",
  },

  btnAddLight: {
    backgroundColor: "#7935CF",
  },

  btnAdd: {
    alignItems: "center",
    justifyContent: "center",
    width: "48px",
    height: "48px",
    borderRadius: 48 / 2,
  },

  headerTodo: {
    backgroundColor: "#413A4A",
    height: "50px",
    width: "100vw",
    padding: "13px",
    flexDirection: "row",
    alignItems: "center",
  },

  containerTodo: {
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingTop: "16px",
    height: "100vh",
    backgroundColor: "#555266",
    textAlign: "center",
    alignItems: "flex-end",
  },
});

export default Todo;
