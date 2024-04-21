"use client";

import { memo, useEffect } from "react";
import twemoji from "twemoji";

export default memo(() => {
  useEffect(() => {
    twemoji.parse(document.body, {
      folder: "svg",
      ext: ".svg",
    });
  }, []);
});
