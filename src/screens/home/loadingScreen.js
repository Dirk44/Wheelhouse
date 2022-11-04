import { useEffect, useRef } from "react";
import { Animated, SafeAreaView, Image, View } from "react-native";
import { loadingScreenStyles } from "../../stylesheets";

// const Logo = ({ scale = 1 }) => (
//   <Animated.View
//     style={[
//       {
//         flex: 1,
//         width: "45%",
//         height: 53,
//         backgroundColor: "black",
//         transform: [{ scale }],
//       },
//     ]}
//   />
// );

const usePulse = () => {
  const scale = useRef(new Animated.Value(1)).current;

  const pulse = () => {
    Animated.sequence([
      Animated.timing(scale, { toValue: 1.2, useNativeDriver: true }),
      Animated.timing(scale, { toValue: 0.8, useNativeDriver: true }),
    ]).start(() => pulse());
  };

  useEffect(() => {
    const timeout = setTimeout(() => pulse(), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return scale;
};

const LoadingScreen = () => {
  const scale = usePulse();
  //   const scale2 = usePulse();

  return (
    <SafeAreaView style={loadingScreenStyles.container}>
      {/* <View> */}
      <Animated.View scale={scale} style={loadingScreenStyles.logoContainer}>
        <Image
          source={require("../../assets/wh-logo-text.png")}
          style={loadingScreenStyles.logo}
        />
      </Animated.View>
      {/* </View> */}
    </SafeAreaView>
  );
};

export default LoadingScreen;
