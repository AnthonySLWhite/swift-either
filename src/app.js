import '@babel/polyfill';

/**
 * Execute Either utility
 *
 * @param {number} [withErr] - 1 If you want errors to be logged to the console
 * @returns {function} either - Error handling utility
 */
const swiftEither = (withErr = 0) => {
  /**
   * Runs callback code if everything goes on the right track
   *
   * If not, then it goes left
   *
   * @param {function} callback - Code to be executed
   * @returns {*} callback() - If no error occurs
   * @returns {string} msg - If an error occurs
   */
  const either = callback => {
    let calledLeft = 0;
    /**
     * ### If things don't go right then
     *
     * @param {string} msg - Error message
     * @param {function} [errorCallback] - **Optional** Callback
     */
    const left = (msg, errorCallback) => {
      errorCallback ? errorCallback(msg) : 0;
      withErr ? console.error(msg) : 0;
      calledLeft = 1;
      throw msg;
    };

    try {
      return callback
        ? callback(left)
        : console.error('No callback suplied!');
    } catch (e) {
      // If it was a Handled Error
      if (calledLeft) {
        return e;
      }
      // If it was an Unhandled Error
      const msg = `Unhandled Error: 
      ${e.message}`;
      withErr ? console.error(msg) : 0;
      return msg;
    }
  };
  return either;
};

export default swiftEither;
