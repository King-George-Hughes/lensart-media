const ErrorMessage = ({ children }: { children: any }) => {
  if (!children) return null;

  return (
    <>
      <p className="text-sm text-red-600">{children}</p>
    </>
  );
};

export default ErrorMessage;
