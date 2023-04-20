/* eslint-disable no-unused-vars */
import logger from '../logger/logger.js';
import errorCodes from '../utils/ErrorCode.js';

export const errorLogger = (error, req, res, next) => {
  logger.errorLogger.log('error', `${error.errorsArray.map((item) => errorCodes(item.msg))}`);
};
