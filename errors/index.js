'use strict';
let ValidationError = require('./validation-error');


function handleException(err, next) {
    let message = err.message;
    let status = 500;
    if (err instanceof ValidationError) {
        status = 412;
    }
  
    if(err.errors) {
        console.log(err.errors);
    }

    next({message: message, status: status});
}

module.exports = {
    ValidationError,
    handleException
};

