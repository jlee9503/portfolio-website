"use client";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`max-w-[2500px] md:pt-[10rem] w-full mx-auto h-full z-0 bg-light relative dark:bg-dark ${className}`}>
      {children}
    </div>
  );
};

export default Container;
