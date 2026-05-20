import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import reviewData from "../data/testimonials.json";

interface Review {
    name: string;
    profession: string;
    testimoni: string;
}

const toSlug = (name: string) => name.toLowerCase().replace(/\s+/g, "-");

function ReviewSection() {
    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {
        setReviews(reviewData as Review[]);
    }, []);

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
                        key={review.name}
                        name={review.name}
                        comment={review.testimoni}
                        profession={review.profession}
                        image={`/images/customers/${toSlug(review.name)}.png`}
                    />
                ))}
            </div>
        </div>
    );
}

export default ReviewSection;