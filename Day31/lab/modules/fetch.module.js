(function (moduleName, env, callback) {
  if (typeof module !== "undefined" && module.exports) {
    env[moduleName] = callback(); // -> exports = module.exports
  } else {
    env[moduleName] = callback();
  }
})("fetchModule", this, () => {
  let apiFetch = {
    fetch: async (url) => {
      return await fetch(url).json();
    },
  };
  return apiFetch;
});
