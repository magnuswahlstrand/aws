import {taskr} from "../services/functions/taskr"


(async () => {
    await taskr.entities.employees.get({employee: "123"}).go();
    // await taskr.entities.employees.put({
    //     birthday: "1980-05-11",
    //     dateHired: "1987-05-11",
    //     manager: "Joe",
    //     office: "calgary",
    //     salary: "100",
    //     team: "development",
    //     title: "doctor",
    //     employee: "123",
    //     firstName: "John",
    //     lastName: "Doe"
    // }).go();
})();
