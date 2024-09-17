function generateWorkout() {
    const time = document.getElementById('time').value;
    const area = document.getElementById('area').value;

    let workout = '';

    // Example workouts based on time and area
    if (area === 'cardio') {
        workout = `<ul>`;
        if (time === '5') {
            workout += `<li>Jumping Jacks - 15 reps <br> Video: <a href="https://www.youtube.com/watch?v=I4y7d7t0UlM" target="_blank">Link</a></li>
                        <li>Mountain Climbers - 15 reps <br> Video: <a href="https://www.youtube.com/watch?v=HI_kI8Lnu2Y" target="_blank">Link</a></li>
                        <li>Burpees - 10 reps <br> Video: <a href="https://www.youtube.com/watch?v=GQfGuoGeSyI" target="_blank">Link</a></li>
                        <li>Rest - 1 min</li>`;
        } else if (time === '10') {
            workout += `<li>Jumping Jacks - 30 reps <br> Video: <a href="https://www.youtube.com/watch?v=I4y7d7t0UlM" target="_blank">Link</a></li>
                        <li>Mountain Climbers - 30 reps <br> Video: <a href="https://www.youtube.com/watch?v=HI_kI8Lnu2Y" target="_blank">Link</a></li>
                        <li>Burpees - 20 reps <br> Video: <a href="https://www.youtube.com/watch?v=GQfGuoGeSyI" target="_blank">Link</a></li>
                        <li>Rest - 2 min</li>`;
        } else if (time === '15') {
            workout += `<li>Jumping Jacks - 45 reps <br> Video: <a href="https://www.youtube.com/watch?v=I4y7d7t0UlM" target="_blank">Link</a></li>
                        <li>Mountain Climbers - 45 reps <br> Video: <a href="https://www.youtube.com/watch?v=HI_kI8Lnu2Y" target="_blank">Link</a></li>
                        <li>Burpees - 30 reps <br> Video: <a href="https://www.youtube.com/watch?v=GQfGuoGeSyI" target="_blank">Link</a></li>
                        <li>Rest - 3 min</li>`;
        } else if (time === '30') {
            workout += `<li>Jumping Jacks - 60 reps <br> Video: <a href="https://www.youtube.com/watch?v=I4y7d7t0UlM" target="_blank">Link</a></li>
                        <li>Mountain Climbers - 60 reps <br> Video: <a href="https://www.youtube.com/watch?v=HI_kI8Lnu2Y" target="_blank">Link</a></li>
                        <li>Burpees - 40 reps <br> Video: <a href="https://www.youtube.com/watch?v=GQfGuoGeSyI" target="_blank">Link</a></li>
                        <li>Rest - 5 min</li>`;
        }
        workout += `</ul>`;
    } else if (area === 'upperbody') {
        workout = `<ul>`;
        if (time === '5') {
            workout += `<li>Push-ups - 10 reps <br> Video: <a href="https://www.youtube.com/watch?v=qpcBos-EUug" target="_blank">Link</a></li>
                        <li>Tricep Dips - 10 reps <br> Video: <a href="https://www.youtube.com/watch?v=76l0naafkgA" target="_blank">Link</a></li>
                        <li>Shoulder Taps - 10 reps <br> Video: <a href="#" target="_blank">Link</a></li>
                        <li>Rest - 1 min</li>`;
        } else if (time === '10') {
            workout += `<li>Push-ups - 20 reps <br> Video: <a href="https://www.youtube.com/watch?v=qpcBos-EUug" target="_blank">Link</a></li>
                        <li>Tricep Dips - 20 reps <br> Video: <a href="https://www.youtube.com/watch?v=76l0naafkgA" target="_blank">Link</a></li>
                        <li>Shoulder Taps - 20 reps <br> Video: <a href="https://www.youtube.com/watch?v=8rgurWd-PB8" target="_blank">Link</a></li>
                        <li>Rest - 2 min</li>`;
        } else if (time === '15') {
            workout += `<li>Push-ups - 30 reps <br> Video: <a href="https://www.youtube.com/watch?v=qpcBos-EUug" target="_blank">Link</a></li>
                        <li>Tricep Dips - 30 reps <br> Video: <a href="https://www.youtube.com/watch?v=76l0naafkgA" target="_blank">Link</a></li>
                        <li>Shoulder Taps - 30 reps <br> Video: <a href="https://www.youtube.com/watch?v=8rgurWd-PB8" target="_blank">Link</a></li>
                        <li>Rest - 3 min</li>`;
        } else if (time === '30') {
            workout += `<li>Push-ups - 40 reps <br> Video: <a href="https://www.youtube.com/watch?v=qpcBos-EUug" target="_blank">Link</a></li>
                        <li>Tricep Dips - 40 reps <br> Video: <a href="https://www.youtube.com/watch?v=76l0naafkgA" target="_blank">Link</a></li>
                        <li>Shoulder Taps - 40 reps <br> Video: <a href="https://www.youtube.com/watch?v=8rgurWd-PB8" target="_blank">Link</a></li>
                        <li>Rest - 5 min</li>`;
        }
        workout += `</ul>`;
    } else if (area === 'lowerbody') {
        workout = `<ul>`;
        if (time === '5') {
            workout += `<li>Squats - 15 reps <br> Video: <a href="https://www.youtube.com/watch?v=m0GcZ24pK6k" target="_blank">Link</a></li>
                        <li>Lunges - 10 reps per leg <br> Video: <a href="https://www.youtube.com/watch?v=MxfTNXSFiYI" target="_blank">Link</a></li>
                        <li>Calf Raises - 15 reps <br> Video: <a href="https://www.youtube.com/watch?v=UV8gOrHmuKc" target="_blank">Link</a></li>
                        <li>Rest - 1 min</li>`;
        } else if (time === '10') {
            workout += `<li>Squats - 30 reps <br> Video: <a href="https://www.youtube.com/watch?v=m0GcZ24pK6k" target="_blank">Link</a></li>
                        <li>Lunges - 20 reps per leg <br> Video: <a href="https://www.youtube.com/watch?v=MxfTNXSFiYI" target="_blank">Link</a></li>
                        <li>Calf Raises - 30 reps <br> Video: <a href="https://www.youtube.com/watch?v=UV8gOrHmuKc" target="_blank">Link</a></li>
                        <li>Rest - 2 min</li>`;
        } else if (time === '15') {
            workout += `<li>Squats - 45 reps <br> Video: <a href="https://www.youtube.com/watch?v=m0GcZ24pK6k" target="_blank">Link</a></li>
                        <li>Lunges - 30 reps per leg <br> Video: <a href="https://www.youtube.com/watch?v=MxfTNXSFiYI" target="_blank">Link</a></li>
                        <li>Calf Raises - 45 reps <br> Video: <a href="https://www.youtube.com/watch?v=UV8gOrHmuKc" target="_blank">Link</a></li>
                        <li>Rest - 3 min</li>`;
        } else if (time === '30') {
            workout += `<li>Squats - 60 reps <br> Video: <a href="https://www.youtube.com/watch?v=m0GcZ24pK6k" target="_blank">Link</a></li>
                        <li>Lunges - 40 reps per leg <br> Video: <a href="https://www.youtube.com/watch?v=MxfTNXSFiYI" target="_blank">Link</a></li>
                        <li>Calf Raises - 60 reps <br> Video: <a href="https://www.youtube.com/watch?v=UV8gOrHmuKc" target="_blank">Link</a></li>
                        <li>Rest - 5 min</li>`;
        }
        workout += `</ul>`;
    }

    document.getElementById('workout').innerHTML = workout;
}
