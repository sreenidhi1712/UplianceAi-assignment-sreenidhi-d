import { Box, Button, Paper } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";
import { useDispatch, useSelector } from "react-redux";
import { LineChart } from "@mui/x-charts/LineChart";
import { useState } from "react";
import { increment, decrement, reset } from "../GlobalData/CounterSlice";

const Counter = () => {
  const count = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();
  const [history, setHistory] = useState<number[]>([0]); // Stores counter values over time

  const backgroundStyle = useSpring({
    backgroundColor: `rgba(0, 0, 255, ${count.counterValue * 0.1 / 10})`,
    config: { tension: 200, friction: 20 },
  });

  const handleIncrement = () => {
    dispatch(increment());
    setHistory((prev) => [...prev, count.counterValue + 1]); // Add new value to history
  };

  const handleDecrement = () => {
    dispatch(decrement());
    setHistory((prev) => [...prev, count.counterValue - 1]); // Add new value to history
  };

  const handleReset = () => {
    dispatch(reset());
    setHistory([0]); // Reset the history
  };

  return (
    <animated.div style={{ ...backgroundStyle, padding: 20, borderRadius: 5, display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
      <h2 style={{ color: "black" }}>Counter: {count.counterValue}</h2>
      <Box display="flex" gap="1rem" mb={3}>
        <Button variant="contained" onClick={handleIncrement} style={{ backgroundColor: "green" }}>
          +
        </Button>
        <Button variant="contained" onClick={handleReset} style={{ backgroundColor: "orange" }}>
          Reset
        </Button>
        <Button variant="contained" onClick={handleDecrement} style={{ backgroundColor: "red" }}>
          -
        </Button>
      </Box>

      {/* Chart Component */}
      <Paper elevation={3} style={{ padding: 20, width: "90%", maxWidth: "500px" }}>
        <LineChart
          xAxis={[{ data: history.map((_, index) => index) }]} // X-axis as time (step count)
          series={[{ data: history, label: "Counter Value", color: "blue" }]}
          width={400}
          height={250}
        />
      </Paper>
    </animated.div>
  );
};

export default Counter;
