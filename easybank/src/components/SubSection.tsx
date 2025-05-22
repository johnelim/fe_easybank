import SubSectionCard from "./SubSectionCard";
import type { SubSectionCardProps } from "./SubSectionCard";
import OnlineBankingIcon from "../assets/icon-online.svg?react";
import BudgetingIcon from "../assets/icon-budgeting.svg?react";
import OnboardingIcon from "../assets/icon-onboarding.svg?react";
import OpenApiIcon from "../assets/icon-api.svg?react";

export default function SubSection() {
  return (
    <section
      className="bg-light-grayish-blue relative -z-20 
    flex flex-col items-center
    p-8
    sm:block"
    >
      <h2 className="text-2xl">Why choose Easybank?</h2>
      <p className="sm:w-1/2 sm:mt-4">
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </p>

      <div className="flex flex-col mt-12 gap-4 sm:flex-row text-white">
        {subSections.map((s) => (
          <SubSectionCard key={s.title} {...s} />
        ))}
      </div>
    </section>
  );
}

const subSections: SubSectionCardProps[] = [
  {
    icon: OnlineBankingIcon,
    title: "Online Banking",
    description:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    icon: BudgetingIcon,
    title: "Simple Budgeting",
    description:
      "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.",
  },
  {
    icon: OnboardingIcon,
    title: "Fast Onboarding",
    description:
      "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    icon: OpenApiIcon,
    title: "Open Api",
    description:
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];
