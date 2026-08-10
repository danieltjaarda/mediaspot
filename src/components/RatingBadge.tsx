import Link from "next/link";

import VerifiedBadge from "@/components/VerifiedBadge";
import { AGGREGATE_RATING } from "@/lib/site";

const rating = AGGREGATE_RATING.value.toFixed(1).replace(".", ",");

export default function RatingBadge() {
  return (
    <Link
      href="#reviews"
      className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 py-1.5 pl-3 pr-3.5 text-sm text-white/85 backdrop-blur-md transition-colors duration-200 hover:bg-white/15"
    >
      <span className="flex items-center gap-0.5 text-accent" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.5l2.9 5.9 6.5.95-4.7 4.58 1.11 6.47L12 17.35l-5.81 3.05 1.11-6.47L2.6 9.35l6.5-.95L12 2.5Z" />
          </svg>
        ))}
      </span>
      <span className="font-semibold text-white">{rating}</span>
      beoordeeld
      <VerifiedBadge size={15} label="Geverifieerde beoordelingen" />
    </Link>
  );
}
