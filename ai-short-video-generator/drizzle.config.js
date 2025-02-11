/** @type { import("drizzle-kit").Config} */

export default {
  schema: "./configs/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_PH1a7TlGtIQw@ep-white-resonance-a87pfqlp-pooler.eastus2.azure.neon.tech/ai-short-video-generator?sslmode=require'
  }
};
