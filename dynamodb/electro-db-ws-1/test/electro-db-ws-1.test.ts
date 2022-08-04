import {comments} from "../db/db";

describe('comments', () => {
    it('get', async () => {

        const c = await comments.put({
            comment: "Magnus was here",
        }).go()

        const c2 = await comments.get({commentID: c.commentID}).go();

        expect(c).toEqual(c2);
        console.log(c2)

        const c3 = await comments.update({commentID: c.commentID})
            .set({comment: "or was he?"}).go({
                response: "all_new",
            });

        expect(c3.comment).toEqual("or was he?");
    })
})
