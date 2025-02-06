document.getElementById('find-button').addEventListener('click', function() {
    let inputString = document.getElementById('input-string').value;
    let result = firstWord(inputString);

    document.getElementById('result').innerHTML = 'First word: ' + result;
});

function firstWord(str) {
    let spaceIndex = str.indexOf(' ');

    if (spaceIndex === -1) {
        return str;
    } else {
        return str.substring(0, spaceIndex);
    }
}