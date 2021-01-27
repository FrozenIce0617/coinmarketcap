type Props = {
  className?: string;
  variant?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary';
  children?: React.ReactNode;
  style?: React.CSSProperties;
  align?: 'left' | 'right' | 'center';
  weight?: number;
};

export default Props;
