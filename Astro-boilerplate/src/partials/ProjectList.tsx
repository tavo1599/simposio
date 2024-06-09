import {
  
  GradientText,
  Project,
  Section,
  
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Perfil <GradientText>Ponentes</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Adm. Jimy E. Curo Mamani"
        description="CEO & Founder en Lidera StartUp | Presidente Comunitarios | Desarrollo e Innovacion Empresarial  | Community Builder"
        link="/"
        img={{
          src: '/assets/images/jimy.jpg',
          alt: 'Project Web Design',
        }}
        category={
          <>
          </>
        }
      />
      <Project
        name="MsC. Kent E. Yucra Apaza"
        description="Tengo una Maestría en Informática por la UNICAMP y mi principal interés de investigación son los campos:
         informática teórica e ingeniería de software. Mi experiencia previa fue como Ingeniero de Software en Bloomberg LP,
          donde trabajé con tecnologías basadas en web, como Swift, Objective C, C++, Python y Algoritmos."
        link="/"
        img={{ src: '/assets/images/kent.jfif', alt: 'Project Fire' }}
        category={
          <>
          </>
        }
      />
      <Project
        name="Ing. Alvaro Canchaya"
        description="Gerente Regional en Optical Networks con mas de 15 años de experiencia  liderando proyectos de Gestion de TI.
        Consultor y docente universitario. Instructor de Cisco, Microsoft e ITIL."
        link="/"
        img={{ src: '/assets/images/alvaro.jpg', alt: 'Project Maps' }}
        category={
          <>
          </>
        }
      />
      <Project
        name="Dr. Eleodoro Octavio Mayorga Alba"
        description="Ingeniero Peruano, especializado en materia de petróleo e hidrocarburos.
         Fue Ministro de Energía y Minas del Perú, desde el 24 de febrero de 2014 hasta el 17 de febrero de 2015."
        link="/"
        img={{ src: '/assets/images/eleodo.jpg', alt: 'Project Maps' }}
        category={
          <>
          </>
        }
      />
      <Project
        name="Ing. Susana Gladis Vilca Achata"
        description="Ingeniero de Minas, con Maestría en Tecnologías de Protección Ambiental. Estudios concluidos de Maestría
         en Gestión Minera. Designada Doctor Honoris Causa. 34 años de experiencia profesional en el sector público y privado.
          Gestión transformadora e innovadora orientada a resultados."
        link="/"
        img={{ src: '/assets/images/gladis.jpg', alt: 'Project Maps' }}
        category={
          <>
          </>
        }
      />
      <Project
        name="Dr. Franz Zirena Vilca"
        description="obtuvo una licenciatura en Ingeniería Agronómica y una maestría en Agricultura Andina de la Universidad 
        Nacional del Altiplano en Perú. Obtuvo su doctorado en Ecología Aplicada en la Universidad de São Paulo en Brasil, y 
        realizó una estancia posdoctoral en el Centro de Energía Nuclear para la Agricultura de la misma universidad. También ha 
        sido investigador visitante en Colombia, Japón y España."
        link="/"
        img={{ src: '/assets/images/franz.jpg', alt: 'Project Maps' }}
        category={
          <>
          </>
        }
      />
      <Project
        name="Ing. CIP Roque Benavides Ganoza"
        description="Influyente empresario peruano, reconocido por su liderazgo en el sector minero como presidente de
         Buenaventura y la SNMPE. Ha impulsado el desarrollo sostenible de la industria minera en Perú y ha tenido un impacto 
         significativo en la economía nacional."
        link="/"
        img={{ src: '/assets/images/roque.jpg', alt: 'Project Maps' }}
        category={
          <>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
