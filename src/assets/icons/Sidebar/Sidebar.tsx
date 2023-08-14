
interface Props {
  color?: string;
  className?: string;
}

export const Sidebar = ({ color = "#F97316", className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="18"
      viewBox="0 0 26 20"
      width="19"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M13 3.125C16.5937 3.125 18.9271 3.63542 20.3646 5.02083C21.8021 6.40624 22.375 8.80207 22.375 12.5C22.375 16.0104 21.8958 18.3125 20.5729 19.7916C19.25 21.2708 16.7812 21.8749 13 21.8749C9.21875 21.8749 6.75 21.2916 5.35417 19.677C4.09375 18.2291 3.625 15.9479 3.625 12.5C3.625 8.85415 4.14583 6.51041 5.57292 5.08333C7 3.65625 9.35417 3.125 13 3.125Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5625"
      />
      <path
        className="path"
        d="M15.0833 21.6146V3.38544"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5625"
      />
      <path
        className="path"
        d="M10.9166 8.33331H7.79163"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5625"
      />
      <path
        className="path"
        d="M10.9166 12.5H7.79163"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5625"
      />
    </svg>
  );
};
