import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  HomePage,
  UpcomingShows,
  WaitList,
  Clips,
  Store,
  PlayVideoScreen,
  PlayClipsScreen,
  RentSeries,
  GladiatorsLanding,
  Episodes,
  Cart,
  ThankYou,
  SignUp,
  SignIn,
  GoogleSignIn,
  JSI,
  EmailConfirmation,
} from "../screens";
import { ROUTES } from "../constants";
import AuthStack from "../navigation/AuthStack";

const Stack = createStackNavigator();

const linking = {
  prefixes: ["https://wheelhouse.com", "wheelhouse://"],
  config: {
    Home: " ",
    SignIn: ":id/signin",
    SignUp: ":id/signup",
    ForgotPassword: ":id/forgotpassword",
    ConfirmAccount: ":id/confirmaccount",
    ResetPassword: ":id/resetpassword",
    SignOut: ":id/signout",
    UpcomingShows: ":id/upcomingshows",
    Clips: ":id/clips",
    Store: ":id/store",
    WaitList: ":id/waitlist",
    PlayVideoScreen: ":id/playvideoscreen",
    PlayClipsScreen: ":id/playclipsscreen",
    RentSeries: ":id/rentseries",
    GladiatorsLanding: ":id/gladiatorslanding",
    Episodes: ":id/episodes",
    Cart: ":id/cart",
    ThankYou: ":id/thankyou",
    EmailConfirmation: ":id/emailconfirmation",
  },
};

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.HOME}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name={ROUTES.HOME}
        component={HomePage}
        // options={{
        //   gestureDirection: "horizontal",
        //   gestureResponseDistance: 50,
        // }}
      />

      <Stack.Screen name={ROUTES.UPCOMINGSHOWS} component={UpcomingShows} />
      <Stack.Screen name={ROUTES.CLIPS} component={Clips} />
      <Stack.Screen name={ROUTES.GLADIATORS} component={GladiatorsLanding} />
      <Stack.Screen name={ROUTES.RENTAL} component={RentSeries} />
      <Stack.Screen name={ROUTES.EPISODES} component={Episodes} />
      <Stack.Screen name={ROUTES.STORE} component={Store} />
      <Stack.Screen name={ROUTES.WAITLIST} component={WaitList} />
      <Stack.Screen name={ROUTES.VIDEO} component={PlayVideoScreen} />
      <Stack.Screen name={ROUTES.CLIPS_VIDEO} component={PlayClipsScreen} />
      <Stack.Screen name={ROUTES.CART} component={Cart} />
      <Stack.Screen name={ROUTES.THANKYOU} component={ThankYou} />
<<<<<<< HEAD
<<<<<<< HEAD
      <Stack.Screen name={ROUTES.SIGNUP_HOME} component={JSI} />
=======
      <Stack.Screen
        name={ROUTES.EMAIL_CONFIRMATION}
        component={EmailConfirmation}
      />
      {/* <Stack.Screen
        name={ROUTES.EMAIL_CONFIRMATION_HOME}
        component={HomePage}
      /> */}
=======
>>>>>>> 5213e65 (`added jsi, not rendering)
      <Stack.Screen name={ROUTES.SIGNUP_HOME} component={GoogleSignIn} />
>>>>>>> 9348b4d (Added welcome and thank you pages)
      <Stack.Screen name={ROUTES.SIGNIN_HOME} component={AuthStack} />
    </Stack.Navigator>
  );
}

export default HomeStack;
