import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../redux/reducers/themes/themes";
import { Path, Rect, Svg } from "react-native-svg";
import { deleteAllItems } from "../../redux/reducers/todos/todos";

function Settings({ navigation }) {
  const changeThemes = useSelector((state) => state.themes.theme.darkMode);
  const dispatch = useDispatch();

  return (
    <View style={changeThemes ? styles.containerSetting : styles.lightSetting}>
      {console.log(changeThemes)}
      <View style={styles.section}>
        <Text style={changeThemes ? styles.textDark : styles.textLight}>
          dark mode:
        </Text>

        <TouchableOpacity
          style={changeThemes ? styles.darkCheckBox : styles.lightCheckBox}
          value={changeThemes}
          onPress={() => dispatch(changeTheme())}
        >
          {changeThemes === true ? (
            <Svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Rect
                x="15"
                y="15"
                width="18"
                height="18"
                rx="2"
                fill="#413A4A"
              />
              <Path
                d="M22 28.4L18 24.4L19.4 23L22 25.6L28.6 19L30 20.4L22 28.4Z"
                fill="#DFDEE9"
              />
            </Svg>
          ) : (
            <Svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Rect
                x="15"
                y="15"
                width="18"
                height="18"
                rx="2"
                fill="#7935CF"
              />
              <Path
                d="M22 28.4L18 24.4L19.4 23L22 25.6L28.6 19L30 20.4L22 28.4Z"
                fill="#38373D"
              />
            </Svg>
          )}
        </TouchableOpacity>
      </View>

      <View
        style={[styles.hr, changeThemes ? styles.hrDark : styles.hrLight]}
      />

      <Text
        onPress={() => {
          dispatch(deleteAllItems());
          navigation.navigate("TODO");
        }}
        style={[
          styles.txtDelete,
          changeThemes ? styles.txtDeleteDark : styles.txtDeleteLight,
        ]}
      >
        Delete All Items
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  hrDark: { borderColor: "#FFFFFF26" },
  hrLight: { borderColor: "#00000026" },

  txtDeleteLight: { color: "#BA1919" },
  txtDeleteDark: { color: "#EF7C7C" },

  textLight: { color: "#38373D" },
  textDark: { color: "#DFDEE9" },

  lightCheckBox: { color: "#B6B0D7" },

  darkCheckBox: { color: "#413A4A" },

  lightSetting: {
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "16px",
    height: "100vh",
    backgroundColor: "#B6B0D7",
  },

  containerSetting: {
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "16px",
    height: "100vh",
    backgroundColor: "#555266",
  },

  section: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  hr: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: "20px",
  },

  txtDelete: {
    fontWeight: 400,
    fontStyle: "italic",
    fontSize: "12px",
  },
  darkMode: {
    backgroundColor: "#413A4A",
    color: "#fff",
  },
});

export default Settings;
