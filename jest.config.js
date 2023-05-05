module.exports = {
  moduleFileExtensions: ['vue', 'js', 'json'],

  moduleNameMapper: {
    '^/@/(.*)$': '<rootDir>/src/',
  },

  transform: {
    "^.+\\.jsx?$": "babel-jest",
     '^.+\\.vue$': '@vue/vue3-jest',
  },


};
