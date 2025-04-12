import { Fragment } from "react";
const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
  "Efficient",
  "Responsive",
  "Intuitive",
  "Modern",
  "Lightweight",
]
const TapeSection = () => {
return <div className="py-16 lg:py-24 overflow-x-clip">
<div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
  <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,black_10%,transparent)]">
    <div className="flex flex-none gap-4 pr-4 py-4 animate-move-left [animation-duration:30s]" >
      {[...new Array(2).fill(0).map((_, idx) => (
        <Fragment key={idx}>
          {words.map(word => (
            <div key={word} className="inline-flex gap-4">
              <StarIcon className="size-6 text-gray-900 text-sm -rotate-12" />
              <span className="w-max uppercase text-gray-900 font-extrabold ">{word}</span>
            </div>
          ))}
        </Fragment>
      ))]}

    </div>
  </div>
</div>
</div>;
};
export default TapeSection;
// {
//   "Modular",
//   "Extensible",
//   "Customizable",
//   "Innovative",
//   "Engaging",
//   "Consistent",
//   "Scalable Architecture",
//   "Lightning Fast",
//   "High Performance",
//   "SEO Friendly",
//   "Cross-Platform",
//   "Versatile",
//   "Fault Tolerant",
//   "Error Resistant",
//   "Privacy-Focused"}