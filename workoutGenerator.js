function suggestWorkout() {
    const time = document.getElementById('time').value;
    const goal = document.getElementById('goal').value;
    let workout = '';

    if (time == '15') {
        if (goal == 'strength') {
            workout = 'Quick bodyweight circuit: push-ups, squats, and lunges.';
        } else if (goal == 'cardio') {
            workout = 'High-intensity interval training: jumping jacks, burpees, and sprints.';
        } else if (goal == 'flexibility') {
            workout = '15-minute stretching routine focusing on major muscle groups.';
        } else if (goal == 'endurance') {
            workout = '15-minute run or brisk walk with intervals.';
        }
    } else if (time == '30') {
        if (goal == 'strength') {
            workout = '30-minute workout including weights or resistance bands focusing on major muscle groups.';
        } else if (goal == 'cardio') {
            workout = '30-minute cardio workout: running, cycling, or swimming.';
        } else if (goal == 'flexibility') {
            workout = '30-minute yoga session focusing on flexibility and relaxation.';
        } else if (goal == 'endurance') {
            workout = '30-minute run or cycling with steady pace and intervals.';
        }
    } else if (time == '60') {
        if (goal == 'strength') {
            workout = 'Full-body workout with weights or resistance bands, including warm-up and cool-down.';
        } else if (goal == 'cardio') {
            workout = '60-minute cardio workout with varied intensity: running, cycling, or swimming.';
        } else if (goal == 'flexibility') {
            workout = '60-minute yoga or stretching session focusing on flexibility and breathing.';
        } else if (goal == 'endurance') {
            workout = '60-minute endurance workout: long run or bike ride with intervals.';
        }
    } else if (time == '90') {
        if (goal == 'strength') {
            workout = 'Comprehensive strength training session with different exercises targeting all muscle groups.';
        } else if (goal == 'cardio') {
            workout = '90-minute cardio session with varied intensity and types of exercises.';
        } else if (goal == 'flexibility') {
            workout = 'Extended yoga session focusing on flexibility, balance, and relaxation.';
        } else if (goal == 'endurance') {
            workout = '90-minute endurance workout: long-distance run or bike ride with intervals.';
        }
    }

    document.getElementById('workout').textContent = workout;
}
