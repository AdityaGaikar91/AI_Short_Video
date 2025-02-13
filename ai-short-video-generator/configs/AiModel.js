const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  

   export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Write a script to generate 30 seconds video on topic: Interesting historical story along with AI image prompt in Realistic format for each scene and give me resullt in JSON format with imagePrompt and ContentText as field"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n[\n  {\n    \"imagePrompt\": \"Exterior shot of a bustling, medieval shipyard in Venice, Italy, circa 1400.  Massive wooden galleys are under construction.  Smoky sky.  Lots of activity: shipwrights hammering, sailors loading cargo, merchants inspecting goods.  Detailed textures of wood, rope, and canvas.  Golden hour lighting.  Realistic, highly detailed.\",\n    \"ContentText\": \"(Scene opens with a sweeping shot of a Venetian shipyard. Upbeat, dramatic music starts.)  Narrator: \\\"Venice, 1400. A powerhouse of trade and innovation. But Venice faced a problem: building ships fast enough to dominate the seas.\\\"\"\n  },\n  {\n    \"imagePrompt\": \"Close-up, extreme detail, of a numbered diagram carved into a wooden plank.  The diagram shows a simplified section of a ship's hull. Tools lying nearby: a chisel, a hammer, a ruler. Warm, diffused lighting.\",\n    \"ContentText\": \"Narrator: \\\"Their solution? A radical idea: mass production.  They created standardized ship parts, each meticulously numbered and designed to fit together perfectly.\\\"\"\n  },\n  {\n    \"imagePrompt\": \"Medium shot of a line of shipwrights, each working on a specific, identical ship component. Some are shaping timbers, others are fitting planks.  Each station is organized with tools specific to their task.  Uniform lighting.  Realistic, slightly grimy look.\",\n    \"ContentText\": \"Narrator: \\\"Imagine an assembly line, centuries before Henry Ford.  Each worker became a specialist, focusing on a single part of the ship.\\\"\"\n  },\n  {\n    \"imagePrompt\": \"Wide shot of a completed Venetian galley launching into the sea.  Crowds cheering from the docks.  Flags waving.  The ship is beautifully detailed, reflecting the sunlight.  Clear blue sky.  Realistic, slightly cinematic.\",\n    \"ContentText\": \"Narrator: \\\"The result? Venice could launch a fully equipped warship in a single day! This unprecedented speed gave them an undeniable advantage in trade and warfare.\\\"\"\n  },\n    {\n    \"imagePrompt\": \"Close-up shot of a map of the Mediterranean Sea, highlighting key Venetian trade routes.  Lines of ships move along the routes.  Realistic, aged parchment texture.\",\n    \"ContentText\": \"Narrator: \\\"Venice's efficiency fueled their expansion, establishing trade routes across the Mediterranean and building an empire on the back of shipbuilding innovation.\\\"\"\n  },\n    {\n    \"imagePrompt\": \"Over-the-shoulder shot of a modern engineer looking at a holographic projection of a Venetian galley.  The engineer is in a modern office.  Realistic, futuristic aesthetic.\",\n    \"ContentText\": \"Narrator: \\\"The Venetian Arsenal stands as a testament to the power of innovation. Their assembly line changed shipbuilding forever and laid the groundwork for modern manufacturing.\\\"\"\n  }\n]\n```"},
          ],
        },
      ],
    });