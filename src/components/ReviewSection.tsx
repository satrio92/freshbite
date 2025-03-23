import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { client, urlFor } from "../sanityClient";

interface review {
  _id: string;
  customerName: string;
  comment: string;
  profession: string;
  customerImage: string;
}

function ReviewSection() {
  const [reviews, setReviews] = useState<review[]>([]);

  useEffect(() => {
    client
      .fetch<review[]>(
        `*[_type == "review"] { _id, customerName, comment, profession, customerImage }`
      )
      .then((data) => {
        console.log("Fetched Reviews:", data);
        setReviews(data);
      })
      .catch((error) => {
        console.error("Error fetching customer reviews:", error);
      });
  });
  return (
    <div
      id="review"
      className="w-full xl:h-[calc((100vh*2)-414px)] h-auto bg-base flex justify-center items-center py-[72px] xl:py-0"
    >
      <div className="flex flex-wrap gap-[33px] justify-center items-center">
        <h2
          className="xl:w-[419px] w-full xl:text-[46px] text-[28px] text-primary font-syncopate font-bold leading-[1.3] text-center xl:text-start"
          data-aos="fade-right"
        >
          What <br className="hidden xl:inline"></br> Our Customers Say?
        </h2>
        {reviews.map((review, index) => (
          <ReviewCard
            i={index}
            key={review._id}
            name={review.customerName}
            comment={review.comment}
            profession={review.profession}
            image={urlFor(review.customerImage).width(200).url()}
          />
        ))}
      </div>
    </div>
  );
}

export default ReviewSection;
