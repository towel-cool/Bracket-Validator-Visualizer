const searchval = window.location.search;
const urlParams = new URLSearchParams(searchval);

function ensureBrackets(brackets = []) {
    /* This function checks that the input is only brackets. 
        Returns true or false*/
    for (let i = 0; i < brackets.length; i++) {
        if (brackets[i] != '(' || brackets[i] != ')' || brackets[i] != '{'
            || brackets[i] != '}' || brackets[i] != '[' || brackets[i] != ']') {
                return false;
            }
    }
    return true;
}

function validateBrackets() {
    /* This function checks that brackets are valid */
    let sequence = urlParams.get("sequence");
    let stack = [];
    
    for (let i = 0; i < sequence.length; i++) {
        
    }
}

validateBrackets();