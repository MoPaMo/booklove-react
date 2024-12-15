module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  if (config.mode === "development") {
    config.devServer.proxy = {
      "/quiz": {
        // Adjust the path to match your API endpoints
        target: "https://api.getbooklove.app",
        secure: true, // Set to true if the target uses HTTPS
        changeOrigin: true,
        logLevel: "debug",
      },
    };
  }

  return config;
};
