import { View, Text, StyleSheet } from "react-native";

const TimeLap = ({ id, time }) => {
  return (
    <View style={styles.timeLapContainer}>
      <Text style={styles.timeLapText}>{`Lap #${id}`}</Text>
      <Text style={styles.timeLapText}>{time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timeLapContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginHorizontal: 20,
    backgroundColor: "#d3d3d3",
  },
  timeLapText: {
    fontSize: 24,
  },
});

export default TimeLap;
