import { CREATE_POST } from "./types"
const spam = ['spam', 'fuck', 'php']
export function spamWords({ dispatch }) {
    return function (next) {
        return function (action) {
            if (action.type === CREATE_POST) {
                const found = spam.filter(w => action.payload.title.includes(w))
                if (found.length) {
                    return dispatch(alert('плохо'))
                }
            }
            return next(action)
        }
    }
}