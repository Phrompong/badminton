import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("organizer", "./pages/organizer/index.tsx"),
  route("organizer/form", "./pages/organizer/organizerForm.tsx"),
  route("organizer/player", "./pages/organizer/player.tsx"),
  route("users", "./pages/users/index.tsx"),
] satisfies RouteConfig;
