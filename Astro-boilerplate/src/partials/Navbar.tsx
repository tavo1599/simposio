import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';


const Navbar = () => (
  <div className="navbar-fixed">
    <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
            <img
            className='m-2'
            src="/assets/images/descargaicon.png"
            loading="lazy"
            />
          }
          name="UPeU"
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/">Inicio</NavMenuItem>
        <NavMenuItem href="/posts/">Ponencias</NavMenuItem>
        <NavMenuItem href="/gallery/">Galeria</NavMenuItem>

      </NavMenu>
    </NavbarTwoColumns>
  </Section>
  </div>
);

export { Navbar };
