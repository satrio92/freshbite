interface ProductCardProps {
  key: string;
  name: string;
  description: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  key,
  name,
  image,
  description,
}) => {
  return (
    <div
      key={key}
      className="product-card flex flex-col xl:gap-[21px] gap-[12px]"
    >
      <div className="xl:w-[314px] w-[calc(314px*51/100)] xl:h-[268px] h-[calc(268px*51/100)] xl:rounded-[12px] rounded-[calc(12px/100*75)] overflow-hidden">
        <img src={image} alt="" className="w-full h-full" />
      </div>
      <div className="xl:w-[314px] w-[calc(314px*51/100)] xl:h-[143px] h-auto xl:rounded-[12px] rounded-[calc(12px/100*75)] bg-base border-2 border-primary overflow-hidden">
        <div className="w-full xl:h-[69px] h-[38px] bg-secondary flex items-center px-[18px] leading-[1.1]">
          <h4 className="xl:text-[18px] text-[11px] text-base font-syncopate font-bold">
            {name}
          </h4>
        </div>
        <div className="w-full xl:h-[68px] h-[74px] flex items-center xl:px-[18px] px-[12px]">
          <p className="xl:text-[12px] text-[9px] text-primary font-poppins font-medium">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
