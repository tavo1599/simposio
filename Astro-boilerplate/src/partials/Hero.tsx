import {
  GradientText,
  HeroAvatar,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          II Simposio de <GradientText>Innovacion</GradientText> 👋
        </>
      }
      description={
        <>
          El {' '}
          <a className="text-cyan-400 hover:underline" href="/">
          Simposio
          </a>{' '}
          de Innovación abordó una amplia gama de temas relacionados con el desarrollo económico y social en{' '}
          <a className="text-cyan-400 hover:underline" href="/">
          Perú
          </a>{' '}
          y América Latina, centrándose en cómo la innovación y la tecnología pueden ser impulsor de cambio y crecimiento.
          
        </>
      }
      avatar={
        <img
          className="h-80 "
          src="/assets/images/innovacion1.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
        </>
      }
    />
  </Section>
);

export { Hero };
