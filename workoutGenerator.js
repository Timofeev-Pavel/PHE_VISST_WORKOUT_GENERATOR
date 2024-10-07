function generateWorkout() {
    const time = parseInt(document.getElementById('time').value);
    const area = document.getElementById('area').value;
    const workoutList = document.getElementById('workout');


    const WORKOUT_REPOSITORY = {
        cardio: {
            5: [
                { name: 'Jumping Jacks', link: 'https://youtu.be/c4DAnQ6DtF8?si=OPcg8EySRkOBB-4Q', reps: '2 sets of 20' },
                { name: 'Running in Place', link: 'https://youtu.be/eBQAa9dEalY?si=UuFFqYO8iS3IEk-4', reps: '3 minutes' },
            ],
            10: [
                { name: 'Jumping Jacks', link: 'https://youtu.be/c4DAnQ6DtF8?si=OPcg8EySRkOBB-4Q', reps: '3 sets of 20' },
                { name: 'Running in Place', link: 'https://youtu.be/eBQAa9dEalY?si=UuFFqYO8iS3IEk-4', reps: '5 minutes' },
                { name: 'Burpees', link: 'https://youtu.be/auBLPXO8Fww?si=HDkZjPGPbxTVRuaX', reps: '2 sets of 10' }
            ],
            15: [
                { name: 'Jumping Jacks', link: 'https://youtu.be/c4DAnQ6DtF8?si=OPcg8EySRkOBB-4Q', reps: '4 sets of 20' },
                { name: 'Running in Place', link: 'https://youtu.be/eBQAa9dEalY?si=UuFFqYO8iS3IEk-4', reps: '7 minutes' },
                { name: 'Burpees', link: 'https://youtu.be/auBLPXO8Fww?si=HDkZjPGPbxTVRuaX', reps: '3 sets of 10' }
            ],
            30: [
                { name: 'Jumping Jacks', link: 'https://youtu.be/c4DAnQ6DtF8?si=OPcg8EySRkOBB-4Q', reps: '5 sets of 30' },
                { name: 'Running in Place', link: 'https://youtu.be/eBQAa9dEalY?si=UuFFqYO8iS3IEk-4', reps: '15 minutes' },
                { name: 'Burpees', link: 'https://youtu.be/auBLPXO8Fww?si=HDkZjPGPbxTVRuaX', reps: '4 sets of 12' }
            ]
        },
        upperbody: {
            5: [
                { name: 'Push-ups', link: 'https://youtu.be/ba8tr1NzwXU?si=pfle36LdFJ0iiqv6', reps: '2 sets of 10' },
                { name: 'Pull-Ups', link: 'https://youtu.be/ZPG8OsHKXLw?si=f3DzUa1L3cOR4xRQ', reps: '2 sets of 5' }
            ],
            10: [
                { name: 'Push-ups', link: 'https://youtu.be/ba8tr1NzwXU?si=pfle36LdFJ0iiqv6', reps: '3 sets of 15' },
                { name: 'Pull-Ups', link: 'https://youtu.be/ZPG8OsHKXLw?si=f3DzUa1L3cOR4xRQ', reps: '3 sets of 5' },
                { name: 'Tricep Dips', link: 'https://youtu.be/Gz8NkGoNPkc?si=n7vvyFpfN5qwg7Vy', reps: '2 sets of 15' }
            ],
            15: [
                { name: 'Push-ups', link: 'https://youtu.be/ba8tr1NzwXU?si=pfle36LdFJ0iiqv6', reps: '4 sets of 15' },
                { name: 'Pull-Ups', link: 'https://youtu.be/ZPG8OsHKXLw?si=f3DzUa1L3cOR4xRQ', reps: '4 sets of 5' },
                { name: 'Tricep Dips', link: 'https://youtu.be/Gz8NkGoNPkc?si=n7vvyFpfN5qwg7Vy', reps: '3 sets of 15' }
            ],
            30: [
                { name: 'Push-ups', link: 'https://youtu.be/ba8tr1NzwXU?si=pfle36LdFJ0iiqv6', reps: '6 sets of 15' },
                { name: 'Pull-Ups', link: 'https://youtu.be/ZPG8OsHKXLw?si=f3DzUa1L3cOR4xRQ', reps: '5 sets of 5' },
                { name: 'Tricep Dips', link: 'https://youtu.be/Gz8NkGoNPkc?si=n7vvyFpfN5qwg7Vy', reps: '5 sets of 15' }
            ]
        },
        lowerbody: {
            5: [
                { name: 'Squats', link: 'https://youtu.be/m0GcZ24pK6k?si=EJguC_nroV92Wl5u', reps: '2 sets of 15' },
                { name: 'Lunges', link: 'https://youtu.be/MxfTNXSFiYI?si=vH_nT1dv4HmpliNf', reps: '2 sets of 10 (each leg)' }
            ],
            10: [
                { name: 'Squats', link: 'https://youtu.be/m0GcZ24pK6k?si=EJguC_nroV92Wl5u', reps: '3 sets of 20' },
                { name: 'Lunges', link: 'https://youtu.be/MxfTNXSFiYI?si=vH_nT1dv4HmpliNf', reps: '3 sets of 15 (each leg)' },
                { name: 'Calf Raises', link: 'https://youtu.be/eMTy3qylqnE?si=y52Ia4A_M7PACj0g', reps: '2 sets of 20' }
            ],
            15: [
                { name: 'Squats', link: 'https://youtu.be/m0GcZ24pK6k?si=EJguC_nroV92Wl5u', reps: '4 sets of 20' },
                { name: 'Lunges', link: 'https://youtu.be/MxfTNXSFiYI?si=vH_nT1dv4HmpliNf', reps: '4 sets of 20 (each leg)' },
                { name: 'Calf Raises', link: 'https://youtu.be/eMTy3qylqnE?si=y52Ia4A_M7PACj0g', reps: '3 sets of 25' }
            ],
            30: [
                { name: 'Squats', link: 'https://youtu.be/m0GcZ24pK6k?si=EJguC_nroV92Wl5u', reps: '6 sets of 25' },
                { name: 'Lunges', link: 'https://youtu.be/MxfTNXSFiYI?si=vH_nT1dv4HmpliNf', reps: '6 sets of 20 (each leg)' },
                { name: 'Calf Raises', link: 'https://youtu.be/eMTy3qylqnE?si=y52Ia4A_M7PACj0g', reps: '4 sets of 30' }
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
