import { GoogleGenAI, Type } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generatePizzaConcept = async (ingredients: string[]): Promise<any> => {
  if (!apiKey) {
    console.warn("No API Key provided for Gemini.");
    return {
      name: "The Mystery Missing Key",
      description: "We couldn't reach the flavor lab without a key, but imagine the most delicious pizza ever!",
      funFact: "Did you know API keys unlock flavor dimensions?"
    };
  }

  try {
    const model = 'gemini-2.5-flash';
    const prompt = `Create a fun, wacky, and delicious pizza concept using these ingredients: ${ingredients.join(', ')}. 
    Give it a creative name, a mouth-watering description, and a silly fun fact about this creation.`;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        systemInstruction: "You are a wacky, energetic Italian pizza chef named Luigi. You love inventing crazy new pizzas.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING },
            description: { type: Type.STRING },
            funFact: { type: Type.STRING }
          },
          required: ["name", "description", "funFact"]
        }
      }
    });

    const text = response.text;
    if (!text) return null;
    return JSON.parse(text);

  } catch (error) {
    console.error("Error generating pizza concept:", error);
    return {
        name: "The Glitch in the Matrix",
        description: "Something went wrong in the kitchen, but we promise it tastes like static electricity and pepperoni.",
        funFact: "Even AI chefs burn the toast sometimes."
    };
  }
};
