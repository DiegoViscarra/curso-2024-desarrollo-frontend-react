import Logo from './_components/Logo';
import Description from './_components/Description';
import OpenLink from '../components/OpenLink';
import LessonInfo from './_components/LessonInfo';

const Default = () => {
    return (
        <>
            <header className="App-header">
                <Logo />
                <Description />
                <OpenLink title="Learn React" url="https://reactjs.org" />
                <OpenLink title="GitHub Repository" url="https://github.com/DiegoViscarra/curso-2024-desarrollo-frontend-react" />
                <LessonInfo unitNumber="1" title="Introducción a react y estructura de proyecto" />
                <LessonInfo unitNumber="2" title="Context API para la gestión del estado global en aplicaciones react" />
            </header>
        </>
    );
};

export default Default;