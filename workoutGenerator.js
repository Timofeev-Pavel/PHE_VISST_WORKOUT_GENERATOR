// Timer logic
let timer;
function startTimer() {
    const time = parseInt(document.getElementById('time').value) * 60; // Convert minutes to seconds
    const timerDisplay = document.getElementById('timer');
    let remainingTime = time;
    
    function updateDisplay() {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
    
    updateDisplay();
    
    timer = setInterval(() => {
        remainingTime--;
        updateDisplay();
        if (remainingTime <= 0) {
            clearInterval(timer);
            window.location.href = 'thankYou.html';
        }
    }, 1000);
}

function generateWorkout() {
    const time = parseInt(document.getElementById('time').value);
    const area = document.getElementById('area').value;

    const WORKOUT_REPOSITORY = {
        cardio: {
            5: [
                { name: 'Jumping Jacks', link: 'https://example.com/jumping-jacks', reps: '2 sets of 20' },
                { name: 'Running in Place', link: 'https://example.com/running-in-place', reps: '3 minutes' },
            ],
            10: [
                { name: 'Jumping Jacks', link: 'https://example.com/jumping-jacks', reps: '3 sets of 20' },
                { name: 'Running in Place', link: 'https://example.com/running-in-place', reps: '5 minutes' },
                { name: 'Burpees', link: 'https://example.com/burpees', reps: '2 sets of 10' }
            ],
            15: [
                { name: 'Jumping Jacks', link: 'https://example.com/jumping-jacks', reps: '4 sets of 20' },
                { name: 'Running in Place', link: 'https://example.com/running-in-place', reps: '7 minutes' },
                { name: 'Burpees', link: 'https://example.com/burpees', reps: '3 sets of 10' }
            ],
            30: [
                { name: 'Jumping Jacks', link: 'https://example.com/jumping-jacks', reps: '5 sets of 30' },
                { name: 'Running in Place', link: 'https://example.com/running-in-place', reps: '15 minutes' },
                { name: 'Burpees', link: 'https://example.com/burpees', reps: '4 sets of 12' }
            ]
        },
        upperbody: {
            5: [
                { name: 'Push-ups', link: 'https://example.com/push-ups', reps: '2 sets of 10' },
                { name: 'Shoulder Press', link: 'https://example.com/shoulder-press', reps: '2 sets of 12' }
            ],
            10: [
                { name: 'Push-ups', link: 'https://example.com/push-ups', reps: '3 sets of 15' },
                { name: 'Shoulder Press', link: 'https://example.com/shoulder-press', reps: '3 sets of 15' },
                { name: 'Tricep Dips', link: 'https://example.com/tricep-dips', reps: '2 sets of 12' }
            ],
            15: [
                { name: 'Push-ups', link: 'https://example.com/push-ups', reps: '4 sets of 15' },
                { name: 'Shoulder Press', link: 'https://example.com/shoulder-press', reps: '4 sets of 15' },
                { name: 'Tricep Dips', link: 'https://example.com/tricep-dips', reps: '3 sets of 15' }
            ],
            30: [
                { name: 'Push-ups', link: 'https://example.com/push-ups', reps: '6 sets of 15' },
                { name: 'Shoulder Press', link: 'https://example.com/shoulder-press', reps: '6 sets of 15' },
                { name: 'Tricep Dips', link: 'https://example.com/tricep-dips', reps: '5 sets of 15' }
            ]
        },
        lowerbody: {
            5: [
                { name: 'Squats', link: 'https://example.com/squats', reps: '2 sets of 15' },
                { name: 'Lunges', link: 'https://example.com/lunges', reps: '2 sets of 10 (each leg)' }
            ],
            10: [
                { name: 'Squats', link: 'https://example.com/squats', reps: '3 sets of 20' },
                { name: 'Lunges', link: 'https://example.com/lunges', reps: '3 sets of 15 (each leg)' },
                { name: 'Calf Raises', link: 'https://example.com/calf-raises', reps: '2 sets of 20' }
            ],
            15: [
                { name: 'Squats', link: 'https://example.com/squats', reps: '4 sets of 20' },
                { name: 'Lunges', link: 'https://example.com/lunges', reps: '4 sets of 20 (each leg)' },
                { name: 'Calf Raises', link: 'https://example.com/calf-raises', reps: '3 sets of 25' }
            ],
            30: [
                { name: 'Squats', link: 'https://example.com/squats', reps: '6 sets of 25' },
                { name: 'Lunges', link: 'https://example.com/lunges', reps: '6 sets of 20 (each leg)' },
                { name: 'Calf Raises', link: 'https://example.com/calf-raises', reps: '4 sets of 30' }
            ]
        }
    };

    const selectedWorkouts = WORKOUT_REPOSITORY[area][time];
    const workoutList = document.getElementById('workout');
    workoutList.innerHTML = `<h3>Workout for ${time} minutes</h3>`;
    
    selectedWorkouts.forEach(exercise => {
        workoutList.innerHTML += `
        <p>
        <label>
          <input type="checkbox" id="${exercise.name}" name="workout" value="${exercise.name}">
          <a href="${exercise.link}" target="_blank">${exercise.name}</a> - ${exercise.reps}
        </label>
      </p>`;  
    });

    // Store area and time in hidden inputs
    document.getElementById('selected-area').value = area;
    document.getElementById('selected-time').value = time;

}
