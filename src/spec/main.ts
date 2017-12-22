// configure logger for testing
import * as log4js from 'log4js';
import { Config } from '../index';

(log4js['setGlobalLogLevel'] || (() => {}))('OFF');
Config.setLogger(log4js.getLogger());

// export main dist entrypoint
export * from '../index';