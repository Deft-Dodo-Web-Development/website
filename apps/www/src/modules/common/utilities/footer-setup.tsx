"use client";

import { useEffect } from "react";
import useFooter, { FooterVariants } from "../hooks/useFooter";

type FooterSetupProps = {
  variant: FooterVariants;
};

/**
 * ### This component **do not contain the logic to render the footer.**
 *
 * It's just a placeholder for the actual footer setup.
 */
const FooterSetup: React.FC<FooterSetupProps> = ({ variant }) => {
  const setVariant = useFooter((state) => state.setVariant);

  useEffect(() => {
    setVariant(variant);
  }, [variant, setVariant]);

  return null;
};

export default FooterSetup;
1;
