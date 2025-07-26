import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { motion as motion$1, AnimatePresence } from 'motion/react';
import { CgDesignmodo } from 'react-icons/cg';
import { FaRocket, FaCheck, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';
import { IoClose, IoSettingsOutline, IoAccessibility } from 'react-icons/io5';
import { SiFireship } from 'react-icons/si';
import { Slot } from '@radix-ui/react-slot';
import clsx, { clsx as clsx$1 } from 'clsx';
import { useState, useEffect, useMemo, memo, useRef, useCallback, useSyncExternalStore, useId } from 'react';
import Lottie from 'lottie-react';
import { FiMaximize2, FiGithub } from 'react-icons/fi';
import { PiDevToLogo } from 'react-icons/pi';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { twMerge } from 'tailwind-merge';
import { TbBrandGithubFilled, TbMusicPause } from 'react-icons/tb';
import * as motion from 'motion/react-client';
import { RiCodeAiFill, RiMusicAiLine } from '@remixicon/react';
import { RiGameLine } from 'react-icons/ri';
import { RxSpeakerLoud } from 'react-icons/rx';
import { GrLinkUp } from 'react-icons/gr';
import { MoveDownRight } from 'lucide-react';
import { GoDash } from 'react-icons/go';

const specialties = [
  {
    text: "performance",
    icon: FaRocket,
    styles: {
      borderColor: "#D97706",
      background: "#FBBF24",
      color: "#92400E"
    },
    whileInView: {
      rotate: "-10deg",
      top: "-95px"
    }
  },
  {
    text: "accessibility",
    icon: IoAccessibility,
    styles: {
      borderColor: "#047857",
      background: "#34D399",
      color: "#065F46"
    },
    whileInView: {
      rotate: "-5deg",
      top: "-20px"
    }
  },
  {
    text: "UI/UX",
    icon: CgDesignmodo,
    styles: {
      borderColor: "#2563EB",
      background: "#93C5FD",
      color: "#1E40AF"
    },
    whileInView: {
      rotate: "15deg",
      top: "-30px",
      left: "180px"
    }
  },
  {
    text: "trends",
    icon: SiFireship,
    styles: {
      borderColor: "#DC2626",
      background: "#F87171",
      color: "#7F1D1D"
    },
    whileInView: {
      rotate: "25deg",
      left: "-30px",
      bottom: "-45px"
    }
  }
];
function FocusedOn() {
  return /* @__PURE__ */ jsx("div", { className: "relative inline-block items-center pr-40 sm:pr-0 sm:pl-5", children: specialties.map((specialty, index) => /* @__PURE__ */ jsx(Specialty, { specialty }, index)) });
}
function Specialty({ specialty }) {
  const Icon = specialty.icon;
  const initialStylesValues = Object.fromEntries(
    Object.keys(specialty.whileInView).map((key) => [key, 0])
  );
  return /* @__PURE__ */ jsxs(
    motion$1.div,
    {
      className: "absolute z-10 flex items-center gap-1 rounded-lg border-2 px-2 font-semibold text-xl select-none",
      initial: initialStylesValues,
      style: { border: "2px solid", ...specialty.styles },
      whileInView: {
        scale: 1.1,
        ...specialty.whileInView
      },
      whileHover: {
        scale: 1.15,
        filter: "brightness(1.05)"
      },
      whileTap: {
        scale: 1.05,
        filter: "brightness(1.1)"
      },
      children: [
        /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(Icon, {}) }),
        /* @__PURE__ */ jsx("span", { className: "", children: specialty.text })
      ]
    }
  );
}
function Container({
  children,
  asChild = false,
  align = "center",
  className = ""
}) {
  const Component = asChild ? Slot : "div";
  const aligns = {
    center: "mx-auto",
    left: "ml-auto",
    right: "mr-auto"
  };
  const alignClassName = aligns[align];
  return /* @__PURE__ */ jsx(Component, { className: clsx("max-w-5xl", alignClassName, className), children });
}
const NAVIGATION_NAMES = {
  ABOUT: "about",
  TERMINAL: "terminal",
  SKILLS: "skills",
  PROJECTS: "projects",
  PRINCIPLES: "principles",
  PROFILE: "profile"
  // Coming soon...
  // CONTACT: 'Contact',
  // RESUME: 'Resume',
};
function About() {
  return /* @__PURE__ */ jsx(Container, { asChild: true, children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: "md:py-[200px] sm:py-[100px] text-center h-[450px] sm:h-auto",
      id: NAVIGATION_NAMES.ABOUT,
      children: [
        /* @__PURE__ */ jsx("span", { className: "text-2xl opacity-60", children: "\u{1F44B} Hey, I'm Luis Alvarez" }),
        /* @__PURE__ */ jsx(
          motion$1.div,
          {
            className: "my-4 text-5xl font-semibold",
            initial: {
              opacity: 0.5,
              scale: 0.9
            },
            whileInView: {
              opacity: 1,
              scale: 1
            },
            exit: {
              opacity: 0,
              scale: 0.9
            },
            children: "Front-end focused Software Developer"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "text-lg lg:text-3xl font-medium opacity-70 block w-[350px] sm:w-[400px] lg:w-[800px] mx-auto", children: "specialized in designing and building scalable, maintainable, user-centric web apps focused on" }),
        /* @__PURE__ */ jsx(FocusedOn, {})
      ]
    }
  ) });
}
const nm$9 = "Comp 6";
const ddd$9 = 0;
const h$9 = 1080;
const w$9 = 1920;
const meta$1 = { "g": "@lottiefiles/toolkit-js 0.33.2" };
const layers$9 = [{ "ty": 4, "nm": "Shape Layer 2", "sr": 1, "st": 0, "op": 310, "ip": 0, "hd": false, "ddd": 0, "bm": 0, "hasMask": false, "ao": 0, "ks": { "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 }, "sk": { "a": 0, "k": 0 }, "p": { "a": 0, "k": [0, 0, 0], "ix": 2 }, "r": { "a": 0, "k": 87.897, "ix": 10 }, "sa": { "a": 0, "k": 0 }, "o": { "a": 0, "k": 100, "ix": 11 } }, "ef": [], "shapes": [{ "ty": "sr", "bm": 0, "hd": false, "mn": "ADBE Vector Shape - Star", "nm": "Polystar Path 1", "ix": 1, "d": 1, "pt": { "a": 0, "k": 3, "ix": 3 }, "p": { "a": 0, "k": [0, 0], "ix": 4 }, "or": { "a": 0, "k": 100, "ix": 7 }, "os": { "a": 0, "k": 0, "ix": 9 }, "r": { "a": 0, "k": 0, "ix": 5 }, "sy": 2 }, { "ty": "fl", "bm": 0, "hd": false, "mn": "ADBE Vector Graphic - Fill", "nm": "Fill 1", "c": { "a": 0, "k": [0, 0, 0], "ix": 4 }, "r": 1, "o": { "a": 0, "k": 100, "ix": 5 } }], "ind": 1, "parent": 2 }, { "ty": 3, "nm": "Trace Shape Layer 1: Path 1 [1.1]", "sr": 1, "st": 0, "op": 310, "ip": 0, "hd": false, "cl": "1", "ddd": 0, "bm": 0, "hasMask": false, "ao": 0, "ks": { "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 }, "sk": { "a": 0, "k": 0 }, "p": { "a": 0, "k": [960, 540, 0], "ix": 2, "x": "var $bm_rt;\nvar pathLayer = thisComp.layer('Shape Layer 1');\nvar progress = $bm_div(thisLayer.effect('Pseudo/ADBE Trace Path')('Pseudo/ADBE Trace Path-0001'), 100);\nvar pathToTrace = pathLayer('ADBE Root Vectors Group')(1)('ADBE Vectors Group')(1)('ADBE Vector Shape');\n$bm_rt = pathLayer.toComp(pathToTrace.pointOnPath(progress));" }, "r": { "a": 0, "k": 0, "ix": 10, "x": "var $bm_rt;\nvar pathToTrace = thisComp.layer('Shape Layer 1')('ADBE Root Vectors Group')(1)('ADBE Vectors Group')(1)('ADBE Vector Shape');\nvar progress = $bm_div(thisLayer.effect('Pseudo/ADBE Trace Path')('Pseudo/ADBE Trace Path-0001'), 100);\nvar pathTan = pathToTrace.tangentOnPath(progress);\n$bm_rt = radiansToDegrees(Math.atan2(pathTan[1], pathTan[0]));" }, "sa": { "a": 0, "k": 0 }, "o": { "a": 0, "k": 0, "ix": 11 } }, "ef": [{ "ty": 5, "mn": "Pseudo/ADBE Trace Path", "nm": "Trace Path", "ix": 1, "en": 1, "ef": [{ "ty": 0, "mn": "Pseudo/ADBE Trace Path-0001", "nm": "Progress", "ix": 1, "v": { "a": 1, "k": [{ "o": { "x": 0.5, "y": 0 }, "i": { "x": 0.2, "y": 1 }, "s": [0], "t": 0 }, { "s": [100], "t": 39 }], "ix": 1, "x": "var $bm_rt;\nif (thisProperty.propertyGroup(1)('Pseudo/ADBE Trace Path-0002') == true && thisProperty.numKeys > 1) {\n    $bm_rt = thisProperty.loopOut('cycle');\n} else {\n    $bm_rt = value;\n}" } }, { "ty": 7, "mn": "Pseudo/ADBE Trace Path-0002", "nm": "Loop", "ix": 2, "v": { "a": 0, "k": 0, "ix": 2 } }] }], "ind": 2 }, { "ty": 4, "nm": "Shape Layer 1", "sr": 1, "st": 0, "op": 310, "ip": 0, "hd": false, "ddd": 0, "bm": 0, "hasMask": false, "ao": 0, "ks": { "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 }, "sk": { "a": 0, "k": 0 }, "p": { "a": 0, "k": [856, 540, 0], "ix": 2 }, "r": { "a": 0, "k": 0, "ix": 10 }, "sa": { "a": 0, "k": 0 }, "o": { "a": 0, "k": 100, "ix": 11 } }, "ef": [], "shapes": [{ "ty": "gr", "bm": 0, "hd": false, "mn": "ADBE Vector Group", "nm": "Shape 1", "ix": 1, "cix": 2, "np": 3, "it": [{ "ty": "sh", "bm": 0, "hd": false, "mn": "ADBE Vector Shape - Group", "nm": "Path 1", "ix": 1, "d": 1, "ks": { "a": 0, "k": { "c": false, "i": [[0, 0], [-323.186, 189.871], [161.695, 17.609], [90.661, -138.711], [-428.001, 204], [-170, 4]], "o": [[0, 0], [160, -94], [-133.356, -14.523], [-200, 306], [373.051, -177.81], [137.147, -3.227]], "v": [[-622, 86], [144, 110], [101.356, -205.477], [-258, -4], [312.001, 298], [830, 106]] }, "ix": 2 } }, { "ty": "st", "bm": 0, "hd": false, "mn": "ADBE Vector Graphic - Stroke", "nm": "Stroke 1", "lc": 1, "lj": 1, "ml": 4, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 30, "ix": 5 }, "c": { "a": 0, "k": [0, 0, 0], "ix": 3 } }, { "ty": "tr", "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "p": { "a": 0, "k": [0, 0], "ix": 2 }, "r": { "a": 0, "k": 0, "ix": 6 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "o": { "a": 0, "k": 100, "ix": 7 } }] }, { "ty": "tm", "bm": 0, "hd": false, "mn": "ADBE Vector Filter - Trim", "nm": "Trim Paths 1", "ix": 2, "e": { "a": 0, "k": 100, "ix": 2, "x": "var $bm_rt;\n$bm_rt = thisComp.layer('Trace Shape Layer 1: Path 1 [1.1]').effect('Trace Path')('Progress');" }, "o": { "a": 0, "k": 0, "ix": 3 }, "s": { "a": 0, "k": 0, "ix": 1 }, "m": 1 }], "ind": 3 }];
const v$9 = "5.7.1";
const fr$9 = 30;
const op$9 = 60;
const ip$9 = 0;
const assets$9 = [];
const arrowAnimationData = {
  nm: nm$9,
  ddd: ddd$9,
  h: h$9,
  w: w$9,
  meta: meta$1,
  layers: layers$9,
  v: v$9,
  fr: fr$9,
  op: op$9,
  ip: ip$9,
  assets: assets$9
};
function SocialLink({ href, alt, children }) {
  const arrowAnimationRef = useRef(null);
  const [showAnimation, setShowAnimation] = useState(false);
  return /* @__PURE__ */ jsxs(
    motion$1.a,
    {
      onMouseOver: () => setShowAnimation(true),
      onMouseLeave: () => setShowAnimation(false),
      className: "group relative",
      href,
      "aria-description": alt,
      target: "_blank",
      rel: "noopener noreferrer",
      whileHover: { scale: 1.05 },
      whileTap: { scale: 0.95 },
      children: [
        /* @__PURE__ */ jsx("span", { className: "text-2xl text-neutral-700 transition group-hover:text-blue-500", children }),
        showAnimation && /* @__PURE__ */ jsx(
          motion$1.div,
          {
            animate: { opacity: 1 },
            initial: { opacity: 0 },
            transition: { duration: 1 },
            onAnimationComplete: () => setShowAnimation(false),
            className: "absolute top-0 -right-4",
            children: /* @__PURE__ */ jsx(
              Lottie,
              {
                lottieRef: arrowAnimationRef,
                animationData: arrowAnimationData,
                className: "z-20 h-[50px] w-[50px]",
                autoplay: true,
                loop: false,
                onAnimationEnd: () => {
                  var _a;
                  return (_a = arrowAnimationRef == null ? void 0 : arrowAnimationRef.current) == null ? void 0 : _a.pause();
                }
              }
            )
          }
        )
      ]
    }
  );
}
var SocialMediaLinks = /* @__PURE__ */ ((SocialMediaLinks2) => {
  SocialMediaLinks2["TWITTER"] = "https://x.com/_mrluisfer";
  SocialMediaLinks2["GITHUB"] = "https://github.com/mrLuisFer";
  SocialMediaLinks2["LINKEDIN"] = "https://www.linkedin.com/in/mrluisfer";
  SocialMediaLinks2["DEVTO"] = "https://dev.to/mrluisfer";
  return SocialMediaLinks2;
})(SocialMediaLinks || {});
const SOCIAL_LINKS = [
  {
    href: SocialMediaLinks.TWITTER,
    alt: "Twitter: @mrLuisFer",
    Icon: /* @__PURE__ */ jsx(FaXTwitter, {})
  },
  {
    href: SocialMediaLinks.GITHUB,
    alt: "GitHub: mrLuisFer",
    Icon: /* @__PURE__ */ jsx(FiGithub, {})
  },
  {
    href: SocialMediaLinks.LINKEDIN,
    alt: "LinkedIn: mrLuisFer",
    Icon: /* @__PURE__ */ jsx(FaLinkedinIn, {})
  },
  {
    href: SocialMediaLinks.DEVTO,
    alt: "Dev.to: mrLuisFer",
    Icon: /* @__PURE__ */ jsx(PiDevToLogo, {})
  }
];
function SocialLinks() {
  return /* @__PURE__ */ jsx(Fragment, { children: SOCIAL_LINKS.map((link, id) => {
    const Icon = link.Icon;
    return /* @__PURE__ */ jsx(SocialLink, { href: link.href, alt: link.alt, children: Icon }, id);
  }) });
}
const messages = [
  "Join me on my journey!",
  "Hit me up on my socials!",
  "Connect with me on social media:",
  "Let's connect!",
  "Let\u2019s stay connected!"
];
const DURATION = 5e3;
const ChangingText = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, DURATION);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-gray-800 h-10 relative w-full overflow-hidden", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(
    motion$1.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
      transition: { duration: 0.6 },
      className: "absolute w-full text-center",
      children: messages[index]
    },
    index
  ) }) });
};
function Connect() {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center flex-col gap-4 pt-14 mb-20", children: [
    /* @__PURE__ */ jsx(ChangingText, {}),
    /* @__PURE__ */ jsx("div", { className: "flex items-center gap-6", children: /* @__PURE__ */ jsx(SocialLinks, {}) })
  ] });
}
const timelineExperience = [
  {
    title: "Software Engineer",
    date: "March 2023 - Nov 2024 \xB7 1yr 9mos",
    type: "Remote",
    time: "Full-time",
    company: "Nowports"
  },
  {
    title: "Frontend Engineer",
    date: "Aug 2022 - March 2023 \xB7 8mos",
    type: "Remote",
    time: "Full-time",
    company: "Nowports"
  },
  {
    title: "Frontend Developer",
    date: "Jan 2022 - Jul 2022 \xB7 7mos",
    type: "Remote",
    time: "Full-time",
    company: "Accenture"
  },
  {
    title: "Frontend Web Developer",
    date: "Sep 2020 - Jan 2022 \xB7 1yr 5mos",
    type: "Freelance",
    time: "Part-time",
    company: "Freelance"
  }
];
function Experience$1() {
  return /* @__PURE__ */ jsx("ul", { className: "flex w-full flex-1 flex-col justify-center rounded-[inherit] bg-gradient-to-tr from-blue-50 to-blue-100 px-4 group-hover:bg-neutral-100", children: timelineExperience.map((experience, index) => /* @__PURE__ */ jsx(TimelineItem, { experience }, index)) });
}
function LightText({
  children,
  size = "sm"
}) {
  const sizeClassName = {
    sm: "text-sm",
    xs: "text-xs"
  };
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: `text-neutral-500 transition-colors hover:text-neutral-600 ${sizeClassName[size]}`,
      children
    }
  );
}
function TimelineItem({ experience }) {
  return /* @__PURE__ */ jsxs("li", { className: "relative flex flex-1 items-center justify-start gap-2 py-3 pl-2", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute left-[11px] h-full w-0.5 grow bg-neutral-900" }),
    /* @__PURE__ */ jsx("div", { className: "relative z-20 block h-2 w-2 animate-pulse rounded-full bg-neutral-800" }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ jsxs("p", { className: "font-semibold", children: [
        experience.title,
        " ",
        /* @__PURE__ */ jsxs(LightText, { children: [
          "- ",
          experience.company
        ] })
      ] }),
      /* @__PURE__ */ jsx(LightText, { size: "xs", children: experience.date }),
      /* @__PURE__ */ jsxs(LightText, { size: "sm", children: [
        experience.time,
        " - ",
        experience.type
      ] })
    ] })
  ] });
}
function cn(...inputs) {
  return twMerge(clsx$1(inputs));
}
function Avatar({ className, ...props2 }) {
  return /* @__PURE__ */ jsx(
    AvatarPrimitive.Root,
    {
      "data-slot": "avatar",
      className: cn("relative flex size-8 shrink-0 overflow-hidden rounded-full", className),
      ...props2
    }
  );
}
function AvatarImage({ className, ...props2 }) {
  return /* @__PURE__ */ jsx(
    AvatarPrimitive.Image,
    {
      "data-slot": "avatar-image",
      className: cn("aspect-square size-full", className),
      ...props2
    }
  );
}
function AvatarFallback({
  className,
  ...props2
}) {
  return /* @__PURE__ */ jsx(
    AvatarPrimitive.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: cn("bg-muted flex size-full items-center justify-center rounded-full", className),
      ...props2
    }
  );
}
function Phrase() {
  return /* @__PURE__ */ jsxs("div", { className: "grid place-content-center flex-1 gap-1 flex-col bg-gradient-to-br from-orange-100 to-orange-300 p-2 rounded-[inherit] w-full sm:w-auto lg:w-full h-full", children: [
    /* @__PURE__ */ jsx("p", { className: "text-center font-mono text-sm italic", children: '"Talk is cheap. Show me the code."' }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-2", children: [
      /* @__PURE__ */ jsxs(Avatar, { children: [
        /* @__PURE__ */ jsx(
          AvatarImage,
          {
            className: "object-cover",
            src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQcvkis4xm8lwEjTUpieGsxFMUXY9EdQSlEs-JW-qoQjrzXFi2OmXzGr12Ena1Dl6HZpxMaIGtrBLAmTou80kIgeg",
            alt: "Linus Torvalds"
          }
        ),
        /* @__PURE__ */ jsx(AvatarFallback, { children: "LT" })
      ] }),
      /* @__PURE__ */ jsx(
        motion$1.a,
        {
          href: "https://en.wikipedia.org/wiki/Linus_Torvalds",
          target: "_blank",
          rel: "noreferrer noopener",
          className: "text-right text-xs hover:cursor-pointer border-b-2 border-transparent hover:border-orange-400 transition",
          children: "Linus Torvalds"
        }
      )
    ] })
  ] });
}
function useHover() {
  const [hovering, setHovering] = useState(false);
  const previousNode = useRef(null);
  const handleMouseEnter = useCallback(() => {
    setHovering(true);
  }, []);
  const handleMouseLeave = useCallback(() => {
    setHovering(false);
  }, []);
  const customRef = useCallback(
    (node) => {
      if (previousNode.current) {
        previousNode.current.removeEventListener("mouseenter", handleMouseEnter);
        previousNode.current.removeEventListener("mouseleave", handleMouseLeave);
      }
      if (node) {
        node.addEventListener("mouseenter", handleMouseEnter);
        node.addEventListener("mouseleave", handleMouseLeave);
      }
      previousNode.current = node;
    },
    [handleMouseEnter, handleMouseLeave]
  );
  return [customRef, hovering];
}
const v$8 = "5.12.2";
const fr$8 = 60;
const ip$8 = 0;
const op$8 = 120;
const w$8 = 48;
const h$8 = 48;
const nm$8 = "High Five";
const ddd$8 = 0;
const assets$8 = [];
const layers$8 = /* @__PURE__ */ JSON.parse('[{"ddd":0,"ind":1,"ty":4,"nm":"Highfive-outline-bot_s1g1_s2g1_s3g1_s4g1_background","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.889],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0],"y":[1]},"o":{"x":[0.412],"y":[0]},"t":50,"s":[-50]},{"t":90.291015625,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.786,"y":0.877},"o":{"x":0.476,"y":0},"t":0,"s":[24.75,36.625,0],"to":[0.233,-0.059,0],"ti":[-0.541,0.138,0]},{"i":{"x":0.499,"y":1},"o":{"x":0.6,"y":0.718},"t":26,"s":[30.712,36.941,0],"to":[1.926,-0.491,0],"ti":[0,0,0]},{"i":{"x":0,"y":1},"o":{"x":0.412,"y":0},"t":50,"s":[31.125,35,0],"to":[0,0,0],"ti":[1.062,-0.271,0]},{"t":90.291015625,"s":[24.75,36.625,0]}],"ix":2,"l":2},"a":{"a":0,"k":[24.75,36.625,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.873,-0.504],[0,0],[-0.503,0.872],[0,0],[0.873,0.504],[0,0],[0.504,-0.873],[0,0]],"o":[[0,0],[0.873,0.503],[0,0],[0.504,-0.872],[0,0],[-0.873,-0.504],[0,0],[-0.504,0.872]],"v":[[-4.342,0.839],[1.445,4.18],[3.937,3.512],[5.01,1.654],[4.342,-0.839],[-1.443,-4.18],[-3.937,-3.512],[-5.01,-1.653]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[25.019,36.503],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":120,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Highfive-outline-top_s1g1_s2g2_s3g1_s4g1_background","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[24,24,0],"ix":2,"l":2},"a":{"a":0,"k":[24,24,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[0.98,-2.167],[-0.98,2.167]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.996078431372549,0.3254901960784314,0.7215686274509804],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[31.099,16.755],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[1.49,-2.753],[-1.49,2.753]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.996078431372549,0.3254901960784314,0.7215686274509804],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[34.396,17.01],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[1.39,-2.233],[-1.39,2.233]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.996078431372549,0.3254901960784314,0.7215686274509804],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[36.856,18.602],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-0.745,0.579],[-1.325,1.408],[-0.952,1.697],[0.994,-0.248],[0,0],[-0.662,1.408],[0.746,0.414],[0,0],[-0.373,0.911],[0.87,0.207],[0.496,-0.952],[0,0],[1.42,0.635],[0,0],[0.869,0.621],[1.118,-1.987],[0.207,-2.148],[0,0],[0,0]],"o":[[0,0],[0.745,-0.58],[1.324,-1.407],[0.373,-0.666],[-0.993,0.248],[0,0],[0.663,-1.407],[-0.745,-0.414],[0,0],[0.372,-0.91],[-0.869,-0.207],[-0.497,0.952],[0,0],[-1.945,-0.869],[0,0],[-1.648,-1.175],[-1.117,1.987],[-0.207,2.148],[0,0],[0,0]],"v":[[-2.042,12.624],[0.073,9.193],[4.626,7.454],[8.848,1.826],[7.523,0.169],[3.964,2.736],[8.6,-5.047],[7.979,-7.654],[6.158,-7.075],[7.607,-9.889],[6.695,-12.001],[4.626,-10.758],[3.799,-9.186],[3.536,-11.755],[-0.01,-8.855],[-0.124,-11.113],[-3.874,-7.227],[-7.171,1.576],[-7.71,5.426],[-9.262,8.46]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.996078431372549,0.3254901960784314,0.7215686274509804],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[32.088,23.443],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":3,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":120,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Highfive-outline-bot_s1g1_s2g1_s3g1_s4g1_background","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.889],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0],"y":[1]},"o":{"x":[0.412],"y":[0]},"t":50,"s":[49]},{"t":90.291015625,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.786,"y":0.862},"o":{"x":0.476,"y":0},"t":0,"s":[22,34.25,0],"to":[-0.21,0.014,0],"ti":[0.488,-0.032,0]},{"i":{"x":0.499,"y":1},"o":{"x":0.6,"y":0.721},"t":26,"s":[17.657,35.946,0],"to":[-1.737,0.113,0],"ti":[0,0,0]},{"i":{"x":0,"y":1},"o":{"x":0.412,"y":0},"t":50,"s":[16.25,34.625,0],"to":[0,0,0],"ti":[-0.958,0.062,0]},{"t":90.291015625,"s":[22,34.25,0]}],"ix":2,"l":2},"a":{"a":0,"k":[22,34.25,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.841,-0.486],[0,0],[0.485,0.841],[0,0],[-0.841,0.486],[0,0],[-0.485,-0.841],[0,0]],"o":[[0,0],[-0.841,0.485],[0,0],[-0.485,-0.841],[0,0],[0.841,-0.486],[0,0],[0.485,0.841]],"v":[[4.048,0.811],[-1.322,3.911],[-3.724,3.268],[-4.692,1.592],[-4.048,-0.811],[1.322,-3.91],[3.724,-3.268],[4.692,-1.592]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[22.032,34.542],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":120,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Highfive-outline-top_s1g1_s2g2_s3g1_s4g1_background","parent":3,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[24,24,0],"ix":2,"l":2},"a":{"a":0,"k":[24,24,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[2.875,-1.367],[-2.875,1.367]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.996078431372549,0.3254901960784314,0.7215686274509804],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[15.133,19.544],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[1.9,0.166],[0,0]],"o":[[0,0],[-1.899,-0.165],[0,0]],"v":[[2.588,0.966],[-0.119,-0.801],[-2.588,-0.466]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.996078431372549,0.3254901960784314,0.7215686274509804],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[14.241,25.296],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-1.006,-2.038],[1.005,2.038]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.996078431372549,0.3254901960784314,0.7215686274509804],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[16.396,15.964],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-1.402,-2.59],[1.402,2.59]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.996078431372549,0.3254901960784314,0.7215686274509804],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[13.21,16.204],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":2,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-1.26,-2.215],[1.26,2.215]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.996078431372549,0.3254901960784314,0.7215686274509804],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[10.849,17.815],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":2,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0.701,0.545],[1.246,1.324],[0.895,1.596],[-0.935,-0.234],[0,0],[0.623,1.324],[-0.701,0.39],[0,0],[0.35,0.856],[-0.818,0.194],[-0.468,-0.896],[0,0],[-1.336,0.597],[0,0],[-0.818,0.584],[-1.052,-1.869],[-0.195,-2.021],[0,0],[0,0]],"o":[[0,0],[-0.701,-0.545],[-1.247,-1.324],[-0.352,-0.627],[0.934,0.234],[0,0],[-0.623,-1.324],[0.701,-0.389],[0,0],[-0.351,-0.857],[0.817,-0.195],[0.467,0.895],[0,0],[1.83,-0.818],[0,0],[1.55,-1.106],[1.051,1.87],[0.194,2.02],[0,0],[0,0]],"v":[[1.921,11.876],[-0.068,8.648],[-4.352,7.014],[-8.324,1.717],[-7.077,0.16],[-3.729,2.574],[-8.09,-4.747],[-7.507,-7.201],[-5.792,-6.656],[-7.156,-9.303],[-6.299,-11.288],[-4.352,-10.12],[-3.574,-8.641],[-3.327,-11.057],[0.01,-8.329],[0.117,-10.454],[4.227,-6.656],[7.227,1.477],[7.253,5.105],[8.714,7.958]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.996078431372549,0.3254901960784314,0.7215686274509804],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[15.381,22.255],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 6","np":3,"cix":2,"bm":0,"ix":6,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":120,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Highfive-outline-top_s1g1_s2g1_s3g1_s4g2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[24,24,0],"ix":2,"l":2},"a":{"a":0,"k":[24,24,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[0.671,0.781],[-0.672,-0.781]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[20.654,9.653],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-0.671,0.781],[0.671,-0.781]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[27.804,9.653],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[24.098,9.131],[24.098,7.072]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":30,"s":[100]},{"t":60,"s":[0]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[100]},{"t":60,"s":[100]}],"ix":2},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":30,"s":[0]},{"t":60,"s":[360]}],"ix":3},"m":1,"ix":4,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":120,"st":0,"ct":1,"bm":0}]');
const markers$8 = [];
const props$6 = {};
const accessibilityData = {
  v: v$8,
  fr: fr$8,
  ip: ip$8,
  op: op$8,
  w: w$8,
  h: h$8,
  nm: nm$8,
  ddd: ddd$8,
  assets: assets$8,
  layers: layers$8,
  markers: markers$8,
  props: props$6
};
const v$7 = "5.12.2";
const fr$7 = 60;
const ip$7 = 0;
const op$7 = 120;
const w$7 = 48;
const h$7 = 48;
const nm$7 = "Figma";
const ddd$7 = 0;
const assets$7 = [];
const layers$7 = /* @__PURE__ */ JSON.parse('[{"ddd":0,"ind":1,"ty":4,"nm":"Figma-outline-bot_s1g1_s2g2_s3g1_s4g1_background","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[18.118,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":1,"s":[18.118,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":2,"s":[18.118,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":3,"s":[18.118,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":4,"s":[18.118,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":5,"s":[18.118,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":6,"s":[18.118,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":7,"s":[18.118,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":8,"s":[18.118,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":9,"s":[18.118,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":10,"s":[18.118,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":11,"s":[18.118,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":12,"s":[18.118,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":13,"s":[18.118,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":14,"s":[18.118,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":15,"s":[18.118,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":16,"s":[18.118,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":17,"s":[18.118,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":18,"s":[18.118,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":19,"s":[18.118,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":20,"s":[18.118,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":21,"s":[18.118,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":22,"s":[18.118,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":23,"s":[18.118,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":24,"s":[18.118,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":25,"s":[18.118,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":26,"s":[18.118,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":27,"s":[18.118,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":28,"s":[18.118,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":29,"s":[18.118,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":30,"s":[18.118,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":31,"s":[18.118,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":32,"s":[18.118,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":33,"s":[18.118,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":34,"s":[18.118,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":35,"s":[18.118,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":36,"s":[18.118,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":37,"s":[18.118,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":38,"s":[18.118,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":39,"s":[18.118,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.834},"o":{"x":0.167,"y":0.083},"t":40,"s":[18.118,24,0],"to":[-0.089,0,0],"ti":[0.177,0,0]},{"i":{"x":0.833,"y":0.835},"o":{"x":0.167,"y":0.167},"t":41,"s":[17.586,24,0],"to":[-0.177,0,0],"ti":[0.175,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.168},"t":42,"s":[17.057,24,0],"to":[-0.175,0,0],"ti":[0.173,0,0]},{"i":{"x":0.833,"y":0.832},"o":{"x":0.167,"y":0.166},"t":43,"s":[16.538,24,0],"to":[-0.173,0,0],"ti":[0.174,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.166},"t":44,"s":[16.018,24,0],"to":[-0.174,0,0],"ti":[0.175,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":45,"s":[15.493,24,0],"to":[-0.175,0,0],"ti":[0.175,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":46,"s":[14.968,24,0],"to":[-0.175,0,0],"ti":[0.175,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":47,"s":[14.445,24,0],"to":[-0.175,0,0],"ti":[0.175,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":48,"s":[13.921,24,0],"to":[-0.175,0,0],"ti":[0.175,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.166},"t":49,"s":[13.396,24,0],"to":[-0.175,0,0],"ti":[0.175,0,0]},{"i":{"x":0.833,"y":0.834},"o":{"x":0.167,"y":0.167},"t":50,"s":[12.87,24,0],"to":[-0.175,0,0],"ti":[0.175,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":51,"s":[12.344,24,0],"to":[-0.175,0,0],"ti":[0.174,0,0]},{"i":{"x":0.833,"y":0.832},"o":{"x":0.167,"y":0.167},"t":52,"s":[11.821,24,0],"to":[-0.174,0,0],"ti":[0.175,0,0]},{"i":{"x":0.833,"y":0.834},"o":{"x":0.167,"y":0.166},"t":53,"s":[11.298,24,0],"to":[-0.175,0,0],"ti":[0.176,0,0]},{"i":{"x":0.833,"y":0.876},"o":{"x":0.167,"y":0.167},"t":54,"s":[10.769,24,0],"to":[-0.176,0,0],"ti":[0.047,0,0]},{"i":{"x":0.833,"y":0.808},"o":{"x":0.167,"y":0.253},"t":55,"s":[10.243,24,0],"to":[-0.047,0,0],"ti":[-0.097,0,0]},{"i":{"x":0.833,"y":0.816},"o":{"x":0.167,"y":0.147},"t":56,"s":[10.487,24,0],"to":[0.097,0,0],"ti":[-0.124,0,0]},{"i":{"x":0.833,"y":0.82},"o":{"x":0.167,"y":0.152},"t":57,"s":[10.823,24,0],"to":[0.124,0,0],"ti":[-0.146,0,0]},{"i":{"x":0.833,"y":0.824},"o":{"x":0.167,"y":0.156},"t":58,"s":[11.231,24,0],"to":[0.146,0,0],"ti":[-0.166,0,0]},{"i":{"x":0.833,"y":0.827},"o":{"x":0.167,"y":0.158},"t":59,"s":[11.701,24,0],"to":[0.166,0,0],"ti":[-0.181,0,0]},{"i":{"x":0.833,"y":0.83},"o":{"x":0.167,"y":0.161},"t":60,"s":[12.225,24,0],"to":[0.181,0,0],"ti":[-0.191,0,0]},{"i":{"x":0.833,"y":0.831},"o":{"x":0.167,"y":0.163},"t":61,"s":[12.787,24,0],"to":[0.191,0,0],"ti":[-0.198,0,0]},{"i":{"x":0.833,"y":0.832},"o":{"x":0.167,"y":0.165},"t":62,"s":[13.373,24,0],"to":[0.198,0,0],"ti":[-0.201,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.166},"t":63,"s":[13.973,24,0],"to":[0.201,0,0],"ti":[-0.203,0,0]},{"i":{"x":0.833,"y":0.834},"o":{"x":0.167,"y":0.166},"t":64,"s":[14.58,24,0],"to":[0.203,0,0],"ti":[-0.202,0,0]},{"i":{"x":0.833,"y":0.835},"o":{"x":0.167,"y":0.167},"t":65,"s":[15.188,24,0],"to":[0.202,0,0],"ti":[-0.199,0,0]},{"i":{"x":0.833,"y":0.835},"o":{"x":0.167,"y":0.169},"t":66,"s":[15.794,24,0],"to":[0.199,0,0],"ti":[-0.195,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.168},"t":67,"s":[16.385,24,0],"to":[0.195,0,0],"ti":[-0.193,0,0]},{"i":{"x":0.833,"y":0.834},"o":{"x":0.167,"y":0.167},"t":68,"s":[16.965,24,0],"to":[0.193,0,0],"ti":[-0.192,0,0]},{"i":{"x":0.833,"y":0.876},"o":{"x":0.167,"y":0.168},"t":69,"s":[17.546,24,0],"to":[0.192,0,0],"ti":[-0.142,0,0]},{"i":{"x":0.833,"y":0.86},"o":{"x":0.167,"y":0.254},"t":70,"s":[18.118,24,0],"to":[0.142,0,0],"ti":[-0.078,0,0]},{"i":{"x":0.833,"y":0.867},"o":{"x":0.167,"y":0.205},"t":71,"s":[18.398,24,0],"to":[0.078,0,0],"ti":[-0.051,0,0]},{"i":{"x":0.833,"y":0.879},"o":{"x":0.167,"y":0.222},"t":72,"s":[18.588,24,0],"to":[0.051,0,0],"ti":[-0.028,0,0]},{"i":{"x":0.833,"y":0.899},"o":{"x":0.167,"y":0.269},"t":73,"s":[18.703,24,0],"to":[0.028,0,0],"ti":[-0.009,0,0]},{"i":{"x":0.833,"y":0.661},"o":{"x":0.167,"y":0.462},"t":74,"s":[18.755,24,0],"to":[0.009,0,0],"ti":[0.006,0,0]},{"i":{"x":0.833,"y":0.773},"o":{"x":0.167,"y":0.109},"t":75,"s":[18.756,24,0],"to":[-0.006,0,0],"ti":[0.016,0,0]},{"i":{"x":0.833,"y":0.812},"o":{"x":0.167,"y":0.132},"t":76,"s":[18.721,24,0],"to":[-0.016,0,0],"ti":[0.023,0,0]},{"i":{"x":0.833,"y":0.826},"o":{"x":0.167,"y":0.15},"t":77,"s":[18.661,24,0],"to":[-0.023,0,0],"ti":[0.026,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.16},"t":78,"s":[18.586,24,0],"to":[-0.026,0,0],"ti":[0.028,0,0]},{"i":{"x":0.833,"y":0.838},"o":{"x":0.167,"y":0.166},"t":79,"s":[18.503,24,0],"to":[-0.028,0,0],"ti":[0.027,0,0]},{"i":{"x":0.833,"y":0.842},"o":{"x":0.167,"y":0.171},"t":80,"s":[18.42,24,0],"to":[-0.027,0,0],"ti":[0.025,0,0]},{"i":{"x":0.833,"y":0.845},"o":{"x":0.167,"y":0.176},"t":81,"s":[18.341,24,0],"to":[-0.025,0,0],"ti":[0.022,0,0]},{"i":{"x":0.833,"y":0.848},"o":{"x":0.167,"y":0.18},"t":82,"s":[18.27,24,0],"to":[-0.022,0,0],"ti":[0.019,0,0]},{"i":{"x":0.833,"y":0.851},"o":{"x":0.167,"y":0.184},"t":83,"s":[18.209,24,0],"to":[-0.019,0,0],"ti":[0.015,0,0]},{"i":{"x":0.833,"y":0.855},"o":{"x":0.167,"y":0.189},"t":84,"s":[18.158,24,0],"to":[-0.015,0,0],"ti":[0.012,0,0]},{"i":{"x":0.833,"y":0.86},"o":{"x":0.167,"y":0.196},"t":85,"s":[18.118,24,0],"to":[-0.012,0,0],"ti":[0.008,0,0]},{"i":{"x":0.833,"y":0.867},"o":{"x":0.167,"y":0.205},"t":86,"s":[18.089,24,0],"to":[-0.008,0,0],"ti":[0.005,0,0]},{"i":{"x":0.833,"y":0.879},"o":{"x":0.167,"y":0.222},"t":87,"s":[18.069,24,0],"to":[-0.005,0,0],"ti":[0.003,0,0]},{"i":{"x":0.833,"y":0.899},"o":{"x":0.167,"y":0.269},"t":88,"s":[18.057,24,0],"to":[-0.003,0,0],"ti":[0.001,0,0]},{"i":{"x":0.833,"y":0.735},"o":{"x":0.167,"y":0.361},"t":89,"s":[18.051,24,0],"to":[-0.001,0,0],"ti":[-0.001,0,0]},{"i":{"x":0.833,"y":0.773},"o":{"x":0.167,"y":0.109},"t":90,"s":[18.051,24,0],"to":[0.001,0,0],"ti":[-0.002,0,0]},{"i":{"x":0.833,"y":0.812},"o":{"x":0.167,"y":0.132},"t":91,"s":[18.055,24,0],"to":[0.002,0,0],"ti":[-0.002,0,0]},{"i":{"x":0.833,"y":0.826},"o":{"x":0.167,"y":0.15},"t":92,"s":[18.061,24,0],"to":[0.002,0,0],"ti":[-0.003,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.16},"t":93,"s":[18.069,24,0],"to":[0.003,0,0],"ti":[-0.003,0,0]},{"i":{"x":0.833,"y":0.838},"o":{"x":0.167,"y":0.166},"t":94,"s":[18.078,24,0],"to":[0.003,0,0],"ti":[-0.003,0,0]},{"i":{"x":0.833,"y":0.842},"o":{"x":0.167,"y":0.171},"t":95,"s":[18.087,24,0],"to":[0.003,0,0],"ti":[-0.003,0,0]},{"i":{"x":0.833,"y":0.845},"o":{"x":0.167,"y":0.176},"t":96,"s":[18.095,24,0],"to":[0.003,0,0],"ti":[-0.002,0,0]},{"i":{"x":0.833,"y":0.848},"o":{"x":0.167,"y":0.18},"t":97,"s":[18.103,24,0],"to":[0.002,0,0],"ti":[-0.002,0,0]},{"i":{"x":0.833,"y":0.851},"o":{"x":0.167,"y":0.184},"t":98,"s":[18.109,24,0],"to":[0.002,0,0],"ti":[-0.002,0,0]},{"i":{"x":0.833,"y":0.855},"o":{"x":0.167,"y":0.189},"t":99,"s":[18.114,24,0],"to":[0.002,0,0],"ti":[-0.001,0,0]},{"i":{"x":0.833,"y":0.86},"o":{"x":0.167,"y":0.196},"t":100,"s":[18.118,24,0],"to":[0.001,0,0],"ti":[-0.001,0,0]},{"i":{"x":0.833,"y":0.867},"o":{"x":0.167,"y":0.205},"t":101,"s":[18.122,24,0],"to":[0.001,0,0],"ti":[-0.001,0,0]},{"i":{"x":0.833,"y":0.879},"o":{"x":0.167,"y":0.222},"t":102,"s":[18.124,24,0],"to":[0.001,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.899},"o":{"x":0.167,"y":0.269},"t":103,"s":[18.125,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.916,"y":0},"o":{"x":0.062,"y":1},"t":104,"s":[18.126,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.773},"o":{"x":0.167,"y":0.109},"t":105,"s":[18.126,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.812},"o":{"x":0.167,"y":0.132},"t":106,"s":[18.125,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.826},"o":{"x":0.167,"y":0.15},"t":107,"s":[18.125,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.16},"t":108,"s":[18.124,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.838},"o":{"x":0.167,"y":0.166},"t":109,"s":[18.123,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.842},"o":{"x":0.167,"y":0.171},"t":110,"s":[18.122,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.845},"o":{"x":0.167,"y":0.176},"t":111,"s":[18.121,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.848},"o":{"x":0.167,"y":0.18},"t":112,"s":[18.12,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.851},"o":{"x":0.167,"y":0.184},"t":113,"s":[18.12,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.855},"o":{"x":0.167,"y":0.189},"t":114,"s":[18.119,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.86},"o":{"x":0.167,"y":0.196},"t":115,"s":[18.118,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.867},"o":{"x":0.167,"y":0.205},"t":116,"s":[18.118,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.879},"o":{"x":0.167,"y":0.222},"t":117,"s":[18.118,24,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.269},"t":118,"s":[18.118,24,0],"to":[0,0,0],"ti":[0,0,0]},{"t":119,"s":[18.118,24,0]}],"ix":2,"l":2},"a":{"a":0,"k":[18.118,24,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,3.058],[0,0],[-3.057,0],[0,0]],"o":[[0,0],[-3.057,0],[0,0],[0,-3.058],[0,0],[0,0]],"v":[[5.882,5.697],[-0.346,5.697],[-5.882,0.161],[-5.882,-0.161],[-0.346,-5.697],[5.882,-5.697]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.07058823529411765,0.8392156862745098,0.5529411764705883],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[18.118,24],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":120,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Figma-outline-top_s1g1_s2g2_s3g1_s4g1_background","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.683},"o":{"x":0.167,"y":0.167},"t":0,"s":[29.882,24,0],"to":[0.005,0,0],"ti":[-0.02,0,0]},{"i":{"x":0.833,"y":0.788},"o":{"x":0.167,"y":0.113},"t":1,"s":[29.913,24,0],"to":[0.02,0,0],"ti":[-0.037,0,0]},{"i":{"x":0.833,"y":0.809},"o":{"x":0.167,"y":0.137},"t":2,"s":[30,24,0],"to":[0.037,0,0],"ti":[-0.052,0,0]},{"i":{"x":0.833,"y":0.819},"o":{"x":0.167,"y":0.148},"t":3,"s":[30.136,24,0],"to":[0.052,0,0],"ti":[-0.063,0,0]},{"i":{"x":0.833,"y":0.823},"o":{"x":0.167,"y":0.154},"t":4,"s":[30.31,24,0],"to":[0.063,0,0],"ti":[-0.072,0,0]},{"i":{"x":0.833,"y":0.825},"o":{"x":0.167,"y":0.158},"t":5,"s":[30.515,24,0],"to":[0.072,0,0],"ti":[-0.08,0,0]},{"i":{"x":0.833,"y":0.826},"o":{"x":0.167,"y":0.159},"t":6,"s":[30.745,24,0],"to":[0.08,0,0],"ti":[-0.087,0,0]},{"i":{"x":0.833,"y":0.827},"o":{"x":0.167,"y":0.16},"t":7,"s":[30.997,24,0],"to":[0.087,0,0],"ti":[-0.095,0,0]},{"i":{"x":0.833,"y":0.829},"o":{"x":0.167,"y":0.16},"t":8,"s":[31.27,24,0],"to":[0.095,0,0],"ti":[-0.101,0,0]},{"i":{"x":0.833,"y":0.83},"o":{"x":0.167,"y":0.162},"t":9,"s":[31.566,24,0],"to":[0.101,0,0],"ti":[-0.106,0,0]},{"i":{"x":0.833,"y":0.83},"o":{"x":0.167,"y":0.163},"t":10,"s":[31.878,24,0],"to":[0.106,0,0],"ti":[-0.111,0,0]},{"i":{"x":0.833,"y":0.831},"o":{"x":0.167,"y":0.164},"t":11,"s":[32.204,24,0],"to":[0.111,0,0],"ti":[-0.114,0,0]},{"i":{"x":0.833,"y":0.831},"o":{"x":0.167,"y":0.164},"t":12,"s":[32.542,24,0],"to":[0.114,0,0],"ti":[-0.118,0,0]},{"i":{"x":0.833,"y":0.832},"o":{"x":0.167,"y":0.164},"t":13,"s":[32.891,24,0],"to":[0.118,0,0],"ti":[-0.121,0,0]},{"i":{"x":0.833,"y":0.832},"o":{"x":0.167,"y":0.165},"t":14,"s":[33.249,24,0],"to":[0.121,0,0],"ti":[-0.123,0,0]},{"i":{"x":0.833,"y":0.834},"o":{"x":0.167,"y":0.166},"t":15,"s":[33.615,24,0],"to":[0.123,0,0],"ti":[-0.123,0,0]},{"i":{"x":0.833,"y":0.834},"o":{"x":0.167,"y":0.167},"t":16,"s":[33.985,24,0],"to":[0.123,0,0],"ti":[-0.122,0,0]},{"i":{"x":0.833,"y":0.836},"o":{"x":0.167,"y":0.167},"t":17,"s":[34.352,24,0],"to":[0.122,0,0],"ti":[-0.12,0,0]},{"i":{"x":0.833,"y":0.843},"o":{"x":0.167,"y":0.169},"t":18,"s":[34.716,24,0],"to":[0.12,0,0],"ti":[-0.111,0,0]},{"i":{"x":0.833,"y":0.884},"o":{"x":0.167,"y":0.178},"t":19,"s":[35.069,24,0],"to":[0.111,0,0],"ti":[-0.072,0,0]},{"i":{"x":0.833,"y":0.899},"o":{"x":0.167,"y":0.296},"t":20,"s":[35.382,24,0],"to":[0.072,0,0],"ti":[-0.023,0,0]},{"i":{"x":0.833,"y":0.685},"o":{"x":0.167,"y":0.478},"t":21,"s":[35.504,24,0],"to":[0.023,0,0],"ti":[0.009,0,0]},{"i":{"x":0.833,"y":0.75},"o":{"x":0.167,"y":0.114},"t":22,"s":[35.52,24,0],"to":[-0.009,0,0],"ti":[0.036,0,0]},{"i":{"x":0.833,"y":0.798},"o":{"x":0.167,"y":0.125},"t":23,"s":[35.448,24,0],"to":[-0.036,0,0],"ti":[0.058,0,0]},{"i":{"x":0.833,"y":0.814},"o":{"x":0.167,"y":0.142},"t":24,"s":[35.305,24,0],"to":[-0.058,0,0],"ti":[0.076,0,0]},{"i":{"x":0.833,"y":0.821},"o":{"x":0.167,"y":0.151},"t":25,"s":[35.101,24,0],"to":[-0.076,0,0],"ti":[0.09,0,0]},{"i":{"x":0.833,"y":0.825},"o":{"x":0.167,"y":0.156},"t":26,"s":[34.85,24,0],"to":[-0.09,0,0],"ti":[0.1,0,0]},{"i":{"x":0.833,"y":0.827},"o":{"x":0.167,"y":0.159},"t":27,"s":[34.563,24,0],"to":[-0.1,0,0],"ti":[0.11,0,0]},{"i":{"x":0.833,"y":0.829},"o":{"x":0.167,"y":0.161},"t":28,"s":[34.247,24,0],"to":[-0.11,0,0],"ti":[0.117,0,0]},{"i":{"x":0.833,"y":0.831},"o":{"x":0.167,"y":0.163},"t":29,"s":[33.906,24,0],"to":[-0.117,0,0],"ti":[0.121,0,0]},{"i":{"x":0.833,"y":0.832},"o":{"x":0.167,"y":0.164},"t":30,"s":[33.548,24,0],"to":[-0.121,0,0],"ti":[0.124,0,0]},{"i":{"x":0.833,"y":0.832},"o":{"x":0.167,"y":0.165},"t":31,"s":[33.178,24,0],"to":[-0.124,0,0],"ti":[0.127,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.166},"t":32,"s":[32.801,24,0],"to":[-0.127,0,0],"ti":[0.128,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.166},"t":33,"s":[32.419,24,0],"to":[-0.128,0,0],"ti":[0.129,0,0]},{"i":{"x":0.833,"y":0.834},"o":{"x":0.167,"y":0.166},"t":34,"s":[32.034,24,0],"to":[-0.129,0,0],"ti":[0.129,0,0]},{"i":{"x":0.833,"y":0.835},"o":{"x":0.167,"y":0.167},"t":35,"s":[31.647,24,0],"to":[-0.129,0,0],"ti":[0.127,0,0]},{"i":{"x":0.833,"y":0.835},"o":{"x":0.167,"y":0.169},"t":36,"s":[31.262,24,0],"to":[-0.127,0,0],"ti":[0.124,0,0]},{"i":{"x":0.833,"y":0.836},"o":{"x":0.167,"y":0.169},"t":37,"s":[30.886,24,0],"to":[-0.124,0,0],"ti":[0.121,0,0]},{"i":{"x":0.833,"y":0.851},"o":{"x":0.167,"y":0.169},"t":38,"s":[30.519,24,0],"to":[-0.121,0,0],"ti":[0.106,0,0]},{"i":{"x":0.833,"y":0.872},"o":{"x":0.167,"y":0.19},"t":39,"s":[30.161,24,0],"to":[-0.106,0,0],"ti":[0.072,0,0]},{"i":{"x":0.833,"y":0.86},"o":{"x":0.167,"y":0.238},"t":40,"s":[29.882,24,0],"to":[-0.072,0,0],"ti":[0.042,0,0]},{"i":{"x":0.833,"y":0.867},"o":{"x":0.167,"y":0.205},"t":41,"s":[29.731,24,0],"to":[-0.042,0,0],"ti":[0.028,0,0]},{"i":{"x":0.833,"y":0.879},"o":{"x":0.167,"y":0.222},"t":42,"s":[29.627,24,0],"to":[-0.028,0,0],"ti":[0.015,0,0]},{"i":{"x":0.833,"y":0.899},"o":{"x":0.167,"y":0.269},"t":43,"s":[29.565,24,0],"to":[-0.015,0,0],"ti":[0.005,0,0]},{"i":{"x":0.833,"y":0.656},"o":{"x":0.167,"y":0.468},"t":44,"s":[29.538,24,0],"to":[-0.005,0,0],"ti":[-0.003,0,0]},{"i":{"x":0.833,"y":0.773},"o":{"x":0.167,"y":0.109},"t":45,"s":[29.537,24,0],"to":[0.003,0,0],"ti":[-0.009,0,0]},{"i":{"x":0.833,"y":0.812},"o":{"x":0.167,"y":0.132},"t":46,"s":[29.555,24,0],"to":[0.009,0,0],"ti":[-0.012,0,0]},{"i":{"x":0.833,"y":0.826},"o":{"x":0.167,"y":0.15},"t":47,"s":[29.588,24,0],"to":[0.012,0,0],"ti":[-0.014,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.16},"t":48,"s":[29.629,24,0],"to":[0.014,0,0],"ti":[-0.015,0,0]},{"i":{"x":0.833,"y":0.838},"o":{"x":0.167,"y":0.166},"t":49,"s":[29.674,24,0],"to":[0.015,0,0],"ti":[-0.015,0,0]},{"i":{"x":0.833,"y":0.842},"o":{"x":0.167,"y":0.171},"t":50,"s":[29.719,24,0],"to":[0.015,0,0],"ti":[-0.014,0,0]},{"i":{"x":0.833,"y":0.845},"o":{"x":0.167,"y":0.176},"t":51,"s":[29.761,24,0],"to":[0.014,0,0],"ti":[-0.012,0,0]},{"i":{"x":0.833,"y":0.848},"o":{"x":0.167,"y":0.18},"t":52,"s":[29.8,24,0],"to":[0.012,0,0],"ti":[-0.01,0,0]},{"i":{"x":0.833,"y":0.851},"o":{"x":0.167,"y":0.184},"t":53,"s":[29.833,24,0],"to":[0.01,0,0],"ti":[-0.008,0,0]},{"i":{"x":0.833,"y":0.855},"o":{"x":0.167,"y":0.189},"t":54,"s":[29.86,24,0],"to":[0.008,0,0],"ti":[-0.006,0,0]},{"i":{"x":0.833,"y":0.86},"o":{"x":0.167,"y":0.196},"t":55,"s":[29.882,24,0],"to":[0.006,0,0],"ti":[-0.004,0,0]},{"i":{"x":0.833,"y":0.867},"o":{"x":0.167,"y":0.205},"t":56,"s":[29.897,24,0],"to":[0.004,0,0],"ti":[-0.003,0,0]},{"i":{"x":0.833,"y":0.879},"o":{"x":0.167,"y":0.222},"t":57,"s":[29.908,24,0],"to":[0.003,0,0],"ti":[-0.002,0,0]},{"i":{"x":0.833,"y":0.899},"o":{"x":0.167,"y":0.269},"t":58,"s":[29.915,24,0],"to":[0.002,0,0],"ti":[-0.001,0,0]},{"i":{"x":0.833,"y":0.741},"o":{"x":0.167,"y":0.353},"t":59,"s":[29.918,24,0],"to":[0.001,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.773},"o":{"x":0.167,"y":0.109},"t":60,"s":[29.918,24,0],"to":[0,0,0],"ti":[0.001,0,0]},{"i":{"x":0.833,"y":0.812},"o":{"x":0.167,"y":0.132},"t":61,"s":[29.916,24,0],"to":[-0.001,0,0],"ti":[0.001,0,0]},{"i":{"x":0.833,"y":0.826},"o":{"x":0.167,"y":0.15},"t":62,"s":[29.912,24,0],"to":[-0.001,0,0],"ti":[0.002,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.16},"t":63,"s":[29.908,24,0],"to":[-0.002,0,0],"ti":[0.002,0,0]},{"i":{"x":0.833,"y":0.838},"o":{"x":0.167,"y":0.166},"t":64,"s":[29.903,24,0],"to":[-0.002,0,0],"ti":[0.002,0,0]},{"i":{"x":0.833,"y":0.413},"o":{"x":0.167,"y":0.171},"t":65,"s":[29.899,24,0],"to":[-0.002,0,0],"ti":[0.003,0,0]},{"i":{"x":0.833,"y":0.496},"o":{"x":0.167,"y":0.097},"t":66,"s":[29.894,24,0],"to":[-0.003,0,0],"ti":[-0.021,0,0]},{"i":{"x":0.833,"y":0.755},"o":{"x":0.167,"y":0.1},"t":67,"s":[29.882,24,0],"to":[0.021,0,0],"ti":[-0.068,0,0]},{"i":{"x":0.833,"y":0.818},"o":{"x":0.167,"y":0.126},"t":68,"s":[30.02,24,0],"to":[0.068,0,0],"ti":[-0.098,0,0]},{"i":{"x":0.833,"y":0.827},"o":{"x":0.167,"y":0.154},"t":69,"s":[30.287,24,0],"to":[0.098,0,0],"ti":[-0.11,0,0]},{"i":{"x":0.833,"y":0.828},"o":{"x":0.167,"y":0.161},"t":70,"s":[30.605,24,0],"to":[0.11,0,0],"ti":[-0.118,0,0]},{"i":{"x":0.833,"y":0.829},"o":{"x":0.167,"y":0.162},"t":71,"s":[30.947,24,0],"to":[0.118,0,0],"ti":[-0.124,0,0]},{"i":{"x":0.833,"y":0.831},"o":{"x":0.167,"y":0.162},"t":72,"s":[31.31,24,0],"to":[0.124,0,0],"ti":[-0.13,0,0]},{"i":{"x":0.833,"y":0.832},"o":{"x":0.167,"y":0.164},"t":73,"s":[31.693,24,0],"to":[0.13,0,0],"ti":[-0.133,0,0]},{"i":{"x":0.833,"y":0.832},"o":{"x":0.167,"y":0.165},"t":74,"s":[32.087,24,0],"to":[0.133,0,0],"ti":[-0.135,0,0]},{"i":{"x":0.833,"y":0.832},"o":{"x":0.167,"y":0.165},"t":75,"s":[32.49,24,0],"to":[0.135,0,0],"ti":[-0.137,0,0]},{"i":{"x":0.833,"y":0.832},"o":{"x":0.167,"y":0.165},"t":76,"s":[32.899,24,0],"to":[0.137,0,0],"ti":[-0.139,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.166},"t":77,"s":[33.314,24,0],"to":[0.139,0,0],"ti":[-0.14,0,0]},{"i":{"x":0.833,"y":0.834},"o":{"x":0.167,"y":0.167},"t":78,"s":[33.734,24,0],"to":[0.14,0,0],"ti":[-0.14,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":79,"s":[34.154,24,0],"to":[0.14,0,0],"ti":[-0.139,0,0]},{"i":{"x":0.833,"y":0.838},"o":{"x":0.167,"y":0.167},"t":80,"s":[34.571,24,0],"to":[0.139,0,0],"ti":[-0.135,0,0]},{"i":{"x":0.833,"y":0.887},"o":{"x":0.167,"y":0.172},"t":81,"s":[34.988,24,0],"to":[0.135,0,0],"ti":[-0.089,0,0]},{"i":{"x":0.833,"y":0.889},"o":{"x":0.167,"y":0.316},"t":82,"s":[35.382,24,0],"to":[0.089,0,0],"ti":[-0.018,0,0]},{"i":{"x":0.833,"y":0.617},"o":{"x":0.167,"y":0.338},"t":83,"s":[35.522,24,0],"to":[0.018,0,0],"ti":[0.033,0,0]},{"i":{"x":0.833,"y":0.778},"o":{"x":0.167,"y":0.107},"t":84,"s":[35.491,24,0],"to":[-0.033,0,0],"ti":[0.074,0,0]},{"i":{"x":0.833,"y":0.808},"o":{"x":0.167,"y":0.133},"t":85,"s":[35.325,24,0],"to":[-0.074,0,0],"ti":[0.106,0,0]},{"i":{"x":0.833,"y":0.817},"o":{"x":0.167,"y":0.147},"t":86,"s":[35.05,24,0],"to":[-0.106,0,0],"ti":[0.131,0,0]},{"i":{"x":0.833,"y":0.822},"o":{"x":0.167,"y":0.153},"t":87,"s":[34.691,24,0],"to":[-0.131,0,0],"ti":[0.152,0,0]},{"i":{"x":0.833,"y":0.827},"o":{"x":0.167,"y":0.157},"t":88,"s":[34.261,24,0],"to":[-0.152,0,0],"ti":[0.168,0,0]},{"i":{"x":0.833,"y":0.829},"o":{"x":0.167,"y":0.16},"t":89,"s":[33.776,24,0],"to":[-0.168,0,0],"ti":[0.18,0,0]},{"i":{"x":0.833,"y":0.83},"o":{"x":0.167,"y":0.163},"t":90,"s":[33.251,24,0],"to":[-0.18,0,0],"ti":[0.187,0,0]},{"i":{"x":0.833,"y":0.832},"o":{"x":0.167,"y":0.164},"t":91,"s":[32.698,24,0],"to":[-0.187,0,0],"ti":[0.192,0,0]},{"i":{"x":0.833,"y":0.835},"o":{"x":0.167,"y":0.165},"t":92,"s":[32.126,24,0],"to":[-0.192,0,0],"ti":[0.193,0,0]},{"i":{"x":0.833,"y":0.836},"o":{"x":0.167,"y":0.168},"t":93,"s":[31.544,24,0],"to":[-0.193,0,0],"ti":[0.189,0,0]},{"i":{"x":0.833,"y":0.837},"o":{"x":0.167,"y":0.169},"t":94,"s":[30.971,24,0],"to":[-0.189,0,0],"ti":[0.182,0,0]},{"i":{"x":0.833,"y":0.882},"o":{"x":0.167,"y":0.171},"t":95,"s":[30.413,24,0],"to":[-0.182,0,0],"ti":[0.125,0,0]},{"i":{"x":0.833,"y":0.86},"o":{"x":0.167,"y":0.285},"t":96,"s":[29.882,24,0],"to":[-0.125,0,0],"ti":[0.062,0,0]},{"i":{"x":0.833,"y":0.867},"o":{"x":0.167,"y":0.205},"t":97,"s":[29.662,24,0],"to":[-0.062,0,0],"ti":[0.04,0,0]},{"i":{"x":0.833,"y":0.879},"o":{"x":0.167,"y":0.222},"t":98,"s":[29.511,24,0],"to":[-0.04,0,0],"ti":[0.022,0,0]},{"i":{"x":0.833,"y":0.899},"o":{"x":0.167,"y":0.269},"t":99,"s":[29.421,24,0],"to":[-0.022,0,0],"ti":[0.007,0,0]},{"i":{"x":0.833,"y":0.636},"o":{"x":0.167,"y":0.496},"t":100,"s":[29.38,24,0],"to":[-0.007,0,0],"ti":[-0.004,0,0]},{"i":{"x":0.833,"y":0.773},"o":{"x":0.167,"y":0.109},"t":101,"s":[29.379,24,0],"to":[0.004,0,0],"ti":[-0.013,0,0]},{"i":{"x":0.833,"y":0.812},"o":{"x":0.167,"y":0.132},"t":102,"s":[29.407,24,0],"to":[0.013,0,0],"ti":[-0.018,0,0]},{"i":{"x":0.833,"y":0.826},"o":{"x":0.167,"y":0.15},"t":103,"s":[29.454,24,0],"to":[0.018,0,0],"ti":[-0.021,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.16},"t":104,"s":[29.514,24,0],"to":[0.021,0,0],"ti":[-0.022,0,0]},{"i":{"x":0.833,"y":0.838},"o":{"x":0.167,"y":0.166},"t":105,"s":[29.579,24,0],"to":[0.022,0,0],"ti":[-0.021,0,0]},{"i":{"x":0.833,"y":0.842},"o":{"x":0.167,"y":0.171},"t":106,"s":[29.644,24,0],"to":[0.021,0,0],"ti":[-0.02,0,0]},{"i":{"x":0.833,"y":0.845},"o":{"x":0.167,"y":0.176},"t":107,"s":[29.706,24,0],"to":[0.02,0,0],"ti":[-0.017,0,0]},{"i":{"x":0.833,"y":0.848},"o":{"x":0.167,"y":0.18},"t":108,"s":[29.762,24,0],"to":[0.017,0,0],"ti":[-0.015,0,0]},{"i":{"x":0.833,"y":0.851},"o":{"x":0.167,"y":0.184},"t":109,"s":[29.81,24,0],"to":[0.015,0,0],"ti":[-0.012,0,0]},{"i":{"x":0.833,"y":0.855},"o":{"x":0.167,"y":0.189},"t":110,"s":[29.85,24,0],"to":[0.012,0,0],"ti":[-0.009,0,0]},{"i":{"x":0.833,"y":0.86},"o":{"x":0.167,"y":0.196},"t":111,"s":[29.882,24,0],"to":[0.009,0,0],"ti":[-0.007,0,0]},{"i":{"x":0.833,"y":0.867},"o":{"x":0.167,"y":0.205},"t":112,"s":[29.905,24,0],"to":[0.007,0,0],"ti":[-0.004,0,0]},{"i":{"x":0.833,"y":0.879},"o":{"x":0.167,"y":0.222},"t":113,"s":[29.921,24,0],"to":[0.004,0,0],"ti":[-0.002,0,0]},{"i":{"x":0.833,"y":0.899},"o":{"x":0.167,"y":0.269},"t":114,"s":[29.93,24,0],"to":[0.002,0,0],"ti":[-0.001,0,0]},{"i":{"x":0.833,"y":0.614},"o":{"x":0.167,"y":0.526},"t":115,"s":[29.934,24,0],"to":[0.001,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.773},"o":{"x":0.167,"y":0.109},"t":116,"s":[29.934,24,0],"to":[0,0,0],"ti":[0.001,0,0]},{"i":{"x":0.833,"y":0.812},"o":{"x":0.167,"y":0.132},"t":117,"s":[29.932,24,0],"to":[-0.001,0,0],"ti":[0.002,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.15},"t":118,"s":[29.927,24,0],"to":[-0.002,0,0],"ti":[0.001,0,0]},{"t":119,"s":[29.92,24,0]}],"ix":2,"l":2},"a":{"a":0,"k":[29.882,24,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":0,"s":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":20,"s":[88,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":40,"s":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":67,"s":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":82,"s":[88,100,100]},{"t":96,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-3.146,0],[0,0],[0,3.146],[3.146,0],[0,0],[0,-3.146]],"o":[[0,0],[3.146,0],[0,-3.146],[0,0],[-3.146,0],[0,3.146]],"v":[[-0.184,5.697],[0.184,5.697],[5.882,0],[0.184,-5.697],[-0.184,-5.697],[-5.882,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.07058823529411765,0.8392156862745098,0.5529411764705883],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[29.882,24],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":120,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Figma-outline-top_s1g1_s2g2_s3g1_s4g1_background","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[23.875,29.625,0],"to":[2.042,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":40,"s":[36.125,29.625,0],"to":[0,0,0],"ti":[2.042,0,0]},{"t":67,"s":[23.875,29.625,0]}],"ix":2,"l":2},"a":{"a":0,"k":[23.875,29.625,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[3.439,0],[0,0],[0,3.057],[0,0],[-3.057,0],[0,0],[0,0]],"o":[[0,0],[-3.057,0],[0,0],[0,-3.058],[0,0],[0,0],[0,3.439]],"v":[[-0.346,5.697],[-0.346,5.697],[-5.882,0.162],[-5.882,-0.161],[-0.346,-5.697],[5.882,-5.697],[5.882,-0.53]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.07058823529411765,0.8392156862745098,0.5529411764705883],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[18.118,35.394],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":120,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Figma-outline-top_s1g1_s2g2_s3g1_s4g1_background","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":1,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":2,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":3,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":4,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":5,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":6,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":7,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":8,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":9,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":10,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":11,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":12,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":13,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":14,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":15,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":16,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":17,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":18,"s":[0]},{"i":{"x":[0.833],"y":[0.625]},"o":{"x":[0.167],"y":[0]},"t":19,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.083]},"t":20,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":21,"s":[4.5]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":22,"s":[9]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":23,"s":[13.5]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":24,"s":[18]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":25,"s":[22.5]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":26,"s":[27]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":27,"s":[31.5]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":28,"s":[36]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":29,"s":[40.5]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":30,"s":[45]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":31,"s":[49.5]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":32,"s":[54]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":33,"s":[58.5]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":34,"s":[63]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":35,"s":[67.5]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":36,"s":[72]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":37,"s":[76.5]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":38,"s":[81]},{"i":{"x":[0.833],"y":[0.872]},"o":{"x":[0.167],"y":[0.167]},"t":39,"s":[85.5]},{"i":{"x":[0.833],"y":[0.86]},"o":{"x":[0.167],"y":[0.239]},"t":40,"s":[90]},{"i":{"x":[0.833],"y":[0.867]},"o":{"x":[0.167],"y":[0.205]},"t":41,"s":[92.416]},{"i":{"x":[0.833],"y":[0.879]},"o":{"x":[0.167],"y":[0.222]},"t":42,"s":[94.068]},{"i":{"x":[0.833],"y":[0.914]},"o":{"x":[0.167],"y":[0.269]},"t":43,"s":[95.06]},{"i":{"x":[0.833],"y":[2.429]},"o":{"x":[0.167],"y":[2.314]},"t":44,"s":[95.506]},{"i":{"x":[0.833],"y":[0.773]},"o":{"x":[0.167],"y":[0.079]},"t":45,"s":[95.523]},{"i":{"x":[0.833],"y":[0.812]},"o":{"x":[0.167],"y":[0.132]},"t":46,"s":[95.22]},{"i":{"x":[0.833],"y":[0.826]},"o":{"x":[0.167],"y":[0.15]},"t":47,"s":[94.698]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.16]},"t":48,"s":[94.044]},{"i":{"x":[0.833],"y":[0.838]},"o":{"x":[0.167],"y":[0.166]},"t":49,"s":[93.328]},{"i":{"x":[0.833],"y":[0.842]},"o":{"x":[0.167],"y":[0.171]},"t":50,"s":[92.609]},{"i":{"x":[0.833],"y":[0.845]},"o":{"x":[0.167],"y":[0.176]},"t":51,"s":[91.927]},{"i":{"x":[0.833],"y":[0.848]},"o":{"x":[0.167],"y":[0.18]},"t":52,"s":[91.312]},{"i":{"x":[0.833],"y":[0.851]},"o":{"x":[0.167],"y":[0.184]},"t":53,"s":[90.781]},{"i":{"x":[0.833],"y":[0.855]},"o":{"x":[0.167],"y":[0.189]},"t":54,"s":[90.344]},{"i":{"x":[0.833],"y":[0.86]},"o":{"x":[0.167],"y":[0.196]},"t":55,"s":[90]},{"i":{"x":[0.833],"y":[0.867]},"o":{"x":[0.167],"y":[0.205]},"t":56,"s":[89.745]},{"i":{"x":[0.833],"y":[0.879]},"o":{"x":[0.167],"y":[0.222]},"t":57,"s":[89.571]},{"i":{"x":[0.833],"y":[0.914]},"o":{"x":[0.167],"y":[0.269]},"t":58,"s":[89.467]},{"i":{"x":[0.833],"y":[2.429]},"o":{"x":[0.167],"y":[2.314]},"t":59,"s":[89.42]},{"i":{"x":[0.833],"y":[0.773]},"o":{"x":[0.167],"y":[0.079]},"t":60,"s":[89.418]},{"i":{"x":[0.833],"y":[0.812]},"o":{"x":[0.167],"y":[0.132]},"t":61,"s":[89.45]},{"i":{"x":[0.833],"y":[0.826]},"o":{"x":[0.167],"y":[0.15]},"t":62,"s":[89.505]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.16]},"t":63,"s":[89.574]},{"i":{"x":[0.833],"y":[0.615]},"o":{"x":[0.167],"y":[0.166]},"t":64,"s":[89.649]},{"i":{"x":[0.833],"y":[1.534]},"o":{"x":[0.167],"y":[0.106]},"t":65,"s":[89.725]},{"i":{"x":[0.833],"y":[0.756]},"o":{"x":[0.167],"y":[0.072]},"t":66,"s":[90]},{"i":{"x":[0.833],"y":[0.816]},"o":{"x":[0.167],"y":[0.127]},"t":67,"s":[87.964]},{"i":{"x":[0.833],"y":[0.825]},"o":{"x":[0.167],"y":[0.152]},"t":68,"s":[84.051]},{"i":{"x":[0.833],"y":[0.828]},"o":{"x":[0.167],"y":[0.159]},"t":69,"s":[79.315]},{"i":{"x":[0.833],"y":[0.83]},"o":{"x":[0.167],"y":[0.162]},"t":70,"s":[74.09]},{"i":{"x":[0.833],"y":[0.831]},"o":{"x":[0.167],"y":[0.163]},"t":71,"s":[68.533]},{"i":{"x":[0.833],"y":[0.831]},"o":{"x":[0.167],"y":[0.164]},"t":72,"s":[62.734]},{"i":{"x":[0.833],"y":[0.832]},"o":{"x":[0.167],"y":[0.165]},"t":73,"s":[56.751]},{"i":{"x":[0.833],"y":[0.832]},"o":{"x":[0.167],"y":[0.165]},"t":74,"s":[50.625]},{"i":{"x":[0.833],"y":[0.832]},"o":{"x":[0.167],"y":[0.166]},"t":75,"s":[44.386]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.166]},"t":76,"s":[38.058]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.166]},"t":77,"s":[31.665]},{"i":{"x":[0.833],"y":[0.834]},"o":{"x":[0.167],"y":[0.166]},"t":78,"s":[25.23]},{"i":{"x":[0.833],"y":[0.835]},"o":{"x":[0.167],"y":[0.167]},"t":79,"s":[18.778]},{"i":{"x":[0.833],"y":[0.838]},"o":{"x":[0.167],"y":[0.168]},"t":80,"s":[12.349]},{"i":{"x":[0.833],"y":[0.874]},"o":{"x":[0.167],"y":[0.171]},"t":81,"s":[6.015]},{"i":{"x":[0.833],"y":[0.86]},"o":{"x":[0.167],"y":[0.246]},"t":82,"s":[0]},{"i":{"x":[0.833],"y":[0.867]},"o":{"x":[0.167],"y":[0.205]},"t":83,"s":[-3.086]},{"i":{"x":[0.833],"y":[0.879]},"o":{"x":[0.167],"y":[0.222]},"t":84,"s":[-5.196]},{"i":{"x":[0.833],"y":[0.914]},"o":{"x":[0.167],"y":[0.269]},"t":85,"s":[-6.463]},{"i":{"x":[0.833],"y":[2.429]},"o":{"x":[0.167],"y":[2.314]},"t":86,"s":[-7.033]},{"i":{"x":[0.833],"y":[0.773]},"o":{"x":[0.167],"y":[0.079]},"t":87,"s":[-7.054]},{"i":{"x":[0.833],"y":[0.812]},"o":{"x":[0.167],"y":[0.132]},"t":88,"s":[-6.668]},{"i":{"x":[0.833],"y":[0.826]},"o":{"x":[0.167],"y":[0.15]},"t":89,"s":[-6.001]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.16]},"t":90,"s":[-5.165]},{"i":{"x":[0.833],"y":[0.838]},"o":{"x":[0.167],"y":[0.166]},"t":91,"s":[-4.251]},{"i":{"x":[0.833],"y":[0.842]},"o":{"x":[0.167],"y":[0.171]},"t":92,"s":[-3.332]},{"i":{"x":[0.833],"y":[0.845]},"o":{"x":[0.167],"y":[0.176]},"t":93,"s":[-2.461]},{"i":{"x":[0.833],"y":[0.848]},"o":{"x":[0.167],"y":[0.18]},"t":94,"s":[-1.675]},{"i":{"x":[0.833],"y":[0.851]},"o":{"x":[0.167],"y":[0.184]},"t":95,"s":[-0.998]},{"i":{"x":[0.833],"y":[0.855]},"o":{"x":[0.167],"y":[0.189]},"t":96,"s":[-0.439]},{"i":{"x":[0.833],"y":[0.86]},"o":{"x":[0.167],"y":[0.196]},"t":97,"s":[0]},{"i":{"x":[0.833],"y":[0.867]},"o":{"x":[0.167],"y":[0.205]},"t":98,"s":[0.325]},{"i":{"x":[0.833],"y":[0.879]},"o":{"x":[0.167],"y":[0.222]},"t":99,"s":[0.548]},{"i":{"x":[0.833],"y":[0.914]},"o":{"x":[0.167],"y":[0.269]},"t":100,"s":[0.681]},{"i":{"x":[0.833],"y":[2.429]},"o":{"x":[0.167],"y":[2.314]},"t":101,"s":[0.741]},{"i":{"x":[0.833],"y":[0.773]},"o":{"x":[0.167],"y":[0.079]},"t":102,"s":[0.743]},{"i":{"x":[0.833],"y":[0.812]},"o":{"x":[0.167],"y":[0.132]},"t":103,"s":[0.703]},{"i":{"x":[0.833],"y":[0.826]},"o":{"x":[0.167],"y":[0.15]},"t":104,"s":[0.633]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.16]},"t":105,"s":[0.544]},{"i":{"x":[0.833],"y":[0.838]},"o":{"x":[0.167],"y":[0.166]},"t":106,"s":[0.448]},{"i":{"x":[0.833],"y":[0.842]},"o":{"x":[0.167],"y":[0.171]},"t":107,"s":[0.351]},{"i":{"x":[0.833],"y":[0.845]},"o":{"x":[0.167],"y":[0.176]},"t":108,"s":[0.259]},{"i":{"x":[0.833],"y":[0.848]},"o":{"x":[0.167],"y":[0.18]},"t":109,"s":[0.177]},{"i":{"x":[0.833],"y":[0.851]},"o":{"x":[0.167],"y":[0.184]},"t":110,"s":[0.105]},{"i":{"x":[0.833],"y":[0.855]},"o":{"x":[0.167],"y":[0.189]},"t":111,"s":[0.046]},{"i":{"x":[0.833],"y":[0.86]},"o":{"x":[0.167],"y":[0.196]},"t":112,"s":[0]},{"i":{"x":[0.833],"y":[0.867]},"o":{"x":[0.167],"y":[0.205]},"t":113,"s":[-0.034]},{"i":{"x":[0.833],"y":[0.879]},"o":{"x":[0.167],"y":[0.222]},"t":114,"s":[-0.058]},{"i":{"x":[0.833],"y":[0.914]},"o":{"x":[0.167],"y":[0.269]},"t":115,"s":[-0.072]},{"i":{"x":[0.833],"y":[2.429]},"o":{"x":[0.167],"y":[2.314]},"t":116,"s":[-0.078]},{"i":{"x":[0.833],"y":[0.773]},"o":{"x":[0.167],"y":[0.079]},"t":117,"s":[-0.078]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.132]},"t":118,"s":[-0.074]},{"t":119,"s":[-0.067]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":20,"s":[29.881,12.606,0],"to":[1.188,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":40,"s":[37.006,12.606,0],"to":[0,0,0],"ti":[1.188,0,0]},{"t":82,"s":[29.881,12.606,0]}],"ix":2,"l":2},"a":{"a":0,"k":[29.881,12.606,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,3.057],[0,0],[3.057,0],[0,0]],"o":[[0,0],[3.057,0],[0,0],[0,-3.058],[0,0],[0,0]],"v":[[-5.882,5.697],[0.346,5.697],[5.882,0.162],[5.882,-0.161],[0.346,-5.697],[-5.882,-5.697]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.07058823529411765,0.8392156862745098,0.5529411764705883],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[29.881,12.606],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":120,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Figma-outline-bot_s1g1_s2g2_s3g1_s4g1_background","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":20,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":50,"s":[90]},{"t":80,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":20,"s":[18.118,12.606,0],"to":[-1.062,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":55,"s":[11.743,12.606,0],"to":[0,0,0],"ti":[-1.062,0,0]},{"t":82,"s":[18.118,12.606,0]}],"ix":2,"l":2},"a":{"a":0,"k":[18.118,12.606,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,3.057],[0,0],[-3.057,0],[0,0]],"o":[[0,0],[-3.057,0],[0,0],[0,-3.058],[0,0],[0,0]],"v":[[5.882,5.697],[-0.346,5.697],[-5.882,0.162],[-5.882,-0.161],[-0.346,-5.697],[5.882,-5.697]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.07058823529411765,0.8392156862745098,0.5529411764705883],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[18.118,12.606],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":120,"st":0,"ct":1,"bm":0}]');
const markers$7 = [];
const props$5 = {};
const designData = {
  v: v$7,
  fr: fr$7,
  ip: ip$7,
  op: op$7,
  w: w$7,
  h: h$7,
  nm: nm$7,
  ddd: ddd$7,
  assets: assets$7,
  layers: layers$7,
  markers: markers$7,
  props: props$5
};
const v$6 = "5.12.2";
const fr$6 = 60;
const ip$6 = 0;
const op$6 = 120;
const w$6 = 48;
const h$6 = 48;
const nm$6 = "KM";
const ddd$6 = 0;
const assets$6 = [];
const layers$6 = /* @__PURE__ */ JSON.parse('[{"ddd":0,"ind":1,"ty":4,"nm":"KM-outline-bot_s1g1_s2g2_s3g1_s4g1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[24,24,0],"ix":2,"l":2},"a":{"a":0,"k":[24,24,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-3.309,2.57],[3.309,-2.57]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,0.9490196078431372,0.10196078431372549],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[24.09,23.911],"ix":2},"a":{"a":0,"k":[-3.344,2.562],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":60,"s":[-124]},{"t":110,"s":[0]}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[18,41.055],[30,41.055]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,0.9490196078431372,0.10196078431372549],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0.125,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":120,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"KM-outline-bot_s1g1_s2g2_s3g1_s4g1_background","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[24,24,0],"ix":2,"l":2},"a":{"a":0,"k":[24,24,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"o":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"v":[[-1.5,0],[0,-1.5],[1.5,0],[0,1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,0.9490196078431372,0.10196078431372549],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[24,23.918],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":120,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"KM-outline-top_s1g1_s2g1_s3g1_s4g1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[24,24,0],"ix":2,"l":2},"a":{"a":0,"k":[24,24,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[22.056,31.418],[25.944,31.418]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":60,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[30.632,31.423],[17.618,31.423]],"c":true}]},{"t":110,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[22.056,31.418],[25.944,31.418]],"c":false}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-0.293,0.124],[0.293,-0.124]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[36.729,18.541],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-0.293,0.124],[0.293,-0.124]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[11.271,29.295],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-0.124,-0.293],[0.124,0.293]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[18.623,11.189],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":2,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-0.12,0.295],[0.12,-0.295]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[29.198,11.115],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":2,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-0.295,-0.12],[0.295,0.12]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[36.803,29.116],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 6","np":2,"cix":2,"bm":0,"ix":6,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-0.295,-0.12],[0.295,0.12]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[11.197,18.72],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 7","np":2,"cix":2,"bm":0,"ix":7,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-0.225,0.225],[0.225,-0.225]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[33.771,14.147],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 8","np":2,"cix":2,"bm":0,"ix":8,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-0.225,-0.225],[0.225,0.225]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[14.229,14.147],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 9","np":2,"cix":2,"bm":0,"ix":9,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[24,10.418],[24,9.782]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 10","np":2,"cix":2,"bm":0,"ix":10,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[37.5,23.918],[38.136,23.918]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 11","np":2,"cix":2,"bm":0,"ix":11,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[9.864,23.918],[10.5,23.918]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 12","np":2,"cix":2,"bm":0,"ix":12,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":120,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"KM-outline-top_s1g1_s2g2_s3g1_s4g1_background","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[24,24,0],"ix":2,"l":2},"a":{"a":0,"k":[24,24,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.967,-7.664],[2.077,-3.216],[2.096,0],[0,0],[1.129,1.728],[0,3.422],[-10.249,-1.132]],"o":[[0.533,4.225],[-1.137,1.761],[0,0],[-2.063,0],[-1.74,-2.663],[0,-10.007],[7.678,0.848]],"v":[[16.633,0.785],[14.07,12.191],[8.867,14.997],[-9.264,14.997],[-14.415,12.266],[-17.167,2.997],[1.738,-13.865]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,0.9490196078431372,0.10196078431372549],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[24.197,20.918],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":120,"st":0,"ct":1,"bm":0}]');
const markers$6 = [];
const props$4 = {};
const performanceData = {
  v: v$6,
  fr: fr$6,
  ip: ip$6,
  op: op$6,
  w: w$6,
  h: h$6,
  nm: nm$6,
  ddd: ddd$6,
  assets: assets$6,
  layers: layers$6,
  markers: markers$6,
  props: props$4
};
const v$5 = "5.12.2";
const fr$5 = 60;
const ip$5 = 0;
const op$5 = 75;
const w$5 = 48;
const h$5 = 48;
const nm$5 = "desktop 2";
const ddd$5 = 1;
const assets$5 = [];
const layers$5 = [{ "ddd": 1, "ind": 1, "ty": 4, "nm": "desktop-outline-top_s1g1_s2g1_s3g1_s4g1_background Outlines", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "rx": { "a": 0, "k": 0, "ix": 8 }, "ry": { "a": 1, "k": [{ "i": { "x": [0.667], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 0, "s": [0] }, { "t": 60, "s": [360] }], "ix": 9 }, "rz": { "a": 0, "k": 0, "ix": 10 }, "or": { "a": 0, "k": [0, 0, 0], "ix": 7 }, "p": { "a": 1, "k": [{ "i": { "x": 0.667, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 0, "s": [20.503, 21.486, -6.941], "to": [0, 0, -1.047], "ti": [0, 0, 0] }, { "i": { "x": 0.667, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 30, "s": [20.503, 21.486, -13.223], "to": [0, 0, 0], "ti": [0, 0, -1.047] }, { "t": 60, "s": [20.503, 21.486, -6.941] }], "ix": 2 }, "a": { "a": 0, "k": [19, 15.821, 0], "ix": 1 }, "s": { "a": 0, "k": [95.061, 95.061, 95.061], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[3.572, 0], [0, 0], [0, 3.571], [0, 0], [-3.572, 0], [0, 0], [0, -3.572], [0, 0]], "o": [[0, 0], [-3.572, 0], [0, 0], [0, -3.572], [0, 0], [3.572, 0], [0, 0], [0, 3.571]], "v": [[7.533, 10.822], [-7.533, 10.822], [-14, 4.355], [-14, -4.355], [-7.533, -10.822], [7.533, -10.822], [14, -4.355], [14, 4.355]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0, 0, 0], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 2, "lj": 2, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [1, 1, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [19, 15.821], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 1", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 75, "st": 0, "ct": 1, "bm": 0 }, { "ddd": 1, "ind": 2, "ty": 4, "nm": "desktop-outline-top_s1g1_s2g1_s3g1_s4g2 Outlines", "parent": 1, "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "rx": { "a": 0, "k": 0, "ix": 8 }, "ry": { "a": 0, "k": 0, "ix": 9 }, "rz": { "a": 0, "k": 0, "ix": 10 }, "or": { "a": 0, "k": [0, 0, 0], "ix": 7 }, "p": { "a": 0, "k": [19.037, 29.583, 0], "ix": 2 }, "a": { "a": 0, "k": [8.349, 3.94, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[1, 6.879], [15.698, 6.879]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0, 0, 0], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 2, "lj": 2, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 1", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[12.391, 1], [12.391, 6.879]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0, 0, 0], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 2, "lj": 2, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 2", "np": 2, "cix": 2, "bm": 0, "ix": 2, "mn": "ADBE Vector Group", "hd": false }, { "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[3.94, 1], [3.94, 6.879]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0, 0, 0], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 2, "lj": 2, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 3", "np": 2, "cix": 2, "bm": 0, "ix": 3, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 75, "st": 0, "ct": 1, "bm": 0 }, { "ddd": 1, "ind": 3, "ty": 4, "nm": "desktop-outline-bot_s1g1_s2g2_s3g1_s4g1_background Outlines", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "rx": { "a": 0, "k": 0, "ix": 8 }, "ry": { "a": 0, "k": 0, "ix": 9 }, "rz": { "a": 1, "k": [{ "i": { "x": [0.667], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 0, "s": [0] }, { "i": { "x": [0.667], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 20, "s": [6] }, { "i": { "x": [0.667], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 40, "s": [-4] }, { "t": 60, "s": [0] }], "ix": 10 }, "or": { "a": 0, "k": [0, 0, 0], "ix": 7 }, "p": { "a": 0, "k": [35.247, 37.806, 0], "ix": 2 }, "a": { "a": 0, "k": [12, 35.881, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[2.002, 0], [0, 0], [0, 2.002], [0, 0], [-2.002, 0], [0, 0], [0, -2.002], [0, 0]], "o": [[0, 0], [-2.002, 0], [0, 0], [0, -2.002], [0, 0], [2.002, 0], [0, 0], [0, 2.002]], "v": [[3.375, 15.63], [-3.375, 15.63], [-7, 12.005], [-7, -12.005], [-3.375, -15.63], [3.375, -15.63], [7, -12.005], [7, 12.005]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.5607843137254902, 1, 0.10196078431372549], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 2, "lj": 2, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [1, 1, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [12, 20.63], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 1", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 75, "st": 0, "ct": 1, "bm": 0 }];
const markers$5 = [];
const props$3 = {};
const responsiveData = {
  v: v$5,
  fr: fr$5,
  ip: ip$5,
  op: op$5,
  w: w$5,
  h: h$5,
  nm: nm$5,
  ddd: ddd$5,
  assets: assets$5,
  layers: layers$5,
  markers: markers$5,
  props: props$3
};
const v$4 = "5.12.2";
const fr$4 = 60;
const ip$4 = 0;
const op$4 = 75;
const w$4 = 48;
const h$4 = 48;
const nm$4 = "Libraries";
const ddd$4 = 0;
const assets$4 = [];
const layers$4 = [{ "ddd": 0, "ind": 1, "ty": 4, "nm": "libraries-outline-top_s1g1_s2g2_s3g1_s4g2_background Outlines", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [23.962, 24.43, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [14.962, 19.453, 0], "ix": 1, "l": 2 }, "s": { "a": 1, "k": [{ "i": { "x": [0.667, 0.667, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 40, "s": [100, 100, 100] }, { "i": { "x": [0.667, 0.667, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 50, "s": [90, 90, 100] }, { "t": 60, "s": [100, 100, 100] }], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0]], "v": [[-6.179, 5.262], [6.179, 5.262], [0, -5.262]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.25098039215686274, 0.07058823529411765, 0.8392156862745098], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 2, "lj": 2, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [1, 1, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [23.995, 10.262], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 1, "k": [{ "i": { "x": [0.667, 0.667], "y": [1, 1] }, "o": { "x": [0.333, 0.333], "y": [0, 0] }, "t": 30.057, "s": [100, 100] }, { "i": { "x": [0.667, 0.667], "y": [1, 1] }, "o": { "x": [0.333, 0.333], "y": [0, 0] }, "t": 35.027, "s": [80, 80] }, { "t": 40, "s": [100, 100] }], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 1", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[11.5, 27.84], [1, 27.84]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.25098039215686274, 0.07058823529411765, 0.8392156862745098], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 2, "lj": 2, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [6.25, 27.875], "ix": 2 }, "a": { "a": 0, "k": [6.25, 27.875], "ix": 1 }, "s": { "a": 1, "k": [{ "i": { "x": [0.667, 0.667], "y": [1, 1] }, "o": { "x": [0.333, 0.333], "y": [0, 0] }, "t": 20.109, "s": [100, 100] }, { "i": { "x": [0.667, 0.667], "y": [1, 1] }, "o": { "x": [0.333, 0.333], "y": [0, 0] }, "t": 25.084, "s": [80, 80] }, { "t": 30.056640625, "s": [100, 100] }], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 2", "np": 2, "cix": 2, "bm": 0, "ix": 2, "mn": "ADBE Vector Group", "hd": false }, { "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[6.25, 22.524], [6.25, 33.157]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.25098039215686274, 0.07058823529411765, 0.8392156862745098], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 2, "lj": 2, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [6.25, 27.875], "ix": 2 }, "a": { "a": 0, "k": [6.25, 27.875], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3, "x": "var $bm_rt;\n$bm_rt = content('Group 2').transform.scale;" }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 3", "np": 2, "cix": 2, "bm": 0, "ix": 3, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 75, "st": 0, "ct": 1, "bm": 0 }, { "ddd": 0, "ind": 2, "ty": 4, "nm": "libraries-outline-bot_s1g1_s2g1_s3g1_s4g2_background Outlines", "parent": 1, "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [15.175, 19.082, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [19.224, 19.106, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[5.74, 5.25], [-5.74, 5.25], [-5.74, -5.25], [5.74, -5.25]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0, 0, 0], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 2, "lj": 2, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [1, 1, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [28.043, 27.798], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 1, "k": [{ "i": { "x": [0.667, 0.667], "y": [1, 1] }, "o": { "x": [0.333, 0.333], "y": [0, 0] }, "t": 10.057, "s": [100, 100] }, { "i": { "x": [0.667, 0.667], "y": [1, 1] }, "o": { "x": [0.333, 0.333], "y": [0, 0] }, "t": 15.027, "s": [80, 80] }, { "t": 20, "s": [100, 100] }], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 1", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 2.926], [-2.926, 0], [0, -2.926], [2.927, 0]], "o": [[0, -2.926], [2.927, 0], [0, 2.926], [-2.926, 0]], "v": [[-5.299, 0], [-1e-3, -5.298], [5.299, 0], [-1e-3, 5.298]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0, 0, 0], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 2, "lj": 2, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [1, 1, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [10.299, 10.298], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 1, "k": [{ "i": { "x": [0.667, 0.667], "y": [1, 1] }, "o": { "x": [0.333, 0.333], "y": [0, 0] }, "t": 0, "s": [100, 100] }, { "i": { "x": [0.667, 0.667], "y": [1, 1] }, "o": { "x": [0.333, 0.333], "y": [0, 0] }, "t": 4.973, "s": [80, 80] }, { "t": 9.943359375, "s": [100, 100] }], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 2", "np": 3, "cix": 2, "bm": 0, "ix": 2, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 75, "st": 0, "ct": 1, "bm": 0 }];
const markers$4 = [];
const props$2 = {};
const technologiesData = {
  v: v$4,
  fr: fr$4,
  ip: ip$4,
  op: op$4,
  w: w$4,
  h: h$4,
  nm: nm$4,
  ddd: ddd$4,
  assets: assets$4,
  layers: layers$4,
  markers: markers$4,
  props: props$2
};
const principles = [
  {
    title: "Responsive Design",
    icon: responsiveData,
    description: "Build responsive designs that work on all devices.",
    color: "#16C47F"
  },
  {
    title: "Trending Technologies",
    icon: technologiesData,
    description: "Use the latest technologies to build your product.",
    color: "#211C84"
  },
  {
    title: "Performance",
    icon: performanceData,
    description: "Build performant websites that load quickly.",
    color: "#FFD95F"
  },
  {
    title: "Accessibility",
    icon: accessibilityData,
    description: "Build accessible websites that work for everyone.",
    color: "#D91656"
  },
  {
    title: "Beautiful Design",
    icon: designData,
    description: "Build beautiful designs that look great.",
    color: "#2A004E"
  }
];
function Principles() {
  const [ref, isHover] = useHover();
  return /* @__PURE__ */ jsxs(
    motion$1.div,
    {
      ref,
      className: "w-full bg-gradient-to-r from-blue-300/20 to-purple-300/20 flex-1 p-2 lg:p-0 rounded-[inherit] relative",
      children: [
        /* @__PURE__ */ jsx(
          motion$1.div,
          {
            className: "bg-neutral-900 hover:shadow-xl text-white rounded-2xl px-2 py-1 text-xs w-fit will-change-[box-shadow] absolute top-[2px] left-2 z-10",
            animate: {
              opacity: isHover ? 1 : 0,
              translateY: isHover ? 5 : 0
            },
            children: "Principles"
          }
        ),
        /* @__PURE__ */ jsx("ul", { className: "flex flex-wrap gap-4 justify-start items-end pt-4", children: principles.map((principle, index) => /* @__PURE__ */ jsx(Principle, { principle }, index)) })
      ]
    }
  );
}
function Principle({ principle }) {
  const [ref, isHover] = useHover();
  const { title, icon, description, color } = principle;
  const opacityColorFormatted = `${color}4D`;
  const shadow = `0 0 60px ${opacityColorFormatted}`;
  return /* @__PURE__ */ jsxs(
    motion$1.li,
    {
      className: `w-[200px] rounded-xl content-center p-1 transition`,
      ref,
      animate: {
        background: isHover ? opacityColorFormatted : "#0000000",
        boxShadow: isHover ? shadow : "none"
      },
      children: [
        /* @__PURE__ */ jsx(motion$1.span, { children: /* @__PURE__ */ jsx("div", { className: "w-8 h-7", children: /* @__PURE__ */ jsx(Lottie, { animationData: icon }) }) }),
        /* @__PURE__ */ jsx(
          motion$1.h3,
          {
            className: "transition will-change-[font-weight] text-base",
            animate: {
              letterSpacing: isHover ? "0.03em" : "0.01em"
            },
            children: title
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-sm opacity-80 hover:opacity-100 transition-opacity", children: description })
      ]
    }
  );
}
const v$3 = "5.12.2";
const fr$3 = 29.9700012207031;
const ip$3 = 0;
const op$3 = 45.0000018328876;
const w$3 = 48;
const h$3 = 48;
const nm$3 = "link";
const ddd$3 = 0;
const assets$3 = [];
const layers$3 = [{ "ddd": 0, "ind": 1, "ty": 4, "nm": "link-outline-top_s1g1_s2g2_s3g1_s4g1 Outlines", "parent": 3, "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [3.32, 3.528, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [7.96, 7.96, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 1, "k": [{ "i": { "x": 0.667, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 11, "s": [{ "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-3.925, 3.497], [-2.579, 2.005]], "c": false }] }, { "i": { "x": 0.667, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 24, "s": [{ "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-2.216, 2.216], [2.216, -2.216]], "c": false }] }, { "i": { "x": 0.667, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 34, "s": [{ "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-2.216, 2.216], [2.216, -2.216]], "c": false }] }, { "t": 44.0000017921567, "s": [{ "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-3.925, 3.497], [-2.579, 2.005]], "c": false }] }], "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.3254901960784314, 0.996078431372549, 0.5607843137254902], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 2, "lj": 2, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [12.703, 3.216], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 1", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 1, "k": [{ "i": { "x": 0.667, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 11, "s": [{ "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[2.579, -2.692], [3.987, -4.254]], "c": false }] }, { "i": { "x": 0.667, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 24, "s": [{ "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-2.32, 2.32], [2.32, -2.32]], "c": false }] }, { "i": { "x": 0.667, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 34, "s": [{ "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-2.32, 2.32], [2.32, -2.32]], "c": false }] }, { "t": 44.0000017921567, "s": [{ "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[2.579, -2.692], [3.987, -4.254]], "c": false }] }], "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.3254901960784314, 0.996078431372549, 0.5607843137254902], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 2, "lj": 2, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [3.32, 12.599], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 2", "np": 2, "cix": 2, "bm": 0, "ix": 2, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 45.0000018328876, "st": 0, "ct": 1, "bm": 0 }, { "ddd": 0, "ind": 2, "ty": 4, "nm": "link-outline-bot_s1g1_s2g1_s3g1_s4g1_background Outlines", "parent": 3, "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [3.135, 3.713, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [23.236, 23.235, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[-1.544, -1.544], [0, 0], [1.544, -1.544], [0, 0], [1.544, 1.544], [0, 0], [-1.544, 1.544], [0, 0]], "o": [[0, 0], [1.544, 1.544], [0, 0], [-1.544, 1.544], [0, 0], [-1.544, -1.544], [0, 0], [1.544, -1.544]], "v": [[2.796, -8.387], [8.387, -2.796], [8.387, 2.796], [2.796, 8.387], [-2.797, 8.387], [-8.387, 2.796], [-8.387, -2.796], [-2.797, -8.387]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0, 0, 0], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 2, "lj": 2, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [1, 1, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 1, "k": [{ "i": { "x": 0.667, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 13, "s": [29.165, 16.869], "to": [0.396, -0.323], "ti": [-0.396, 0.323] }, { "i": { "x": 0.667, "y": 0.667 }, "o": { "x": 0.333, "y": 0.333 }, "t": 24, "s": [31.54, 14.931], "to": [0, 0], "ti": [0, 0] }, { "i": { "x": 0.667, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 34, "s": [31.54, 14.931], "to": [-0.396, 0.323], "ti": [0.396, -0.323] }, { "t": 44.0000017921567, "s": [29.165, 16.869] }], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 1", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[-1.601, -1.601], [0, 0], [1.601, -1.601], [0, 0], [1.602, 1.601], [0, 0], [-1.602, 1.601], [0, 0]], "o": [[0, 0], [1.601, 1.601], [0, 0], [-1.601, 1.601], [0, 0], [-1.602, -1.601], [0, 0], [1.602, -1.601]], "v": [[2.9, -8.7], [8.7, -2.9], [8.7, 2.9], [2.9, 8.7], [-2.9, 8.7], [-8.699, 2.9], [-8.699, -2.9], [-2.9, -8.7]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0, 0, 0], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 2, "lj": 2, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [1, 1, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 1, "k": [{ "i": { "x": 0.667, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 13, "s": [17.676, 28.108], "to": [-0.396, 0.51], "ti": [0.396, -0.51] }, { "i": { "x": 0.667, "y": 0.667 }, "o": { "x": 0.333, "y": 0.333 }, "t": 24, "s": [15.301, 31.17], "to": [0, 0], "ti": [0, 0] }, { "i": { "x": 0.667, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 34, "s": [15.301, 31.17], "to": [0.396, -0.51], "ti": [-0.396, 0.51] }, { "t": 44.0000017921567, "s": [17.676, 28.108] }], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 2", "np": 3, "cix": 2, "bm": 0, "ix": 2, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 45.0000018328876, "st": 0, "ct": 1, "bm": 0 }, { "ddd": 0, "ind": 3, "ty": 4, "nm": "link-outline-top_s1g1_s2g2_s3g1_s4g2 Outlines", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 1, "k": [{ "i": { "x": [0.667], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 0, "s": [180] }, { "t": 8.00000032584668, "s": [360] }], "ix": 10 }, "p": { "a": 0, "k": [24.282, 23.718, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [3.424, 3.424, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-2.424, 2.424], [2.424, -2.424]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.3254901960784314, 0.996078431372549, 0.5607843137254902], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 2, "lj": 2, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [3.424, 3.424], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 1", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 45.0000018328876, "st": 0, "ct": 1, "bm": 0 }];
const markers$3 = [];
const props$1 = {};
const linkAnimationData = {
  v: v$3,
  fr: fr$3,
  ip: ip$3,
  op: op$3,
  w: w$3,
  h: h$3,
  nm: nm$3,
  ddd: ddd$3,
  assets: assets$3,
  layers: layers$3,
  markers: markers$3,
  props: props$1
};
const START_YEAR = 2021;
function Sharing() {
  const logoRef = useRef(null);
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const experience = currentYear - START_YEAR;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `bg-gradient-to-br from-green-100 to-green-300 from-20% rounded-[inherit] flex-1 flex flex-col p-3 w-full sm:max-w-[350px] lg:max-w-auto`,
      children: [
        /* @__PURE__ */ jsx("div", { className: "bg-[#24292f] text-2xl active:scale-95 p-2 rounded-xl w-fit h-fit text-white hover:shadow-xl shadow-lg transition", children: /* @__PURE__ */ jsx(TbBrandGithubFilled, {}) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 items-start justify-end min-h-0 flex-1", children: [
          /* @__PURE__ */ jsxs("h1", { className: "font-semibold text-xl group text-[#2b3137]", children: [
            "Sharing more than ",
            /* @__PURE__ */ jsxs("span", { className: "font-bold text-black", children: [
              experience,
              "+ years"
            ] }),
            " of expertise ",
            /* @__PURE__ */ jsx(Symbol$1, { children: "<" }),
            "building projects",
            /* @__PURE__ */ jsx(Symbol$1, { children: "/>" })
          ] }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              className: `bg-white text-green-600 p-2 rounded-xl font-semibold flex items-center gap-2 cursor-pointer shadow-md hover:shadow-lg active:scale-95 text-sm transition`,
              children: [
                /* @__PURE__ */ jsx("div", { className: "w-8 h-7", children: /* @__PURE__ */ jsx(Lottie, { lottieRef: logoRef, animationData: linkAnimationData }) }),
                "See my projects"
              ]
            }
          )
        ] })
      ]
    }
  );
}
function Symbol$1({ children }) {
  return /* @__PURE__ */ jsx(motion$1.span, { className: "px-px font-bold opacity-60 text-neutral-700 text-sm group-hover:opacity-100 transition animate-pulse", children });
}
const Title$1 = ({ children, asChild }) => {
  const Component = asChild ? Slot : "div";
  return /* @__PURE__ */ jsx(Component, { className: "relative mx-auto flex max-w-[700px] justify-center text-center text-2xl md:text-3xl font-semibold", children });
};
function Grid() {
  return /* @__PURE__ */ jsx(Container, { asChild: true, children: /* @__PURE__ */ jsx(
    "div",
    {
      className: "mx-auto h-auto lg:h-[700px] py-20 mt-0 sm:my-[150px] p-6 lg:py-0",
      id: NAVIGATION_NAMES.PRINCIPLES,
      children: /* @__PURE__ */ jsxs("div", { className: "flex lg:grid flex-row flex-wrap h-full grid-cols-3 grid-rows-6 lg:gap-4 gap-3 sm:gap-1", children: [
        /* @__PURE__ */ jsx(
          Card,
          {
            className: "col-span-2 row-span-3",
            initial: {
              x: -50
            },
            animate: {
              x: 0
            },
            children: /* @__PURE__ */ jsx(Principles, {})
          }
        ),
        /* @__PURE__ */ jsx(
          Card,
          {
            className: "col-start-3 row-span-4 w-full sm:w-auto",
            initial: {
              y: -50
            },
            animate: {
              y: 0
            },
            children: /* @__PURE__ */ jsx(Experience$1, {})
          }
        ),
        /* @__PURE__ */ jsx(
          Card,
          {
            className: "row-span-3 row-start-4",
            initial: {
              y: 50
            },
            animate: {
              y: 0
            },
            children: /* @__PURE__ */ jsx(Sharing, {})
          }
        ),
        /* @__PURE__ */ jsx(Card, { className: "col-start-2 row-start-4 w-full sm:w-auto", children: /* @__PURE__ */ jsx(Phrase, {}) })
      ] })
    }
  ) });
}
function Card({ children, className = "", ...props2 }) {
  return /* @__PURE__ */ jsx(
    motion$1.div,
    {
      initial: { scale: 1, ...typeof props2.initial === "object" ? props2.initial : {} },
      whileHover: { scale: 1.03 },
      className: `group flex flex-col w-fit lg:w-auto items-center justify-center rounded-xl border-2 border-neutral-200 transition hover:border-neutral-300 hover:shadow-sm ${className}`,
      ...props2,
      children
    }
  );
}
const colorVioletCover = "/assets/color-violet-BNbuaX1r.webp";
const nm$2 = "Spotify animation";
const v$2 = "5.9.6";
const fr$2 = 30;
const ip$2 = 0;
const op$2 = 30;
const w$2 = 300;
const h$2 = 300;
const ddd$2 = 0;
const markers$2 = [];
const assets$2 = /* @__PURE__ */ JSON.parse('[{"nm":"[FRAME] Frame - Null / Top - Null / Top - Stroke / Middle - Null / Middle - Stroke / Bottom - Null / Bottom - Stroke / Circle - Null / Circle","fr":30,"id":"ldvqx73vej1urx44xfe","layers":[{"ty":3,"ddd":0,"ind":77553,"hd":false,"nm":"Frame - Null","ks":{"a":{"a":0,"k":[143,143]},"o":{"a":0,"k":100},"p":{"a":0,"k":[150,150]},"r":{"a":0,"k":0},"s":{"a":1,"k":[{"t":0,"s":[100,100],"o":{"x":[0.5],"y":[0.35]},"i":{"x":[0.15],"y":[1]}},{"t":15,"s":[90,90],"o":{"x":[0.5],"y":[0.35]},"i":{"x":[0.15],"y":[1]}},{"t":30,"s":[100,100]}]},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0}},"st":0,"ip":0,"op":60,"bm":0,"sr":1},{"ty":3,"ddd":0,"ind":37606,"hd":false,"nm":"Top - Null","parent":77553,"ks":{"a":{"a":0,"k":[0,0]},"o":{"a":0,"k":100},"p":{"a":0,"k":[-121,88]},"r":{"a":0,"k":0},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0}},"st":0,"ip":0,"op":60,"bm":0,"sr":1},{"ddd":0,"ind":39645,"hd":false,"nm":"Top - Stroke","parent":37606,"ks":{"a":{"a":0,"k":[0,0]},"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"r":{"a":0,"k":0},"o":{"a":0,"k":100}},"st":0,"ip":0,"op":60,"bm":0,"sr":1,"ty":4,"shapes":[{"ty":"gr","nm":"Group","hd":false,"np":3,"it":[{"ty":"sh","nm":"Path","hd":false,"ks":{"a":0,"k":{"c":true,"v":[[491,245.5],[478.9951,321.3595],[444.1095,389.8049],[389.8049,444.1095],[321.3595,478.9951],[245.5,491],[169.6405,478.9951],[101.1951,444.1095],[46.8905,389.8049],[12.005,321.3595],[0,245.5],[12.005,169.6405],[46.8905,101.1951],[101.1951,46.8905],[169.6405,12.005],[245.5,0],[321.3595,12.005],[389.8049,46.8905],[444.1095,101.1951],[478.9951,169.6405],[491,245.5],[491,245.5]],"i":[[0,0],[7.9542,-24.5009],[15.1474,-20.843],[20.843,-15.1473],[24.5009,-7.9542],[25.7529,0],[24.5009,7.9542],[20.843,15.1474],[15.1474,20.843],[7.9542,24.5009],[0,25.7529],[-7.9542,24.5009],[-15.1473,20.843],[-20.843,15.1474],[-24.5009,7.9542],[-25.7529,0],[-24.5009,-7.9542],[-20.843,-15.1473],[-15.1473,-20.843],[-7.9542,-24.5009],[0,-25.7529],[0,0]],"o":[[0,25.75290000000001],[-7.954200000000014,24.5009],[-15.147299999999973,20.843000000000018],[-20.843000000000018,15.147400000000005],[-24.5009,7.954200000000014],[-25.75290000000001,0],[-24.5009,-7.954200000000014],[-20.843000000000004,-15.147299999999973],[-15.147300000000001,-20.843000000000018],[-7.9542,-24.5009],[0,-25.75290000000001],[7.954200000000002,-24.5009],[15.147399999999998,-20.843000000000004],[20.843000000000004,-15.147300000000001],[24.5009,-7.9542],[25.75290000000001,0],[24.5009,7.954200000000002],[20.843000000000018,15.147399999999998],[15.147400000000005,20.843000000000004],[7.954200000000014,24.5009],[0,0],[0,0]]}}},{"ty":"st","o":{"a":0,"k":100},"w":{"a":0,"k":28},"c":{"a":0,"k":[0,0,0,1]},"ml":4,"lc":2,"lj":1,"nm":"Stroke","hd":false},{"ty":"tr","a":{"a":0,"k":[0,0]},"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"r":{"a":0,"k":0},"o":{"a":0,"k":100}}]},{"ty":"tm","s":{"a":1,"k":[{"t":0,"s":[70.5],"o":{"x":[0],"y":[0]},"i":{"x":[1],"y":[1]}},{"t":4.8,"s":[73],"o":{"x":[0],"y":[0]},"i":{"x":[1],"y":[1]}},{"t":12.239999999999998,"s":[70],"o":{"x":[0],"y":[0]},"i":{"x":[1],"y":[1]}},{"t":19.29,"s":[73],"o":{"x":[0.5],"y":[0.35]},"i":{"x":[0.15],"y":[1]}},{"t":25.8,"s":[69],"o":{"x":[0.5],"y":[0.35]},"i":{"x":[0.15],"y":[1]}},{"t":30,"s":[70.5]}]},"e":{"a":1,"k":[{"t":0,"s":[82.5],"o":{"x":[0],"y":[0]},"i":{"x":[1],"y":[1]}},{"t":4.8,"s":[80],"o":{"x":[0],"y":[0]},"i":{"x":[1],"y":[1]}},{"t":12.239999999999998,"s":[83],"o":{"x":[0],"y":[0]},"i":{"x":[1],"y":[1]}},{"t":19.29,"s":[80],"o":{"x":[0.5],"y":[0.35]},"i":{"x":[0.15],"y":[1]}},{"t":25.8,"s":[84],"o":{"x":[0.5],"y":[0.35]},"i":{"x":[0.15],"y":[1]}},{"t":30,"s":[82.5]}]},"o":{"a":0,"k":0},"m":2},{"ty":"gr","nm":"Group","hd":false,"np":3,"it":[{"ty":"rc","nm":"Rectangle","hd":false,"p":{"a":0,"k":[245.5,245.5]},"s":{"a":0,"k":[547,547]},"r":{"a":0,"k":0}},{"ty":"fl","o":{"a":0,"k":0},"c":{"a":0,"k":[0,1,0,1]},"nm":"Fill","hd":false,"r":1},{"ty":"tr","a":{"a":0,"k":[0,0]},"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"r":{"a":0,"k":0},"o":{"a":0,"k":100}}]}]},{"ty":3,"ddd":0,"ind":14057,"hd":false,"nm":"Middle - Null","parent":77553,"ks":{"a":{"a":0,"k":[0,0]},"o":{"a":0,"k":100},"p":{"a":0,"k":[-66,135]},"r":{"a":0,"k":0},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0}},"st":0,"ip":0,"op":60,"bm":0,"sr":1},{"ddd":0,"ind":87077,"hd":false,"nm":"Middle - Stroke","parent":14057,"ks":{"a":{"a":0,"k":[0,0]},"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"r":{"a":0,"k":0},"o":{"a":0,"k":100}},"st":0,"ip":0,"op":60,"bm":0,"sr":1,"ty":4,"shapes":[{"ty":"gr","nm":"Group","hd":false,"np":3,"it":[{"ty":"sh","nm":"Path","hd":false,"ks":{"a":0,"k":{"c":true,"v":[[373,186.5],[363.8801,244.1285],[337.3785,296.1247],[296.1247,337.3785],[244.1285,363.8801],[186.5,373],[128.8715,363.8801],[76.8753,337.3785],[35.6215,296.1247],[9.1199,244.1285],[0,186.5],[9.1199,128.8715],[35.6215,76.8753],[76.8753,35.6215],[128.8715,9.1199],[186.5,0],[244.1285,9.1199],[296.1247,35.6215],[337.3785,76.8753],[363.8801,128.8715],[373,186.5],[373,186.5]],"i":[[0,0],[6.0426,-18.6127],[11.5071,-15.8338],[15.8339,-11.507],[18.6127,-6.0426],[19.5639,0],[18.6127,6.0426],[15.8339,11.5071],[11.5071,15.8339],[6.0426,18.6127],[0,19.5639],[-6.0426,18.6127],[-11.507,15.8339],[-15.8338,11.5071],[-18.6127,6.0426],[-19.5638,0],[-18.6127,-6.0426],[-15.8338,-11.507],[-11.507,-15.8338],[-6.0426,-18.6127],[0,-19.5638],[0,0]],"o":[[0,19.56389999999999],[-6.042599999999993,18.61269999999999],[-11.507000000000005,15.833900000000028],[-15.833799999999997,11.50709999999998],[-18.61269999999999,6.042599999999993],[-19.563800000000015,0],[-18.612700000000004,-6.042599999999993],[-15.833799999999997,-11.507000000000005],[-11.506999999999998,-15.833799999999997],[-6.0426,-18.61269999999999],[0,-19.563800000000015],[6.0426,-18.612700000000004],[11.507100000000001,-15.833799999999997],[15.8339,-11.506999999999998],[18.61269999999999,-6.0426],[19.56389999999999,0],[18.61269999999999,6.0426],[15.833900000000028,11.507100000000001],[11.50709999999998,15.8339],[6.042599999999993,18.61269999999999],[0,0],[0,0]]}}},{"ty":"st","o":{"a":0,"k":100},"w":{"a":0,"k":23},"c":{"a":0,"k":[0,0,0,1]},"ml":4,"lc":2,"lj":1,"nm":"Stroke","hd":false},{"ty":"tr","a":{"a":0,"k":[0,0]},"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"r":{"a":0,"k":0},"o":{"a":0,"k":100}}]},{"ty":"tm","s":{"a":1,"k":[{"t":0,"s":[70],"o":{"x":[0],"y":[0]},"i":{"x":[1],"y":[1]}},{"t":5.73,"s":[67],"o":{"x":[0],"y":[0]},"i":{"x":[1],"y":[1]}},{"t":13.44,"s":[73],"o":{"x":[0],"y":[0]},"i":{"x":[1],"y":[1]}},{"t":22.71,"s":[70]}]},"e":{"a":1,"k":[{"t":0,"s":[83.5],"o":{"x":[0],"y":[0]},"i":{"x":[1],"y":[1]}},{"t":5.73,"s":[87],"o":{"x":[0],"y":[0]},"i":{"x":[1],"y":[1]}},{"t":13.44,"s":[80],"o":{"x":[0],"y":[0]},"i":{"x":[1],"y":[1]}},{"t":22.71,"s":[84]}]},"o":{"a":0,"k":0},"m":2},{"ty":"gr","nm":"Group","hd":false,"np":3,"it":[{"ty":"rc","nm":"Rectangle","hd":false,"p":{"a":0,"k":[186.5,186.5]},"s":{"a":0,"k":[419,419]},"r":{"a":0,"k":0}},{"ty":"fl","o":{"a":0,"k":0},"c":{"a":0,"k":[0,1,0,1]},"nm":"Fill","hd":false,"r":1},{"ty":"tr","a":{"a":0,"k":[0,0]},"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"r":{"a":0,"k":0},"o":{"a":0,"k":100}}]}]},{"ty":3,"ddd":0,"ind":24259,"hd":false,"nm":"Bottom - Null","parent":77553,"ks":{"a":{"a":0,"k":[0,0]},"o":{"a":0,"k":100},"p":{"a":0,"k":[-53,180]},"r":{"a":0,"k":0},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0}},"st":0,"ip":0,"op":60,"bm":0,"sr":1},{"ddd":0,"ind":83182,"hd":false,"nm":"Bottom - Stroke","parent":24259,"ks":{"a":{"a":0,"k":[0,0]},"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"r":{"a":0,"k":0},"o":{"a":0,"k":100}},"st":0,"ip":0,"op":60,"bm":0,"sr":1,"ty":4,"shapes":[{"ty":"gr","nm":"Group","hd":false,"np":3,"it":[{"ty":"sh","nm":"Path","hd":false,"ks":{"a":0,"k":{"c":true,"v":[[344,172],[335.5892,225.148],[311.148,273.1016],[273.1016,311.148],[225.148,335.5892],[172,344],[118.852,335.5892],[70.8984,311.148],[32.852,273.1016],[8.4108,225.148],[0,172],[8.4108,118.852],[32.852,70.8984],[70.8984,32.852],[118.852,8.4108],[172,0],[225.148,8.4108],[273.1016,32.852],[311.148,70.8984],[335.5892,118.852],[344,172],[344,172]],"i":[[0,0],[5.5728,-17.1656],[10.6124,-14.6028],[14.6028,-10.6124],[17.1656,-5.5728],[18.0428,0],[17.1656,5.5728],[14.6028,10.6124],[10.6124,14.6028],[5.5728,17.1656],[0,18.0428],[-5.5728,17.1656],[-10.6124,14.6028],[-14.6028,10.6124],[-17.1656,5.5728],[-18.0428,0],[-17.1656,-5.5728],[-14.6028,-10.6124],[-10.6124,-14.6028],[-5.5728,-17.1656],[0,-18.0428],[0,0]],"o":[[0,18.0428],[-5.572799999999972,17.165600000000012],[-10.61239999999998,14.602800000000002],[-14.602800000000002,10.61239999999998],[-17.165600000000012,5.572799999999972],[-18.0428,0],[-17.165599999999998,-5.572799999999972],[-14.602800000000002,-10.61239999999998],[-10.612400000000001,-14.602800000000002],[-5.5728,-17.165600000000012],[0,-18.0428],[5.572799999999999,-17.165599999999998],[10.612400000000001,-14.602800000000002],[14.602800000000002,-10.612400000000001],[17.165600000000012,-5.5728],[18.0428,0],[17.165600000000012,5.572799999999999],[14.602800000000002,10.612400000000001],[10.61239999999998,14.602800000000002],[5.572799999999972,17.165600000000012],[0,0],[0,0]]}}},{"ty":"st","o":{"a":0,"k":100},"w":{"a":0,"k":19},"c":{"a":0,"k":[0,0,0,1]},"ml":4,"lc":2,"lj":1,"nm":"Stroke","hd":false},{"ty":"tr","a":{"a":0,"k":[0,0]},"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"r":{"a":0,"k":0},"o":{"a":0,"k":100}}]},{"ty":"tm","s":{"a":1,"k":[{"t":0,"s":[70.5],"o":{"x":[0],"y":[0]},"i":{"x":[1],"y":[1]}},{"t":3.9000000000000004,"s":[73],"o":{"x":[0],"y":[0]},"i":{"x":[1],"y":[1]}},{"t":11.31,"s":[68],"o":{"x":[0],"y":[0]},"i":{"x":[1],"y":[1]}},{"t":20.28,"s":[76],"o":{"x":[0.5],"y":[0.35]},"i":{"x":[0.15],"y":[1]}},{"t":26.7,"s":[69],"o":{"x":[0.5],"y":[0.35]},"i":{"x":[0.15],"y":[1]}},{"t":30,"s":[70.5]}]},"e":{"a":1,"k":[{"t":0,"s":[82.5],"o":{"x":[0],"y":[0]},"i":{"x":[1],"y":[1]}},{"t":3.9000000000000004,"s":[80],"o":{"x":[0],"y":[0]},"i":{"x":[1],"y":[1]}},{"t":11.31,"s":[86],"o":{"x":[0],"y":[0]},"i":{"x":[1],"y":[1]}},{"t":20.28,"s":[77],"o":{"x":[0.5],"y":[0.35]},"i":{"x":[0.15],"y":[1]}},{"t":26.7,"s":[85],"o":{"x":[0.5],"y":[0.35]},"i":{"x":[0.15],"y":[1]}},{"t":30,"s":[82.5]}]},"o":{"a":0,"k":0},"m":2},{"ty":"gr","nm":"Group","hd":false,"np":3,"it":[{"ty":"rc","nm":"Rectangle","hd":false,"p":{"a":0,"k":[172,172]},"s":{"a":0,"k":[382,382]},"r":{"a":0,"k":0}},{"ty":"fl","o":{"a":0,"k":0},"c":{"a":0,"k":[0,1,0,1]},"nm":"Fill","hd":false,"r":1},{"ty":"tr","a":{"a":0,"k":[0,0]},"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"r":{"a":0,"k":0},"o":{"a":0,"k":100}}]}]},{"ty":3,"ddd":0,"ind":28478,"hd":false,"nm":"Circle - Null","parent":77553,"ks":{"a":{"a":0,"k":[143,143]},"o":{"a":0,"k":100},"p":{"a":0,"k":[143,143]},"r":{"a":0,"k":0},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0}},"st":0,"ip":0,"op":60,"bm":0,"sr":1},{"ty":4,"ddd":0,"ind":76480,"hd":false,"nm":"Circle","parent":28478,"ks":{"a":{"a":0,"k":[0,0]},"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"r":{"a":0,"k":0},"o":{"a":0,"k":100}},"st":0,"ip":0,"op":60,"bm":0,"sr":1,"shapes":[{"ty":"gr","nm":"Group","hd":false,"np":3,"it":[{"ty":"sh","nm":"Path","hd":false,"ks":{"a":0,"k":{"c":true,"v":[[143,0],[0,143],[143,286],[286,143],[143,0],[143,0]],"i":[[0,0],[0,-78.9383],[-78.9383,0],[0,78.9383],[78.9383,0],[0,0]],"o":[[-78.9383,0],[0,78.9383],[78.9383,0],[0,-78.9383],[0,0],[0,0]]}}},{"ty":"fl","o":{"a":0,"k":100},"c":{"a":0,"k":[0.11764705882352941,0.8431372549019608,0.3764705882352941,1]},"nm":"Fill","hd":false,"r":1},{"ty":"tr","a":{"a":0,"k":[0,0]},"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"r":{"a":0,"k":0},"o":{"a":0,"k":100}}]}],"ef":[]}]},{"nm":"[FRAME] Spotify animation - Null / Frame","fr":30,"id":"ldvqx73uunwc01wfvo","layers":[{"ty":3,"ddd":0,"ind":1445,"hd":false,"nm":"Spotify animation - Null","ks":{"a":{"a":0,"k":[0,0]},"o":{"a":0,"k":100},"p":{"a":0,"k":[0,0]},"r":{"a":0,"k":0},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0}},"st":0,"ip":0,"op":60,"bm":0,"sr":1},{"ddd":0,"ty":0,"nm":"Frame","refId":"ldvqx73vej1urx44xfe","sr":1,"ks":{"a":{"a":0,"k":[0,0]},"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"r":{"a":0,"k":0},"o":{"a":0,"k":100}},"ao":0,"w":300,"h":300,"ip":0,"op":60,"st":0,"hd":false}]}]');
const layers$2 = [{ "ddd": 0, "ty": 0, "nm": "Spotify animation", "refId": "ldvqx73uunwc01wfvo", "sr": 1, "ks": { "a": { "a": 0, "k": [0, 0] }, "p": { "a": 0, "k": [0, 0] }, "s": { "a": 0, "k": [100, 100] }, "sk": { "a": 0, "k": 0 }, "sa": { "a": 0, "k": 0 }, "r": { "a": 0, "k": 0 }, "o": { "a": 0, "k": 100 } }, "ao": 0, "w": 300, "h": 300, "ip": 0, "op": 60, "st": 0, "hd": false }];
const meta = { "a": "", "d": "", "tc": "", "g": "Aninix" };
const spotifyAnimationData = {
  nm: nm$2,
  v: v$2,
  fr: fr$2,
  ip: ip$2,
  op: op$2,
  w: w$2,
  h: h$2,
  ddd: ddd$2,
  markers: markers$2,
  assets: assets$2,
  layers: layers$2,
  meta
};
function CurrentPlaying() {
  const spotifyRefAnimationData = useRef(null);
  return /* @__PURE__ */ jsx(Popover, { children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: `flex relative items-center justify-center gap-2 w-[300px] h-[300px] rounded-xl flex-col`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center absolute top-3 gap-2 left-3", children: [
          /* @__PURE__ */ jsx("div", { className: "relative h-5 w-5 overflow-hidden", children: /* @__PURE__ */ jsx(
            Lottie,
            {
              lottieRef: spotifyRefAnimationData,
              animationData: spotifyAnimationData,
              className: "absolute left-0 h-fit w-fit transform",
              autoplay: false,
              loop: false
            }
          ) }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-white font-semibold", children: "My favorite" })
        ] }),
        /* @__PURE__ */ jsx("img", { src: colorVioletCover.src, alt: "The Color Violet", className: "rounded-xl" }),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "absolute bottom-5 w-[280px] bg-yellow-500/10 backdrop-blur-md text-white px-4 py-3 rounded-xl",
            whileHover: {
              scale: 0.95
            },
            children: [
              /* @__PURE__ */ jsx("p", { className: "font-bold text-lg", children: "The Color Violet" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm", children: "Tory Lanez" })
            ]
          }
        )
      ]
    }
  ) });
}
function Popover({ children }) {
  const [showPopover, setShowPopover] = useState(false);
  return /* @__PURE__ */ jsx(motion.div, { children: /* @__PURE__ */ jsxs(
    motion.div,
    {
      className: "relative",
      onMouseOver: () => setShowPopover(true),
      onMouseLeave: () => setShowPopover(false),
      children: [
        /* @__PURE__ */ jsx(TbMusicPause, { className: "text-2xl text-neutral-700 hover:text-blue-500" }),
        /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: showPopover && /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute top-7 -left-10 z-20 min-w-[170px] rounded-xl border border-neutral-400 bg-white shadow-md",
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.8 },
            transition: { duration: 0.2 },
            children
          },
          "box"
        ) })
      ]
    }
  ) });
}
function useCurrentTime() {
  const [time, setTime] = useState(/* @__PURE__ */ new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(/* @__PURE__ */ new Date());
    }, 1e3);
    return () => clearInterval(interval);
  }, []);
  const hour = time.getHours() % 12 || 12;
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const meridiem = time.getHours() < 12 ? "AM" : "PM";
  return { time, hour, minutes, meridiem };
}
const monthNames = [
  { id: 1, name: "January" },
  { id: 2, name: "February" },
  { id: 3, name: "March" },
  { id: 4, name: "April" },
  { id: 5, name: "May" },
  { id: 6, name: "June" },
  { id: 7, name: "July" },
  { id: 8, name: "August" },
  { id: 9, name: "September" },
  { id: 10, name: "October" },
  { id: 11, name: "November" },
  { id: 12, name: "December" }
];
const getMonthById = (id) => {
  var _a2;
  var _a;
  return (_a2 = (_a = monthNames.find((month) => month.id === id)) == null ? void 0 : _a.name) != null ? _a2 : "";
};
function CurrentTime() {
  const { time, hour, minutes, meridiem } = useCurrentTime();
  const monthId = time.getMonth();
  const day = time.getDate();
  return /* @__PURE__ */ jsxs(motion$1.div, { className: "flex items-center gap-1", children: [
    /* @__PURE__ */ jsxs(motion$1.p, { className: "flex items-center text-4xl font-bold tracking-wider text-blue-500 transition hover:text-blue-600", children: [
      hour,
      ":",
      minutes
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-sm opacity-80 transition hover:opacity-100", children: [
      /* @__PURE__ */ jsx("p", { className: "lowercase", children: meridiem }),
      /* @__PURE__ */ jsxs("p", { children: [
        getMonthById(monthId),
        " ",
        day
      ] })
    ] })
  ] });
}
const v$1 = "4.4.2";
const fr$1 = 25;
const ip$1 = 0;
const op$1 = 32;
const w$1 = 280;
const h$1 = 200;
const nm$1 = "Loader_g\xC3\x83\xC2\xA9n\xC3\x83\xC2\xA9rique";
const ddd$1 = 1;
const assets$1 = [];
const layers$1 = /* @__PURE__ */ JSON.parse('[{"ddd":0,"ind":1,"ty":4,"nm":"Museau Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[137.44,69.219,0],"ix":2},"a":{"a":0,"k":[4.076,1.879,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[2.742,1.626],[-1.687,-1.068]],"o":[[-2.162,-1.283],[1.688,1.068]],"v":[[1.084,-0.346],[-2.139,0.561]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.008000000785,0.004000000393,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[4.076,1.879],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":4,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":125,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Collier Blanc Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[134.367,162.9,0],"ix":2},"a":{"a":0,"k":[12,82,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-4.832,11.694],[0.244,1.662],[7.698,2.053],[-1.641,-10.997],[-1.149,-18.546],[0.81,-2.054],[0,0],[0,0],[0.164,4.924]],"o":[[0.641,-1.552],[-0.893,-6.097],[-9.848,-2.626],[1.641,10.997],[1.149,18.547],[-0.477,1.21],[0,0],[0,0],[-0.154,-4.616]],"v":[[10.421,-10.549],[11.113,-15.439],[-0.361,-37.775],[-9.717,-12.991],[-4.135,10.808],[-3.189,38.32],[-4.956,40.352],[8.84,40.401],[6.04,33.459]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.851000019148,0.870999983245,0.929000016755,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[11.608,40.651],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":4,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":125,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Ventre Blanc Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[153.803,152.168,0],"ix":2},"a":{"a":0,"k":[4.269,9.999,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[1.608,3.654],[0,0],[0,0],[-0.154,-0.467],[-1.966,-3.166],[0.37,-0.017],[0.408,-1.795],[-1.9,-0.585]],"o":[[0,0],[-0.542,-1.325],[0,0],[0.104,-0.48],[0.799,2.414],[0.195,0.314],[-1.136,0.052],[-0.408,1.793],[0,0]],"v":[[-3.946,9.749],[-2.119,4.342],[-4.019,2.515],[-1.48,-9.227],[-0.553,-9.282],[3.824,0.746],[3.452,1.477],[0,3.685],[2.032,9.741]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.728999956916,0.757000014361,0.847000002394,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[4.269,9.999],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":4,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":125,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Patte Droite Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[125.27,157.847,0],"ix":2},"a":{"a":0,"k":[6.144,4.34,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,1.424],[3.255,0],[0,-2.53],[-1.067,-0.829]],"o":[[1.31,-0.84],[0,-2.53],[-3.255,0],[0,1.265],[0,0]],"v":[[3.748,4.027],[5.894,0.492],[0,-4.09],[-5.894,0.492],[-3.912,4.09]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.2,0.226999993418,0.305999995213,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[6.144,4.34],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":4,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":125,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Corps Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[140.308,112.467,0],"ix":2},"a":{"a":0,"k":[22.961,52.658,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[3.957,-0.631],[0,0],[0,12.491],[0,0],[-12.491,0],[0,-12.491],[0,0],[0,-4.516]],"o":[[0,0],[-12.491,0],[0,0],[0,-12.491],[12.491,0],[0,0],[0,10.794],[0,10]],"v":[[0.001,49.471],[0.001,49.471],[-22.711,26.76],[-22.711,-29.697],[0.001,-52.408],[22.711,-29.697],[22.711,34.865],[12.952,42.408]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.2,0.226999993418,0.305999995213,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[22.961,52.658],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":4,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":125,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Arri\xC3\x83\xC2\xA8re Train Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[145.806,123.604,0],"ix":2},"a":{"a":0,"k":[34.668,38.551,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.937,2.437],[0.079,8.745],[18.854,-0.274],[0,-26.848],[-2.691,-6.976],[-1.943,0],[0,0]],"o":[[2.751,-7.144],[-0.243,-26.829],[-18.822,0.274],[0,8.52],[0.935,2.423],[0,0],[1.953,0]],"v":[[30.133,34.363],[34.339,10.247],[-0.396,-38.027],[-34.417,10.891],[-30.195,34.398],[-25.51,38.301],[25.434,38.301]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.156999999402,0.180000005984,0.238999998803,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 2","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"fl","c":{"a":0,"k":[0.2,0.226999993418,0.305999995213,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[34.667,38.551],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":5,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":125,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"Oreillle Droite Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":4,"s":[0],"e":[-16]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":7,"s":[-16],"e":[0]},{"t":11}],"ix":10},"p":{"a":0,"k":[132.432,63.714,0],"ix":2},"a":{"a":0,"k":[7.207,11.228,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,-3.053],[0,0]],"o":[[0,0],[-1.442,-2.69],[0,0],[0,0]],"v":[[6.957,-2.142],[1.453,-8.288],[-4.07,-6.9],[-6.957,10.978]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.128999986836,0.141000007181,0.195999998205,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7.207,11.228],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":4,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":125,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"Oreille Gauche Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":4,"s":[0],"e":[16]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":7,"s":[16],"e":[0]},{"t":11}],"ix":10},"p":{"a":0,"k":[156.589,69.788,0],"ix":2},"a":{"a":0,"k":[7.856,17.275,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[1.417,22.687],[1.47,-2.676],[0,0],[0,0]],"o":[[-0.19,-3.047],[0,0],[0,0],[0,0]],"v":[[6.19,-12.905],[0.681,-14.349],[-7.607,-4.578],[5.423,17.025]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.128999986836,0.141000007181,0.195999998205,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7.856,17.275],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":4,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":125,"st":0,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"Queue","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[164.778,130.315,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[86.141,81.208,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":0.751},"o":{"x":0.333,"y":0},"n":"0p667_0p751_0p333_0","t":0,"s":[{"i":[[0,0],[-7.536,17.971],[-11.024,9.843],[10.236,-20.079]],"o":[[0,0],[5.118,-12.205],[9.762,-8.716],[-12.555,24.628]],"v":[[7.638,18.504],[27.323,11.811],[23.78,-35.039],[46.614,-14.961]],"c":false}],"e":[{"i":[[0,0],[-7.536,17.971],[-1.181,21.26],[-14.567,-4.331]],"o":[[0,0],[5.118,-12.205],[0.726,-13.067],[26.497,7.878]],"v":[[7.638,18.504],[28.504,14.961],[25.354,-27.165],[44.252,-43.307]],"c":false}]},{"i":{"x":0.667,"y":0.751},"o":{"x":0.282,"y":0.238},"n":"0p667_0p751_0p282_0p238","t":2.391,"s":[{"i":[[0,0],[-7.536,17.971],[-1.181,21.26],[-14.567,-4.331]],"o":[[0,0],[5.118,-12.205],[0.726,-13.067],[26.497,7.878]],"v":[[7.638,18.504],[28.504,14.961],[25.354,-27.165],[44.252,-43.307]],"c":false}],"e":[{"i":[[0,0],[-11.102,2.362],[3.386,16.221],[-11.102,3.78]],"o":[[0,0],[9.764,-5.118],[-6.457,-15.669],[8.283,-3.29]],"v":[[7.638,18.504],[27.008,23.622],[38.11,-0.079],[36.85,-43.543]],"c":false}]},{"i":{"x":0.667,"y":0.751},"o":{"x":0.23,"y":0.194},"n":"0p667_0p751_0p23_0p194","t":4,"s":[{"i":[[0,0],[-11.102,2.362],[3.386,16.221],[-11.102,3.78]],"o":[[0,0],[9.764,-5.118],[-6.457,-15.669],[8.283,-3.29]],"v":[[7.638,18.504],[27.008,23.622],[38.11,-0.079],[36.85,-43.543]],"c":false}],"e":[{"i":[[0,0],[-13.832,0.656],[-7.848,11.207],[17.533,8.031]],"o":[[0,0],[5.853,-0.262],[7.9,-11.234],[-0.825,-8.874]],"v":[[7.638,18.504],[28.556,24.672],[48.556,8.871],[40.105,-29.291]],"c":false}]},{"i":{"x":0.667,"y":0.751},"o":{"x":0.23,"y":0.194},"n":"0p667_0p751_0p23_0p194","t":5.304,"s":[{"i":[[0,0],[-13.832,0.656],[-7.848,11.207],[17.533,8.031]],"o":[[0,0],[5.853,-0.262],[7.9,-11.234],[-0.825,-8.874]],"v":[[7.638,18.504],[28.556,24.672],[48.556,8.871],[40.105,-29.291]],"c":false}],"e":[{"i":[[0,0],[-13.832,0.656],[-7.848,11.207],[17.533,8.031]],"o":[[0,0],[5.853,-0.262],[7.9,-11.234],[-0.825,-8.874]],"v":[[7.638,18.504],[28.556,24.672],[48.556,8.871],[40.105,-29.291]],"c":false}]},{"i":{"x":0.667,"y":0.751},"o":{"x":0.23,"y":0.194},"n":"0p667_0p751_0p23_0p194","t":6.608,"s":[{"i":[[0,0],[-13.832,0.656],[-7.848,11.207],[17.533,8.031]],"o":[[0,0],[5.853,-0.262],[7.9,-11.234],[-0.825,-8.874]],"v":[[7.638,18.504],[28.556,24.672],[48.556,8.871],[40.105,-29.291]],"c":false}],"e":[{"i":[[0,0],[-19.291,-2.756],[-6.068,0.735],[14.961,15.748]],"o":[[0,0],[14.856,2.122],[12.992,-1.575],[-19.039,-20.041]],"v":[[7.638,18.504],[31.654,26.772],[61.181,26.772],[69.055,-11.417]],"c":false}]},{"i":{"x":0.667,"y":0.748},"o":{"x":0.282,"y":0.238},"n":"0p667_0p748_0p282_0p238","t":7.913,"s":[{"i":[[0,0],[-19.291,-2.756],[-6.068,0.735],[14.961,15.748]],"o":[[0,0],[14.856,2.122],[12.992,-1.575],[-19.039,-20.041]],"v":[[7.638,18.504],[31.654,26.772],[61.181,26.772],[69.055,-11.417]],"c":false}],"e":[{"i":[[0,0],[-9.843,-13.386],[-6.068,0.735],[14.961,15.748]],"o":[[0,0],[8.676,11.8],[12.992,-1.575],[-19.039,-20.041]],"v":[[7.638,18.504],[28.898,35.827],[61.181,46.063],[76.535,15.354]],"c":false}]},{"i":{"x":0.667,"y":0.745},"o":{"x":0.299,"y":0.252},"n":"0p667_0p745_0p299_0p252","t":9,"s":[{"i":[[0,0],[-9.843,-13.386],[-6.068,0.735],[14.961,15.748]],"o":[[0,0],[8.676,11.8],[12.992,-1.575],[-19.039,-20.041]],"v":[[7.638,18.504],[28.898,35.827],[61.181,46.063],[76.535,15.354]],"c":false}],"e":[{"i":[[0,0],[-13.78,-11.024],[-16.535,-2.756],[3.543,16.142]],"o":[[0,0],[11.437,9.15],[12.909,2.152],[-5.927,-27]],"v":[[7.638,18.504],[31.654,31.102],[65.118,51.969],[88.346,37.795]],"c":false}]},{"i":{"x":0.667,"y":0.745},"o":{"x":0.23,"y":0.194},"n":"0p667_0p745_0p23_0p194","t":10.479,"s":[{"i":[[0,0],[-13.78,-11.024],[-16.535,-2.756],[3.543,16.142]],"o":[[0,0],[11.437,9.15],[12.909,2.152],[-5.927,-27]],"v":[[7.638,18.504],[31.654,31.102],[65.118,51.969],[88.346,37.795]],"c":false}],"e":[{"i":[[0,0],[-15.354,-9.711],[-13.85,-6.658],[-0.394,15.354]],"o":[[0,0],[12.184,7.846],[10.837,5.24],[0.79,-25.902]],"v":[[7.638,18.504],[29.816,21.522],[60.262,65.486],[86.509,58.924]],"c":false}]},{"i":{"x":0.667,"y":0.745},"o":{"x":0.282,"y":0.238},"n":"0p667_0p745_0p282_0p238","t":11.782,"s":[{"i":[[0,0],[-15.354,-9.711],[-13.85,-6.658],[-0.394,15.354]],"o":[[0,0],[12.184,7.846],[10.837,5.24],[0.79,-25.902]],"v":[[7.638,18.504],[29.816,21.522],[60.262,65.486],[86.509,58.924]],"c":false}],"e":[{"i":[[0,0],[-18.504,-7.087],[-8.478,-14.462],[-8.268,13.78]],"o":[[0,0],[13.678,5.238],[6.693,11.417],[14.222,-23.704]],"v":[[7.638,18.504],[30.866,20.079],[52.913,53.543],[85.197,62.205]],"c":false}]},{"i":{"x":0.667,"y":0.745},"o":{"x":0.23,"y":0.194},"n":"0p667_0p745_0p23_0p194","t":13,"s":[{"i":[[0,0],[-18.504,-7.087],[-8.478,-14.462],[-8.268,13.78]],"o":[[0,0],[13.678,5.238],[6.693,11.417],[14.222,-23.704]],"v":[[7.638,18.504],[30.866,20.079],[52.913,53.543],[85.197,62.205]],"c":false}],"e":[{"i":[[0,0],[-19.716,-1.972],[-8.478,-14.462],[-14.567,-9.449]],"o":[[0,0],[11.811,1.181],[6.693,11.417],[19.26,12.493]],"v":[[7.638,18.504],[31.26,15.748],[58.425,36.22],[75.354,80.315]],"c":false}]},{"i":{"x":0.667,"y":0.745},"o":{"x":0.23,"y":0.194},"n":"0p667_0p745_0p23_0p194","t":14.304,"s":[{"i":[[0,0],[-19.716,-1.972],[-8.478,-14.462],[-14.567,-9.449]],"o":[[0,0],[11.811,1.181],[6.693,11.417],[19.26,12.493]],"v":[[7.638,18.504],[31.26,15.748],[58.425,36.22],[75.354,80.315]],"c":false}],"e":[{"i":[[0,0],[-18.038,8.199],[-8.478,-14.462],[3.162,-17.073]],"o":[[0,0],[12.992,-5.906],[6.693,11.417],[-3.937,21.26]],"v":[[7.638,18.504],[24.961,8.661],[64.724,21.26],[65.906,65.748]],"c":false}]},{"i":{"x":0.667,"y":0.745},"o":{"x":0.23,"y":0.194},"n":"0p667_0p745_0p23_0p194","t":15.608,"s":[{"i":[[0,0],[-18.038,8.199],[-8.478,-14.462],[3.162,-17.073]],"o":[[0,0],[12.992,-5.906],[6.693,11.417],[-3.937,21.26]],"v":[[7.638,18.504],[24.961,8.661],[64.724,21.26],[65.906,65.748]],"c":false}],"e":[{"i":[[0,0],[-12.023,13.541],[-12.31,-4.971],[9.449,-16.929]],"o":[[0,0],[7.874,-7.283],[19.882,11.024],[-10.537,18.88]],"v":[[7.638,18.504],[25.551,11.417],[57.047,6.299],[68.268,58.268]],"c":false}]},{"i":{"x":0.667,"y":0.745},"o":{"x":0.23,"y":0.194},"n":"0p667_0p745_0p23_0p194","t":16.913,"s":[{"i":[[0,0],[-12.023,13.541],[-12.31,-4.971],[9.449,-16.929]],"o":[[0,0],[7.874,-7.283],[19.882,11.024],[-10.537,18.88]],"v":[[7.638,18.504],[25.551,11.417],[57.047,6.299],[68.268,58.268]],"c":false}],"e":[{"i":[[0,0],[-6.008,18.882],[-16.143,4.52],[3.162,-17.073]],"o":[[0,0],[2.756,-8.661],[9.843,-2.756],[-3.937,21.26]],"v":[[7.638,18.504],[26.142,7.087],[50.157,-12.598],[86.378,8.268]],"c":false}]},{"i":{"x":0.667,"y":0.745},"o":{"x":0.23,"y":0.194},"n":"0p667_0p745_0p23_0p194","t":18.217,"s":[{"i":[[0,0],[-6.008,18.882],[-16.143,4.52],[3.162,-17.073]],"o":[[0,0],[2.756,-8.661],[9.843,-2.756],[-3.937,21.26]],"v":[[7.638,18.504],[26.142,7.087],[50.157,-12.598],[86.378,8.268]],"c":false}],"e":[{"i":[[0,0],[-1.968,14.567],[-12.493,11.178],[10.236,-22.441]],"o":[[0,0],[1.213,-8.974],[7.48,-6.693],[-8.973,19.671]],"v":[[7.638,18.504],[26.142,7.087],[27.323,-32.677],[52.52,-9.055]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.299,"y":0.252},"n":"0p667_1_0p299_0p252","t":19.521,"s":[{"i":[[0,0],[-1.968,14.567],[-12.493,11.178],[10.236,-22.441]],"o":[[0,0],[1.213,-8.974],[7.48,-6.693],[-8.973,19.671]],"v":[[7.638,18.504],[26.142,7.087],[27.323,-32.677],[52.52,-9.055]],"c":false}],"e":[{"i":[[0,0],[-7.536,17.971],[-11.024,9.843],[10.236,-20.079]],"o":[[0,0],[5.118,-12.205],[9.762,-8.716],[-12.555,24.628]],"v":[[7.638,18.504],[27.323,11.811],[23.78,-35.039],[46.614,-14.961]],"c":false}]},{"t":27.6083984375}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.20000001496,0.227450995352,0.305882352941,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":13,"ix":5},"lc":2,"lj":1,"ml":4,"ml2":{"a":0,"k":4,"ix":8},"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":125,"st":0,"bm":0},{"ddd":1,"ind":10,"ty":4,"nm":"Queue Ombre","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"rx":{"a":0,"k":58,"ix":8},"ry":{"a":0,"k":0,"ix":9},"rz":{"a":0,"k":0,"ix":10},"or":{"a":0,"k":[0,0,0],"ix":7},"p":{"a":0,"k":[166.547,152.16,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[68.913,64.966,80],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":0.751},"o":{"x":0.333,"y":0},"n":"0p667_0p751_0p333_0","t":0,"s":[{"i":[[0,0],[-7.536,17.971],[-11.024,9.843],[10.236,-20.079]],"o":[[0,0],[5.118,-12.205],[9.762,-8.716],[-12.555,24.628]],"v":[[7.638,18.504],[27.323,11.811],[23.78,-35.039],[46.614,-14.961]],"c":false}],"e":[{"i":[[0,0],[-7.536,17.971],[-1.181,21.26],[-14.567,-4.331]],"o":[[0,0],[5.118,-12.205],[0.726,-13.067],[26.497,7.878]],"v":[[7.638,18.504],[28.504,14.961],[25.354,-27.165],[44.252,-43.307]],"c":false}]},{"i":{"x":0.667,"y":0.751},"o":{"x":0.282,"y":0.238},"n":"0p667_0p751_0p282_0p238","t":2.391,"s":[{"i":[[0,0],[-7.536,17.971],[-1.181,21.26],[-14.567,-4.331]],"o":[[0,0],[5.118,-12.205],[0.726,-13.067],[26.497,7.878]],"v":[[7.638,18.504],[28.504,14.961],[25.354,-27.165],[44.252,-43.307]],"c":false}],"e":[{"i":[[0,0],[-11.102,2.362],[3.386,16.221],[-11.102,3.78]],"o":[[0,0],[9.764,-5.118],[-6.457,-15.669],[8.283,-3.29]],"v":[[7.638,18.504],[27.008,23.622],[38.11,-0.079],[36.85,-43.543]],"c":false}]},{"i":{"x":0.667,"y":0.751},"o":{"x":0.23,"y":0.194},"n":"0p667_0p751_0p23_0p194","t":4,"s":[{"i":[[0,0],[-11.102,2.362],[3.386,16.221],[-11.102,3.78]],"o":[[0,0],[9.764,-5.118],[-6.457,-15.669],[8.283,-3.29]],"v":[[7.638,18.504],[27.008,23.622],[38.11,-0.079],[36.85,-43.543]],"c":false}],"e":[{"i":[[0,0],[-13.832,0.656],[-7.848,11.207],[17.533,8.031]],"o":[[0,0],[5.853,-0.262],[7.9,-11.234],[-0.825,-8.874]],"v":[[7.638,18.504],[28.556,24.672],[48.556,8.871],[40.105,-29.291]],"c":false}]},{"i":{"x":0.667,"y":0.751},"o":{"x":0.23,"y":0.194},"n":"0p667_0p751_0p23_0p194","t":5.304,"s":[{"i":[[0,0],[-13.832,0.656],[-7.848,11.207],[17.533,8.031]],"o":[[0,0],[5.853,-0.262],[7.9,-11.234],[-0.825,-8.874]],"v":[[7.638,18.504],[28.556,24.672],[48.556,8.871],[40.105,-29.291]],"c":false}],"e":[{"i":[[0,0],[-13.832,0.656],[-7.848,11.207],[17.533,8.031]],"o":[[0,0],[5.853,-0.262],[7.9,-11.234],[-0.825,-8.874]],"v":[[7.638,18.504],[28.556,24.672],[48.556,8.871],[40.105,-29.291]],"c":false}]},{"i":{"x":0.667,"y":0.751},"o":{"x":0.23,"y":0.194},"n":"0p667_0p751_0p23_0p194","t":6.608,"s":[{"i":[[0,0],[-13.832,0.656],[-7.848,11.207],[17.533,8.031]],"o":[[0,0],[5.853,-0.262],[7.9,-11.234],[-0.825,-8.874]],"v":[[7.638,18.504],[28.556,24.672],[48.556,8.871],[40.105,-29.291]],"c":false}],"e":[{"i":[[0,0],[-19.291,-2.756],[-6.068,0.735],[14.961,15.748]],"o":[[0,0],[14.856,2.122],[12.992,-1.575],[-19.039,-20.041]],"v":[[7.638,18.504],[31.654,26.772],[61.181,26.772],[69.055,-11.417]],"c":false}]},{"i":{"x":0.667,"y":0.748},"o":{"x":0.282,"y":0.238},"n":"0p667_0p748_0p282_0p238","t":7.913,"s":[{"i":[[0,0],[-19.291,-2.756],[-6.068,0.735],[14.961,15.748]],"o":[[0,0],[14.856,2.122],[12.992,-1.575],[-19.039,-20.041]],"v":[[7.638,18.504],[31.654,26.772],[61.181,26.772],[69.055,-11.417]],"c":false}],"e":[{"i":[[0,0],[-9.843,-13.386],[-6.068,0.735],[14.961,15.748]],"o":[[0,0],[8.676,11.8],[12.992,-1.575],[-19.039,-20.041]],"v":[[7.638,18.504],[28.898,35.827],[61.181,46.063],[76.535,15.354]],"c":false}]},{"i":{"x":0.667,"y":0.745},"o":{"x":0.299,"y":0.252},"n":"0p667_0p745_0p299_0p252","t":9,"s":[{"i":[[0,0],[-9.843,-13.386],[-6.068,0.735],[14.961,15.748]],"o":[[0,0],[8.676,11.8],[12.992,-1.575],[-19.039,-20.041]],"v":[[7.638,18.504],[28.898,35.827],[61.181,46.063],[76.535,15.354]],"c":false}],"e":[{"i":[[0,0],[-13.78,-11.024],[-16.535,-2.756],[3.543,16.142]],"o":[[0,0],[11.437,9.15],[12.909,2.152],[-5.927,-27]],"v":[[7.638,18.504],[31.654,31.102],[65.118,51.969],[88.346,37.795]],"c":false}]},{"i":{"x":0.667,"y":0.745},"o":{"x":0.23,"y":0.194},"n":"0p667_0p745_0p23_0p194","t":10.479,"s":[{"i":[[0,0],[-13.78,-11.024],[-16.535,-2.756],[3.543,16.142]],"o":[[0,0],[11.437,9.15],[12.909,2.152],[-5.927,-27]],"v":[[7.638,18.504],[31.654,31.102],[65.118,51.969],[88.346,37.795]],"c":false}],"e":[{"i":[[0,0],[-15.354,-9.711],[-13.85,-6.658],[-0.394,15.354]],"o":[[0,0],[12.184,7.846],[10.837,5.24],[0.79,-25.902]],"v":[[7.638,18.504],[29.816,21.522],[60.262,65.486],[86.509,58.924]],"c":false}]},{"i":{"x":0.667,"y":0.745},"o":{"x":0.282,"y":0.238},"n":"0p667_0p745_0p282_0p238","t":11.782,"s":[{"i":[[0,0],[-15.354,-9.711],[-13.85,-6.658],[-0.394,15.354]],"o":[[0,0],[12.184,7.846],[10.837,5.24],[0.79,-25.902]],"v":[[7.638,18.504],[29.816,21.522],[60.262,65.486],[86.509,58.924]],"c":false}],"e":[{"i":[[0,0],[-18.504,-7.087],[-8.478,-14.462],[-8.268,13.78]],"o":[[0,0],[13.678,5.238],[6.693,11.417],[14.222,-23.704]],"v":[[7.638,18.504],[30.866,20.079],[52.913,53.543],[85.197,62.205]],"c":false}]},{"i":{"x":0.667,"y":0.745},"o":{"x":0.23,"y":0.194},"n":"0p667_0p745_0p23_0p194","t":13,"s":[{"i":[[0,0],[-18.504,-7.087],[-8.478,-14.462],[-8.268,13.78]],"o":[[0,0],[13.678,5.238],[6.693,11.417],[14.222,-23.704]],"v":[[7.638,18.504],[30.866,20.079],[52.913,53.543],[85.197,62.205]],"c":false}],"e":[{"i":[[0,0],[-19.716,-1.972],[-8.478,-14.462],[-14.567,-9.449]],"o":[[0,0],[11.811,1.181],[6.693,11.417],[19.26,12.493]],"v":[[7.638,18.504],[31.26,15.748],[58.425,36.22],[75.354,80.315]],"c":false}]},{"i":{"x":0.667,"y":0.745},"o":{"x":0.23,"y":0.194},"n":"0p667_0p745_0p23_0p194","t":14.304,"s":[{"i":[[0,0],[-19.716,-1.972],[-8.478,-14.462],[-14.567,-9.449]],"o":[[0,0],[11.811,1.181],[6.693,11.417],[19.26,12.493]],"v":[[7.638,18.504],[31.26,15.748],[58.425,36.22],[75.354,80.315]],"c":false}],"e":[{"i":[[0,0],[-18.038,8.199],[-8.478,-14.462],[3.162,-17.073]],"o":[[0,0],[12.992,-5.906],[6.693,11.417],[-3.937,21.26]],"v":[[7.638,18.504],[24.961,8.661],[64.724,21.26],[65.906,65.748]],"c":false}]},{"i":{"x":0.667,"y":0.745},"o":{"x":0.23,"y":0.194},"n":"0p667_0p745_0p23_0p194","t":15.608,"s":[{"i":[[0,0],[-18.038,8.199],[-8.478,-14.462],[3.162,-17.073]],"o":[[0,0],[12.992,-5.906],[6.693,11.417],[-3.937,21.26]],"v":[[7.638,18.504],[24.961,8.661],[64.724,21.26],[65.906,65.748]],"c":false}],"e":[{"i":[[0,0],[-12.023,13.541],[-12.31,-4.971],[9.449,-16.929]],"o":[[0,0],[7.874,-7.283],[19.882,11.024],[-10.537,18.88]],"v":[[7.638,18.504],[25.551,11.417],[57.047,6.299],[68.268,58.268]],"c":false}]},{"i":{"x":0.667,"y":0.745},"o":{"x":0.23,"y":0.194},"n":"0p667_0p745_0p23_0p194","t":16.913,"s":[{"i":[[0,0],[-12.023,13.541],[-12.31,-4.971],[9.449,-16.929]],"o":[[0,0],[7.874,-7.283],[19.882,11.024],[-10.537,18.88]],"v":[[7.638,18.504],[25.551,11.417],[57.047,6.299],[68.268,58.268]],"c":false}],"e":[{"i":[[0,0],[-6.008,18.882],[-16.143,4.52],[3.162,-17.073]],"o":[[0,0],[2.756,-8.661],[9.843,-2.756],[-3.937,21.26]],"v":[[7.638,18.504],[26.142,7.087],[50.157,-12.598],[86.378,8.268]],"c":false}]},{"i":{"x":0.667,"y":0.745},"o":{"x":0.23,"y":0.194},"n":"0p667_0p745_0p23_0p194","t":18.217,"s":[{"i":[[0,0],[-6.008,18.882],[-16.143,4.52],[3.162,-17.073]],"o":[[0,0],[2.756,-8.661],[9.843,-2.756],[-3.937,21.26]],"v":[[7.638,18.504],[26.142,7.087],[50.157,-12.598],[86.378,8.268]],"c":false}],"e":[{"i":[[0,0],[-1.968,14.567],[-12.493,11.178],[10.236,-22.441]],"o":[[0,0],[1.213,-8.974],[7.48,-6.693],[-8.973,19.671]],"v":[[7.638,18.504],[26.142,7.087],[27.323,-32.677],[52.52,-9.055]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.299,"y":0.252},"n":"0p667_1_0p299_0p252","t":19.521,"s":[{"i":[[0,0],[-1.968,14.567],[-12.493,11.178],[10.236,-22.441]],"o":[[0,0],[1.213,-8.974],[7.48,-6.693],[-8.973,19.671]],"v":[[7.638,18.504],[26.142,7.087],[27.323,-32.677],[52.52,-9.055]],"c":false}],"e":[{"i":[[0,0],[-7.536,17.971],[-11.024,9.843],[10.236,-20.079]],"o":[[0,0],[5.118,-12.205],[9.762,-8.716],[-12.555,24.628]],"v":[[7.638,18.504],[27.323,11.811],[23.78,-35.039],[46.614,-14.961]],"c":false}]},{"t":27.6083984375}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.6,0.6,0.760784313725,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":15,"ix":5},"lc":2,"lj":1,"ml":4,"ml2":{"a":0,"k":4,"ix":8},"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":125,"st":0,"bm":0},{"ddd":0,"ind":11,"ty":4,"nm":"Ombre","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[142.54,156.967,0],"ix":2},"a":{"a":0,"k":[-52.446,2.907,0],"ix":1},"s":{"a":0,"k":[106.225,128.888,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[75.895,8.177],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.599679146561,0.599679146561,0.75925245098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-52.446,2.907],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":125,"st":0,"bm":0}]');
const markers$1 = [];
const catAnimationData = {
  v: v$1,
  fr: fr$1,
  ip: ip$1,
  op: op$1,
  w: w$1,
  h: h$1,
  nm: nm$1,
  ddd: ddd$1,
  assets: assets$1,
  layers: layers$1,
  markers: markers$1
};
function Logo() {
  const logoRef = useRef(null);
  return /* @__PURE__ */ jsxs(motion$1.div, { className: "group flex cursor-default items-center gap-2", children: [
    /* @__PURE__ */ jsx("div", { className: "relative h-20 w-20 overflow-hidden", children: /* @__PURE__ */ jsx(
      Lottie,
      {
        lottieRef: logoRef,
        animationData: catAnimationData,
        className: "absolute left-0 h-fit w-fit scale-150 transform",
        autoplay: true,
        loop: true
      }
    ) }),
    /* @__PURE__ */ jsxs(motion$1.p, { className: "hidden text-2xl font-bold tracking-wider text-blue-500 transition-all duration-300 ease-in-out group-hover:tracking-widest sm:flex", children: [
      "Hello",
      /* @__PURE__ */ jsx("span", { className: "w-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:w-[7.5rem]", children: "ooooooo" }),
      "!"
    ] })
  ] });
}
function Header$1() {
  return /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsxs("header", { className: "mx-auto flex items-center justify-between sm:px-[20px] lg:px-0", children: [
    /* @__PURE__ */ jsx(Logo, {}),
    /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-6", children: [
      /* @__PURE__ */ jsx(CurrentPlaying, {}),
      /* @__PURE__ */ jsx(SocialLinks, {}),
      /* @__PURE__ */ jsx(CurrentTime, {})
    ] })
  ] }) });
}
const technologies$1 = [
  "React",
  "Prisma",
  "TypeScript",
  "Node.js",
  "GraphQL",
  "Apollo",
  "Postgres",
  "HTML",
  "CSS",
  "JavaScript",
  "Express.js",
  "MongoDB",
  "Framer Motion",
  "Material-UI",
  "Chakra UI",
  "Tailwind CSS",
  "Jest",
  "Cypress",
  "React Testing Library",
  "Storybook",
  "Next.js",
  "Gatsby",
  "Nest.js",
  "Docker",
  "PostCSS",
  "Sass",
  "Vercel",
  "Styled Components"
];
const MarqueeAnimation = () => {
  return /* @__PURE__ */ jsx("div", { className: "absolute top-20 bottom-0 overflow-hidden select-none sm:w-full h-full w-full lg:w-screen", children: /* @__PURE__ */ jsxs(
    "svg",
    {
      className: "scale-150 rotate-45 sm:scale-100 md:scale-110 lg:scale-125 sm:rotate-0 md:pl-[100px]",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 2530.7 740.4",
      children: [
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("mask", { id: "marqueeMask", children: /* @__PURE__ */ jsx("rect", { x: "0", y: "0", width: "2530.7", height: "740.4", fill: "white" }) }) }),
        /* @__PURE__ */ jsx("g", { mask: "url(#marqueeMask)", children: /* @__PURE__ */ jsx(
          motion$1.text,
          {
            className: "text-5xl font-semibold opacity-20 sm:text-4xl md:text-3xl lg:text-2xl xl:text-xl",
            transition: { repeat: Infinity, duration: 10, ease: "linear" },
            children: /* @__PURE__ */ jsx("textPath", { fill: "currentColor", xlinkHref: "#start", startOffset: "0", children: technologies$1.join(" - ") })
          }
        ) }),
        /* @__PURE__ */ jsx(
          "path",
          {
            id: "start",
            stroke: "currentColor",
            strokeWidth: "0",
            fill: "none",
            d: "M0.29 193.68 C244.36 193.68 298.61 497.83 539.27 489.34 704.88 464.85 736.35 221.77 1038.78 221.77 1282.85 221.77 1347.1 542.91 1589.76 516.62 1780.25 496.03 1833.21 282.54 2003.81 253.25 2246.97 208.68 2312.12 574.4 2554.78 548.11"
          }
        )
      ]
    }
  ) });
};
const useUniqueIds = (count) => {
  try {
    return Array.from({ length: count }, () => useId());
  } catch (error) {
    console.error(error);
    return [];
  }
};
const Expressjs = (props2) => /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", width: "1em", height: "1em", ...props2, children: /* @__PURE__ */ jsx("path", { d: "M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z" }) });
const Git = (props2) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "xMidYMid",
    viewBox: "0 0 256 256",
    width: "1em",
    height: "1em",
    ...props2,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M251.17 116.6 139.4 4.82a16.49 16.49 0 0 0-23.31 0l-23.21 23.2 29.44 29.45a19.57 19.57 0 0 1 24.8 24.96l28.37 28.38a19.61 19.61 0 1 1-11.75 11.06L137.28 95.4v69.64a19.62 19.62 0 1 1-16.13-.57V94.2a19.61 19.61 0 0 1-10.65-25.73L81.46 39.44 4.83 116.08a16.49 16.49 0 0 0 0 23.32L116.6 251.17a16.49 16.49 0 0 0 23.32 0l111.25-111.25a16.5 16.5 0 0 0 0-23.33",
        fill: "#DE4C36"
      }
    )
  }
);
const JavaScript = (props2) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 1052 1052",
    ...props2,
    children: [
      /* @__PURE__ */ jsx("path", { fill: "#f0db4f", d: "M0 0h1052v1052H0z" }),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z",
          fill: "#323330"
        }
      )
    ]
  }
);
const Jest = (props2) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "xMidYMid",
    viewBox: "0 0 256 283",
    width: "1em",
    height: "1em",
    ...props2,
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M240 139a26 26 0 0 0-29-26L247 6H93l36 107a26 26 0 0 0-28 26c0 12 8 22 19 25a115 115 0 0 1-58 49c-16-8-23-27-17-43l3-5a26 26 0 1 0-21-4c-7 14-16 30-19 48-4 21 0 44 18 57 44 30 91-18 140-31 18-4 38-3 54-13 12-6 20-18 22-31 2-12-1-25-9-35 4-5 7-11 7-17",
          fill: "#99425B"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M236 190c-2 11-9 21-19 27-10 5-21 7-33 9l-19 3c-17 4-34 12-50 20-32 16-59 30-85 12-19-13-18-38-16-51 2-12 8-24 13-35l3-5 8 2c-5 18 3 37 21 47l3 1 2-1c15-5 28-13 39-24 8-7 14-15 20-24a33 33 0 0 0 37-28h21a33 33 0 0 0 51 23c4 7 5 16 4 24ZM42 119a20 20 0 1 1 0 40 20 20 0 0 1 0-40Zm66 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Zm83-24c-5 4-8 10-9 15h-23c-1-6-5-11-10-15l21-42 21 42ZM102 13h136l-32 94-4 1-32-64-32 64-4-1-32-94Zm131 126a20 20 0 0 1-20 20 20 20 0 1 1 20-20Zm13 0c0-16-12-29-27-32L256 0H84l37 107a33 33 0 0 0-11 60 110 110 0 0 1-47 39c-12-8-17-21-12-33l1-1 1-2a33 33 0 1 0-34-8l-4 8c-5 11-11 24-14 38-4 28 3 51 22 63 11 8 22 11 34 11 21 0 43-11 64-21 15-8 31-16 47-19l18-4c13-1 26-3 37-10a51 51 0 0 0 18-72c3-5 5-11 5-17Z",
          fill: "#FFF"
        }
      )
    ]
  }
);
const Motion = (props2) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1103 386",
    width: "1em",
    height: "1em",
    ...props2,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fill: "#0F1115",
        d: "M416.473 0 198.54 385.66H0L170.17 84.522C196.549 37.842 262.377 0 317.203 0Zm486.875 96.415c0-53.249 44.444-96.415 99.27-96.415 54.826 0 99.27 43.166 99.27 96.415 0 53.248-44.444 96.415-99.27 96.415-54.826 0-99.27-43.167-99.27-96.415ZM453.699 0h198.54L434.306 385.66h-198.54Zm234.492 0h198.542L716.56 301.138c-26.378 46.68-92.207 84.522-147.032 84.522h-99.27Z"
      }
    )
  }
);
const NestJS = (props2) => /* @__PURE__ */ jsx(
  "svg",
  {
    viewBox: "0 0 264.6 255.6",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    ...props2,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M153.3 4.2c-1.8 0-3.5.4-5 1 3.3 2.1 5.1 5 6 8.3 0 .5.2.8.3 1.3l.1 1.1c.3 5.7-1.5 6.4-2.7 9.8-1.9 4.3-1.4 9 .9 12.7.2.5.4 1 .8 1.4-2.5-16.3 11.1-18.8 13.7-23.9.2-4.4-3.5-7.4-6.4-9.5a14.3 14.3 0 0 0-7.7-2.2zM174 8c-.3 1.5 0 1.1-.1 1.9l-.2 1.7-.4 1.5-.5 1.6-.8 1.5-.5.7-.4.6c-.3.5-.6 1-1 1.3-.3.4-.6.9-1 1.2l-1.3 1c-1.4 1.1-3 1.9-4.3 2.9-.5.3-1 .5-1.3 1-.5.2-.9.6-1.3 1l-1.1 1.2-1 1.3-.9 1.3-.7 1.5-.5 1.5a21 21 0 0 0-.5 1.6l-.1.9-.1.7-.1 1.7v1.1l.3 1.6c0 .6.1 1 .3 1.6l.5 1.5.4 1-14.8-5.8-7.5-2-4-1a120 120 0 0 0-11.8-1.7h-.4A115.5 115.5 0 0 0 87 34.9l-3 .6c-2 .3-3.9.8-5.7 1.2l-3 .8-2.7 1.2-2.2 1-.3.1-1.8 1-.5.1-2 1-1.2.7-.6.3-1.7 1-1.6 1-1.3.9-.1.1-1.3 1H58l-1 .8-.4.3-1 .8c0 .2-.1.2-.2.3l-1.2 1v.2c-.5.3-.9.7-1.2 1.1l-.2.1-1 1c0 .2-.3.3-.4.5l-1 1.1-.4.3-1.4 1.6-.2.2a38.1 38.1 0 0 1-7 6 48.9 48.9 0 0 1-12.1 6c-2.7.5-5.5 1.6-7.9 1.8l-1.6.2-1.6.4-1.6.6-1.5.7-1.4.9c-.5.3-1 .7-1.3 1.1-.5.3-1 .8-1.3 1.2l-1.1 1.3-1 1.4-.9 1.5-.7 1.7-.6 1.7-.3 1.5v.2L6 86.2v2.1a6.9 6.9 0 0 0 .7 2.4l.7 1.2.8 1.2a17.1 17.1 0 0 0 2.4 2c1.5 1.4 1.9 1.9 3.9 2.9l1 .5h.2v.4a13.3 13.3 0 0 0 1 3.1l.5 1.2.1.3a28.3 28.3 0 0 0 1.8 2.8l1 1.2 1.3 1.1h.1a14.2 14.2 0 0 0 5.4 3l.3.1.8.2c-.2 3.5-.3 6.8.3 8 .5 1.2 3.4-2.7 6.2-7.2-.4 4.4-.6 9.7 0 11.2.7 1.6 4.6-3.4 8-9a74.7 74.7 0 0 1 92 65.8c-.8-7-9.4-10.8-13.4-9.9-2 4.8-5.2 11-10.5 14.8.4-4.3.2-8.7-.7-13-1.4 6-4.2 11.5-8 16.3a18 18 0 0 1-15.5-7l-.5-.8-.5-1.4-.4-1.3V176c0-.5.1-1 .3-1.4 0-.4.2-.9.4-1.3l.8-1.4c1-3 1-5.6-1-7l-1.1-.7-.9-.3-.5-.2-1.4-.3a5 5 0 0 0-1.3-.2l-1.4-.1h-1l-1.4.2-1.4.3-1.3.4-1.3.6-1.3.7c-15 9.8-6 32.8 4.2 39.5-3.8.7-7.8 1.5-8.9 2.3l-.1.2a60.9 60.9 0 0 0 19.2 7.4 61.5 61.5 0 0 0 72.6-51.3l.4 1.7c.2 1.2.5 2.4.6 3.7l.2 1.7v.3l.2 1.6.1 2.2v5.4l-.1.8v1.5c-.2.2-.2.4-.2.5 0 .6 0 1-.2 1.5v.6c0 .7-.2 1.2-.3 1.9v.1l-.4 1.8v.2c0 .6-.2 1.2-.4 1.8v.2l-.5 1.8v.2l-.5 1.8v.1l-.6 2-.7 1.8-.8 1.9-.7 1.9c-.4.5-.6 1.2-1 1.8l-.1.4s0 .2-.2.2a61.2 61.2 0 0 1-18.1 21.7l-1.6 1.1c0 .2-.3.2-.4.4l-1.4 1 .2.3 2.7-.4h.1a137.7 137.7 0 0 0 6.5-1.2l.9-.2 1.3-.3 1.2-.3c6.4-1.5 12.7-3.7 18.7-6.2-10.2 14-24 25.3-40.1 32.8a103.2 103.2 0 0 0 83.1-52.6c-2.7 15-8.6 29.1-17.4 41.5a101.7 101.7 0 0 0 44.5-69.2c2.2 10.2 2.8 20.7 1.8 31.1 46.7-65 4-132.5-14-150.3l-.1-.3v.1l-.1-.1-.2 2.3a87 87 0 0 1-.6 4.3l-1.1 4.3a53.7 53.7 0 0 1-3.5 8 44 44 0 0 1-9.9 12l-1.5 1.4a36 36 0 0 1-7.4 4.7l-4 1.8a45.5 45.5 0 0 1-8.6 2.3l-4.4.6a49.7 49.7 0 0 1-11.9-.8l-4.3-1.1a48 48 0 0 0 20.7-6.8l3.6-2.6 3.3-2.9 3-3.2c1-1.1 1.9-2.3 2.7-3.5.2-.1.3-.4.4-.6l1.9-3.1a44.5 44.5 0 0 0 3.5-8c.4-1.4.8-2.9 1-4.3.3-1.5.6-2.9.7-4.3l.3-4.4-.1-3.1-.6-4.3c-.2-1.5-.5-3-1-4.4-.4-1.3-.8-2.7-1.4-4.1-.5-1.4-1.1-2.7-1.8-4l-2.2-3.8a71.3 71.3 0 0 0-5.5-6.9 40.4 40.4 0 0 0-12-8.6C178 9.3 176 8.6 174 8z",
        fill: "#e0234e",
        fillRule: "evenodd"
      }
    )
  }
);
const Nodejs = (props2) => {
  const [a, b, c, d, e, f, g] = useUniqueIds(7);
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      viewBox: "0 0 256 292",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      width: "1em",
      height: "1em",
      ...props2,
      children: [
        /* @__PURE__ */ jsxs("defs", { children: [
          /* @__PURE__ */ jsxs("linearGradient", { id: a, x1: "68.188%", x2: "27.823%", y1: "17.487%", y2: "89.755%", children: [
            /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#41873F" }),
            /* @__PURE__ */ jsx("stop", { offset: "32.88%", stopColor: "#418B3D" }),
            /* @__PURE__ */ jsx("stop", { offset: "63.52%", stopColor: "#419637" }),
            /* @__PURE__ */ jsx("stop", { offset: "93.19%", stopColor: "#3FA92D" }),
            /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#3FAE2A" })
          ] }),
          /* @__PURE__ */ jsxs("linearGradient", { id: c, x1: "43.277%", x2: "159.245%", y1: "55.169%", y2: "-18.306%", children: [
            /* @__PURE__ */ jsx("stop", { offset: "13.76%", stopColor: "#41873F" }),
            /* @__PURE__ */ jsx("stop", { offset: "40.32%", stopColor: "#54A044" }),
            /* @__PURE__ */ jsx("stop", { offset: "71.36%", stopColor: "#66B848" }),
            /* @__PURE__ */ jsx("stop", { offset: "90.81%", stopColor: "#6CC04A" })
          ] }),
          /* @__PURE__ */ jsxs("linearGradient", { id: f, x1: "-4.389%", x2: "101.499%", y1: "49.997%", y2: "49.997%", children: [
            /* @__PURE__ */ jsx("stop", { offset: "9.192%", stopColor: "#6CC04A" }),
            /* @__PURE__ */ jsx("stop", { offset: "28.64%", stopColor: "#66B848" }),
            /* @__PURE__ */ jsx("stop", { offset: "59.68%", stopColor: "#54A044" }),
            /* @__PURE__ */ jsx("stop", { offset: "86.24%", stopColor: "#41873F" })
          ] }),
          /* @__PURE__ */ jsx(
            "path",
            {
              id: b,
              d: "M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              id: e,
              d: "M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: `url(#${a})`,
            d: "M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"
          }
        ),
        /* @__PURE__ */ jsx("mask", { id: d, fill: "#fff", children: /* @__PURE__ */ jsx("use", { xlinkHref: `#${b}` }) }),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: `url(#${c})`,
            d: "M249.485 67.8 134.65 1.833c-1.086-.542-2.443-1.085-3.529-1.357L2.443 220.912c1.086 1.357 2.444 2.443 3.8 3.258l114.834 65.968c3.258 1.9 7.059 2.443 10.588 1.357L252.47 70.515c-.815-1.086-1.9-1.9-2.986-2.714Z",
            mask: `url(#${d})`
          }
        ),
        /* @__PURE__ */ jsx("mask", { id: g, fill: "#fff", children: /* @__PURE__ */ jsx("use", { xlinkHref: `#${e}` }) }),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: `url(#${f}`,
            d: "M249.756 223.898c3.258-1.9 5.701-5.158 6.787-8.687L130.579.204c-3.258-.543-6.787-.272-9.773 1.628L6.786 67.53l122.979 224.238c1.628-.272 3.529-.815 5.158-1.63l114.833-66.239Z",
            mask: `url(#${g})`
          }
        )
      ]
    }
  );
};
const Prisma = (props2) => /* @__PURE__ */ jsx(
  "svg",
  {
    viewBox: "0 0 256 310",
    width: "1em",
    height: "1em",
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "xMidYMid",
    ...props2,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fill: "#000",
        d: "M254.313 235.519L148 9.749A17.063 17.063 0 00133.473.037a16.87 16.87 0 00-15.533 8.052L2.633 194.848a17.465 17.465 0 00.193 18.747L59.2 300.896a18.13 18.13 0 0020.363 7.489l163.599-48.392a17.929 17.929 0 0011.26-9.722 17.542 17.542 0 00-.101-14.76l-.008.008zm-23.802 9.683l-138.823 41.05c-4.235 1.26-8.3-2.411-7.419-6.685l49.598-237.484c.927-4.443 7.063-5.147 9.003-1.035l91.814 194.973a6.63 6.63 0 01-4.18 9.18h.007z"
      }
    )
  }
);
const Python = (props2) => {
  const [a, b] = useUniqueIds(2);
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "16 16 32 32",
      width: "1em",
      height: "1em",
      ...props2,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: `url(#${a})`,
            d: "M31.885 16c-8.124 0-7.617 3.523-7.617 3.523l.01 3.65h7.752v1.095H21.197S16 23.678 16 31.876c0 8.196 4.537 7.906 4.537 7.906h2.708v-3.804s-.146-4.537 4.465-4.537h7.688s4.32.07 4.32-4.175v-7.019S40.374 16 31.885 16zm-4.275 2.454a1.394 1.394 0 1 1 0 2.79 1.393 1.393 0 0 1-1.395-1.395c0-.771.624-1.395 1.395-1.395z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: `url(#${b})`,
            d: "M32.115 47.833c8.124 0 7.617-3.523 7.617-3.523l-.01-3.65H31.97v-1.095h10.832S48 40.155 48 31.958c0-8.197-4.537-7.906-4.537-7.906h-2.708v3.803s.146 4.537-4.465 4.537h-7.688s-4.32-.07-4.32 4.175v7.019s-.656 4.247 7.833 4.247zm4.275-2.454a1.393 1.393 0 0 1-1.395-1.395 1.394 1.394 0 1 1 1.395 1.395z"
          }
        ),
        /* @__PURE__ */ jsxs("defs", { children: [
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: a,
              x1: 19.075,
              x2: 34.898,
              y1: 18.782,
              y2: 34.658,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx("stop", { stopColor: "#387EB8" }),
                /* @__PURE__ */ jsx("stop", { offset: 1, stopColor: "#366994" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: b,
              x1: 28.809,
              x2: 45.803,
              y1: 28.882,
              y2: 45.163,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx("stop", { stopColor: "#FFE052" }),
                /* @__PURE__ */ jsx("stop", { offset: 1, stopColor: "#FFC331" })
              ]
            }
          )
        ] })
      ]
    }
  );
};
const React = (props2) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: "1em",
    height: "1em",
    viewBox: "0 0 569 512",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    ...props2,
    children: /* @__PURE__ */ jsx("g", { fill: "none", fillRule: "evenodd", children: /* @__PURE__ */ jsx("g", { transform: "translate(-227, -256)", fill: "#58C4DC", fillRule: "nonzero", children: /* @__PURE__ */ jsxs("g", { transform: "translate(227, 256)", children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M285.5,201 C255.400481,201 231,225.400481 231,255.5 C231,285.599519 255.400481,310 285.5,310 C315.599519,310 340,285.599519 340,255.5 C340,225.400481 315.599519,201 285.5,201",
          id: "Path"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M568.959856,255.99437 C568.959856,213.207656 529.337802,175.68144 466.251623,150.985214 C467.094645,145.423543 467.85738,139.922107 468.399323,134.521063 C474.621631,73.0415145 459.808523,28.6686204 426.709856,9.5541429 C389.677085,-11.8291748 337.36955,3.69129898 284.479928,46.0162134 C231.590306,3.69129898 179.282771,-11.8291748 142.25,9.5541429 C109.151333,28.6686204 94.3382249,73.0415145 100.560533,134.521063 C101.102476,139.922107 101.845139,145.443621 102.708233,151.02537 C97.4493791,153.033193 92.2908847,155.161486 87.3331099,157.39017 C31.0111824,182.708821 0,217.765415 0,255.99437 C0,298.781084 39.6220545,336.307301 102.708233,361.003527 C101.845139,366.565197 101.102476,372.066633 100.560533,377.467678 C94.3382249,438.947226 109.151333,483.32012 142.25,502.434597 C153.629683,508.887578 166.52439,512.186771 179.603923,511.991836 C210.956328,511.991836 247.567589,495.487529 284.479928,465.972527 C321.372196,495.487529 358.003528,511.991836 389.396077,511.991836 C402.475265,512.183856 415.36922,508.884856 426.75,502.434597 C459.848667,483.32012 474.661775,438.947226 468.439467,377.467678 C467.897524,372.066633 467.134789,366.565197 466.291767,361.003527 C529.377946,336.347457 569,298.761006 569,255.99437 M389.155214,27.1025182 C397.565154,26.899606 405.877839,28.9368502 413.241569,33.0055186 C436.223966,46.2772304 446.540955,82.2775015 441.522965,131.770345 C441.181741,135.143488 440.780302,138.556788 440.298575,141.990165 C414.066922,134.08804 387.205771,128.452154 360.010724,125.144528 C343.525021,103.224055 325.192524,82.7564475 305.214266,63.9661533 C336.586743,39.7116483 366.032313,27.1025182 389.135142,27.1025182 M378.356498,310.205598 C368.204912,327.830733 357.150626,344.919965 345.237759,361.405091 C325.045049,363.479997 304.758818,364.51205 284.459856,364.497299 C264.167589,364.51136 243.888075,363.479308 223.702025,361.405091 C211.820914,344.919381 200.80007,327.83006 190.683646,310.205598 C180.532593,292.629285 171.306974,274.534187 163.044553,255.99437 C171.306974,237.454554 180.532593,219.359455 190.683646,201.783142 C200.784121,184.229367 211.770999,167.201087 223.601665,150.764353 C243.824636,148.63809 264.145559,147.579168 284.479928,147.591877 C304.772146,147.579725 325.051559,148.611772 345.237759,150.68404 C357.109048,167.14607 368.136094,184.201112 378.27621,201.783142 C388.419418,219.363718 397.644825,237.458403 405.915303,255.99437 C397.644825,274.530337 388.419418,292.625022 378.27621,310.205598 M419.724813,290.127366 C426.09516,307.503536 431.324985,325.277083 435.380944,343.334682 C417.779633,348.823635 399.836793,353.149774 381.668372,356.285142 C388.573127,345.871232 395.263781,335.035679 401.740334,323.778483 C408.143291,312.655143 414.144807,301.431411 419.805101,290.207679 M246.363271,390.377981 C258.848032,391.140954 271.593728,391.582675 284.5,391.582675 C297.406272,391.582675 310.232256,391.140954 322.737089,390.377981 C310.880643,404.583418 298.10766,417.997563 284.5,430.534446 C270.921643,417.999548 258.18192,404.585125 246.363271,390.377981 Z M187.311556,356.244986 C169.137286,353.123646 151.187726,348.810918 133.578912,343.334682 C137.618549,325.305649 142.828222,307.559058 149.174827,290.207679 C154.754833,301.431411 160.736278,312.655143 167.239594,323.778483 C173.74291,334.901824 180.467017,345.864539 187.311556,356.285142 M149.174827,221.760984 C142.850954,204.473938 137.654787,186.794745 133.619056,168.834762 C151.18418,163.352378 169.085653,159.013101 187.211197,155.844146 C180.346585,166.224592 173.622478,176.986525 167.139234,188.210257 C160.65599,199.433989 154.734761,210.517173 149.074467,221.760984 M322.616657,121.590681 C310.131896,120.827708 297.3862,120.385987 284.379568,120.385987 C271.479987,120.385987 258.767744,120.787552 246.242839,121.590681 C258.061488,107.383537 270.801211,93.9691137 284.379568,81.4342157 C297.99241,93.9658277 310.765727,107.380324 322.616657,121.590681 Z M401.70019,188.210257 C395.196875,176.939676 388.472767,166.09743 381.527868,155.68352 C399.744224,158.819049 417.734224,163.151949 435.380944,168.654058 C431.331963,186.680673 426.122466,204.426664 419.785029,221.781062 C414.205023,210.55733 408.203506,199.333598 401.720262,188.230335 M127.517179,131.790423 C122.438973,82.3176579 132.816178,46.2973086 155.778503,33.0255968 C163.144699,28.9632474 171.455651,26.9264282 179.864858,27.1225964 C202.967687,27.1225964 232.413257,39.7317265 263.785734,63.9862316 C243.794133,82.7898734 225.448298,103.270812 208.949132,125.204763 C181.761691,128.528025 154.90355,134.14313 128.661281,141.990165 C128.199626,138.556788 127.778115,135.163566 127.456963,131.790423 M98.4529773,182.106474 C101.54406,180.767925 104.695358,179.429376 107.906872,178.090828 C114.220532,204.735668 122.781793,230.7969 133.498624,255.99437 C122.761529,281.241316 114.193296,307.357063 107.8868,334.058539 C56.7434387,313.076786 27.0971497,284.003505 27.0971497,255.99437 C27.0971497,229.450947 53.1907013,202.526037 98.4529773,182.106474 Z M155.778503,478.963143 C132.816178,465.691432 122.438973,429.671082 127.517179,380.198317 C127.838331,376.825174 128.259842,373.431953 128.721497,369.978497 C154.953686,377.878517 181.814655,383.514365 209.009348,386.824134 C225.500295,408.752719 243.832321,429.233234 263.805806,448.042665 C220.069,481.834331 180.105722,492.97775 155.838719,478.963143 M441.502893,380.198317 C446.520883,429.691161 436.203894,465.691432 413.221497,478.963143 C388.974566,493.017906 348.991216,481.834331 305.274481,448.042665 C325.241364,429.232737 343.566681,408.752215 360.050868,386.824134 C387.245915,383.516508 414.107066,377.880622 440.338719,369.978497 C440.820446,373.431953 441.221885,376.825174 441.563109,380.198317 M461.193488,334.018382 C454.869166,307.332523 446.294494,281.231049 435.561592,255.99437 C446.289797,230.744081 454.857778,204.629101 461.173416,177.930202 C512.216417,198.911955 541.942994,227.985236 541.942994,255.99437 C541.942994,284.003505 512.296705,313.076786 461.153344,334.058539",
          id: "Shape"
        }
      )
    ] }) }) })
  }
);
const Redux = (props2) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: "1em",
    height: "1em",
    viewBox: "0 -6 256 256",
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "xMidYMid",
    ...props2,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895.326 4.887 2.28 9.122 5.212 12.054-11.076 21.828-28.016 37.791-53.426 51.148-17.266 9.122-35.183 12.38-53.1 10.1-14.66-1.955-26.062-8.47-33.23-19.222-10.424-15.963-11.401-33.23-2.605-50.496 6.19-12.38 15.962-21.502 22.152-26.063-1.303-4.235-3.258-11.402-4.235-16.614-47.237 34.207-42.35 80.468-28.016 102.295 10.75 16.29 32.577 26.389 56.684 26.389 6.515 0 13.03-.652 19.546-2.28 41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176 16.288 10.751 28.016 24.76 34.531 41.7 5.538 13.683 5.212 27.04-.652 38.443-9.121 17.266-24.432 26.714-44.63 26.714-13.031 0-25.41-3.91-31.926-6.842-3.583 3.258-10.099 8.47-14.66 11.729 14.009 6.515 28.343 10.099 42.025 10.099 31.274 0 54.404-17.267 63.2-34.533 9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325-13.357-22.153-18.895-46.26-16.94-72.323 1.302-19.547 7.818-36.488 19.22-50.497 9.447-12.054 27.69-17.918 40.07-18.243 34.531-.652 49.19 42.351 50.168 59.618 4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451-14.985 41.7-5.212 81.771 13.031 113.372-1.628 2.28-2.606 5.864-2.28 9.448z",
        fill: "#764ABC"
      }
    )
  }
);
const Socketio = (props2) => /* @__PURE__ */ jsxs(
  "svg",
  {
    viewBox: "0 0 256 256",
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "xMinYMin meet",
    width: "1em",
    height: "1em",
    ...props2,
    children: [
      /* @__PURE__ */ jsx("circle", { cx: 128, cy: 128, r: 114, stroke: "#010101", strokeWidth: 20, fill: "none" }),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M97.637 121.69c27.327-22.326 54.058-45.426 81.98-67.097-14.646 22.505-29.708 44.711-44.354 67.215-12.562.06-25.123.06-37.626-.119zM120.737 134.132c12.621 0 25.183 0 37.745.179-27.505 22.206-54.117 45.484-82.099 67.096 14.646-22.505 29.708-44.77 44.354-67.275z",
          fill: "#010101"
        }
      )
    ]
  }
);
const StyledComponents = (props2) => {
  const [a, b] = useUniqueIds(2);
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      viewBox: "0 0 318 318",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      width: "1em",
      height: "1em",
      ...props2,
      children: [
        /* @__PURE__ */ jsxs("defs", { children: [
          /* @__PURE__ */ jsx("path", { id: a, d: "M0 0h318v318H0z" }),
          /* @__PURE__ */ jsx("mask", { id: b, fill: "#fff", height: 318, width: 318, x: 0, y: 0, children: /* @__PURE__ */ jsx("use", { xlinkHref: `#${a}` }) })
        ] }),
        /* @__PURE__ */ jsxs("g", { fill: "none", fillRule: "evenodd", children: [
          /* @__PURE__ */ jsx("use", { mask: `url(#${b})`, stroke: "#4a4a4a", strokeWidth: 8, xlinkHref: `#${a}` }),
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M44.284 229.416c-4.428 0-7.344 2.376-7.344 5.544 0 2.808 1.728 4.68 5.652 5.76 3.564 1.008 4.32 1.512 4.32 3.096 0 1.44-1.332 2.304-3.384 2.304-1.944 0-3.708-.756-5.184-1.872l-2.304 2.592c1.764 1.584 4.32 2.7 7.596 2.7 4.356 0 8.028-2.088 8.028-6.048 0-3.384-2.196-4.968-6.084-6.012-3.24-.9-3.996-1.476-3.996-2.736 0-1.152 1.044-1.908 2.88-1.908 1.692 0 3.204.54 4.788 1.548l1.8-2.7c-1.8-1.404-4.032-2.268-6.768-2.268zm20.412 15.732 1.62 2.952c-1.368.972-3.096 1.44-4.788 1.44-3.744-.036-5.724-2.16-5.724-6.228v-10.044h-2.988v-3.312h2.988v-4.212l4.608-.54v4.752h4.428l-.468 3.312h-3.96v9.936c0 1.872.612 2.628 2.016 2.628.72 0 1.44-.216 2.268-.684zm19.62-15.192-6.192 19.116c-1.44 4.464-4.248 7.344-9.9 7.776l-.468-3.348c3.78-.576 5.004-1.8 6.084-4.5h-1.584l-6.048-19.044h4.896l4.14 15.984 4.32-15.984zm7.308 19.584a7.55 7.55 0 0 0 3.06-.648l-.972-3.24c-.324.108-.648.18-1.08.18-.756 0-1.08-.432-1.08-1.332v-22.68l-4.608.504v22.32c0 3.132 1.764 4.896 4.68 4.896zm21.744-10.512c0 .612-.072 1.368-.108 1.872h-11.952c.324 3.888 2.16 5.148 4.68 5.148 1.692 0 3.096-.54 4.752-1.692l1.908 2.628c-1.872 1.512-4.176 2.556-7.056 2.556-5.904 0-9.072-3.924-9.072-9.936 0-5.796 3.06-10.188 8.46-10.188 5.328 0 8.388 3.6 8.388 9.612zm-4.572-1.116v-.216c0-3.132-1.116-5.004-3.708-5.004-2.16 0-3.528 1.44-3.78 5.22zm20.124-16.092 4.608.504V249h-4.068l-.324-2.412c-1.152 1.728-2.988 2.952-5.436 2.952-4.752 0-7.236-3.996-7.236-10.044 0-5.868 2.952-10.08 7.668-10.08 2.016 0 3.6.864 4.788 2.052zm-3.924 24.228c1.692 0 2.844-.828 3.924-2.448v-8.712c-1.008-1.224-2.088-2.016-3.636-2.016-2.376 0-3.96 2.016-3.96 6.588 0 4.896 1.404 6.588 3.672 6.588zM44.44 265.416c-5.472 0-8.892 4.14-8.892 10.224s3.42 9.9 8.928 9.9c2.448 0 4.428-.792 6.156-2.196l-2.052-2.916c-1.404.9-2.412 1.368-3.852 1.368-2.592 0-4.284-1.62-4.284-6.228 0-4.572 1.62-6.516 4.284-6.516 1.44 0 2.592.432 3.852 1.368l2.052-2.772c-1.8-1.548-3.708-2.232-6.192-2.232zm17.316 0c5.616 0 8.928 3.816 8.928 10.044 0 6.012-3.348 10.08-8.964 10.08s-8.964-3.816-8.964-10.08c0-5.976 3.348-10.044 9-10.044zm0 3.492c-2.7 0-4.14 2.052-4.14 6.552 0 4.572 1.404 6.588 4.104 6.588s4.104-2.052 4.104-6.588-1.404-6.552-4.068-6.552zm33.444-3.492c-2.52 0-4.284 1.224-5.724 3.204-.72-2.016-2.376-3.204-4.608-3.204-2.412 0-4.14 1.116-5.508 3.024l-.36-2.484h-3.996V285h4.608v-13.248c1.044-1.764 2.016-2.88 3.636-2.88 1.116 0 2.088.684 2.088 3.06V285h4.608v-13.248c1.044-1.764 2.016-2.88 3.6-2.88 1.152 0 2.088.684 2.088 3.06V285h4.608v-13.788c0-3.6-2.016-5.796-5.04-5.796zm20.268 0c4.968 0 7.056 3.924 7.056 10.008 0 5.832-2.7 10.116-7.524 10.116-1.944 0-3.6-.684-4.788-2.088v8.892l-4.608.504v-26.892h4.032l.252 2.34c1.512-1.98 3.528-2.88 5.58-2.88zm-1.764 16.596c2.52 0 3.996-1.944 3.996-6.552 0-4.824-1.296-6.588-3.6-6.588-1.62 0-2.988 1.116-3.888 2.592v8.568c.9 1.332 2.052 1.98 3.492 1.98zm21.132-16.596c5.616 0 8.928 3.816 8.928 10.044 0 6.012-3.348 10.08-8.964 10.08s-8.964-3.816-8.964-10.08c0-5.976 3.348-10.044 9-10.044zm0 3.492c-2.7 0-4.14 2.052-4.14 6.552 0 4.572 1.404 6.588 4.104 6.588s4.104-2.052 4.104-6.588-1.404-6.552-4.068-6.552zm23.4-3.492c-2.412 0-4.32 1.116-5.796 3.024l-.36-2.484h-3.996V285h4.608v-13.248c1.116-1.764 2.34-2.88 3.996-2.88 1.44 0 2.34.684 2.34 3.06V285h4.608v-13.788c0-3.636-1.98-5.796-5.4-5.796zm26.388 9.612c0 .612-.072 1.368-.108 1.872h-11.952c.324 3.888 2.16 5.148 4.68 5.148 1.692 0 3.096-.54 4.752-1.692l1.908 2.628c-1.872 1.512-4.176 2.556-7.056 2.556-5.904 0-9.072-3.924-9.072-9.936 0-5.796 3.06-10.188 8.46-10.188 5.328 0 8.388 3.6 8.388 9.612zm-4.572-1.116v-.216c0-3.132-1.116-5.004-3.708-5.004-2.16 0-3.528 1.44-3.78 5.22zm18.864-8.496c-2.412 0-4.32 1.116-5.796 3.024l-.36-2.484h-3.996V285h4.608v-13.248c1.116-1.764 2.34-2.88 3.996-2.88 1.44 0 2.34.684 2.34 3.06V285h4.608v-13.788c0-3.636-1.98-5.796-5.4-5.796zm20.052 15.732c-.828.468-1.548.684-2.268.684-1.404 0-2.016-.756-2.016-2.628v-9.936h3.96l.468-3.312h-4.428v-4.752l-4.608.54v4.212h-2.988v3.312h2.988v10.044c0 4.068 1.98 6.192 5.724 6.228 1.692 0 3.42-.468 4.788-1.44zm10.224-15.732c-4.428 0-7.344 2.376-7.344 5.544 0 2.808 1.728 4.68 5.652 5.76 3.564 1.008 4.32 1.512 4.32 3.096 0 1.44-1.332 2.304-3.384 2.304-1.944 0-3.708-.756-5.184-1.872l-2.304 2.592c1.764 1.584 4.32 2.7 7.596 2.7 4.356 0 8.028-2.088 8.028-6.048 0-3.384-2.196-4.968-6.084-6.012-3.24-.9-3.996-1.476-3.996-2.736 0-1.152 1.044-1.908 2.88-1.908 1.692 0 3.204.54 4.788 1.548l1.8-2.7c-1.8-1.404-4.032-2.268-6.768-2.268zM79.8 87.2l-36.2 22.5 36.2 22.9-3.7 4.6-37.7-23.6v-7.9l38.1-23.6m189.3 22.7v7.8l-37.7 23.6-3.7-4.9 36.1-22.6L224.4 86l3.2-4.9",
              fill: "#4a4a4a"
            }
          ),
          /* @__PURE__ */ jsx(
            "text",
            {
              fill: "#000",
              fontFamily: "AppleColorEmoji, Apple Color Emoji",
              fontSize: 100,
              letterSpacing: 0.5,
              transform: "translate(38 44)",
              children: /* @__PURE__ */ jsx("tspan", { x: 70, y: 100, children: "\u{1F485}" })
            }
          )
        ] })
      ]
    }
  );
};
const TailwindCSS = (props2) => {
  const a = useId();
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 54 33",
      width: "1em",
      height: "1em",
      ...props2,
      children: [
        /* @__PURE__ */ jsx("g", { clipPath: `url(#${a})`, children: /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#38bdf8",
            fillRule: "evenodd",
            d: "M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z",
            clipRule: "evenodd"
          }
        ) }),
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: a, children: /* @__PURE__ */ jsx("path", { fill: "#fff", d: "M0 0h54v32.4H0z" }) }) })
      ]
    }
  );
};
const TypeScript = (props2) => /* @__PURE__ */ jsxs(
  "svg",
  {
    viewBox: "0 0 256 256",
    width: "1em",
    height: "1em",
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "xMidYMid",
    ...props2,
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z",
          fill: "#3178C6"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719 41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z",
          fill: "#FFF"
        }
      )
    ]
  }
);
const Vercel = (props2) => /* @__PURE__ */ jsx(
  "svg",
  {
    viewBox: "0 0 256 222",
    width: "1em",
    height: "1em",
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "xMidYMid",
    ...props2,
    children: /* @__PURE__ */ jsx("path", { fill: "#000", d: "m128 0 128 221.705H0z" })
  }
);
const Vite = (props2) => {
  const [a, b] = useUniqueIds(2);
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      viewBox: "0 0 256 257",
      width: "1em",
      height: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      preserveAspectRatio: "xMidYMid",
      ...props2,
      children: [
        /* @__PURE__ */ jsxs("defs", { children: [
          /* @__PURE__ */ jsxs("linearGradient", { x1: "-.828%", y1: "7.652%", x2: "57.636%", y2: "78.411%", id: a, children: [
            /* @__PURE__ */ jsx("stop", { stopColor: "#41D1FF", offset: "0%" }),
            /* @__PURE__ */ jsx("stop", { stopColor: "#BD34FE", offset: "100%" })
          ] }),
          /* @__PURE__ */ jsxs("linearGradient", { x1: "43.376%", y1: "2.242%", x2: "50.316%", y2: "89.03%", id: b, children: [
            /* @__PURE__ */ jsx("stop", { stopColor: "#FFEA83", offset: "0%" }),
            /* @__PURE__ */ jsx("stop", { stopColor: "#FFDD35", offset: "8.333%" }),
            /* @__PURE__ */ jsx("stop", { stopColor: "#FFA800", offset: "100%" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M255.153 37.938 134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z",
            fill: `url(#${a})`
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M185.432.063 96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028 72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z",
            fill: `url(#${b})`
          }
        )
      ]
    }
  );
};
const Vitest = (props2) => /* @__PURE__ */ jsxs(
  "svg",
  {
    viewBox: "0 0 256 234",
    width: "1em",
    height: "1em",
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "xMidYMid",
    ...props2,
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "m192.115 70.808-61.2 88.488a5.27 5.27 0 0 1-2.673 2.002 5.285 5.285 0 0 1-3.343-.005 5.25 5.25 0 0 1-2.66-2.01 5.214 5.214 0 0 1-.903-3.203l2.45-48.854-39.543-8.386a5.256 5.256 0 0 1-2.292-1.118 5.222 5.222 0 0 1-1.83-4.581 5.226 5.226 0 0 1 .895-2.383L142.218 2.27a5.279 5.279 0 0 1 6.016-1.996 5.243 5.243 0 0 1 2.66 2.01c.643.942.96 2.066.903 3.203l-2.45 48.855 39.542 8.386a5.262 5.262 0 0 1 2.293 1.117 5.21 5.21 0 0 1 1.829 4.582 5.212 5.212 0 0 1-.896 2.382Z",
          fill: "#FCC72B"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M128.025 233.537a12.356 12.356 0 0 1-8.763-3.63l-57.828-57.823a12.389 12.389 0 0 1 .023-17.5 12.394 12.394 0 0 1 17.5-.024l49.068 49.061L234.917 96.733a12.39 12.39 0 0 1 17.523 17.524l-115.655 115.65a12.343 12.343 0 0 1-8.76 3.63Z",
          fill: "#729B1B"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M127.975 233.537a12.356 12.356 0 0 0 8.763-3.63l57.828-57.823a12.385 12.385 0 0 0 3.605-8.754 12.395 12.395 0 0 0-12.375-12.376 12.4 12.4 0 0 0-8.755 3.606l-49.066 49.061L21.082 96.733a12.392 12.392 0 0 0-17.524 17.524l115.656 115.65a12.347 12.347 0 0 0 8.76 3.63Z",
          fillOpacity: 0.5,
          fill: "#729B1B"
        }
      )
    ]
  }
);
const Sass = (props2) => /* @__PURE__ */ jsx("svg", { viewBox: "0 0 512 384", xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", ...props2, children: /* @__PURE__ */ jsx(
  "path",
  {
    fill: "#CF649A",
    d: "M441 221c-18 0-34 4-47 10-5-9-9-17-10-24s-2-11-1-20 6-21 6-22c0 0-1-5-11-5-11 0-20 2-21 5l-4 15c-2 9-20 43-31 60-4-7-7-13-7-17-1-8-2-12-1-21s6-20 6-21-1-6-11-6c-11 0-20 2-21 5l-4 15-34 76-8 18c-2 4 0 0 0 1l-3 5-4 5s-1-7 1-16c3-19 12-49 12-51 0 0 2-5-6-8-7-3-9 2-10 2l-1 1s8-34-16-34c-14 0-35 17-45 31l-34 19-17 9-1-1c-29-31-82-52-79-93 0-15 6-54 101-102 79-39 141-28 152-4 16 34-33 97-115 106-31 3-47-9-51-13-4-5-5-5-7-4s-1 5 0 8c3 6 13 17 30 23 15 5 51 8 95-9 49-19 88-72 77-117-12-45-87-60-157-35-43 15-88 39-121 70-39 36-45 68-43 81 10 47 74 78 100 100l-3 2c-13 7-63 33-75 60-14 31 2 53 13 56 33 10 68-7 86-34 18-28 16-64 8-80l-1-1 11-6 18-10c-3 9-5 19-6 34-2 17 6 40 15 49 4 4 9 4 12 4 11 0 16-9 22-20l13-28s-8 41 13 41c7 0 15-9 18-14l1-1 1-2 20-37 25-57 5 20c2 8 7 16 10 24l-4 7-8 10c-10 12-23 26-24 30-2 5-2 8 2 11 3 2 8 2 13 2l18-4 17-9c10-7 16-18 15-32 0-7-3-15-6-22l3-4c16-23 28-49 28-49l5 21 9 20a89 89 0 0 0-27 36c-6 17-2 24 7 26 4 1 10-1 14-3 5-1 11-4 17-8 10-8 20-18 19-32 0-6-2-13-4-19 12-5 29-8 49-5 45 5 54 33 52 44-2 12-11 18-14 20l-4 4c1 2 2 2 5 2 3-1 23-10 24-31 1-28-25-58-71-57zM97 336c-14 16-35 23-44 17-9-5-6-29 13-46 11-10 25-20 34-26l9-5 1-1 3-1c6 24 0 45-16 62zm108-73c-5 13-16 45-22 43-6-1-9-26-2-50 4-12 13-26 18-32 8-9 17-12 19-8 3 5-10 39-13 47zm89 43-5 1v-2l16-17 9-11v1c0 14-14 24-20 28zm68-16c-2-1-1-5 4-16 2-5 7-13 15-20l2 9c0 18-13 24-21 27z"
  }
) });
const Deno = (props2) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    xmlSpace: "preserve",
    fillRule: "evenodd",
    strokeLinejoin: "round",
    strokeMiterlimit: 2,
    clipRule: "evenodd",
    viewBox: "0 0 401 401",
    width: "1em",
    height: "1em",
    ...props2,
    children: /* @__PURE__ */ jsx("path", { d: "M261.684 245.149c33.861 1.662 69.225-13.535 80.203-43.776 10.978-30.241 6.721-60.148-32.661-78.086-39.381-17.944-57.569-39.272-89.385-52.14-20.787-8.408-43.915-3.418-67.664 9.707-63.963 35.351-121.274 147.038-94.858 250.518a3.185 3.185 0 0 1-1.544 3.615 3.189 3.189 0 0 1-3.877-.64C16.282 295.06-3.759 241.788.593 184.791 8.998 74.728 105.178-7.806 215.241.599 325.296 9.003 407.83 105.182 399.425 215.245c-3.529 46.221-22.535 87.584-51.559 119.399-22.195 22.8-50.473 32.935-74.07 32.516-17.107-.303-33.839-7.112-45.409-17.066-16.516-14.228-23.191-30.485-25.474-48.635-.572-4.507-.236-16.797 2.112-25.309 1.745-6.343 6.185-18.599 12.676-23.957-7.595-3.266-17.361-10.388-20.446-13.805-.753-.838-.652-2.156.026-3.057a2.56 2.56 0 0 1 2.925-.88c6.528 2.239 14.477 4.444 22.86 5.851 11.021 1.844 24.729 4.159 38.618 4.847ZM192.777 85.086c10.789-.846 20.202 8.363 21.825 20.609 2.164 16.314-3.822 33.166-23.511 33.554-16.819.335-21.915-16.625-20.8-26.9 1.107-10.275 9.577-26.25 22.486-27.263Z" })
  }
);
const PostgreSQL = (props2) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "xMidYMid",
    viewBox: "0 0 256 264",
    width: "1em",
    height: "1em",
    ...props2,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M255 158c-2-5-6-8-11-9l-8 1-14 2c12-20 22-43 27-65 9-34 5-50-1-57a77 77 0 0 0-62-30c-14 0-27 3-33 5l-19-2c-12 0-24 3-33 8L78 5c-23-3-42 0-55 9C7 26-1 46 0 74a342 342 0 0 0 28 97c7 14 14 22 23 24 5 2 13 3 22-4l5 4 9 3c11 3 22 2 31-1a643 643 0 0 1 0 10 109 109 0 0 0 5 33c1 4 4 11 9 16 6 6 13 8 20 8l9-1c10-2 21-6 29-17s11-27 12-53v-2l1-2 1 1h1c10 0 22-2 30-6 5-2 24-12 20-26" }),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M238 161c-30 6-32-4-32-4 32-47 45-106 33-120-31-40-84-21-85-21l-20-2c-14 0-24 4-32 10 0 0-95-40-91 49 1 19 28 143 59 106l22-26c6 4 12 6 19 5h1v5c-8 9-6 10-22 14-16 3-7 9 0 11s25 4 36-12v2c3 2 5 16 5 29-1 12-1 21 2 27 2 7 5 22 26 18 17-4 27-14 28-30 1-12 3-10 3-20l1-5c2-16 1-21 12-19l2 1c8 0 19-2 25-5 13-6 21-16 8-13",
          fill: "#336791"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M108 82h-6l-1 2 1 3c1 2 3 3 5 3h1c3 0 6-2 6-4 1-2-3-4-6-4M197 82c0-2-4-3-7-2-3 0-6 1-6 3 1 2 3 4 6 4h1l4-2 2-3",
          fill: "#FFF"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M248 160c-1-3-5-5-11-3-18 3-24 1-27-1 14-21 26-47 32-71 3-11 5-22 5-30 0-10-2-17-5-21a70 70 0 0 0-57-27c-16 0-30 4-33 6-5-2-12-3-18-3-13 0-23 3-32 9-4-2-14-5-26-7-21-3-37-1-49 8C13 30 6 48 8 73c0 8 5 35 13 60 10 33 21 51 32 55l5 1c4 0 9-2 14-9l21-22c4 2 9 3 14 3v1l-2 3c-4 5-5 5-16 8-3 0-12 2-12 8 0 7 10 10 11 10l12 1c9 0 17-3 24-8-1 23 0 46 3 53 3 6 8 20 26 20l9-1c18-4 26-12 29-30l6-45 11 1c8 0 17-2 23-5 7-3 19-10 17-17Zm-44-83-1 10-2 12 1 14c1 9 3 19-2 28l-2-4-3-6c-7-12-22-39-14-50 2-3 8-6 23-4Zm-18-62c21 0 38 8 50 23 9 12-1 65-30 111l-1-1c7-13 6-25 5-36l-1-13 1-11a72 72 0 0 0 1-16c0-5-6-20-18-34-6-7-16-16-28-21l21-2ZM67 176c-6 7-10 6-12 5-8-3-19-21-27-51-8-25-13-50-13-57-1-23 4-39 16-47 20-14 52-6 64-2v1C74 46 74 82 74 85v3c1 7 2 18 0 31a38 38 0 0 0 12 34l-19 23Zm22-30c-6-7-9-16-8-26 2-14 1-26 1-32v-2c3-3 17-11 27-8 5 1 8 4 9 9 6 28 1 40-4 50l-2 5-1 2-3 10c-7 0-14-3-19-8Zm1 38-5-2 6-2c13-3 15-5 19-10l4-5c3-3 4-2 6-1 1 0 3 2 4 5l-1 4c-9 13-23 13-33 11Zm70 65c-16 3-22-5-26-15a293 293 0 0 1-3-67c-2-5-5-9-8-10-2-1-5-2-8-1l3-10 1-1 2-5c5-10 11-24 4-54-2-12-11-17-23-16a54 54 0 0 0-20 7c1-12 5-33 18-47 9-8 20-13 34-12 27 0 44 14 54 26 8 10 13 20 15 25-14-1-23 1-28 8-10 15 6 44 13 57l3 6 8 13 2 2c-4 2-11 4-11 18l-6 51c-3 16-8 21-24 25Zm68-78c-4 2-11 3-18 3-8 1-11 0-12-1-1-9 3-10 6-11h2l1 1c6 4 16 4 31 1h1l-11 7Z",
          fill: "#FFF"
        }
      )
    ]
  }
);
function PixelPerfect({
  size = 32,
  color = "#598DF6"
}) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 32 32",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx("path", { d: "M16 16V31L3 23.5V8.5L16 16Z", fill: color, fillOpacity: "0.8" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M29 8.5L16 1L3 8.5V23.5L16 31L29 23.5V8.5ZM16 2.15449L4 9.07756V22.9224L16 29.8455V16L27.9994 9.07724L16 2.15449ZM28 22.9224L17 29.2686V22.9614L23 19.49V13.116L28 10.2314V22.9224ZM17 21.8061L22 18.9132V13.6996L22.0106 13.6868L17 16.5776V21.8061Z",
            fill: "#D7E1F5"
          }
        )
      ]
    }
  );
}
const firstName = "/assets/first-name-Mz-ftwQU.mp3";
function FirstName() {
  return /* @__PURE__ */ jsxs(
    motion$1.div,
    {
      className: "relative flex items-center text-8xl sm:text-9xl",
      style: {
        gap: "1rem"
      },
      whileHover: { gap: "2rem" },
      children: [
        /* @__PURE__ */ jsx(SpeakerName, {}),
        /* @__PURE__ */ jsx(Letter, { icon: RiCodeAiFill, hoveredColor: "#074799", children: "L" }),
        /* @__PURE__ */ jsx(Letter, { icon: RiGameLine, hoveredColor: "#FF7F3E", children: "U" }),
        /* @__PURE__ */ jsx(Letter, { icon: RiMusicAiLine, hoveredColor: "#8B5DFF", children: "I" }),
        /* @__PURE__ */ jsx(Letter, { hoveredColor: "#118B50", icon: PixelPerfect, children: "S" })
      ]
    }
  );
}
function Letter({
  children,
  icon,
  hoveredColor,
  className = ""
}) {
  const Icon = icon;
  return /* @__PURE__ */ jsxs(
    motion$1.span,
    {
      className: `group flex flex-col items-center justify-center uppercase ${className}`,
      whileHover: { color: hoveredColor },
      children: [
        /* @__PURE__ */ jsx(
          motion$1.span,
          {
            className: "opacity-0 transition group-hover:opacity-100",
            initial: { rotateX: "45deg" },
            animate: { rotateX: "0" },
            children: /* @__PURE__ */ jsx(Icon, { size: 25, color: hoveredColor })
          }
        ),
        children
      ]
    }
  );
}
function SpeakerName() {
  const audioRef = useRef(null);
  const play = async () => {
    var _a;
    await ((_a = audioRef.current) == null ? void 0 : _a.play());
  };
  return /* @__PURE__ */ jsxs(
    motion$1.div,
    {
      className: "absolute top-12 -right-5 -rotate-12 cursor-pointer transition",
      style: {
        opacity: 0.3,
        scale: 1
      },
      whileHover: {
        scale: 1.1,
        opacity: 1
      },
      transition: {
        duration: 0.3
      },
      children: [
        /* @__PURE__ */ jsx("audio", { src: firstName, ref: audioRef }),
        /* @__PURE__ */ jsx(RxSpeakerLoud, { size: 20, onClick: play })
      ]
    }
  );
}
const variants = ["alvarez", "\u30A2\u30EB\u30F4\u30A1\u30EC\u30B9", "\u827E\u5C14\u74E6\u96F7\u65AF", "\u0410\u043B\u044C\u0432\u0430\u0440\u0435\u0437", "\u0906\u0932\u094D\u0935\u093E\u0930\u0947\u0938"];
function LastName() {
  const [variantIndex, setVariantIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setVariantIndex((prevIndex) => (prevIndex + 1) % variants.length);
    }, 2e3);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "relative flex h-20 items-center justify-center text-8xl opacity-50", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(
    motion$1.p,
    {
      className: "absolute flex items-center will-change-[opacity] text-6xl sm:text-9xl",
      style: { gap: 0 },
      initial: { opacity: 0, y: -10 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 10 },
      transition: { duration: 0.5 },
      whileHover: { gap: "0.5rem" },
      children: variants[variantIndex].split("").map((letter, id) => /* @__PURE__ */ jsx(motion$1.span, { children: letter }, id))
    },
    variantIndex
  ) }) });
}
function Title() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setRotate((prev) => {
        const newX = prev.x + 0.2 * direction;
        if (newX > 5 || newX < -5) setDirection(-direction);
        return { x: newX, y: prev.y };
      });
    }, 50);
    return () => clearInterval(interval);
  }, [direction]);
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    const rotateSensitive = 10;
    const x = (innerWidth / 2 - clientX) / rotateSensitive;
    const y = (innerHeight / 2 - clientY) / rotateSensitive;
    setRotate({ x, y });
  };
  return /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center pt-[85px] sm:pt-[50px]", children: /* @__PURE__ */ jsxs(
    motion$1.div,
    {
      onMouseMove: handleMouseMove,
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      className: "flex flex-col items-center px-5 font-bold tracking-wide uppercase transition will-change-transform select-none",
      initial: { rotateX: 0, rotateY: 0, scale: 1 },
      animate: {
        rotateX: rotate.x,
        rotateY: rotate.y,
        scale: isHovered ? 1.1 : 1
      },
      transition: { duration: 0.3 },
      style: {
        perspective: "1000px",
        gap: "2rem"
      },
      children: [
        /* @__PURE__ */ jsx(FirstName, {}),
        /* @__PURE__ */ jsx(LastName, {})
      ]
    }
  ) });
}
function Hero() {
  return /* @__PURE__ */ jsxs("div", { className: "hero-pattern h-[600px] pt-5 inset-shadow-white relative", children: [
    /* @__PURE__ */ jsx(Header$1, {}),
    /* @__PURE__ */ jsxs("div", { className: "h-full w-full", children: [
      /* @__PURE__ */ jsx(MarqueeAnimation, {}),
      /* @__PURE__ */ jsx(Title, {})
    ] })
  ] });
}
const v = "5.12.2";
const fr = 29.9700012207031;
const ip = 0;
const op = 45.0000018328876;
const w = 48;
const h = 48;
const nm = "home";
const ddd = 1;
const assets = [];
const layers = [{ "ddd": 1, "ind": 1, "ty": 3, "nm": "Null 3", "sr": 1, "ks": { "o": { "a": 0, "k": 0, "ix": 11 }, "rx": { "a": 0, "k": 0, "ix": 8 }, "ry": { "a": 0, "k": 0, "ix": 9 }, "rz": { "a": 0, "k": 0, "ix": 10 }, "or": { "a": 0, "k": [0, 0, 0], "ix": 7 }, "p": { "a": 0, "k": [22.75, 24, 0], "ix": 2 }, "a": { "a": 0, "k": [50.658, 48.026, 0], "ix": 1 }, "s": { "a": 0, "k": [16.72, 16.72, 16.72], "ix": 6 } }, "ao": 0, "ip": 0, "op": 45.0000018328876, "st": 0, "bm": 0 }, { "ddd": 1, "ind": 2, "ty": 4, "nm": "home-outline-bot_s1g1_s2g2_s3g1_s4g1 Outlines", "parent": 4, "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "rx": { "a": 0, "k": 0, "ix": 8 }, "ry": { "a": 0, "k": 0, "ix": 9 }, "rz": { "a": 0, "k": 0, "ix": 10 }, "or": { "a": 0, "k": [0, 0, 0], "ix": 7 }, "p": { "a": 0, "k": [23.091, 32.228, 0], "ix": 2 }, "a": { "a": 0, "k": [12, 17.071, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 1, "k": [{ "i": { "x": 0, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 0, "s": [{ "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[6.909, 1], [17.25, 1]], "c": false }] }, { "i": { "x": 0, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 22, "s": [{ "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[7.948, 0.989], [15.626, 0.994]], "c": false }] }, { "t": 44.0000017921567, "s": [{ "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[6.909, 1], [17.25, 1]], "c": false }] }], "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0, 0, 0], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 2, "lj": 2, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 1", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 1, "k": [{ "i": { "x": 0, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 0, "s": [{ "i": [[-2.435, 0], [0, 0], [0, -2.453], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [2.435, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, -2.453]], "v": [[-2.591, -9.695], [2.591, -9.695], [7, -5.255], [7, 9.695], [0.25, 9.641], [-7, 9.695], [-7, -5.255]], "c": true }] }, { "i": { "x": 0, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 22, "s": [{ "i": [[-0.624, 1.625], [0, 0], [0, -2.453], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0.883, -0.196], [0, 0], [0, 0], [0, 0], [0, 0], [0, -2.453]], "v": [[-6.439, -8.758], [-5.383, -9.625], [-4.313, -5.246], [-4.313, 9.704], [-3.753, 9.641], [-7, 9.695], [-7, -5.255]], "c": true }] }, { "t": 44.0000017921567, "s": [{ "i": [[-2.435, 0], [0, 0], [0, -2.453], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [2.435, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, -2.453]], "v": [[-2.591, -9.695], [2.591, -9.695], [7, -5.255], [7, 9.695], [0.25, 9.641], [-7, 9.695], [-7, -5.255]], "c": true }] }], "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0, 0, 0], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 2, "lj": 2, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [12, 19.445], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 3", "np": 2, "cix": 2, "bm": 0, "ix": 2, "mn": "ADBE Vector Group", "hd": false }, { "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[-2.435, 0], [0, 0], [0, -2.453], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [2.435, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, -2.453]], "v": [[-2.591, -9.695], [2.591, -9.695], [7, -5.255], [7, 9.695], [0.25, 9.641], [-7, 9.695], [-7, -5.255]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0, 0, 0], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 2, "lj": 2, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [12, 19.445], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 2", "np": 2, "cix": 2, "bm": 0, "ix": 3, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 45.0000018328876, "st": 0, "ct": 1, "bm": 0 }, { "ddd": 1, "ind": 3, "ty": 4, "nm": "home-outline-top_s1g1_s2g1_s3g1_s4g1_background Outlines 3", "parent": 1, "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "rx": { "a": 0, "k": 0, "ix": 8 }, "ry": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 0, "s": [0] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 22, "s": [11] }, { "t": 44.0000017921567, "s": [0] }], "ix": 9 }, "rz": { "a": 0, "k": 0, "ix": 10 }, "or": { "a": 0, "k": [0, 0, 0], "ix": 7 }, "p": { "a": 0, "k": [42.636, 46.084, 0], "ix": 2 }, "a": { "a": 0, "k": [23.091, 24.649, 0], "ix": 1 }, "s": { "a": 0, "k": [526.316, 526.316, 526.316], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[4.719, 0], [0, 0], [0, 4.719], [0, 0], [-2.283, 1.599], [0, 0], [-2.943, -2.062], [0, 0], [0, -2.787], [0, 0]], "o": [[0, 0], [-4.718, 0], [0, 0], [0, -2.787], [0, 0], [2.943, -2.062], [0, 0], [2.282, 1.599], [0, 0], [0, 4.719]], "v": [[9.547, 19.649], [-9.547, 19.649], [-18.091, 11.105], [-18.091, -3.9], [-14.449, -10.898], [-4.902, -17.587], [4.903, -17.587], [14.45, -10.898], [18.091, -3.9], [18.091, 11.105]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0, 0, 0], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 2, "lj": 2, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [1, 1, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [23.091, 24.649], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 1", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 45.0000018328876, "st": 0, "ct": 1, "bm": 0 }, { "ddd": 1, "ind": 4, "ty": 4, "nm": "home-outline-top_s1g1_s2g1_s3g1_s4g1_background Outlines 2", "parent": 3, "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "rx": { "a": 0, "k": 0, "ix": 8 }, "ry": { "a": 0, "k": 0, "ix": 9 }, "rz": { "a": 0, "k": 0, "ix": 10 }, "or": { "a": 0, "k": [0, 0, 0], "ix": 7 }, "p": { "a": 0, "k": [23.091, 24.649, 0], "ix": 2 }, "a": { "a": 0, "k": [23.091, 24.649, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 1, "k": [{ "i": { "x": 0, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 0, "s": [{ "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[40.903, 19.318], [38.832, 18.471]], "c": false }] }, { "i": { "x": 0, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 22, "s": [{ "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[45.528, 21.568], [38.832, 18.471]], "c": false }] }, { "t": 44.0000017921567, "s": [{ "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[40.903, 19.318], [38.832, 18.471]], "c": false }] }], "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0, 0, 0], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [1, 1, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 1, "k": [{ "i": { "x": 0, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 0, "s": [{ "i": [[4.719, 0], [0, 0], [0, 4.719], [0, 0], [-2.283, 1.599], [0, 0], [-2.943, -2.062], [0, 0], [0, -2.787], [0, 0]], "o": [[0, 0], [-4.718, 0], [0, 0], [0, -2.787], [0, 0], [2.943, -2.062], [0, 0], [2.282, 1.599], [0, 0], [0, 4.719]], "v": [[9.547, 19.649], [-9.547, 19.649], [-18.091, 11.105], [-18.091, -3.9], [-14.449, -10.898], [-4.902, -17.587], [4.903, -17.587], [14.45, -10.898], [18.091, -3.9], [18.091, 11.105]], "c": true }] }, { "i": { "x": 0, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 22, "s": [{ "i": [[5.651, 0], [0, 0], [0, 4.719], [0, 0], [-2.283, 1.599], [0, 0], [-3.524, -1.986], [0, 0], [0, -2.685], [0, 0]], "o": [[0, 0], [-4.718, 0], [0, 0], [0, -2.787], [0, 0], [2.943, -2.062], [0, 0], [2.733, 1.54], [0, 0], [0, 4.546]], "v": [[12.624, 19.758], [-9.547, 19.649], [-18.091, 11.105], [-18.091, -3.9], [-14.449, -10.898], [-4.902, -17.587], [7.063, -16.109], [18.496, -9.666], [22.856, -2.925], [22.856, 11.528]], "c": true }] }, { "t": 44.0000017921567, "s": [{ "i": [[4.719, 0], [0, 0], [0, 4.719], [0, 0], [-2.283, 1.599], [0, 0], [-2.943, -2.062], [0, 0], [0, -2.787], [0, 0]], "o": [[0, 0], [-4.718, 0], [0, 0], [0, -2.787], [0, 0], [2.943, -2.062], [0, 0], [2.282, 1.599], [0, 0], [0, 4.719]], "v": [[9.547, 19.649], [-9.547, 19.649], [-18.091, 11.105], [-18.091, -3.9], [-14.449, -10.898], [-4.902, -17.587], [4.903, -17.587], [14.45, -10.898], [18.091, -3.9], [18.091, 11.105]], "c": true }] }], "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0, 0, 0], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 2, "lj": 2, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [1, 1, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [23.091, 24.649], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 1", "np": 3, "cix": 2, "bm": 0, "ix": 2, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 45.0000018328876, "st": 0, "ct": 1, "bm": 0 }];
const markers = [];
const props = {};
const homeAnimationData = {
  v,
  fr,
  ip,
  op,
  w,
  h,
  nm,
  ddd,
  assets,
  layers,
  markers,
  props
};
const navigationItems = Object.values(NAVIGATION_NAMES);
const goToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
function Navigation() {
  const handleNavigationClick = (event) => {
    var _a;
    const targetId = (_a = event.currentTarget.getAttribute("href")) == null ? void 0 : _a.substring(1);
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "hidden fixed bottom-10 left-0 right-0 sm:flex justify-center z-50 opacity-40 hover:opacity-100 transition-opacity", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center bg-neutral-900/40 backdrop-blur-lg rounded-full w-fit h-[64px] px-4 gap-6", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "relative w-8 h-8 shrink-0 cursor-pointer",
        onClick: goToTop,
        title: "Go to top",
        "aria-label": "Go to top",
        children: /* @__PURE__ */ jsx(Lottie, { animationData: homeAnimationData, loop: true })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "flex-1 flex items-center", children: /* @__PURE__ */ jsx("ul", { className: "flex justify-between w-full text-white text-sm px-3 gap-2", children: navigationItems.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
      motion$1.a,
      {
        onClick: handleNavigationClick,
        href: `#${item}`,
        className: "capitalize block hover:bg-black p-2 rounded-full w-[90px] text-center transition hover:scale-105 active:scale-95",
        children: item
      }
    ) }, item)) }) }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
      "div",
      {
        className: "text-white text-xl bg-neutral-300/50 cursor-not-allowed rounded-full p-1 flex items-center justify-center hover:bg-neutral-300/70 transition",
        title: "Coming soon...",
        children: /* @__PURE__ */ jsx(IoSettingsOutline, { width: 32, height: 32 })
      }
    ) })
  ] }) });
}
const detailsKeys = {
  location: "location",
  website: "website",
  github: "gitHub",
  email: "email"
};
function Details() {
  return /* @__PURE__ */ jsxs("div", { className: "grid gap-2 grid-cols-2 grid-rows-2", children: [
    /* @__PURE__ */ jsx(
      DetailItem,
      {
        title: detailsKeys.location,
        description: "Mexico",
        href: "https://www.google.com/search?q=mexico"
      }
    ),
    /* @__PURE__ */ jsx(
      DetailItem,
      {
        title: detailsKeys.website,
        description: "mrluisfer.vercel.app",
        href: "https://mrluisfer.vercel.app"
      }
    ),
    /* @__PURE__ */ jsx(
      DetailItem,
      {
        title: detailsKeys.github,
        description: "mrluisfer",
        href: "https://github.com/mrluisfer"
      }
    ),
    /* @__PURE__ */ jsx(
      DetailItem,
      {
        title: detailsKeys.email,
        description: "mrluisfeer@gmail.com",
        href: "mailto:mrluisfeer@gmail.com"
      }
    )
  ] });
}
function DetailItem({
  title,
  description,
  href = ""
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
    /* @__PURE__ */ jsx("strong", { className: "capitalize text-sm", children: title }),
    /* @__PURE__ */ jsxs(
      "a",
      {
        href,
        className: `border-b border-transparent hover:border-neutral-700 transition-colors flex items-center gap-1 w-fit group ${CONTENT_TEXT_COLOR}`,
        target: "_blank",
        rel: "noopener noreferrer",
        title: description,
        "aria-label": description,
        children: [
          title === detailsKeys.github && "@",
          title === detailsKeys.location && /* @__PURE__ */ jsxs(Avatar, { className: "h-5 w-5", children: [
            /* @__PURE__ */ jsx(
              AvatarImage,
              {
                src: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg",
                alt: "Mexico Flag",
                className: "object-cover bg-cover"
              }
            ),
            /* @__PURE__ */ jsx(AvatarFallback, { children: "MX" })
          ] }),
          description,
          /* @__PURE__ */ jsx("span", { className: "ml-1 rotate-45 opacity-0 group-hover:opacity-100 transition", children: /* @__PURE__ */ jsx(GrLinkUp, {}) })
        ]
      }
    )
  ] });
}
const AboutMe = () => {
  return /* @__PURE__ */ jsxs("div", { className: "pt-5 flex lg:items-center justify-between gap-5 flex-col lg:flex-row", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-[550px]", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold pb-2", children: "About me" }),
      /* @__PURE__ */ jsx("p", { className: `${CONTENT_TEXT_COLOR}`, children: "Frontend Engineer with 4 years of experience in developing and deploying scalable, high-performance web applications. Skilled in teamwork and communication to deliver maintainable, high-quality solutions. Passionate about learning and professional growth." })
    ] }),
    /* @__PURE__ */ jsx(Details, {})
  ] });
};
const Experience = () => {
  return /* @__PURE__ */ jsxs("div", { className: "pt-10 pb-5", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold pb-2", children: "Experience" }),
    /* @__PURE__ */ jsx("p", { className: `${CONTENT_TEXT_COLOR}`, children: "I developed a unified platform to optimize products and accelerate delivery, improved performance by 60% through API migration, and enhanced web performance by implementing best practices. I contributed to integrating tools like Sentry for API monitoring and participated in code reviews to ensure quality and scalability. I worked on integrating cookies for customer tracking, contributed to Next.js and HubSpot integration for the company\u2019s blog, and helped refactor the landing page with modern technologies, ensuring scalability. I also contributed to maintaining and improving the landing page and other products, following best practices and collaborating closely with the team to ensure timely delivery using agile methodologies." })
  ] });
};
const GITHUB_PROFILE_IMG = "https://avatars.githubusercontent.com/u/65029792?v=4";
const Header = () => {
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: `flex items-center gap-7 white-pattern pt-20 rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[50px]`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxs(Avatar, { className: "h-24 w-24", children: [
            /* @__PURE__ */ jsx(AvatarImage, { src: GITHUB_PROFILE_IMG, alt: "@mrluisfer" }),
            /* @__PURE__ */ jsx(AvatarFallback, { children: "LA" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "bg-blue-400 rounded-full absolute -bottom-1 -right-1 p-2 text-white hover:shadow-blue-300 hover:shadow-md transition-all", children: /* @__PURE__ */ jsx(FaCheck, {}) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold", children: "Luis Alvarez" }),
          /* @__PURE__ */ jsx("p", { className: `${CONTENT_TEXT_COLOR}`, children: "I'm a Frontend Developer based in Mexico" })
        ] })
      ]
    }
  );
};
const CONTENT_TEXT_COLOR = "text-neutral-500 hover:text-neutral-700 transition-colors leading-[1.8]";
function Profile() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Container, { className: "pt-24 pb-24 px-[30px] lg:px-0", asChild: true, children: /* @__PURE__ */ jsxs("div", { id: NAVIGATION_NAMES.PROFILE, children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsx(Experience, {}),
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsx(AboutMe, {})
    ] }) }),
    /* @__PURE__ */ jsx("hr", {})
  ] });
}
function truncateText(text, maxLength) {
  if (!text) return "";
  return text.length > maxLength ? text.slice(0, maxLength).trimEnd() + "\u2026" : text;
}
const Project = ({
  className,
  project,
  gradient
}) => {
  const projectDescription = truncateText(project.description, 70);
  return /* @__PURE__ */ jsxs("div", { className: "group", children: [
    /* @__PURE__ */ jsx(
      motion$1.div,
      {
        className: cn(
          "h-[400px] w-[300px] min-w-[300px] rounded-3xl border",
          `bg-cover bg-center bg-no-repeat`
        ),
        style: {
          backgroundImage: `url(${project.imageCover})`
        },
        children: /* @__PURE__ */ jsxs("div", { className: "flex h-full w-full flex-col justify-between rounded-3xl bg-black/60 p-6 transition-all", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-white", children: [
            /* @__PURE__ */ jsx(motion$1.h1, { className: "text-2xl font-bold", children: /* @__PURE__ */ jsx(
              "a",
              {
                href: project.previewUrl || project.repoUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                children: project.name
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-2 opacity-0 transition group-hover:opacity-100", children: /* @__PURE__ */ jsx(motion$1.p, { className: "text-xs", children: projectDescription }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4 opacity-0 transition group-hover:opacity-100", children: [
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-xs", children: project.technologies.map((tech, index) => /* @__PURE__ */ jsx(
              "span",
              {
                className: "font-semibold text-gray-300 opacity-70 transition hover:text-gray-100 hover:opacity-100",
                children: tech
              },
              index
            )) }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  className: "rounded-2xl bg-gray-400 px-2 py-1 text-xs text-gray-900 transition hover:bg-gray-100 hover:shadow-md",
                  href: project.repoUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "Repository"
                }
              ),
              project.previewUrl && /* @__PURE__ */ jsx(
                "a",
                {
                  href: project.previewUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-gray-300 transition hover:scale-110 hover:text-gray-100",
                  children: /* @__PURE__ */ jsx(MoveDownRight, {})
                }
              )
            ] })
          ] })
        ] })
      }
    ),
    project.imgAuthor ? /* @__PURE__ */ jsx(motion$1.div, { className: "px-2 text-xs opacity-0 transition group-hover:opacity-100", children: /* @__PURE__ */ jsxs("p", { className: "text-gray-400 transition hover:text-gray-900", children: [
      "Thanks!, Shutout to",
      " ",
      /* @__PURE__ */ jsxs(
        "a",
        {
          className: "capitalize",
          href: `https://unsplash.com/@${project == null ? void 0 : project.imgAuthor.toLowerCase().split(" ").join("-")}`,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [
            "@",
            project.imgAuthor
          ]
        }
      )
    ] }) }) : null
  ] });
};
const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgba(${r}, ${g}, ${b}, 0.5)`;
};
const ShadowBox = ({ children, className }) => {
  const [shadowColor1, setShadowColor1] = useState(getRandomColor());
  const [shadowColor2, setShadowColor2] = useState(getRandomColor());
  useEffect(() => {
    const interval = setInterval(() => {
      setShadowColor1(getRandomColor());
      setShadowColor2(getRandomColor());
    }, 2e3);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ jsx(
    motion$1.div,
    {
      className: clsx(
        "relative rounded-lg bg-white dark:bg-gray-900 transition-all duration-500 opacity-75)",
        className
      ),
      style: {
        boxShadow: `10px 10px 30px ${shadowColor1}, -10px -10px 30px ${shadowColor2}`
      },
      children
    }
  );
};
const projects = [
  {
    name: "Monfly",
    description: "Monfly provides an integrated solution for personal financial management. You can track and categorize your financial activity, set alerts, analyze spending with beautiful dashboards, and manage your profile with secure authentication.",
    repoUrl: "https://github.com/mrluisfer/monfly",
    previewUrl: "https://monfly.vercel.app",
    technologies: [
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "TanStack",
      "Shadcn UI",
      "Node.js"
    ],
    imageCover: "/projects/monfly-preview.webp",
    imgAuthor: "Nathan Dumlao"
  },
  {
    name: "Bamb\xFA",
    description: "Bamb\xFA is a personal project, simulating a company in which people can get closer to technology, offering personalized service and modern solutions.",
    repoUrl: "https://github.com/mrluisfer/bambu",
    previewUrl: "https://bambu-tech.vercel.app",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Shadcn UI",
      "Node.js",
      "i18next",
      "Zod"
    ],
    imageCover: "/projects/bambu-preview.webp",
    imgAuthor: "Evie S."
  },
  {
    name: "Portfolio 2025",
    description: "Portfolio 2025 is a modern, highly interactive personal portfolio leveraging Astro and React. The project aims to present professional experience, skills, projects, and personal branding via an animated, performant, and maintainable UI.",
    repoUrl: "https://github.com/mrluisfer/portfolio-2025",
    previewUrl: "https://mrluisfer.vercel.app",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Node.js",
      "i18next",
      "Octokit",
      "Lucide React",
      "Spotify Api",
      "Astro"
    ],
    imageCover: "/projects/portfolio-preview.webp",
    imgAuthor: "Mohammad Rahmani"
  },
  {
    name: "Spotify Api Kit",
    description: "A modern, type-safe TypeScript wrapper for the Spotify Web API, designed for secure Node.js backend applications.",
    previewUrl: "https://www.npmjs.com/package/spotify-api-kit",
    repoUrl: "https://github.com/mrluisfer/spotify-api-kit",
    technologies: ["TypeScript", "Node.js", "Spotify Api", "Express.js", "Jest", "NPM"],
    imageCover: "/projects/spotify-preview.webp",
    imgAuthor: "sadaf amininia"
  },
  {
    name: "JS Challenges Hub",
    description: "Multiple Frontend Mentor challenges to avoid having multiple free hosting and keeping learning resources organized.",
    repoUrl: "https://github.com/mrluisfer/js-challenge-hub",
    previewUrl: "https://jschallenges-hub.vercel.app/",
    technologies: ["TypeScript", "Tailwind CSS", "React", "Vite", "React Router", "Zod"],
    imageCover: "/projects/challenges-preview.webp",
    imgAuthor: "Kevin Canlas"
  },
  {
    name: "Neovim Config",
    description: "Neovim config and adapted for the Frontend and Backend development, and easy to adapt to any config.",
    repoUrl: "https://github.com/mrluisfer/nvim",
    imageCover: "/projects/nvim-preview.webp",
    technologies: [
      "Neovim",
      "Lua",
      "LSP",
      "Treesitter",
      "Telescope",
      "Mason",
      "Nvim Tree",
      "Lualine",
      "Git"
    ],
    imgAuthor: "Luca Bravo"
  },
  {
    name: "Seo Generator",
    description: "A simple tool to generate SEO metadata for web pages, including Open Graph and Twitter Card tags.",
    repoUrl: "https://github.com/mrluisfer/seo-generator",
    previewUrl: "https://seo-generator.vercel.app",
    technologies: ["TypeScript", "React", "Tailwind CSS", "Vite"],
    imageCover: "/projects/seo-preview.webp",
    imgAuthor: "Myriam Jessier"
  }
];
function Projects() {
  return /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsxs("div", { id: NAVIGATION_NAMES.PROJECTS, className: "mt-36", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Title$1, { children: /* @__PURE__ */ jsx("h1", { children: "My Projects" }) }),
      /* @__PURE__ */ jsx(
        motion$1.span,
        {
          className: "block text-center",
          initial: { opacity: 0 },
          whileInView: { opacity: 0.5 },
          transition: { duration: 0.5 },
          children: "I'm currently working on"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden pt-20", children: [
      /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute top-0 left-0 z-10 h-full w-10 bg-gradient-to-r from-white via-white/70 to-transparent" }),
      /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute top-0 right-0 z-10 h-full w-10 bg-gradient-to-l from-white via-white/70 to-transparent" }),
      /* @__PURE__ */ jsx(
        motion$1.div,
        {
          className: "flex gap-6 active:cursor-grabbing",
          drag: "x",
          dragConstraints: { left: -1300, right: 0 },
          initial: { x: 0 },
          animate: { x: 0 },
          whileTap: { cursor: "grabbing" },
          transition: { type: "spring", stiffness: 300, damping: 30 },
          children: projects.map((project, index) => /* @__PURE__ */ jsx(
            motion$1.div,
            {
              className: clsx(
                "flex-shrink-0",
                index === 0 && "ml-10",
                index === projects.length - 1 && "mr-10"
              ),
              children: /* @__PURE__ */ jsx(Project, { project })
            },
            project.name
          ))
        }
      )
    ] })
  ] }) });
}
const divideArray = (array, size) => {
  const dividedArray = [];
  for (let i = 0; i < array.length; i += size) {
    dividedArray.push(array.slice(i, i + size));
  }
  return dividedArray;
};
const technologies = [
  {
    Icon: Expressjs,
    name: "Express.js"
  },
  {
    Icon: React,
    name: "React"
  },
  {
    Icon: Nodejs,
    name: "Node.js",
    customGlowColor: "#8CC84B"
  },
  {
    Icon: TailwindCSS,
    name: "Tailwind CSS"
  },
  {
    Icon: Git,
    name: "Git"
  },
  {
    Icon: TypeScript,
    name: "TypeScript"
  },
  {
    Icon: Socketio,
    name: "Socket.io"
  },
  {
    Icon: Motion,
    name: "Framer Motion",
    customGlowColor: "#fff42b"
  },
  {
    Icon: Vercel,
    name: "Vercel"
  },
  {
    Icon: NestJS,
    name: "NestJS"
  },
  {
    Icon: JavaScript,
    name: "JavaScript"
  },
  {
    Icon: PostgreSQL,
    name: "PostgreSQL",
    customGlowColor: "#0064a5"
  },
  {
    Icon: StyledComponents,
    name: "Styled Components",
    customGlowColor: "#FAA0E6"
  },
  {
    Icon: Prisma,
    name: "Prisma",
    customGlowColor: "#0A0B16"
  },
  {
    Icon: Vitest,
    name: "Vitest"
  },
  {
    Icon: Vite,
    name: "Vite",
    customGlowColor: "#857BFF"
  },
  {
    Icon: Jest,
    name: "Jest"
  },
  {
    Icon: Redux,
    name: "Redux"
  },
  {
    Icon: Python,
    name: "Python",
    customGlowColor: "#4B8BBE"
  },
  {
    Icon: Sass,
    name: "Sass"
  },
  {
    Icon: Deno,
    name: "Deno",
    customGlowColor: "#70FFAF"
  }
];
const getGlowColor = (svgElementRef) => {
  if (!(svgElementRef == null ? void 0 : svgElementRef.current)) {
    console.error("svgRef.current is null");
    return;
  }
  const path = svgElementRef.current.querySelector("path");
  if (!path) return;
  const fill = window.getComputedStyle(path).fill;
  const colorRegex2 = /^rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)$|^#([0-9A-Fa-f]{3}){1,2}$/;
  return colorRegex2.test(fill) ? fill : void 0;
};
function TechnologyCard({ Icon, customGlowColor }) {
  const svgRef = useRef(null);
  const hasIcon = Boolean(Icon);
  const IconElement = Icon || (() => null);
  const [glowColor, setGlowColor] = useState(customGlowColor);
  useEffect(() => {
    if (svgRef.current && !glowColor) {
      const glowColor2 = getGlowColor(svgRef);
      setGlowColor(glowColor2);
    }
  }, []);
  return /* @__PURE__ */ jsx(
    motion$1.div,
    {
      className: "technology-card-glow relative grid h-24 w-24 place-items-center rounded-xl border-0 sm:border bg-transparent sm:bg-neutral-200 backdrop-blur-xl",
      style: {
        "--glow-color": glowColor,
        borderColor: "#d4d4d4"
      },
      whileHover: hasIcon ? { scale: 1.1, borderColor: glowColor } : {},
      whileTap: hasIcon ? { scale: 0.9, borderColor: glowColor } : {},
      children: /* @__PURE__ */ jsx(motion$1.div, { className: "relative z-10 flex h-full w-full items-center justify-center rounded-xl bg-transparent sm:bg-neutral-200 text-4xl", children: hasIcon && /* @__PURE__ */ jsx(IconElement, { ref: svgRef }) })
    }
  );
}
const TechnologyCard$1 = memo(TechnologyCard);
function useMediaQuery(query) {
  const subscribe = useCallback(
    (callback) => {
      const matchMedia = window.matchMedia(query);
      matchMedia.addEventListener("change", callback);
      return () => {
        matchMedia.removeEventListener("change", callback);
      };
    },
    [query]
  );
  const getSnapshot = () => {
    return window.matchMedia(query).matches;
  };
  const getServerSnapshot = () => {
    throw Error("useMediaQuery is a client-only hook");
  };
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
function Row({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "mb-6 lg:grid flex grid-cols-9 justify-center gap-6", children });
}
function Technologies() {
  const isLessThan768 = useMediaQuery("only screen and (max-width: 768px)");
  const isLessThan450 = useMediaQuery("only screen and (max-width: 450px)");
  const cardPlaceholderLength = useMemo(() => {
    if (isLessThan768) {
      return isLessThan450 ? [] : new Array(5).fill(null);
    }
    return new Array(9).fill(null);
  }, [isLessThan768, isLessThan450]);
  const technologiesDivided = useMemo(() => {
    return divideArray(technologies, isLessThan768 ? 5 : 7);
  }, [isLessThan768]);
  return /* @__PURE__ */ jsxs("div", { className: "mask-fade-x justify-center pt-[100px] sm:py-0", children: [
    cardPlaceholderLength.length > 0 && /* @__PURE__ */ jsx(Row, { children: cardPlaceholderLength.map((_, i) => /* @__PURE__ */ jsx(TechnologyCard$1, {}, `ph-top-${i}`)) }),
    technologiesDivided.map((row, i) => /* @__PURE__ */ jsxs(Row, { children: [
      /* @__PURE__ */ jsx(TechnologyCard$1, {}, `left-${i}`),
      row.map(({ name, Icon, customGlowColor }) => /* @__PURE__ */ jsx(TechnologyCard$1, { Icon, customGlowColor }, name)),
      /* @__PURE__ */ jsx(TechnologyCard$1, {}, `right-${i}`)
    ] }, `row-${i}`)),
    cardPlaceholderLength.length > 0 && !isLessThan768 && /* @__PURE__ */ jsx(Row, { children: cardPlaceholderLength.map((_, i) => /* @__PURE__ */ jsx(TechnologyCard$1, {}, `ph-bottom-${i}`)) })
  ] });
}
function Skills() {
  return /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsxs("div", { className: "general-pattern technologies-shadow-y my-6 p-10", id: NAVIGATION_NAMES.SKILLS, children: [
    /* @__PURE__ */ jsx(Title$1, { children: /* @__PURE__ */ jsx(
      motion$1.h1,
      {
        className: "absolute -top-[30px] z-20 drop-shadow-2xl",
        initial: { opacity: 0.8 },
        whileInView: { opacity: 1 },
        children: "Building projects with the most powerful and trending frontend and backend technologies."
      }
    ) }),
    /* @__PURE__ */ jsx(Technologies, {})
  ] }) });
}
function getCurrentFormattedDate() {
  const date = /* @__PURE__ */ new Date();
  return date.toDateString();
}
function BlueText({ children }) {
  return /* @__PURE__ */ jsx("span", { className: "font-medium text-blue-500", children });
}
function GreenText({ children }) {
  return /* @__PURE__ */ jsx("span", { className: "font-medium text-green-500", children });
}
function GrayText({ children }) {
  return /* @__PURE__ */ jsx("span", { className: "text-gray-500 transition hover:text-gray-600", children });
}
const terminalLogs = [
  /* @__PURE__ */ jsx("span", {}),
  /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsxs(GrayText, { children: [
    "Last Session: ",
    getCurrentFormattedDate()
  ] }) }, 0),
  /* @__PURE__ */ jsxs("span", { children: [
    /* @__PURE__ */ jsx(BlueText, { children: "mrluisfeer@" }),
    " ",
    /* @__PURE__ */ jsx(GreenText, { children: "~ $" }),
    " ",
    /* @__PURE__ */ jsx(GrayText, { children: 'echo "Hello, World!"' })
  ] }, 1),
  /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(GrayText, { children: "Hello, World!" }) }, 2),
  /* @__PURE__ */ jsxs("span", { children: [
    /* @__PURE__ */ jsx(BlueText, { children: "mrluisfeer@" }),
    " ",
    /* @__PURE__ */ jsx(GreenText, { children: "~ $" }),
    " ",
    /* @__PURE__ */ jsx(GrayText, { children: "cat POEM.md" })
  ] }, 3),
  /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(GrayText, { children: "A ship in harbor is safe, but that is not what ships are built for." }) }, 4)
];
function Content() {
  const [lines, setLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  useEffect(() => {
    if (currentIndex < terminalLogs.length) {
      const textContent = terminalLogs[currentIndex].props.children;
      if (typeof textContent === "string") {
        if (charIndex < textContent.length) {
          const timeout = setTimeout(() => {
            setCurrentLine(/* @__PURE__ */ jsx("span", { children: textContent.slice(0, charIndex + 1) }));
            setCharIndex((prev) => prev + 1);
          }, 50);
          return () => clearTimeout(timeout);
        }
      } else {
        setLines((prev) => [...prev, terminalLogs[currentIndex]]);
        setCurrentLine(null);
        setCurrentIndex((prev) => prev + 1);
        setCharIndex(0);
      }
    }
  }, [charIndex, currentIndex]);
  return /* @__PURE__ */ jsxs("div", { className: "font-mono text-sm leading-relaxed text-gray-800", children: [
    lines.map((line, index) => /* @__PURE__ */ jsx(
      motion$1.span,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.5 },
        style: { display: "block" },
        children: line
      },
      index
    )),
    currentIndex < terminalLogs.length && /* @__PURE__ */ jsxs(motion$1.span, { children: [
      currentLine,
      /* @__PURE__ */ jsx(
        motion$1.span,
        {
          animate: { opacity: [0, 1, 0] },
          transition: { repeat: Infinity, duration: 0.7 },
          children: "|"
        }
      )
    ] })
  ] });
}
function TerminalDot({ color, Icon }) {
  const IconComponent = Icon || (() => null);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `group flex h-3 w-3 items-center justify-center rounded-full active:scale-95 ${color}`,
      children: /* @__PURE__ */ jsx(IconComponent, { className: "text-gray-600 opacity-0 transition group-hover:opacity-70" })
    }
  );
}
function Terminal() {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "general-pattern relative bg-gradient-to-br py-[200px]",
      id: NAVIGATION_NAMES.TERMINAL,
      children: /* @__PURE__ */ jsx(motion$1.div, { className: "mx-auto md:w-[600px] rounded-lg shadow-2xl shadow-neutral-200", children: /* @__PURE__ */ jsxs(ShadowBox, { children: [
        /* @__PURE__ */ jsxs("header", { className: "relative flex items-center rounded-t-lg bg-neutral-200 px-4 py-2 transition hover:brightness-95", children: [
          /* @__PURE__ */ jsxs("div", { className: "absolute flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(TerminalDot, { color: "bg-red-400", Icon: IoClose }),
            /* @__PURE__ */ jsx(TerminalDot, { color: "bg-yellow-400", Icon: GoDash }),
            /* @__PURE__ */ jsx(TerminalDot, { color: "bg-green-400", Icon: FiMaximize2 })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mx-auto font-mono opacity-50", children: "Terminal" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "rounded-b-lg bg-neutral-100 px-4 py-4", children: /* @__PURE__ */ jsx(Content, {}) })
      ] }) })
    }
  );
}
const SplitComponent = function Home() {
  return /* @__PURE__ */ jsxs("main", { className: "", children: [
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(About, {}),
    /* @__PURE__ */ jsx(Terminal, {}),
    /* @__PURE__ */ jsx(Skills, {}),
    /* @__PURE__ */ jsx(Projects, {}),
    /* @__PURE__ */ jsx(Grid, {}),
    /* @__PURE__ */ jsx(Profile, {}),
    /* @__PURE__ */ jsx(Connect, {}),
    /* @__PURE__ */ jsx(Navigation, {})
  ] });
};

export { SplitComponent as component };
//# sourceMappingURL=index-BJotau2V.mjs.map
