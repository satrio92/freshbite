function QuoteSection() {
  return (
    <div
      id="quote"
      className="w-full relative xl:h-[160px] h-[120px] bg-primary z-30"
    >
      <div className="flex justify-between">
        <img
          src="./images/quote-mask-left.png"
          alt=""
          className="h-[120px] xl:h-[160px]"
          data-aos="fade-right"
        />
        <img
          src="./images/quote-mask-right.png"
          alt=""
          className="h-[120px] xl:h-[160px]"
          data-aos="fade-left"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center font-syncopate xl:text-[22px] text-[13px] text-base font-bold px-[24px] xl:px-0">
        <h3
          className="xl:w-[846px] w-auto text-center"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          "Setiap gigitan dari FreshBite adalah perpaduan rasa, tekstur, dan
          cinta yang sempurna."
        </h3>
      </div>
    </div>
  );
}

export default QuoteSection;
