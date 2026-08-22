import { ImageIcon } from "lucide-react";
import type { ImageSlot } from "../../images";

type ImagePlaceholderProps = {
  slot: ImageSlot;
  className?: string;
  aspect?: string;
};

export function ImagePlaceholder({ slot, className = "", aspect = "aspect-[4/3]" }: ImagePlaceholderProps) {
  if (slot.src) {
    return (
      <img
        src={slot.src}
        alt={slot.alt}
        className={`w-full rounded-2xl object-cover ${aspect} ${className}`}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={slot.alt}
      className={`flex w-full flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-navy-900/20 bg-gradient-to-br from-teal-50 to-navy-50 text-navy-900/50 ${aspect} ${className}`}
    >
      <ImageIcon className="h-8 w-8" strokeWidth={1.5} />
      <span className="px-4 text-center text-xs font-medium">{slot.caption}</span>
    </div>
  );
}
