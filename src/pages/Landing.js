import React from 'react';
import QUERIES, {
    Main,
    Midi,
    Heading,
    Full,
    Image,
    Paragraph,
} from '../theming/styles';
import styled from 'styled-components';
import { Nav, Foot, Project } from '../components';
import { Spread } from '../components/switch/styles';
import { Awk1, Vuln, Devops, EA1Image } from '../images';

const Split = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    margin: 200px auto;
    flex-wrap: wrap;

    > * {
        width: 100%;

        @media (${QUERIES.large}) {
            width: calc(50% - 20px);
        }
    }
`;

const Landing = ({ toggleMode, mode, spread, setDisableScroll }) => {
    const spreadClass =
        spread === 'first'
            ? 'growBlack'
            : spread === 'second'
            ? 'growWhite'
            : '';

    return (
        <Main
            style={{
                position: 'relative',
                overflow: setDisableScroll ? 'hidden' : 'null',
                height: setDisableScroll ? '100vh' : 'unset',
            }}
        >
            <Spread className={spreadClass} />
            <Nav mode={mode} toggleMode={toggleMode} />
            <Midi style={{ mixBlendMode: 'difference' }}>
                <Heading
                    style={{
                        mixBlendMode: 'difference',
                        color: 'white',
                    }}
                >
                    <span style={{ fontWeight: 300 }}>Product Designer</span>{' '}
                    crafting beautiful
                    <span style={{ fontStyle: 'italic' }}> digital</span> user
                    experiences
                </Heading>
            </Midi>
            <Full>
                <Image style={{ backgroundImage: `url(${Awk1})` }} />
            </Full>
            <Midi>
                <Split>
                    <Heading style={{ textAlign: 'left', marginLeft: 0 }}>
                        What's a UX Engineer?
                    </Heading>
                    <Paragraph>
                        As a UX Engineer, I have the design thinking and visual
                        expertise of a designer, as well as the technical skills
                        of a frontend software engineer. <br /> <br />
                        This allows me to advocate for users and create powerful
                        visual designs, wireframes, storyboards, and prototypes
                        while also understanding the technical limitations and
                        challenges that engineers may face. I'm also able to
                        code out prototypes and build component libraries with
                        user needs and accessibility in mind.
                    </Paragraph>
                </Split>
            </Midi>

            <Full
                style={{ display: 'flex', flexDirection: 'column', gap: 160 }}
            >
                <Project
                    name='Unity Cloud'
                    image={EA1Image}
                    url='ea1'
                    description='Enterprise cloud solutions for real-time 3D company Unity Technologies'
                />
                <Project
                    name='Scotiabank iTRADE'
                    url='movie'
                    description='Reimagining how we trade equity and options on mobile'
                />
                <Project
                    name='Neurocatch Software'
                    image={Vuln}
                    url='vuln'
                    description='Optimizing the onboarding and report proccess for brain scans'
                /> 

                <Project
                    name='Workplace Safety Plan Builder'
                    image={Devops}
                    url='devops'
                    description='One-stop service that guides you through the process of recognizing, assessing and controlling workplace hazards

'
                />
            </Full>

            <Foot />
        </Main>
    );
};

export { Landing };
