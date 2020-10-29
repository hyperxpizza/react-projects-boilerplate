import React from 'react';
import { render } from 'react-dom';

const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Luna2",
      animal: "Dog2",
      breed: "Havanese3",
    }),
    React.createElement(Pet, {
      name: "LOL",
      animal: "Dog3",
      breed: "Havanese3",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
