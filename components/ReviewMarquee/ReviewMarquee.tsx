"use client";
import Marquee from "react-fast-marquee";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const ReviewMarquee = () => {
  const reviews = [
    {
      name: "Tony",
      star: 4,
      review:
        "The DJ we hired, Sebastian, was absolutely incredible. He read the crowd perfectly, transitioning smoothly between songs and keeping the energy alive all night. You could tell he was experienced and genuinely passionate about his craft.",
    },
    {
      name: "Sarah",
      star: 4.5,
      review:
        "We booked Sebastian for our company event and he exceeded expectations. The setup was flawless, communication was easy, and he tailored the playlist exactly to what we asked for while still surprising us with fresh mixes. Everyone was dancing until the very end!",
    },
    {
      name: "James",
      star: 4.5,
      review:
        "I’ve been to plenty of events, but this one was on another level thanks to Sebastian. From the moment he started, the vibe was electric. Guests kept coming up to me saying it was the best music they’ve heard at a wedding. Truly unforgettable!",
    },
    {
      name: "Emily",
      star: 3,
      review:
        "Our wedding reception was magical, and so much of that was because of the music. Sebastian not only played our favorite tracks but blended them in a way that felt seamless and unique. It wasn’t just music; it was an experience that brought everyone together.",
    },
    {
      name: "Jake",
      star: 1,
      review:
        "Not what we expected. The setup took too long and the vibe didn’t really match our crowd. Hoping it improves in the future.",
    },
    {
      name: "Lena",
      star: 5,
      review:
        "Absolutely flawless from start to finish! Everyone was raving about the DJ — the dance floor never emptied once. Couldn’t have asked for more.",
    },
    {
      name: "Marcus",
      star: 2,
      review:
        "Some songs were great, but the transitions felt off at times. Could be better with more crowd interaction.",
    },
  ];

  // helper to render stars
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-500" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-500" />);
    }

    return <div className="flex items-center gap-1">{stars}</div>;
  };

  return (
    <div className="bg-slate-50/90 text-slate-700 py-6">
      <Marquee pauseOnHover speed={15} gradient={false}>
        {reviews.map((review, i) => (
          <div
            key={i}
            className="mx-6 p-6 min-w-[320px] min-h-[200px] max-w-md rounded-2xl shadow-md bg-white flex flex-col justify-between"
          >
            <p className="my-2 text-sm leading-snug">“{review.review}”</p>
            <div className="flex justify-between items-center">
              <p className="italic text-xs text-right">— {review.name}</p>
              {renderStars(review.star)}
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ReviewMarquee;
