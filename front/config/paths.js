const path = require('path')

module.exports = {
  // Source files
  src: path.resolve(__dirname, '../src'),

  // Production build files
  prod: path.resolve(__dirname, '../prod'),

  // Static files that get copied to build folder
  public: path.resolve(__dirname, '../public'),

  // Server dest
  dev: path.resolve(__dirname, "../../back/dev")
}
