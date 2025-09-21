(function (moduleName, env, definition) {
  if (typeof module !== "undefined" && module.exports) {
    // module.exports = definition();
    // env = definition(); // -> exports = module.exports
    env[moduleName] = definition(); // -> exports = module.exports
  } else {
    // window[moduleName] = definition();
    env[moduleName] = definition();
  }
})("myModule", this, function () {
  let api = {
    add: (x, y) => {
      return x + y;
    },
  };
  return api;
});

// this -> window
// this -> exports

// function apiFun() {
//   let api = {
//     add: (x, y) => {
//       return x + y;
//     },
//   };
//   return api;
// }

// path
//  os
//

// function jj(fun) {
//   fun();
// }

// jj(kk);

// function kk() {}
