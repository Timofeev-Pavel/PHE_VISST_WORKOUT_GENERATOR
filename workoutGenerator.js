function generateWorkout() {
    const time = parseInt(document.getElementById('time').value);
    const area = document.getElementById('area').value;
    const workoutList = document.getElementById('workout');


    const WORKOUT_REPOSITORY = {
        cardio: {
            5: [
                { name: 'Jumping Jacks', link: 'https://youtu.be/c4DAnQ6DtF8?si=OPcg8EySRkOBB-4Q', reps: '2 sets of 20' },
                { name: 'Running in Place', link: 'https://youtu.be/eBQAa9dEalY?si=UuFFqYO8iS3IEk-4', reps: '2 sets of 1 minute each' },
            ],
            10: [
                { name: 'High Knees', link: 'https://www.youtube.com/watch?v=ZNDHivUg7vA', reps: '3 sets of 1 minute each' },
                { name: 'Butt Kicks', link: 'https://www.youtube.com/watch?v=e4cnI7eVKRw', reps: '3 sets of 1 minutes each' },
                { name: 'Burpees', link: 'https://youtu.be/auBLPXO8Fww?si=HDkZjPGPbxTVRuaX', reps: '2 sets of 10' }
            ],
            15: [
                { name: 'Star Jumps', link: 'https://www.youtube.com/watch?v=VVEO_J1tIXU', reps: '3 sets of 20' },
                { name: 'Fast Feet', link: 'https://www.youtube.com/shorts/OwlOOHHLHMs', reps: '3 sets of 2 minutes each' },
                { name: 'Burpees', link: 'https://youtu.be/auBLPXO8Fww?si=HDkZjPGPbxTVRuaX', reps: '3 sets of 10' }
            ],
            30: [
                { name: 'Mountain Climbers', link: 'https://www.youtube.com/watch?v=kLh-uczlPLg', reps: '8 sets of 1 minute each' },
                { name: 'Tuck Jumps', link: 'https://www.youtube.com/watch?v=Yl7tEmpzknY', reps: '8 sets of 20' },
                { name: 'Burpees', link: 'https://youtu.be/auBLPXO8Fww?si=HDkZjPGPbxTVRuaX', reps: '7 sets of 12' }
            ]
        },
        upperbody: {
            5: [
                { name: 'Push-ups', link: 'https://youtu.be/ba8tr1NzwXU?si=pfle36LdFJ0iiqv6', reps: '2 sets of 15' },
                { name: 'Plank', link: 'https://www.youtube.com/watch?v=pvIjsG5Svck', reps: '2 sets of 1 minute' }
            ],
            10: [
                { name: 'Push-ups', link: 'https://youtu.be/ba8tr1NzwXU?si=pfle36LdFJ0iiqv6', reps: '3 sets of 15' },
                { name: 'Wall Angels', link: 'https://www.youtube.com/watch?v=1UU4VvklQ44', reps: '3 sets of 20' },
                { name: 'Chair Dips', link: 'https://www.youtube.com/watch?v=HCf97NPYeGY', reps: '2 sets of 10' }
            ],
            15: [
                { name: 'Push-ups', link: 'https://youtu.be/ba8tr1NzwXU?si=pfle36LdFJ0iiqv6', reps: '4 sets of 15' },
                { name: 'Dead Bug', link: 'https://www.youtube.com/shorts/HrxOWhPdsOY', reps: '4 sets of 10' },
                { name: 'Tricep Extensions', link: 'https://www.youtube.com/watch?v=ACyLmO9wj98', reps: '4 sets of 10' }
            ],
            30: [
                { name: 'Push-ups', link: 'https://youtu.be/ba8tr1NzwXU?si=pfle36LdFJ0iiqv6', reps: '8 sets of 15' },
                { name: 'Superman Exercise', link: 'https://www.youtube.com/shorts/KTWWh3GsyYw', reps: '8 sets of 10' },
                { name: 'Tricep Dips', link: 'https://youtu.be/Gz8NkGoNPkc?si=n7vvyFpfN5qwg7Vy', reps: '7 sets of 10' }
            ]
        },
        lowerbody: {
            5: [
                { name: 'Squats', link: 'https://youtu.be/m0GcZ24pK6k?si=EJguC_nroV92Wl5u', reps: '2 sets of 15' },
                { name: 'Lunges', link: 'https://youtu.be/MxfTNXSFiYI?si=vH_nT1dv4HmpliNf', reps: '2 sets of 15 (each leg)' }
            ],
            10: [
                { name: 'Squats', link: 'https://youtu.be/m0GcZ24pK6k?si=EJguC_nroV92Wl5u', reps: '3 sets of 15' },
                { name: 'Reverse Lunges', link: 'https://www.youtube.com/watch?v=Ry-wqegeKlE', reps: '3 sets of 15 (each leg)' },
                { name: 'Lateral Step-Ups', link: 'https://www.youtube.com/watch?v=XYoLTmcr2oA', reps: '2 sets of 15 (each leg)' }
            ],
            15: [
                { name: 'Squats', link: 'https://youtu.be/m0GcZ24pK6k?si=EJguC_nroV92Wl5u', reps: '4 sets of 15' },
                { name: 'Side Lunges', link: 'https://www.youtube.com/watch?v=rvqLVxYqEvo', reps: '4 sets of 15 (each leg)' },
                { name: 'Calf Raises', link: 'https://youtu.be/eMTy3qylqnE?si=y52Ia4A_M7PACj0g', reps: '4 sets of 25' }
            ],
            30: [
                { name: 'Squats', link: 'https://youtu.be/m0GcZ24pK6k?si=EJguC_nroV92Wl5u', reps: '8 sets of 15' },
                { name: 'Bulgarian Split Squats', link: 'https://www.youtube.com/shorts/uODWo4YqbT8', reps: '8 sets of 10 (each leg)' },
                { name: 'Broad Jumps', link: 'https://www.youtube.com/watch?v=c6Etg7bpFfI', reps: '7 sets of 10' }
            ]
        }
    };

    if (!WORKOUT_REPOSITORY[area] || !WORKOUT_REPOSITORY[area][time]) {
        workoutList.innerHTML = `<p>No workout found for ${area} with ${time} minutes. Please try another combination.</p>`;
        return;
    }

    const selectedWorkouts = WORKOUT_REPOSITORY[area][time];


    workoutList.innerHTML = `<h3>Workout for ${time} minutes (${area} focus)</h3>`;


    const workoutItems = selectedWorkouts.map(exercise => `
        <p>
            <label>
                <input type="checkbox" id="${exercise.name}" name="workout" value="${exercise.name}" />
                <a href="${exercise.link}" target="_blank">${exercise.name}</a> - ${exercise.reps}
            </label>
        </p>
    `).join('');

    workoutList.innerHTML += workoutItems;
    workoutList.innerHTML += `<p class="superset-instruction">Complete all exercises in a superset, take a 1-minute break, and then repeat the set.</p>`;

    document.getElementById('selected-area').value = area;
    document.getElementById('selected-time').value = time;

    function checkAllChecked() {
        const checkboxes = document.querySelectorAll('input[type="checkbox"][name="workout"]');
        const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
        document.getElementById("submitBtn").style.display = allChecked ? "inline-block" : "none";
    }
    const checkboxes = document.querySelectorAll('input[type="checkbox"][name="workout"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', checkAllChecked);
    });

    document.getElementById("submitBtn").style.display = "none";
}
