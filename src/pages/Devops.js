import React, { useState } from 'react';
import QUERIES, {
    Main,
    Midi,
    Heading2,
    Full,
    Paragraph2,
    Paragraph,
} from '../theming/styles';
import styled from 'styled-components';
import { Nav, Foot, Lock } from '../components';
import { Spread } from '../components/switch/styles';
import {
    Devops,
    AppMap,
    FinalDesktop,
    FinalMobile,
    HazardFlow,
    Iteration1,
    Iteration2,
    Persona1,
    Persona2,
    ProductVision,
    SafetyPlanFlow,
    UserInterview,
    UserSynthesis,
} from '../images';

const FlexGroup = styled.div`
    margin: 60px 0;
    display: flex;
    justify-content: space-between;
    gap: 50px;
    flex-wrap: wrap;

    @media (${QUERIES.large}) {
        flex-wrap: nowrap;
        gap: 100px;
    }
`;

const ImageGrow = styled.img`
    :hover {
        cursor: zoom-in;
    }
`;

const DevopsPage = ({ toggleMode, mode, spread }) => {
    const [isLocked, setIsLocked] = useState(true);
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
                overflow: isLocked ? 'hidden' : 'null',
                height: isLocked ? '100vh' : 'unset',
            }}
        >
            <Lock isLocked={isLocked} setIsLocked={setIsLocked} />
            <Spread className={spreadClass} />
            <Nav mode={mode} toggleMode={toggleMode} />
            <Midi style={{ marginBottom: 100, mixBlendMode: 'difference' }}>
                <Heading2
                    style={{
                        marginBottom: 35,
                        mixBlendMode: 'difference',
                        color: 'white',
                    }}
                >
                    Workplace Safety Plan Builder
                </Heading2>
                <Paragraph2
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    
                    The Ministry of Transportation has a cluster that provides 
                    IT & Software services to their clients in Ontario. They reached
                    out to me to consult on a project called the workplace safety plan
                    builder. Businesses can use this tool to aid in all areas relating
                    to health and safety.
                    <br /> <br /> 
                    They developed an existing tool as a proof of concept, and now needed
                    interface and user experience design.{' '}
                </Paragraph2>
                <FlexGroup>
                    <div>
                        <Heading2
                            style={{
                                fontSize: 25,
                                lineHeight: '30px',
                                fontWeight: 300,
                                mixBlendMode: 'difference',
                                color: 'white',
                            }}
                        >
                            Design Process
                        </Heading2>
                        <Paragraph2
                            style={{
                                maxWidth: 700,
                            }}
                        >
                            I followed a three stage process. User research, with a focus on 
                            understanding user needs. Testing, by developing robust user flows 
                            and journeys, wireframes and medium-fidelity prototypes. 
                            Visual design, by creating high-fidelity mockups, addressing developer 
                            concerns and refining details.
                        </Paragraph2>
                    </div>
                    <div>
                        <Heading2
                            style={{
                                fontSize: 25,
                                lineHeight: '30px',
                                fontWeight: 300,
                                mixBlendMode: 'difference',
                                color: 'white',
                            }}
                        >
                            My Role
                        </Heading2>
                        <Paragraph2
                            style={{
                                maxWidth: 700,
                            }}
                        >
                            I was the sole designer on the project, engaging with the client, and working
                            with the engineering team.
                        </Paragraph2>
                    </div>
                </FlexGroup>
            </Midi>
            <Full>
                <ImageGrow
                    onClick={() => {
                        window.open(
                            '/static/media/devops.59b998931d4803f39381.png',
                            '_blank',
                            'noopener,noreferrer'
                        );
                    }}
                    src={Devops}
                    style={{
                        width: '100%',
                    }}
                    alt='Low fidelity wireframes that display movie theater seat selection flow'
                />{' '}

            </Full>
            <Midi style={{ marginBottom: 0 }}>
                <Heading2 style={{ marginBottom: 30, fontSize: 35 }}>
                    Product Vision
                </Heading2>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    I began with meeting with the client to re-establish the product
                    vision. I wanted to determine quickly if this project was going to
                    be an "enhancement", or a net new effort. Based on how the client
                    was describing desired features and functionality, it became clear it 
                    was the latter. This meant a complete end-to-end design.
                    <br /> <br /> 
                    After a few workshops, I was able to naildown the overall flow and core functionality.
                </Paragraph>
            
                <ImageGrow
                    onClick={() => {
                        window.open(
                            '/static/media/product-vision.57fa84ade27f329b9131.png',
                            '_blank',
                            'noopener,noreferrer'
                        );
                    }}
                    src={ProductVision}
                    style={{
                        marginTop: 50,
                        width: '100%',
                    }}
                    alt='Low fidelity wireframes that display movie theater seat selection flow'
                />{' '}
            
            </Midi>
            
            <Midi style={{ marginBottom: 0 }}>
                <Heading2 style={{ marginBottom: 30, fontSize: 35 }}>
                    User Journeys
                </Heading2>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    I was able to consume a great deal of user research done during the initial
                    descovery for the POC. This consisted of recorded user interviews, and the
                    accompanying notes. From this, I was able to build 2 user personas and journey maps.
        
                </Paragraph>
            </Midi>

            <Full>
                <div
                    style={{
                        margin: '60px 0',
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: 100,
                    }}
                >
                    {' '}

                    <ImageGrow
                            onClick={() => {
                                window.open(
                                    '/static/media/persona-1.f72d3ada2818445391b7.png',
                                    '_blank',
                                    'noopener,noreferrer'
                                );
                            }}
                            src={Persona1}
                            style={{
                                width: 'calc(50% - 50px)',
                                filter: 'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                            }}
                            alt='Low fidelity wireframes that display movie theater seat selection flow'
                        />{' '}


                    <ImageGrow
                            onClick={() => {
                                window.open(
                                    '/static/media/persona-2.71a2479e2434ab1d763e.png',
                                    '_blank',
                                    'noopener,noreferrer'
                                );
                            }}
                            src={Persona2}
                            style={{
                                width: 'calc(50% - 50px)',
                                filter: 'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                            }}
                            alt='Low fidelity wireframes that display movie theater seat selection flow'
                        />{' '}

                </div>
            </Full>

            <Midi style={{ marginBottom: 0 }}>
                <Heading2 style={{ marginBottom: 30, fontSize: 35 }}>
                    Information Architecture
                </Heading2>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    I now had a clear understanding of the product vision, desired functionality and the user journey. The
                    application had a large scope due to the features and content required for MVP. It was
                    pertinent that I focus my attention on minimizing both design and tech debt. 

                    <br /> <br /> 
                    I created
                    an application map, where the entire team could understand granularly what fell into
                    MVP, and what could be added in future iteraitons. Another benefit of this artifact is the
                    ability to convey core functionality visually, which can be helpful in a world of backlogs and requirements.
                </Paragraph>
            
                <ImageGrow
                    onClick={() => {
                        window.open(
                            '/static/media/app-map.2c1fb38cb2e7a387e98e.png',
                            '_blank',
                            'noopener,noreferrer'
                        );
                    }}
                    src={AppMap}
                    style={{
                        marginTop: 50,
                        width: '100%',
                    }}
                    alt='Low fidelity wireframes that display movie theater seat selection flow'
                />{' '}
            
            </Midi>


            <Midi style={{ marginBottom: 0 }}>
                <Heading2 style={{ marginBottom: 30, fontSize: 35 }}>
                    Wireframing
                </Heading2>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                        marginBottom: 40,
                    }}
                >
                    Two complex flows emerged during the mapping of the application. It was extremely helpful to 
                    create detailed wireframes so the team could focus on the logic.
                                        
                </Paragraph>
                <Full>
                    <div>
                        <Heading2
                            style={{
                                fontSize: 25,
                                lineHeight: '30px',
                                fontWeight: 300,
                                marginBottom: 10,
                            }}
                        >
                            The Hazard Flow
                        </Heading2>
                        <Paragraph
                            style={{
                                maxWidth: 1200,
                            }}
                        >
                            Users will need to explain how they handle hazards at the workplace. This is different for
                            every user, and is personalized for them druing the onboarding.
                        </Paragraph>

                        <ImageGrow
                            onClick={() => {
                                window.open(
                                    '/static/media/hazard-flow.1eb96d4153c5eb821f43.png',
                                    '_blank',
                                    'noopener,noreferrer'
                                );
                            }}
                            src={HazardFlow}
                            style={{
                                marginTop: 50,
                                width: '100%',
                                filter: 'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                            }}
                            alt='Low fidelity wireframes that display movie theater seat selection flow'
                        />{' '}

                    </div>

                    <div>
                        <Heading2
                            style={{
                                fontSize: 25,
                                lineHeight: '30px',
                                fontWeight: 300,
                                marginBottom: 10,
                                marginTop: 50,
                            }}
                        >
                            The Safety Plan Flow
                        </Heading2>
                        <Paragraph
                            style={{
                                maxWidth: 1200,
                            }}
                        >
                            The Safety Plan is a key material users can get from this application. The flow allows them
                            to include various other documents and materials, which is entirely customizable.
                        </Paragraph>

                        <ImageGrow
                            onClick={() => {
                                window.open(
                                    '/static/media/safetyplan-flow.374415bff74ce7194f4c.png',
                                    '_blank',
                                    'noopener,noreferrer'
                                );
                            }}
                            src={SafetyPlanFlow}
                            style={{
                                marginTop: 50,
                                width: '100%',
                                filter: 'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                            }}
                            alt='Low fidelity wireframes that display movie theater seat selection flow'
                        />{' '}

                    </div>
                </Full>
            </Midi>


            <Midi style={{ marginBottom: 0 }}>
                <Heading2 style={{ marginBottom: 30, fontSize: 35 }}>
                    Prototyping
                </Heading2>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    I created a fully clickable prototype that could be used for user testing.
                    The feedback would provide valuable insights and opportunities. This would also
                    alow the ability to iterate with confidence. 

                </Paragraph>
            
                <ImageGrow
                    onClick={() => {
                        window.open(
                            '/static/media/iteration-1.c9a1ec64fe14f4b0f95a.png',
                            '_blank',
                            'noopener,noreferrer'
                        );
                    }}
                    src={Iteration1}
                    style={{
                        marginTop: 50,
                        width: '100%',
                    }}
                    alt='Low fidelity wireframes that display movie theater seat selection flow'
                />{' '}
            
            </Midi>


            <Midi style={{ marginBottom: 0 }}>
                <Heading2 style={{ marginBottom: 30, fontSize: 35 }}>
                    User Interviews
                </Heading2>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    I performed moderated user testing with 15 users, from varying business types and sizes.
                    The feedback received was invaluable, which I synthesized to identify clear areas of challenge for users.
                    This also demonstrated clear avenues to explore to improve the application.
        
                </Paragraph>
            </Midi>

            <Full>
                <div
                    style={{
                        margin: '60px 0',
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: 100,
                    }}
                >
                    {' '}

                    <ImageGrow
                            onClick={() => {
                                window.open(
                                    '/static/media/user-interview.8231f5e11eb260e642ba.png',
                                    '_blank',
                                    'noopener,noreferrer'
                                );
                            }}
                            src={UserInterview}
                            style={{
                                width: 'calc(50% - 50px)',
                                filter: 'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                            }}
                            alt='Low fidelity wireframes that display movie theater seat selection flow'
                        />{' '}


                    <ImageGrow
                            onClick={() => {
                                window.open(
                                    '/static/media/user-synthesis.7fd91f78a1bd0b7a88fc.png',
                                    '_blank',
                                    'noopener,noreferrer'
                                );
                            }}
                            src={UserSynthesis}
                            style={{
                                width: 'calc(50% - 50px)',
                                filter: 'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                            }}
                            alt='Low fidelity wireframes that display movie theater seat selection flow'
                        />{' '}

                </div>
            </Full>



            <Midi style={{ marginBottom: 0 }}>
                <Heading2 style={{ marginBottom: 30, fontSize: 35 }}>
                    Informed Wireframe
                </Heading2>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    With the insights gained during user testing, I created the updated wireframe. Many assumptions
                    were validated in this iteration, and proved the ability to handle user scrutiny. 

                </Paragraph>
            
                <ImageGrow
                    onClick={() => {
                        window.open(
                            '/static/media/iteration-2.175677373a719171e07c.png',
                            '_blank',
                            'noopener,noreferrer'
                        );
                    }}
                    src={Iteration2}
                    style={{
                        marginTop: 50,
                        width: '100%',
                    }}
                    alt='Low fidelity wireframes that display movie theater seat selection flow'
                />{' '}
            
            </Midi>


            <Midi style={{ marginBottom: 0 }}>
                <Heading2 style={{ marginBottom: 30, fontSize: 35 }}>
                    Final High Fidelity Designs
                </Heading2>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                        marginBottom: 40,
                    }}
                >
                    After gathering user feedback and validating all technical requirements with engineering, I 
                    created the final high fidelity designs. I leveraged the MTO stylesheet, but I needed to create
                    the majority of components. The goal was to retain as much of the ministry design language as possible, 
                    but still "feel modern".
                                        
                </Paragraph>
                <Full>
                    <div>
                        <Heading2
                            style={{
                                fontSize: 25,
                                lineHeight: '30px',
                                fontWeight: 300,
                                marginBottom: 10,
                            }}
                        >
                            Desktop Experience
                        </Heading2>
                        <Paragraph
                            style={{
                                maxWidth: 1200,
                            }}
                        >
                            For the desktop design, I took advantage of contextual help on the right hand column. This
                            made it easy for content and documentation. I also created the card component that was
                            used heavily throughout the application.
                        </Paragraph>

                        <ImageGrow
                            onClick={() => {
                                window.open(
                                    '/static/media/final-desktop.561001581a3ac2772b86.png',
                                    '_blank',
                                    'noopener,noreferrer'
                                );
                            }}
                            src={FinalDesktop}
                            style={{
                                marginTop: 50,
                                width: '100%',
                                filter: 'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                            }}
                            alt='Low fidelity wireframes that display movie theater seat selection flow'
                        />{' '}

                    </div>

                    <div>
                        <Heading2
                            style={{
                                fontSize: 25,
                                lineHeight: '30px',
                                fontWeight: 300,
                                marginBottom: 10,
                                marginTop: 50,
                            }}
                        >
                            Mobile Experience
                        </Heading2>
                        <Paragraph
                            style={{
                                maxWidth: 1200,
                            }}
                        >
                            I created a unique experience for both mobile and tablet breakpoints. Because it is
                            a single column format, I leveraged "chips", which are small card like components that can
                            be used inline. This made forms and multi-selects pleasurable and functional. 
                        </Paragraph>

                        <ImageGrow
                            onClick={() => {
                                window.open(
                                    '/static/media/final-mobile.2b507b7b117f4c36ac05.png',
                                    '_blank',
                                    'noopener,noreferrer'
                                );
                            }}
                            src={FinalMobile}
                            style={{
                                marginTop: 50,
                                width: '100%',
                                filter: 'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                            }}
                            alt='Low fidelity wireframes that display movie theater seat selection flow'
                        />{' '}

                    </div>
                </Full>
            </Midi>

            <Midi style={{ marginBottom: 0 }}>
                <FlexGroup>
                    <div>
                        <Heading2 style={{ marginBottom: 30, fontSize: 35 }}>
                            Challenges
                        </Heading2>
                        <Paragraph
                            style={{
                                marginTop: 20,
                            }}
                        >
                            Working on government projects presents a myriad of challenges.
                            There is a limitation on design imposed by strict guidelines
                            and criteria. There are various proccesses that are prescribed
                            for software development. Working with minstry clients can also
                            be overwhelming, as they often lack a baseline understanding of
                            software development procedures. This often means explaining process and
                            timelines.
                            <br /> <br /> 
                            As a silver lining, this project has taught me a valuable lesson
                            in communication. Mainly that it is a skill that can constantly be
                            improved, and we should all strive to do so. Some of the most exciting
                            moments that took place on this project were when the entire team
                            was on the same page, working seamlessly together.
    
                        </Paragraph>
                    </div>
                </FlexGroup>
            </Midi>

           
            <Foot />
        </Main>
    );
};

export { DevopsPage };
