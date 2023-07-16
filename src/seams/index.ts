import type { Config } from "./config/types";
import { initDB } from "./db";

export let seamsConfig: Config;
export const init = async (config: Config) => {
    seamsConfig = config;
    initDB(config.collections);
};