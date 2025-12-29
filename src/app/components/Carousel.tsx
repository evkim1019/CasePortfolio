import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const IMAGES = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/casestudyportfolio-16f78.firebasestorage.app/o/firstBaby.png?alt=media&token=4f4c20c6-7712-48c0-af23-3d97bc50513f",
    alt: "My first baby",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/casestudyportfolio-16f78.firebasestorage.app/o/run1.png?alt=media&token=322ea5dd-7b7c-41c1-a0c2-645f0d0df091",
    alt: "Run1",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/casestudyportfolio-16f78.firebasestorage.app/o/walkingWithTofu2.png?alt=media&token=a5086058-c7bb-4be2-9b78-7828563121e1",
    alt: "Walking with Tofu2",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/casestudyportfolio-16f78.firebasestorage.app/o/run2.png?alt=media&token=945295d3-1423-4568-918d-04c0a43d4ceb",
    alt: "Run2",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/casestudyportfolio-16f78.firebasestorage.app/o/walkingWithBaby.png?alt=media&token=8b5ac3dd-8120-45a0-9f81-ab5ad47427d6",
    alt: "Walking with Tofu",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/casestudyportfolio-16f78.firebasestorage.app/o/travel1.png?alt=media&token=be246be6-188d-46f9-a936-bda0e74ce657",
    alt: "Travel1",
  },
  // {
  //   src: "",
  //   alt: "",
  // },
];

const VISIBLE_SLIDES = 4;
const PEEK_PERCENT = 5;

export function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const timer = setInterval(() => emblaApi.scrollNext(), 4500);
    return () => clearInterval(timer);
  }, [emblaApi]);

  const slideWidth = `calc((100% - ${PEEK_PERCENT}%) / ${VISIBLE_SLIDES})`;

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4 px-6">
          <div>
            <h2 className="text-gray-900">More about me</h2>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous slide"
              className="p-3 rounded-full border border-gray-200 bg-white shadow-sm hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="h-5 w-5 text-gray-700" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next slide"
              className="p-3 rounded-full border border-gray-200 bg-white shadow-sm hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {IMAGES.map((image, index) => (
                <div
                  key={`${image.alt}-${index}`}
                  className="shrink-0 px-2"
                  style={{ flex: `0 0 ${slideWidth}` }}
                >
                  <div className="aspect-[1/1] rounded-2xl overflow-hidden bg-gray-100 shadow-sm">
                    <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
