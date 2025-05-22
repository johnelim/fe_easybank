import CurrencyThumbnail from "../assets/image-currency.jpg";
import RestaurantThumbnail from "../assets/image-restaurant.jpg";
import PlaneThumbnail from "../assets/image-plane.jpg";
import ConfettiThumbnail from "../assets/image-confetti.jpg";
import { Article } from "./Article";
import type { ArticleProps } from "./Article";

export default function LatestArticles() {
  return (
    <section>
      <h2 className="text-4xl">Latest Articles</h2>
      <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center items-center">
        {latestArticles.map((article) => (
          <Article key={article.title} {...article} />
        ))}
      </div>
    </section>
  );
}

const latestArticles: ArticleProps[] = [
  {
    thumbnail: CurrencyThumbnail,
    author: "Claire Robinson",
    title: "Receive money in any currency with no fees",
    description:
      "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single …",
  },
  {
    thumbnail: RestaurantThumbnail,
    author: "Wilson Hutton",
    title: "Treat yourself without worrying about money",
    description:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
  },
  {
    thumbnail: PlaneThumbnail,
    author: "Wilson Hutton",
    title: "Take your Easybank card wherever you go",
    description:
      "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you …",
  },
  {
    thumbnail: ConfettiThumbnail,
    author: "Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    description:
      "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ...",
  },
];
