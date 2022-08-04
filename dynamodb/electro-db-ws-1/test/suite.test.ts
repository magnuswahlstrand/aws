import {commentEntity} from "../db/db";
import {Configuration} from "../db/dynamo";

describe('comments', () => {
    it('get', async () => {

        const c = await commentEntity.put({
            text: "Magnus was here",
            createdAt: "2020-01-01"
        }).go();

        console.log(c)
        console.log(typeof c)

        const d2 = await commentEntity.get({
            commentID: c.commentID,
            createdAt: c.createdAt
        }).go();

        expect(d2).toEqual(c)
    })
})
