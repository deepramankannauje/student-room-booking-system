const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// Test database connection
const testConnection = async () => {
  try {
    // Replace "users" with any table that exists in your database
    const { error } = await supabase
      .from("users")
      .select("*")
      .limit(1);

    if (error) {
      console.log("❌ Supabase Connection Failed");
      console.log(error.message);
    } else {
      console.log("✅ Supabase Connected Successfully");
    }
  } catch (err) {
    console.log("❌ Unable to connect to Supabase");
    console.log(err.message);
  }
};

testConnection();

module.exports = supabase;