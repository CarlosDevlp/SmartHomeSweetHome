import {STATUS} from '../models/status';

export function successAction(data, message = "OK") {
  return { statusCode: STATUS.SUCCESS, data, message };
}

export function failAction(message) {
  return { statusCode: STATUS.FAILURE, message };
}
