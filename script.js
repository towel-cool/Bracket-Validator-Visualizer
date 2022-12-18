const searchval = window.location.search;
const urlParams = new URLSearchParams(searchval);

async function sleep(seconds) {
    return new Promise(resolve=>setTimeout(resolve, seconds*1000));
}

async function validBrackets(sequence) {
    /* This function checks that brackets are valid */
    let stack = [];

    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] == '(' || sequence[i] == '{' || sequence[i] == '[') {
            stack.push(sequence[i]);
        }
        else if (sequence[i] == ")") {
            if (stack[stack.length - 1] != '(') {
                return false;
            }
            stack.pop();
        }
        else if (sequence[i] == '}') {
            if (stack[stack.length - 1] != '{') {
                return false;
            }
            stack.pop();
        }
        else if (sequence[i] == ']') {
            if (stack[stack.length - 1] != '[') {
                return false;
            }
            stack.pop();
        }
        await sleep(1.5);
    }
    if (stack.length > 0) {
        return false;
    }
    return true;
}

let sequence = urlParams.get("sequence");
validBrackets(sequence);