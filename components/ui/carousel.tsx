import React, { useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { DotButton, useDotButton } from "./dot-button";
import { EmblaCarouselType } from "embla-carousel";

interface Review {
  id: number;
  name: string;
  review: string;
  inicial: string;
  stars: number;
}

type PropType = {
  slides: Review[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );

  return (
    <section className="embla">
      <div className="embla__viewport w-full p-8" ref={emblaRef}>
        <div className="embla__container gap-x-4">
          {slides.map((review, index) => (
            <div
              key={index}
              className="embla__slide bg-white p-6 rounded-lg shadow-md h-full justify-between"
            >
              <div className="flex items-center mb-4">
                <div className="bg-purple-300 text-gray-800 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">
                  {review.inicial}
                </div>
                <h3 className="text-xl font-semibold">{review.name}</h3>
              </div>
              <p className="text-gray-700 mb-2 text-left">{review.review}</p>
              <div className="flex space-x-1">
                {[...Array(review.stars)].map((_, index) => (
                  <span key={index} className="text-yellow-500">
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
