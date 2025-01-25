import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <button style={{ background: "#fff", padding: '10px 8px', border: '1px solid #000', borderRadius: '25px' }} onClick={onClick}>{label}</button>;
}; 