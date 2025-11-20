import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Shimmer from "../components/Shimmer.tsx";
import { Layout } from "../Layout.tsx";

const Auth = lazy(() => import("../pages/AuthPage.tsx"));
const SelectUserType = lazy(() => import("../pages/SelectUserType.tsx"));
const CreatorSignUp = lazy(() => import("../pages/SignupCreator.tsx"));
const OrganizerSignup = lazy(() => import("../pages/SignupOrganizer.tsx"));
const UserSignup = lazy(() => import("../pages/SignupUser.tsx"));
const Login = lazy(() => import("../pages/LoginPage.tsx"));
const Signup = lazy(() => import("../pages/SignupPage.tsx"));
const Home = lazy(() => import("../pages/HomePage.tsx"));
const Events = lazy(() => import("../pages/Events.tsx"));
const Bookings = lazy(() => import("../pages/Bookings.tsx"));
const Revenue = lazy(() => import("../pages/Revenue.tsx"));
const Settings = lazy(() => import("../pages/Settings.tsx"));
const Creators = lazy(() => import("../pages/Creators.tsx"));
const CreatorProfilePage = lazy(() => import("../pages/CreatorProfilePage.tsx"));
const NotFound = lazy(() => import("../pages/NotFound.tsx"));

export default function Router() {
  return (
    <Suspense fallback={<Shimmer />}>
      <Routes>
        <Route path="/signup-user/" element={<SelectUserType />} />
        <Route path="/signup/creator" element={<CreatorSignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup/organizer" element={<OrganizerSignup />} />
        <Route path="/signup/user" element={<UserSignup />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route path="creators" element={<Creators />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="revenue" element={<Revenue />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/creator/:id" element={<CreatorProfilePage />} />
      </Routes>
    </Suspense>
  );
}
