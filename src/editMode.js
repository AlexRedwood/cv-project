import information from "./information.js";

let keys = Object.keys(information);
let editMode = {};

keys.forEach((key) => {
  editMode[key] = false;
});

export default editMode;
