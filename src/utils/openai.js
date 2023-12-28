import OpenAI from "openai";
import { API_KEY } from "./constants";

console.log("API_KEY:", API_KEY);

const openai = new OpenAI({
  apiKey: API_KEY,
  dangerouslyAllowBrowser: true,
});

export default openai;
