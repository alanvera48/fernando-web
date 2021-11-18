import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const EmblaCarousel = (props) => {
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {props.slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__inner">
                <img
                  className="embla__slide__img"
                  src={props.mediaByIndex(index)}
                  alt="A cool cat."
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .embla {
          position: relative;
          background-color: #f7f7f7;
          width: 100%;
          height: 100%;
        }

        .embla__viewport {
          overflow: hidden;
          width: 100%;
          height: 100%;
        }

        .embla__viewport.is-draggable {
          cursor: move;
          cursor: grab;
        }

        .embla__viewport.is-dragging {
          cursor: grabbing;
        }

        .embla__container {
          display: flex;
          user-select: none;
          -webkit-touch-callout: none;
          -khtml-user-select: none;
          -webkit-tap-highlight-color: transparent;
          margin-left: -10px;
          width:100%;
          height: 100%
        }

        .embla__slide {
          position: relative;
          min-width: 100%;
          padding-left: 10px;
        }

        .embla__slide__inner {
          position: relative;
          overflow: hidden;
          height: 100%;
        }

        .embla__slide__img {
          position: absolute;
          display: block;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          max-width: none;
          transform: translate(-50%, -50%);
        }

        .embla__button {
          outline: 0;
          cursor: pointer;
          background-color: transparent;
          touch-action: manipulation;
          position: absolute;
          z-index: 1;
          top: 50%;
          transform: translateY(-50%);
          border: 0;
          width: 30px;
          height: 30px;
          justify-content: center;
          align-items: center;
          fill: #1bcacd;
          padding: 0;
        }

        .embla__button:disabled {
          cursor: default;
          opacity: 0.3;
        }

        .embla__button__svg {
          width: 100%;
          height: 100%;
        }

        .embla__button--prev {
          left: 27px;
        }

        .embla__button--next {
          right: 27px;
        }
      `}</style>
    </div>
  );
};

export default EmblaCarousel;
