import clsx from 'clsx';

interface DividerProps {
  custom?: string;
}

const Divider: React.FC<DividerProps> = ({ custom }) => {
  return <div className={clsx('w-full border-b border-slate-500', custom)} />;
};

export default Divider;
