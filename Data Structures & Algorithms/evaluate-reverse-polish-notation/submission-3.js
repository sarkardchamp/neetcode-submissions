class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const st = [];
        for (const token of tokens) {
            if ("+-*/".includes(token)) {
                const num2 = st.pop();
                const num1 = st.pop();
                let newNum;
                switch (token) {
                    case "+": {
                        newNum = num1 + num2;
                        break;
                    }
                    case "-": {
                        newNum = num1 - num2;
                        break;
                    }
                    case "*": {
                        newNum = num1 * num2;
                        break;
                    }
                    case "/": {
                        newNum = Math.trunc(num1 / num2);
                        break;
                    }
                    default: {
                        throw new Error("Unsupported Operation");
                    }
                }
                st.push(newNum);
            } else st.push(Number(token));
        }
        return st.pop();
    }
}
