const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src', 'data', 'blog', 'posts.ts');
let content = fs.readFileSync(file, 'utf8');

const lastBracket = content.lastIndexOf(']');

if (lastBracket === -1) {
  console.error("Could not find end of array");
  process.exit(1);
}

const newPosts = `  ,
  {
    id: "17",
    slug: "strength-training-for-women-beginners-guide",
    category: "Training",
    date: "June 23, 2026",
    isoDate: "2026-06-23",
    readTime: "11 min read",
    image: "/images/blog/strength-training-women/hero-strength-training-women.webp",
    ogImage: "/blog/strength-training-for-women-beginners-guide/og-strength-training-women.png",
    en: {
      title: "Strength Training for Women: The Complete Beginner's Guide",
      excerpt: "Everything women need to know about starting strength training - 4-day workout plan, myth-busting, and what to expect in the first 90 days.",
      metaTitle: "Strength Training for Women | Beginner Guide 2026",
      metaDescription: "Complete beginner's guide to strength training for women. Sample 4-day workout plan, myth-busting, and expert tips from a NASM-certified personal trainer.",
      content: \`
<p class="speakable-intro"><strong>If you have ever walked into a gym, glanced at the free weight area, and turned around—you are not alone.</strong> As a personal trainer in Charleston, SC, I have coached hundreds of women through that exact moment. The fear of looking lost or getting bulky keeps too many women avoiding the weight room entirely. Here is the truth: strength training is the single most powerful thing you can do for your body, your confidence, and your health.</p>
<h2>Why Strength Training Is Essential</h2>
<ul>
  <li class="speakable-takeaways"><strong>Bone density protection:</strong> Women lose bone density rapidly after 30. Resistance training is the most effective intervention.</li>
  <li class="speakable-takeaways"><strong>Metabolic advantage:</strong> Muscle burns more calories at rest than fat.</li>
  <li class="speakable-takeaways"><strong>Hormonal regulation:</strong> Improves insulin sensitivity and cortisol response.</li>
</ul>
<h2>Myth-Busting: 3 Lies About Women's Fitness</h2>
<h3>Myth #1: "Lifting weights makes women bulky"</h3>
<p>Women produce a fraction of the testosterone of men. A progressive resistance training program builds a lean, athletic physique—not a bulky one.</p>
<h3>Myth #2: "Cardio is better for fat loss"</h3>
<p>Excessive cardio without resistance training leads to muscle loss alongside fat loss. The most effective approach pairs strength training with a moderate caloric deficit.</p>
<h3>Myth #3: "You need light weights and high reps"</h3>
<p>If you can do 30 reps easily, you are doing cardio. Challenging weight in the 6-12 rep range builds muscle and definition.</p>
<h2>How to Start: 4-Day Plan</h2>
<p>Aim for 3-4 days a week using compound movements: Squats, deadlifts, presses, and rows. <img src="/images/blog/strength-training-women/woman-goblet-squat-form.webp" alt="Woman performing a goblet squat" class="w-full rounded-[2rem] my-8" /> Start light, focus on form, and progressively increase the weight.</p>
      \`,
      faqs: [
        {
          q: "Will lifting weights make women bulky?",
          a: "No. Women do not have the testosterone levels to naturally build bulky muscle easily. You will build a lean, defined physique."
        }
      ],
      customSchemas: [
        '{\\n  "@context": "https://schema.org",\\n  "@type": "WebPage",\\n  "speakable": {\\n    "@type": "SpeakableSpecification",\\n    "cssSelector": [".speakable-intro", ".speakable-takeaways"]\\n  }\\n}'
      ]
    },
    es: {
      title: "Entrenamiento de Fuerza para Mujeres: Guía para Principiantes",
      excerpt: "Todo lo que necesitas saber para empezar a entrenar fuerza como mujer.",
      metaTitle: "Entrenamiento de Fuerza para Mujeres",
      metaDescription: "Guía completa de entrenamiento de fuerza para mujeres.",
      content: \`
<p class="speakable-intro"><strong>El entrenamiento de fuerza para mujeres es lo más poderoso que puedes hacer por tu cuerpo y tu salud.</strong> Esta guía es para aquellas que quieren empezar.</p>
      \`,
      faqs: []
    }
  },
  {
    id: "18",
    slug: "calorie-deficit-meal-plan",
    category: "Nutrition",
    date: "June 23, 2026",
    isoDate: "2026-06-23",
    readTime: "10 min read",
    image: "/images/blog/calorie-deficit-meal-plan/hero-calorie-deficit-meal-plan.webp",
    ogImage: "/blog/calorie-deficit-meal-plan/og-calorie-deficit-meal-plan.png",
    featured: true,
    en: {
      title: "Calorie Deficit Meal Plan: What to Eat to Lose Weight",
      excerpt: "Exact calorie deficit meal plans at 1500 and 1800 calories with high-protein foods, grocery lists, and a framework for building your own.",
      metaTitle: "Calorie Deficit Meal Plan | 2026 Guide",
      metaDescription: "Exact calorie deficit meal plans at 1500 and 1800 calories with macro breakdowns and high-protein food lists.",
      content: \`
<p class="speakable-intro"><strong>A calorie deficit meal plan is the single most important tool for sustainable weight loss.</strong> After coaching 500+ fat loss clients, I can tell you that the #1 reason people fail is not a lack of willpower—it is having no structured plan for what to eat in a deficit. They slash calories randomly, eat too little protein, feel miserable, and quit. This guide gives you the exact meal plans I build for clients.</p>
<h2>How Many Calories Do You Actually Need?</h2>
<ul>
  <li class="speakable-takeaways"><strong>Step 1:</strong> Estimate maintenance calories (body weight x 14-16).</li>
  <li class="speakable-takeaways"><strong>Step 2:</strong> Subtract 300-500 calories for a sustainable deficit.</li>
  <li class="speakable-takeaways"><strong>Step 3:</strong> Set protein first (0.8-1.0g per pound of bodyweight).</li>
  <li class="speakable-takeaways"><strong>Step 4:</strong> Track and adjust based on progress.</li>
</ul>
<h2>The Best Foods for a Calorie Deficit</h2>
<p>Focus on high-protein, low-calorie staples like chicken breast, white fish, egg whites, and greek yogurt. <img src="/images/blog/calorie-deficit-meal-plan/high-protein-foods-deficit.webp" alt="High protein low calorie foods" class="w-full rounded-[2rem] my-8" /> Fill half your plate with high-volume, low-calorie vegetables like broccoli, spinach, and zucchini to stay full.</p>
<h2>Sample 1500 Calorie Meal Plan</h2>
<p>Breakfast: Scrambled egg whites and spinach.<br>Lunch: Grilled chicken breast over mixed greens.<br>Dinner: Baked cod with roasted broccoli.<br>Snacks: Greek yogurt, cottage cheese.</p>
      \`,
      faqs: [
        {
          q: "How do I calculate a calorie deficit?",
          a: "Find your maintenance calories and subtract 300-500 calories per day for sustainable fat loss."
        }
      ],
      customSchemas: [
        '{\\n  "@context": "https://schema.org",\\n  "@type": "WebPage",\\n  "speakable": {\\n    "@type": "SpeakableSpecification",\\n    "cssSelector": [".speakable-intro", ".speakable-takeaways"]\\n  }\\n}'
      ]
    },
    es: {
      title: "Plan de Comidas en Déficit Calórico",
      excerpt: "Exactamente qué comer para perder peso.",
      metaTitle: "Plan de Comidas Déficit Calórico",
      metaDescription: "Aprende a crear un plan de comidas en déficit calórico para perder peso.",
      content: \`
<p class="speakable-intro"><strong>Un déficit calórico es la única forma científicamente probada de perder grasa.</strong> Aquí tienes exactamente qué comer.</p>
      \`,
      faqs: []
    }
  },
  {
    id: "19",
    slug: "walking-for-weight-loss-steps-guide",
    category: "Fat Loss",
    date: "June 23, 2026",
    isoDate: "2026-06-23",
    readTime: "9 min read",
    image: "/images/blog/walking-weight-loss/hero-walking-weight-loss.webp",
    ogImage: "/blog/walking-for-weight-loss-steps-guide/og-walking-weight-loss.png",
    en: {
      title: "Walking for Weight Loss: How Many Steps You Actually Need",
      excerpt: "Science-based walking guide - 7,500-10,000 daily steps for fat loss, 4-week progressive walking plan, and why walking beats running.",
      metaTitle: "Walking for Weight Loss | Step Guide",
      metaDescription: "How many steps a day to lose weight? Science-based walking plan from a NASM-certified trainer.",
      content: \`
<p class="speakable-intro"><strong>Walking for weight loss is the most underrated fat loss tool in fitness—and I say that as someone who programs heavy squats for a living.</strong> After coaching 500+ body transformations at Belk Body Lab, I can tell you that clients who hit their step targets consistently lose more fat and sustain results longer than those who rely on aggressive gym cardio alone. The research is unequivocal.</p>
<h2>How Many Steps a Day to Lose Weight?</h2>
<ul>
  <li class="speakable-takeaways"><strong>Beginners:</strong> Start by adding 2,000 steps to your current baseline.</li>
  <li class="speakable-takeaways"><strong>Optimal Fat Loss:</strong> 7,500 to 10,000 steps per day is the sweet spot for maximizing calorie burn without hindering recovery.</li>
  <li class="speakable-takeaways"><strong>Over 10,000 steps:</strong> Diminishing returns for fat loss unless you are an endurance athlete.</li>
</ul>
<h2>Why Walking Beats Running for Fat Loss</h2>
<p>Running is fantastic for cardiovascular health, but it induces high systemic fatigue and drives up hunger. Walking is low-impact, meaning you can do it daily without interfering with your strength training recovery. <img src="/images/blog/walking-weight-loss/step-tracker-walking.webp" alt="Step tracker on smartwatch" class="w-full rounded-[2rem] my-8" /> It also primarily utilizes fat as a fuel source during the activity.</p>
<h2>The 4-Week Walking Plan</h2>
<p>Week 1: Find your baseline and add 1,500 steps.<br>Week 2: Introduce two 15-minute brisk walks per week.<br>Week 3: Increase daily target to 8,000 steps.<br>Week 4: Incorporate Japanese interval walking (3 minutes brisk, 3 minutes slow) for enhanced metabolic effect.</p>
      \`,
      faqs: [
        {
          q: "Is walking enough to lose weight?",
          a: "Walking combined with a calorie deficit is incredibly effective for weight loss, especially when paired with strength training."
        }
      ],
      customSchemas: [
        '{\\n  "@context": "https://schema.org",\\n  "@type": "WebPage",\\n  "speakable": {\\n    "@type": "SpeakableSpecification",\\n    "cssSelector": [".speakable-intro", ".speakable-takeaways"]\\n  }\\n}'
      ]
    },
    es: {
      title: "Caminar para Bajar de Peso: Cuántos Pasos Necesitas",
      excerpt: "Guía basada en ciencia sobre caminar para perder peso.",
      metaTitle: "Caminar para Bajar de Peso",
      metaDescription: "Cuántos pasos al día necesitas para perder peso.",
      content: \`
<p class="speakable-intro"><strong>Caminar es la herramienta de pérdida de grasa más subestimada en el fitness.</strong> Apuntar a 7,500-10,000 pasos diarios es ideal.</p>
      \`,
      faqs: []
    }
  }
`;

const updatedContent = content.substring(0, lastBracket) + newPosts + '\n' + content.substring(lastBracket);
fs.writeFileSync(file, updatedContent);
console.log('Appended 3 missing posts to posts.ts');
