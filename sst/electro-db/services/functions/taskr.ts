import * as Dynamo from "./dynamo";
import EmployeeModel from "./models/employees";
import TaskModel from "./models/tasks";
import OfficeModel from "./models/offices";
import {Entity, Service} from "electrodb";

const table = "electro";

const employees = new Entity(EmployeeModel)
const tasks = new Entity(TaskModel);
const offices = new Entity(OfficeModel);

/**
 * Create a new Service instance
 **/
export const taskr = new Service({employees, tasks, offices}, Dynamo.Configuration);
