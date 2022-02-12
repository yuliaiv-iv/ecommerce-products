export const CloseBtn = ({ className, onClick }) => {
  return (
    <svg
      width={20}
      height={20}
      className={className}
      onClick={onClick}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 2.857 17.143 0 10 7.143 2.857 0 0 2.857 7.143 10 0 17.143 2.857 20 10 12.857 17.143 20 20 17.143 12.857 10 20 2.857Z"
        fill="#fff"
      />
    </svg>
  );
};
