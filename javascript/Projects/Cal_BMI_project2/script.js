function calculateBMI(){
    const genderInput = document.getElementById('gender');
    const ageInput = document.getElementById('age');
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const resultContainer = document.getElementById('result');

    const gender = genderInput.value;
    const age = parseFloat(ageInput.value);
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);
    if (isNaN(age) || isNaN(height) || isNaN(weight) || age<=0 || height <= 0 || weight <= 0) {
        resultContainer.innerText = 'Please enter valid age, height and weight.';
        return;
    }

    const bmi = calculateExtendedBMI(age, gender, height, weight);

    let interpretation = '';
    if (bmi < 18.5) {
        interpretation = 'Underweight';
    } else if (bmi < 25) {
        interpretation = 'Normal weight';
    } else if (bmi < 30) {
        interpretation = 'Overweight';
    } else {
        interpretation = 'Obesity';
    }

    resultContainer.innerText = `Your BMI: ${bmi.toFixed(2)} (${interpretation})`;
}
function calculateExtendedBMI(age, gender, height, weight) {
    // Extended BMI calculation based on age and gender factors
    // Custom formula or use established research-based formulas
    // Example: For illustrative purposes, using a simplified formula
    const adjustmentFactor = (gender === 'female') ? 0.9 : 1.0;
    return weight / ((height / 100) ** 2) + (0.02 * age * adjustmentFactor);
}
function resetFields() {
    document.getElementById('gender').value = 'male';
    document.getElementById('age').value = '';
    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';
    document.getElementById('result').innerText = '';
}