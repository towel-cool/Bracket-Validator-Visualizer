const searchval = window.location.search;
const urlParams = new URLSearchParams(searchval);

async function sleep(seconds) {
    return new Promise(resolve=>setTimeout(resolve, seconds*1000));
}

async function validBrackets(sequence) {
    /* This function checks that brackets are valid */
    let stack = [];
    document.getElementById("input").append(sequence);

    for (let i = 0; i < sequence.length; i++) {
        document.getElementById("indice").innerHTML = "i: " + (i + 1);
        if (sequence[i] == '(' || sequence[i] == '{' || sequence[i] == '[') {
            stack.push(sequence[i]);
            document.getElementById("stack").innerHTML = "Stack: '" + stack + "'";
            document.getElementById("action").innerHTML = "Action: Push";
        }
        else if (sequence[i] == ")") {
            if (stack[stack.length - 1] != '(') {
                document.getElementById("action").innerHTML = "Action: Return Invalid";
                return false;
            }
            stack.pop();
            document.getElementById("stack").innerHTML = "Stack: '" + stack + "'";
            document.getElementById("action").innerHTML = "Action: Pop";
        }
        else if (sequence[i] == '}') {
            if (stack[stack.length - 1] != '{') {
                document.getElementById("action").innerHTML = "Action: Return Invalid";
                return false;
            }
            stack.pop();
            document.getElementById("stack").innerHTML = "Stack: '" + stack + "'";
            document.getElementById("action").innerHTML = "Action: Pop";
        }
        else if (sequence[i] == ']') {
            if (stack[stack.length - 1] != '[') {
                document.getElementById("action").innerHTML = "Action: Return Invalid";
                return false;
            }
            stack.pop();
            document.getElementById("stack").innerHTML = "Stack: '" + stack + "'";
            document.getElementById("action").innerHTML = "Action: Pop";
        }
        await sleep(1.5);
    }
    document.getElementById("action").innerHTML = "Action: Check if stack > 1";
    await sleep(1.5)
    if (stack.length > 0) {
        document.getElementById("action").innerHTML = "Action: Stack > 1";
        await sleep(1.5);
        document.getElementById("action").innerHTML = "Action: Return Invalid";
        return false;
    }
    document.getElementById("action").innerHTML = "Action: Stack = 0";
    await sleep(1.5);
    document.getElementById("action").innerHTML = "Action: Return Valid";
    return true;
}

let sequence = urlParams.get("sequence");
console.log(validBrackets(sequence));