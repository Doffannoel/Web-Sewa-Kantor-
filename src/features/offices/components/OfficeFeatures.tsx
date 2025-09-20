const FEATURES_MAP = [
  {
    label: "Global Event",
    description: "Stable & high-speed internet",
    icon: "/assets/images/icons/home-trend-up.svg",
  },
  {
    label: "Extra Snacks",
    description: "Stable & high-speed internet",
    icon: "/assets/images/icons/coffee.svg",
  },
  {
    label: "Sustainbilty",
    description: "Stable & high-speed internet",
    icon: "/assets/images/icons/home-trend-up.svg",
  },
];

export default function OfficeFeatures({features} : { features: string[]}) {
  return (
    <div className="grid grid-cols-3 gap-x-5 gap-y-[30px]">
{features.map((feature) => {
  const matched = FEATURES_MAP.find((f) => f.label === feature);
  return matched ? (
    <div className="flex items-center gap-4" key={feature}>
      <img
        src={matched.icon}
        className="w-[34px] h-[34px]"
        alt={matched.label}
      />
      <div className="flex flex-col gap-[2px]">
        <p className="font-bold text-lg leading-[24px]">{matched.label}</p>
        <p className="text-sm leading-[21px]">{matched.description}</p>
      </div>
    </div>
  ) : null;
})}
    </div>
  );
}
