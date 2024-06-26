import { getDatabase, ref, set } from "firebase/database";
import { chocolates } from "../../data.jsx";
import app from "./firebase";

const db = getDatabase(app);

export const uploadJson = async () => {
  try {
    await set(ref(db, "products/"), chocolates);
    console.log("Attempting to upload data to Firebase...");
    console.log("Data successfully uploaded to Firebase");
  } catch (error) {
    console.error("Error uploading data to Firebase", error);
  }
};

uploadJson();
