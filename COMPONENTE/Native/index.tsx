import { Horizontal } from "./components/Horizontal";
import { Main } from "./components/Main";
import { Vertical } from "./components/Vertical";
import { ViewBase } from "./components/ViewBase";

export const Container = Object.assign(ViewBase, {
  Horizontal,
  Vertical,
  Main,
});
