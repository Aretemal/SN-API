import dotenv from 'dotenv';
import errorCodes from '../utils/ErrorCode.js';

dotenv.config();

class ErrorSerializer {
  constructor(errorsArray, title) {
    this.errorsArray = errorsArray;
    this.title = title;
  }

  serialize() {
    return {
      errors:
        this.errorsArray.map((item) => {
          const data = {
            status: item.msg,
            title: this.title,
            detail: errorCodes(item.msg),
          };
          if (item.location && item.param) {
            data.source = {
              pointed: `${item.location}/${item.param}`,
            };
          }
          return data;
        }),
    };
  }
}
export default ErrorSerializer;
