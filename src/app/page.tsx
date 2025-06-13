import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="AFR Benefits"
        title="Kenapa Kamu Harus Pesan di AFR"
      >
        Kami menggunakan peralatan sound system berkualitas tinggi 
        yang mampu menghasilkan suara jernih, 
        kuat, dan stabil, baik untuk acara indoor maupun outdoor.

      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="Watch a video"
        title="Video Profil Kami"
      >
        Berikut adalah contoh keuntungan yang bisa kamu dapatkan
        jika memesan jasa sound system di AFR Production
      </SectionTitle>

      <Video videoId="fB2OGpP7-sw" />

      <SectionTitle
        preTitle="Testimoni"
        title="Inilah yang customer kami katakan"
      >
        
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Pertanyaan yang sering diajukan">
        .
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
