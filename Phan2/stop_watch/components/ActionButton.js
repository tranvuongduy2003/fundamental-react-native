import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { StatusContants } from "../constants/Status";

const ActionButton = ({ action, onPress, children }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.actionButtonContainer,
        {
          borderColor:
            action === StatusContants.START
              ? "#67835e"
              : action === StatusContants.STOP
              ? "#df4637"
              : "#000000",
        },
      ]}
    >
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  actionButtonContainer: {
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
    borderRadius: 100,
  },
});

export default ActionButton;
