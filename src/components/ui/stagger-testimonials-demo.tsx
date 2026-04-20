import { StaggerTestimonials, type TestimonialData } from "@/components/ui/stagger-testimonials";

const demoData: TestimonialData[] = [
  {
    id: 0,
    testimonial: "My transformation at Belk Body Lab has been life-changing. I've gained 15lbs of lean muscle and completely redefined my physique.",
    by: "Marcus Thompson, Elite Physique Athlete",
    imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 1,
    testimonial: "The precision coaching and science-backed nutrition plans allowed me to drop 8% body fat in just 12 weeks while maintaining my strength.",
    by: "Jasmine Rodriguez, Transformation Client",
    imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    testimonial: "I've tried every trainer in the city, but nobody understands biomechanics like the team here. My joint pain is gone and my lifts are soaring.",
    by: "DeShawn Williams, Powerlifting Specialist",
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    testimonial: "Belk Body Lab's approach to holistic wellness is unmatched. I feel stronger, more energetic, and more confident than I did in my 20s.",
    by: "Brittany Chen, Wellness Advocate",
    imgSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80"
  }
];

const DemoOne = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center bg-black">
      <StaggerTestimonials data={demoData} />
    </div>
  );
};

export { DemoOne };
