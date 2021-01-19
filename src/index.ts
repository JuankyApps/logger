import moment from "moment";

export class Logger {
  /**
   * Sends an info message
   * @param message Message to send
   */
  static info(message: string) {
    console.log(moment().format("DD/MM/YYYY HH:mm:ss") + " [INFO] " + message);
  }
  /**
   * Sends an error message
   * @param message Message to send
   */
  static error(message: string) {
    console.log(moment().format("DD/MM/YYYY HH:mm:ss") + " [ERR!] " + message);
  }
  /**
   * Sends a warning message
   * @param message Message to send
   */
  static warning(message: string) {
    console.log(moment().format("DD/MM/YYYY HH:mm:ss") + " [WARN] " + message);
  }
}
