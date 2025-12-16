import { render } from "preact";
import App from "./app";

/**
 * Main entry point of the application.
 * Renders the App component into the root container.
 */
const container = document.getElementById("root");
if (container) {
  render(<App />, container);
}