function BenefitsSection() {
  return (
    <div
      id="benefits"
      className="w-full xl:h-[414px] h-auto bg-primary flex xl:flex-row flex-col items-center xl:items-stretch pb-[48px] xl:pb-0"
    >
      <h2 className="xl:text-[48px] text-[30px] text-center xl:text-start text-base font-syncopate font-bold xl:w-[292px] w-full xl:ml-[81px] mt-[57px] xl:mr-[36px] leading-[1.3] px-[30px] xl:px-0">
        WHY CHoose us?
      </h2>
      <div className="xl:w-[2px] w-full xl:h-[335px] h-[2px] bg-base/70 mt-[40px]"></div>
      <div className="xl:w-[351px] w-full xl:h-auto h-[360px] overflow-hidden flex justify-center relative group cursor-default">
        <img
          src="./images/benefits/fresh-ingredients.png"
          alt=""
          className="xl:w-auto w-full h-[310px] saturate-0 group-hover:saturate-100 transition-all ease-in-out duration-300"
        />
        <h4 className="absolute top-[290px] w-[261px] text-[24px] text-base font-syncopate font-bold text-center group-hover:top-[285px] transition-all ease-in-out duration-300">
          Fresh Ingredients
        </h4>
      </div>
      <div className="xl:w-[2px] w-[calc(100%-12px)] xl:h-[335px] h-[2px] bg-base/70 mt-[40px]"></div>
      <div className="xl:w-[351px] w-full xl:h-auto h-[360px] overflow-hidden flex justify-center relative group cursor-default">
        <img
          src="./images/benefits/homemade-with-love.png"
          alt=""
          className="xl:w-auto w-full h-[310px] saturate-0 group-hover:saturate-100 transition-all ease-in-out duration-300"
        />
        <h4 className="absolute top-[290px] w-[261px] text-[24px] text-base font-syncopate font-bold text-center group-hover:top-[285px] transition-all ease-in-out duration-300">
          Homemade with love
        </h4>
      </div>
      <div className="xl:w-[2px] w-full xl:h-[335px] h-[2px] bg-base/70 mt-[40px]"></div>
      <div className="xl:w-[351px] w-full xl:h-auto h-[360px] overflow-hidden flex justify-center relative group cursor-default">
        <img
          src="./images/benefits/affordable-price.png"
          alt=""
          className="xl:w-auto w-full h-[310px] saturate-0 group-hover:saturate-100 transition-all ease-in-out duration-300"
        />
        <h4 className="absolute top-[290px] w-[261px] text-[24px] text-base font-syncopate font-bold text-center group-hover:top-[285px] transition-all ease-in-out duration-300">
          affordable price
        </h4>
      </div>
    </div>
  );
}

export default BenefitsSection;
