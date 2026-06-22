$baseDir = "f:\Belk Digital Projects\belk-body-lab\public"

$dirs = @(
    "$baseDir\images\blog\calorie-deficit-meal-plan",
    "$baseDir\images\blog\strength-training-women",
    "$baseDir\images\blog\walking-weight-loss"
)

foreach ($dir in $dirs) {
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Force -Path $dir
    }
}

$files = @(
    @("C:\Users\aquib\.gemini\antigravity-ide\brain\e86f6f69-3d39-410a-bc8a-c35c40941d92\hero_calorie_deficit_1782163585791.png", "$baseDir\images\blog\calorie-deficit-meal-plan\hero-calorie-deficit-meal-plan.webp"),
    @("C:\Users\aquib\.gemini\antigravity-ide\brain\e86f6f69-3d39-410a-bc8a-c35c40941d92\high_protein_foods_1782163596271.png", "$baseDir\images\blog\calorie-deficit-meal-plan\high-protein-foods-deficit.webp"),
    @("C:\Users\aquib\.gemini\antigravity-ide\brain\e86f6f69-3d39-410a-bc8a-c35c40941d92\meal_prep_containers_1782163607233.png", "$baseDir\images\blog\calorie-deficit-meal-plan\meal-prep-containers-deficit.webp"),
    @("C:\Users\aquib\.gemini\antigravity-ide\brain\e86f6f69-3d39-410a-bc8a-c35c40941d92\grocery_list_visual_1782163617297.png", "$baseDir\images\blog\calorie-deficit-meal-plan\grocery-list-deficit-foods.webp"),
    
    @("C:\Users\aquib\.gemini\antigravity-ide\brain\e86f6f69-3d39-410a-bc8a-c35c40941d92\hero_strength_women_1782163635852.png", "$baseDir\images\blog\strength-training-women\hero-strength-training-women.webp"),
    @("C:\Users\aquib\.gemini\antigravity-ide\brain\e86f6f69-3d39-410a-bc8a-c35c40941d92\goblet_squat_form_1782163647764.png", "$baseDir\images\blog\strength-training-women\woman-goblet-squat-form.webp"),
    @("C:\Users\aquib\.gemini\antigravity-ide\brain\e86f6f69-3d39-410a-bc8a-c35c40941d92\barbell_hip_thrust_1782163657651.png", "$baseDir\images\blog\strength-training-women\woman-barbell-hip-thrust.webp"),
    @("C:\Users\aquib\.gemini\antigravity-ide\brain\e86f6f69-3d39-410a-bc8a-c35c40941d92\upper_body_training_1782163671180.png", "$baseDir\images\blog\strength-training-women\woman-dumbbell-bench-press.webp"),
    @("C:\Users\aquib\.gemini\antigravity-ide\brain\e86f6f69-3d39-410a-bc8a-c35c40941d92\confidence_results_1782163680194.png", "$baseDir\images\blog\strength-training-women\woman-gym-confidence.webp"),
    
    @("C:\Users\aquib\.gemini\antigravity-ide\brain\e86f6f69-3d39-410a-bc8a-c35c40941d92\hero_walking_weightloss_1782163696646.png", "$baseDir\images\blog\walking-weight-loss\hero-walking-weight-loss.webp"),
    @("C:\Users\aquib\.gemini\antigravity-ide\brain\e86f6f69-3d39-410a-bc8a-c35c40941d92\step_tracker_walking_1782163708333.png", "$baseDir\images\blog\walking-weight-loss\step-tracker-walking.webp"),
    @("C:\Users\aquib\.gemini\antigravity-ide\brain\e86f6f69-3d39-410a-bc8a-c35c40941d92\japanese_interval_1782163717439.png", "$baseDir\images\blog\walking-weight-loss\japanese-interval-walking.webp"),
    @("C:\Users\aquib\.gemini\antigravity-ide\brain\e86f6f69-3d39-410a-bc8a-c35c40941d92\walking_gym_split_1782163728108.png", "$baseDir\images\blog\walking-weight-loss\walking-plus-strength-training.webp")
)

foreach ($file in $files) {
    $src = $file[0]
    $dest = $file[1]
    Write-Host "Converting $src to $dest"
    ffmpeg -hide_banner -loglevel error -y -i "$src" -c:v libwebp -lossless 0 -q:v 85 "$dest"
}
