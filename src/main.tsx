import { render } from "preact";
import App from "./app";

const container = document.getElementById("root");
if (container) {
  render(<App />, container);
}