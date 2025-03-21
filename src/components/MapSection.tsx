function MapSection() {
  return (
    <div
      id="maps"
      className="w-full xl:h-[calc(100vh-100px)] h-auto bg-primary flex xl:flex-row flex-col items-center justify-center xl:gap-[80px] gap-[60px] px-[24px] xl:px-0 pt-[32px] xl:pt-0"
    >
      <div className="xl:w-[700px] w-full xl:h-[440px] h-[240px] bg-base xl:rounded-[18px] rounded-[10px] overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1716.4353955688127!2d106.81507200391667!3d-6.258075910489273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f17f86448b97%3A0xa50b66e958e93ed!2sJl.%20Kemang%20Raya%20No.15%2C%20RT.6%2FRW.1%2C%20Bangka%2C%20Kec.%20Mampang%20Prpt.%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012730!5e0!3m2!1sid!2sid!4v1741105224283!5m2!1sid!2sid"
          width="700"
          height="440"
          loading="lazy"
        ></iframe>
      </div>
      <div className="w-[370px] flex flex-col gap-[20px] text-center xl:text-start">
        <h4 className="xl:text-[28px] text-[20px] text-base font-syncopate font-bold">
          FreshBite Bakery & Coffee
        </h4>
        <div className="flex flex-col gap-[8px] xl:text-[18px] text-[14px] text-base font-poppins">
          <p className="font-semibold">Alamat :</p>
          <p className="ml-[16px]">
            Jl. Kemang Raya No. 15, Jakarta Selatan, DKI Jakarta 12730
          </p>
        </div>
        <div className="flex flex-col gap-[8px] xl:text-[18px] text-[14px] text-base font-poppins">
          <p className="font-semibold">Jam Operasional :</p>
          <p className="ml-[16px]">Senin – Jumat: 07.00 – 21.00 WIB</p>
          <p className="ml-[16px]">Sabtu – Minggu: 08.00 – 23.00 WIB</p>
        </div>
      </div>
    </div>
  );
}

export default MapSection;
