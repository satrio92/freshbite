function HeroSection() {
  return (
    <div id="hero" className="flex flex-col xl:flex-row">
      <div className="flex flex-col items-center xl:items-start xl:pl-[136px] px-[24px] xl:pr-0 pt-[170px]">
        <div
          id="heading"
          className="flex flex-col gap-[6px] xl:gap-0 w-full xl:w-auto"
          data-aos="fade-left"
          data-aos-delay="0"
        >
          <h1 className="font-syncopate font-bold xl:text-[70px] text-[32px] text-secondary text-center xl:text-start">
            FreshBite
          </h1>
          <div className="flex justify-center items-center xl:w-[520px] w-full xl:-mt-1 relative">
            <div className="h-[2px] xl:w-[520px] w-full bg-primary absolute"></div>
            <div className="w-[22px] h-[22px] rounded-full bg-base border-4 border-primary absolute"></div>
          </div>
          <h1 className="font-syncopate font-bold xl:text-[48px] text-[24px] text-primary mt-2 text-center xl:text-start">
            Bakery & Coffee
          </h1>
        </div>
        <div
          id="subheading"
          className="font-poppins xl:text-[18px] text-[13px] text-primary xl:w-[592px] w-full mt-[28px] text-center xl:text-start"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          Rasakan sensasi cita rasa homemade terbaik dengan kualitas premium dan
          kehangatan di setiap gigitan!
        </div>
        <button
          className="relative mt-[48px] mb-[360px] xl:mb-0"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <div className="absolute xl:h-[57px] h-[calc(57px/100*75)] xl:w-[205px] w-[calc(205px/100*75)] bg-base border-[1.5px] border-primary rounded-[6px] z-10 flex justify-center items-center xl:text-[16px] text-[12px] text-primary font-syncopate font-bold hover:bg-secondary hover:text-base hover:-translate-y-1 transition duration-300 ease-in-out">
            Lihat Menu
          </div>
          <div className="relative xl:h-[57px] h-[calc(57px/100*75)] xl:w-[205px] w-[calc(205px/100*75)] bg-primary border-[1.5px] border-primary rounded-[6px] ml-[4px] mt-[4px]"></div>
        </button>
      </div>
      <div
        className="absolute xl:bottom-0 xl:right-[130px] mt-[500px] xl:mt-0 xl:inline flex justify-center w-full xl:w-auto"
        data-aos="fade-up"
        data-aos-offset="-100"
      >
        <img
          src="./images/hero-img.png"
          alt=""
          className="relative z-10 xl:size-[calc(9.4/10*100%)] w-[300px] rounded-t-full"
        />
        <div className="absolute top-0 xl:right-[18px] bg-primary rounded-t-full xl:h-[510px] h-[320px] xl:w-[488px] w-[300px] bottom-0 xl:bottom-auto ml-[20px] xl:ml-0"></div>
      </div>
    </div>
  );
}

export default HeroSection;
