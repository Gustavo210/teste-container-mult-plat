import { router } from "expo-router";
import rotes from "./rotes.json";
type AppRoutes = Parameters<typeof router.push>[0];
// @ts-ignore
export const navigationButtons: AppRoutes[] = rotes as AppRoutes[];
