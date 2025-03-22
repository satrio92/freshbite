function AboutSection() {
  return (
    <div
      id="about"
      className="xl:h-[calc(100vh-160px)] h-auto bg-base flex flex-col xl:flex-row justify-center items-center xl:gap-[80px] gap-[52px] px-[24px] xl:px-0 pt-[60px] xl-pt-0"
    >
      <div className="flex flex-col gap-[22px] xl:w-[565px] w-full">
        <h2 className="xl:text-[52px] text-[28px] text-primary font-syncopate font-bold text-center xl:text-start">
          about us
        </h2>
        <div className="xl:w-[485px] w-full h-[2px] bg-primary"></div>
        <p className="xl:text-[20px] text-[14px] text-primary font-poppins text-center xl:text-start">
          <span className="text-secondary font-syncopate font-bold">
            FreshBite
          </span>{" "}
          adalah bakery dan coffee shop kecil di Jakarta yang menyajikan roti
          homemade dan kopi terbaik dari biji pilihan. Kami hadir untuk
          memberikan pengalaman rasa yang otentik dan berkualitas dengan harga
          terjangkau.
        </p>
      </div>
      <div className="relative">
        <img
          src="./images/freshbite-front.png"
          alt=""
          className="relative xl:rounded-[21px] rounded-[10px] z-10 xl:w-auto w-[320px] h-[220px] xl:h-auto"
        />
        <div className="absolute xl:rounded-[21px] rounded-[10px] xl:w-[606px] w-[320px] xl:h-[416px] h-[220px] bg-primary top-3 left-3"></div>
      </div>
    </div>
  );
}

export default AboutSection;
