import { nanoid } from "nanoid";

export const randomeString = () => {
  try {
    return nanoid(7);
  } catch (error) {
    console.log(`Nano id : ${error}`);
  }
};
