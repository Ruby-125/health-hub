let selectedGender = 'male';

document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const tabName = tab.dataset.tab;
        
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        
        tab.classList.add('active');
        document.getElementById(tabName).classList.add('active');
    });
});

document.querySelectorAll('.gender-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.gender-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedGender = btn.dataset.gender;
    });
});

function calculateBMI() {
    const weight = parseFloat(document.getElementById('bmi-weight').value);
    const height = parseFloat(document.getElementById('bmi-height').value) / 100;
    
    if (!weight || !height) {
        alert('Please enter both weight and height');
        return;
    }
    
    const bmi = (weight / (height * height)).toFixed(1);
    let category = '';
    let plan = '';
    
    if (bmi < 18.5) {
        category = 'Underweight';
        plan = 'Increase calorie intake with protein-rich foods. Strength training 3x/week. Eat every 3 hours.';
    } else if (bmi < 25) {
        category = 'Normal';
        plan = 'Maintain balanced diet. Exercise 30 min daily. Stay hydrated with 8 glasses of water.';
    } else if (bmi < 30) {
        category = 'Overweight';
        plan = 'Reduce calories by 500/day. Cardio 5x/week. Avoid processed foods and sugary drinks.';
    } else {
        category = 'Obese';
        plan = 'Consult doctor. Start with walking 20 min daily. Meal planning essential. Focus on whole foods.';
    }
    
    const resultDiv = document.getElementById('bmi-result');
    resultDiv.innerHTML = `
        <div class="result-value">BMI: ${bmi}</div>
        <div class="result-category">Category: ${category}</div>
        <div class="result-plan">
            <h3>Health Plan:</h3>
            <p>${plan}</p>
        </div>
    `;
    resultDiv.classList.remove('hidden');
}

function calculateBMR() {
    const weight = parseFloat(document.getElementById('bmr-weight').value);
    const height = parseFloat(document.getElementById('bmr-height').value);
    const age = parseFloat(document.getElementById('bmr-age').value);
    
    if (!weight || !height || !age) {
        alert('Please enter all fields');
        return;
    }
    
    let bmr;
    if (selectedGender === 'male') {
        bmr = (10 * weight + 6.25 * height - 5 * age + 5).toFixed(0);
    } else {
        bmr = (10 * weight + 6.25 * height - 5 * age - 161).toFixed(0);
    }
    
    const maintain = bmr;
    const lose = (bmr * 0.8).toFixed(0);
    const gain = (bmr * 1.2).toFixed(0);
    
    const resultDiv = document.getElementById('bmr-result');
    resultDiv.innerHTML = `
        <div class="result-value">BMR: ${bmr} cal/day</div>
        <div class="result-plan">
            <h3>Calorie Plan:</h3>
            <p><strong>Maintenance:</strong> ${maintain} cal/day</p>
            <p><strong>Weight Loss:</strong> ${lose} cal/day (deficit)</p>
            <p><strong>Muscle Gain:</strong> ${gain} cal/day (surplus)</p>
            <p style="margin-top: 15px; color: #ff8833;">Adjust based on activity level and goals.</p>
        </div>
    `;
    resultDiv.classList.remove('hidden');
}

function calculateHeartRate() {
    const age = parseFloat(document.getElementById('hr-age').value);
    
    if (!age) {
        alert('Please enter your age');
        return;
    }
    
    const maxHR = 220 - age;
    const fatBurn = { min: (maxHR * 0.5).toFixed(0), max: (maxHR * 0.7).toFixed(0) };
    const cardio = { min: (maxHR * 0.7).toFixed(0), max: (maxHR * 0.85).toFixed(0) };
    const peak = { min: (maxHR * 0.85).toFixed(0), max: maxHR };
    
    const resultDiv = document.getElementById('hr-result');
    resultDiv.innerHTML = `
        <div class="result-value">Max HR: ${maxHR} bpm</div>
        <div class="zone-card">
            <h3>Fat Burn Zone (50-70%)</h3>
            <p>${fatBurn.min} - ${fatBurn.max} bpm</p>
            <p style="font-size: 0.9rem; margin-top: 5px; color: #999;">Light activity, burns fat efficiently</p>
        </div>
        <div class="zone-card">
            <h3>Cardio Zone (70-85%)</h3>
            <p>${cardio.min} - ${cardio.max} bpm</p>
            <p style="font-size: 0.9rem; margin-top: 5px; color: #999;">Moderate to hard activity, improves endurance</p>
        </div>
        <div class="zone-card">
            <h3>Peak Zone (85-100%)</h3>
            <p>${peak.min} - ${peak.max} bpm</p>
            <p style="font-size: 0.9rem; margin-top: 5px; color: #999;">Maximum effort, builds speed and power</p>
        </div>
    `;
    resultDiv.classList.remove('hidden');
}