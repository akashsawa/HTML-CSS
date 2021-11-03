'use strict';

const fs = require('fs');

const dateFormat = date => {
  const days = ['Sunday', 'Monday', 'Tuseday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'September', 'October', 'November', 'December'];
  return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
};


const filterEmployees = (empid, empFilePath, resFilePath, callback) => {
  fs.stat(empFilePath, (errEmpStat, statEmp) => {
    if(errEmpStat) {
      return callback("Employee file stat error : ", errEmpStat);
    }
    console.log("Hi stat");
    fs.open(empFilePath, 'w+', (errEmpOpen, fdEmp) => {
      if (errEmpOpen) {
        return callback("Employee file open error : ", errEmpOpen);
      }
      console.log("Hi Open", statEmp);
      const bufferEmp = Buffer.alloc(statEmp.size);
      fs.read(fdEmp, bufferEmp, 0, bufferEmp.length, null, (errEmpRead, bytesEmp) => {
        if (errEmpOpen) {
          return callback("Employee file read error : ", errEmpRead);
        }
        console.log("Hi Read", bytesEmp, bufferEmp);
        if (bytesEmp > 0) {
          let employees = bufferEmp.toString().split("\r\n");
          let resignedEmployee = employees.filter(emp => {
            return emp.split(":")[0] === `${empid}`;
          });
          if (resignedEmployee.length === 0) {
            return callback("Employee not found.");
          }
          resignedEmployee = resignedEmployee.join("\r\n");
          employees = employees.filter(emp => emp.split(":")[0] !== `${empid}`).join("\r\n");
          console.log(employees);
          fs.write(fdEmp, employees, 0, (errEmpWrite) => {
            if(errEmpWrite) {
              return callback("Employee file updation error: ", errEmpWrite);
            }
            console.log("Hi write");
            console.log("Employee file saved.");
          });
          resignedEmployee += ":"+(dateFormat(new Date()))+"\r\n";
          fs.appendFile(resFilePath, resignedEmployee, errRegWrite => {
            if (errRegWrite) {
              return callback("Resigned Employee file write error : ", errRegWrite);
            }
            console.log("Resigned Employee file saved.");
            callback(null, "Employee and Resigned Employee File updated.");
          });
        }
        fs.close(fdEmp, (errEmpClose) => {
          if(errEmpClose) {
            throw new Error("Error closing employee file. ", errEmpClose);
          }
        });
      });
    });
  });
};

module.exports = filterEmployees;

/**
 * Usage:
 * appendEmployee(sourcefilepath, targetFilePath, callback);
 */

filterEmployees("1002", "../data/employees.txt", "../data/resigned_employees.txt", (error, result) => {
  error ? console.log(error) : console.log(result);
});
