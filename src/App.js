import React from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import UsereducerComponent from "./components/UsereducerComponent";

export default function App() {
  return (
    <>
      <div>App</div>
      <ErrorBoundary>
        <UsereducerComponent />
      </ErrorBoundary>
    </>
  );
}
