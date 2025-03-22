interface ReviewCardProps {
  name: string;
  comment: string;
  profession: string;
  image: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  comment,
  profession,
  image,
}) => {
  return (
    <div className="xl:w-[419px] w-[calc(419px/100*78)] xl:h-[327px] h-auto rounded-[24px] border-2 border-primary bg-base overflow-hidden relative flex flex-col hover:-rotate-2 transition-all duration-150 ease-in">
      <img
        src="./images/quote-icon-bg.png"
        alt=""
        className="absolute -top-[82px] -left-[68px] z-0"
      />
      <div className="w-full h-[calc(100%-96px)] flex flex-col xl:gap-[15px] gap-[7px] xl:px-[33px] px-[23px] xl:pt-[40px] pt-[30px] pb-[16px] xl:pb-0 relative z-10">
        <img
          src="./images/quote-icon.png"
          alt=""
          className="w-[32px] h-[32px]"
        />
        <p className="text-primary text-[12px] xl:text-[16px] font-poppins ">
          {comment}
        </p>
      </div>
      <div className="w-full xl:h-[96px] h-[72px] bg-secondary border-t-2 border-primary flex items-center gap-[20px] px-[30px]">
        <img
          src={image}
          alt=""
          className="xl:w-[60px] w-[48px] xl:h-[60px] h-[52px] rounded-full"
        />
        <div className="flex flex-col">
          <h4 className="xl:text-[18px] text-[14px] text-base font-syncopate font-bold">
            {name}
          </h4>
          <p className="xl:text-[14px] text-[12px] text-base font-poppins font-normal">
            {profession}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
