import { useCallback, useRef, useState } from "react";
import { SafeAreaView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import ActionButton from "./components/ActionButton";
import { StatusContants } from "./constants/Status";
import TimeLapList from "./components/TimeLapList";
import { displayTime } from "./utils/displayTime";

export default function App() {
  const [time, setTime] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [timeList, setTimeList] = useState([]);
  const timer = useRef(null);

  const handleLapButtonPress = useCallback(() => {
    if (isStart) {
      setTimeList((prev) => [...prev, time]);
    } else {
      setTimeList([]);
      setTime(0);
    }
  }, [isStart, time]);

  const handleStartButtonPress = useCallback(() => {
    if (!isStart) {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 10);

      timer.current = interval;
    } else {
      clearInterval(timer.current);
    }
    setIsStart(!isStart);
  }, [isStart]);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.timer}>
          <Text style={styles.timerText}>{displayTime(time)}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <ActionButton onPress={handleLapButtonPress}>
            {isStart ? "Lap" : "Reset"}
          </ActionButton>
          <ActionButton
            onPress={handleStartButtonPress}
            action={isStart ? StatusContants.STOP : StatusContants.START}
          >
            {isStart ? StatusContants.STOP : StatusContants.START}
          </ActionButton>
        </View>
        <TimeLapList timeList={timeList} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  timer: {
    paddingVertical: 100,
  },
  timerText: {
    fontSize: 58,
    textAlign: "center",
  },
  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },
});
