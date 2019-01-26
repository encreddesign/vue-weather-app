/**
 * Plugin to load environment variables, and pass to Vue
 */
import dotenv from 'dotenv';

dotenv.config();

export default ({ app }, inject) => {
  inject('getEnv', (key: string) => process.env[key] ? process.env[key] : null);
}
