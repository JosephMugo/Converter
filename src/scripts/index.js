console.log('------> INDEX IS RUNNING <------');

const result = () => {
    // reset
    document.getElementById('result').innerHTML = 'Result'; 

    const firstInput = document.getElementById('firstInput');
    const firstSelect = document.getElementById('firstSelect');
    const secondSelect = document.getElementById('secondSelect');
    // check if equal 
    if (firstSelect.value === secondSelect.value) {
        // set result to firstInput
        document.getElementById('result').innerHTML = firstInput.value;
    } else {
        const result = convert(firstInput, firstSelect, secondSelect);
        document.getElementById('result').innerHTML = result.toExponential();
    }
}

// Unit Converter
const convert = (firstInput, firstSelect, secondSelect) => {
    // Inches Formul
    // length / 63360 <--- mile
    // length / 36 <--- yard
    // length / 12 <--- foot
    if (firstSelect.value === 'Inch') {
        if (secondSelect.value === 'Mile') {
            return firstInput.value / 63360;
        }
        if (secondSelect.value === 'Yard') {
            return firstInput.value / 36;
        }
        if (secondSelect.value === 'Foot') {
            return firstInput.value / 12;
        }
    }
    // Mile Formul
    // length * 63360 <--- inch
    // length * 1760 <--- yard
    // length * 5280 <--- foot
    if (firstSelect.value === 'Mile') {
        if (secondSelect.value === 'Inch') {
            return firstInput.value * 63360;
        }
        if (secondSelect.value === 'Yard') {
            return firstInput.value * 1760;
        }
        if (secondSelect.value === 'Foot') {
            return firstInput.value * 5280;
        }
    }
    // Yard Formula
    // length * 36 <--- inch
    // length / 1760 <--- mile
    // length * 3 <--- foot
    if (firstSelect.value === 'Yard') {
        if (secondSelect.value === 'Inch') {
            return firstInput.value * 36;
        }
        if (secondSelect.value === 'Mile') {
            return firstInput.value / 1760;
        }
        if (secondSelect.value === 'Foot') {
            return firstInput.value * 3;
        }
    }
    // Foot Formula
    // length * 12 <--- inch
    // length / 5280 <--- mile
    // length / 3 <--- yard
    if (firstSelect.value === 'Foot') {
        if (secondSelect.value === 'Inch') {
            return firstInput.value * 12;
        }
        if (secondSelect.value === 'Mile') {
            return firstInput.value / 5280;
        }
        if (secondSelect.value === 'Yard') {
            return firstInput.value / 3;
        }
    }
}