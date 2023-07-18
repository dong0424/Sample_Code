function DoJoinForm__submit(form) {
    var inputs = form.getElementsByClassName('textForm');
    var emptyField = null;

    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i].getElementsByTagName('input')[0];

        if (input.value.trim() === '') {
            emptyField = input;
            break;
        }
    }

    if (emptyField) {
        var labelText = emptyField.placeholder;
        alert(labelText + '을(를) 입력하세요.');
        emptyField.focus();
        return false;
    }

    form.submit();
}