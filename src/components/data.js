import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/soundsystem2.jpg";
import benefitTwoImg from "../../public/img/moving-head.webp";

const benefitOne = {
  title: "Highlight your benefits",
  desc: "Inilah keuntungan yang kamu dapat jika kamu memesan jasa sound system milik kami",
  image: benefitOneImg,
  bullets: [
    {
      title: "Kualitas suara jernih",
      desc: "Kualitas suara jernih dan merata",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Dukungan teknisi ahli",
      desc: "Teknisi kami ahli dan profesional.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Perlatan lengkap",
      desc: "Kami dapat menyediakan berbagai peralatan sound lengkap sesuai kebutuhan anda.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Tampilan lebih profesional",
      desc: "Alat yang kami gunakan modern dan masih sangat baik.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Harga terjangkau",
      desc: "Harga yang kami tawarkan cocok dengan budget anda.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Hemat waktu dan tenaga",
      desc: "Kami akan menghemat waktu dan tenaga anda dalam menyiapkan sound system acara ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
