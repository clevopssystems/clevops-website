/**
 * Line icons for the homepage. Decorative only: every icon sits next to a
 * visible label, so all of them are aria-hidden.
 */
type IconProps = { size?: number };

function Svg({ size = 18, children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export const ArrowRight = (p: IconProps) => <Svg {...p}><path d="M5 12h14m-6-6 6 6-6 6" /></Svg>;
export const ArrowDown = (p: IconProps) => <Svg {...p}><path d="M12 5v14m-6-6 6 6 6-6" /></Svg>;
export const Funnel = (p: IconProps) => <Svg {...p}><path d="M4 5h16l-6 7.5V19l-4-2v-4.5L4 5Z" /></Svg>;
export const Monitor = (p: IconProps) => <Svg {...p}><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8m-4-4v4" /></Svg>;
export const Search = (p: IconProps) => <Svg {...p}><circle cx="11" cy="11" r="6.5" /><path d="m20 20-4.2-4.2" /></Svg>;
export const Megaphone = (p: IconProps) => <Svg {...p}><path d="M4 10v4h3l7 4V6L7 10H4Z" /><path d="M18 9.5a3.5 3.5 0 0 1 0 5" /></Svg>;
export const Automation = (p: IconProps) => <Svg {...p}><path d="M4 12a8 8 0 0 1 13.7-5.6M20 12a8 8 0 0 1-13.7 5.6" /><path d="M18 3v4h-4M6 21v-4h4" /></Svg>;
export const Check = (p: IconProps) => <Svg {...p}><path d="m5 12.5 4.5 4.5L19 7.5" /></Svg>;
export const Ban = (p: IconProps) => <Svg {...p}><circle cx="12" cy="12" r="8" /><path d="m6.5 6.5 11 11" /></Svg>;
export const Ruler = (p: IconProps) => <Svg {...p}><path d="M4 19h16M7 19v-4m5 4V9m5 10V5" /></Svg>;
export const Target = (p: IconProps) => <Svg {...p}><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="0.6" /></Svg>;
export const Plus = (p: IconProps) => <Svg {...p}><path d="M12 5v14M5 12h14" /></Svg>;
