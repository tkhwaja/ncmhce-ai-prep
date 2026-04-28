const PaidFeatureGate = ({ children, feature }: { children: React.ReactNode; feature: string }) => {
  void feature;
  return <>{children}</>;
};

export default PaidFeatureGate;
