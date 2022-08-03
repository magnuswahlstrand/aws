import {describe, it} from "vitest";
import {taskr} from "../functions/taskr"

describe("sample", () => {
    it("should work", async () => {

        const a = await taskr.entities.employees.put({
            firstName: "John", office: "stockholm", team: "cool cats and kittens", title: "doctor",
            lastName: "Doe"
        }).go();

        const b = await taskr.entities.employees.get({
            employee: a.employee,
        }).go();

        console.log(b)

        // expect(true).toBe(a);
    });
});
