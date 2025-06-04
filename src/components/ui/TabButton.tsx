interface TabButtonProps {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({
  isActive,
  onClick,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-3 py-1 text-xs font-medium ${
        isActive
          ? "border-md text-black"
          : "border-gray-300 bg-white text-gray-700"
      }`}
    >
      {children}
    </button>
  );
};

export default TabButton;
