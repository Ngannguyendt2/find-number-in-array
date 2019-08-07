function find() {
    let array = [2, 3, 1, 6, 5, 7, 2];
    let number = Number(prompt('Import number'));
    for (let i = 0; i < (array.length) - 1; i++) {
        if (number == array[i]) {
            alert('Number ' + array[i] + ' at position ' + (i + 1) + ' in array');
        }


    }
}