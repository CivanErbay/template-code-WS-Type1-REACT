module.exports = {
  mount: {
    public: { url: "/", static: true },
    src: { url: "/dist" },
  },
  plugins: [["@snowpack/plugin-build-script", { cmd: "postcss", input: [".css"], output: [".css"] }]],
};
