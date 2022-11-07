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
  EmailConfirmation,
} from "../screens";
import { ROUTES } from "../constants";
import AuthStack from "../navigation/AuthStack";

const Stack = createStackNavigator();

const linking = {
  prefixes: ["https://wheelhouse.com", "wheelhouse://"],
  config: {
    Home: " ",
    SignIn: "signin",
    SignUp: "signup",
    ForgotPassword: "forgotpassword",
    ConfirmAccount: "confirmaccount",
    ResetPassword: "resetpassword",
    SignOut: "signout",
    UpcomingShows: "upcomingshows",
    Clips: "clips",
    Store: "store",
    WaitList: "waitlist",
    PlayVideoScreen: "playvideoscreen",
    PlayClipsScreen: "playclipsscreen",
    RentSeries: "rentseries",
    GladiatorsLanding: "gladiatorslanding",
    Episodes: "episodes",
    Cart: "cart",
    ThankYou: "thankyou",
    EmailConfirmation: "emailconfirmation",
  },
};

function HomeStack() {
  return (
    <Stack.Navigator
      linking={linking}
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
      <Stack.Screen
        name={ROUTES.EMAIL_CONFIRMATION}
        component={EmailConfirmation}
      />
      {/* <Stack.Screen
        name={ROUTES.EMAIL_CONFIRMATION_HOME}
        component={HomePage}
      /> */}
      <Stack.Screen name={ROUTES.SIGNUP_HOME} component={GoogleSignIn} />
      <Stack.Screen name={ROUTES.SIGNIN_HOME} component={AuthStack} />
    </Stack.Navigator>
  );
}

export default HomeStack;
