"use client";
import React, { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from 'next/compat/router';

export const FacebookPixelEvents: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("524958800367603");
        ReactPixel.pageView();

        if (router) {
          router.events.on('routeChangeComplete', () => {
            ReactPixel.pageView();
          });
        }
      });
  }, [pathname, searchParams, router]);

  return null;
};