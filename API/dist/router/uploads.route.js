"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeRoute = void 0;
const employee_controller_1 = require("../controller/employee.controller");
class EmployeeRoute {
    constructor() {
        this.employeeController = new employee_controller_1.EmployeeController();
    }
    routes(app) {
        /*Esto es para el administrador*/
        // app.put('/fegui_sajusa/api/v1/:tipo/:id',[employeeJWT],  this.uploadController.load );
    }
}
exports.EmployeeRoute = EmployeeRoute;
