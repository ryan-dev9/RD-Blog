import React from "react";
import { Orbitron } from "next/font/google";

const Subscription = () => {
  const plans = [
    {
      name: "Basic",
      price: "$10",
      period: "/month",
      features: [
        "5 blog posts per month",
        "Basic templates library",
        "Email support",
        "Standard hosting",
        "SSL certificate",
      ],
    },
    {
      name: "Standard",
      price: "$20",
      period: "/month",
      features: [
        "15 blog posts per month",
        "Premium templates library",
        "Priority email support",
        "Advanced hosting with CDN",
        "Custom domain included",
        "SEO optimization tools",
      ],
    },
    {
      name: "Premium",
      price: "$30",
      period: "/month",
      features: [
        "Unlimited blog posts",
        "Complete templates collection",
        "24/7 phone & email support",
        "Enterprise hosting with backup",
        "Multiple custom domains",
        "Advanced SEO & marketing tools",
      ],
    },
  ];

  return (
    <section className="py-12 sm:py-16 mb-6 bg-gray-50 dark:bg-transparent">
      <div className="max-w-7xl  mx-auto px-4 sm:px-9 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold font-[Orbitron]">
            Pricing Plans
          </h2>
          <p className="text-gray-600 font-semibold dark:text-gray-400 mt-2 text-base sm:text-xl">
            Choose the plan that suits you best
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name} id="Cards"
              className="bg-white dark:bg-black cursor-pointer hover:scale-105 hover:border-2  hover:border-blue-600  rounded-xl p-6 sm:p-8 shadow hover:shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Plan Name */}
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-1">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    {plan.period}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-gray-600 dark:text-gray-400 text-sm sm:text-base"
                    >
                      <svg
                        className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-5 rounded-lg font-medium transition-colors duration-300 text-sm sm:text-base">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subscription;
