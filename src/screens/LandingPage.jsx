import React from 'react';

const LandingPage = () => {
    return (
        <div className="container-landing-page">
            <header>
                <h1>Módulo 7: DESARROLLO FRONTEND CON REACTJS</h1>
            </header>
            <section>
                <h1 className="h1-landing-page">Bienvenido</h1>
                <hr className="solid"></hr>
                <p>
                    Este módulo se centra en el uso de <b>React</b>, incluyendo la creación de <b>componentes</b>, el manejo de <b>hooks</b> y el uso de <b>Redux</b>.
                </p>
            </section>
            <section>
                <h1 className="h1-landing-page">Temas Cubiertos</h1>
                <hr className="solid"></hr>
                <ul>
                    <li>Componentes funcionales y de clase</li>
                    <li>Uso de <b>React hooks</b> como useState y useEffect</li>
                    <li>Creación de <b>custom hooks</b> como useForm</li>
                    <li>Gestión de variables de estado con <b>useState</b></li>
                    <li>Gestión de estado global con <b>Redux</b></li>
                    <li>Integración de <b>Redux</b> con <b>React</b></li>
                    <li>Manejo de <b>Formularios</b> en <b>React</b></li>
                    <li>Publicando nuestra <b>Pagina</b> con <b>GitHub Pages</b></li>
                </ul>
            </section>
            <section>
                <h1 className="h1-landing-page">Recursos Adicionales</h1>
                <hr className="solid"></hr>
                <p>Para profundizar en los temas cubiertos, consulta los siguientes recursos:</p>
                <ul>
                    <li><a href="https://github.com/" className="a-logout">GitHub</a></li>
                    <li><a href="https://react.dev/" className="a-logout">Redux Pages</a></li>
                </ul>
            </section>
            <footer>
                <hr className="rounded"></hr>
                <p>© 2024 Módulo 7. USIP.</p>
            </footer>
        </div>
    );
};

export default LandingPage;