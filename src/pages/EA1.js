import React from 'react';
import QUERIES, {
    Main,
    Midi,
    Heading2,
    Full,
    Paragraph2,
    Paragraph,
    Caption,
} from '../theming/styles';
import styled from 'styled-components';
import { Nav, Foot } from '../components';
import { Spread } from '../components/switch/styles';
import {
    EA1Image,
    user1,
    user2,
    user3,
    user4,
    user5,
    user6,
    user7,
    user8,
    competitive,
    UserFlowEA,
    lowfi01,
    lowfi02,
    lowfi03,
    lowfi04,
    FinalEA,
    FinalEA2,
} from '../images';

const FlexGroup = styled.div`
    margin: 60px 0;
    display: flex;
    justify-content: space-between;
    gap: 50px;
    flex-wrap: wrap;

    @media (${QUERIES.large}) {
        flex-wrap: nowrap;
        gap: 50px;
    }
`;

const ImageGrow = styled.img`
    :hover {
        cursor: zoom-in;
    }
`;

const EA1 = ({ toggleMode, mode, spread }) => {
    const spreadClass =
        spread === 'first'
            ? 'growBlack'
            : spread === 'second'
            ? 'growWhite'
            : '';

    return (
        <Main style={{ position: 'relative' }}>
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
                    Unity Cloud
                </Heading2>
                <Paragraph2
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    Unity approached me to drive their cloud initiative which would enable existing 
                    users to collaborate with more ease and attract new users who 
                    could benefit from a wholistic ecosystem. Studios could engage in workflows that would be 
                    inclusive of all those invovled from asset ingestion, authoring, publishing, and analytics.
                    <br /> <br /> I was able to effectively create user
                    personas, competitive audits, sketches, wireframes and a
                    final prototype within 6 months. I continued to iterate 
                    based on subsequent usertesting and additional feedback from business.
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
                            My Role
                        </Heading2>
                        <Paragraph2
                            style={{
                                maxWidth: 700,
                            }}
                        >
                            As the lead designer, I was able to work on all
                            stages of the design including: User Research,
                            Sketching, Journey Maps, Low and High Fidelity
                            Designs.
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
                            Team
                        </Heading2>
                        <Paragraph2
                            style={{
                                maxWidth: 700,
                            }}
                        >
                            I lead a team of 6 designers, collaborated with an engineer and a technical product lead
                            to help facilitate the needs of our client and
                            determine scope.
                        </Paragraph2>
                    </div>
                </FlexGroup>
            </Midi>
            <Full>
                <div
                    style={{
                        width: '100%',
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 20,
                    }}
                >
                    <ImageGrow
                        onClick={() => {
                            window.open(
                                '/static/media/main.4f86d1494f09150d4c57.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={EA1Image}
                        style={{ width: '100%' }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />

                    <Caption style={{ fontSize: 20, marginTop: 15 }}>
                        Final Prototype of Unity Cloud, a platform to empower cross-functional work.
                    </Caption>
                </div>
            </Full>
            <Midi style={{ marginBottom: 0 }}>
                <Heading2 style={{ marginBottom: 30, fontSize: 35 }}>
                    User Personas
                </Heading2>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    I chose to create user personas first, as I wanted a high
                    level understanding of how and why users would engage with the 
                    platform, as well as some of the elements that could prevent a user from using ours. 
                    <br /> <br /> 
                    After meeting with several of Unity's clients, I began identifying a subset of users
                    that were commonly present. I made sure to include them in my user profiles,
                    from studios / organizations of varying sizes and market segments. 
                    These are the users in the market that this platform will be targeting.
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
                    <ImageGrow
                        onClick={() => {
                            window.open(
                                '/static/media/Laurie%20Cole.62c7f2ab20116b1755a6.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={user1}
                        style={{
                            width: 'calc(50% - 50px)',
                            filter:
                                'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                        }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />{' '}
                    <ImageGrow
                        onClick={() => {
                            window.open(
                                '/static/media/Aida%20Irwin.e2e6ec33a2fda389253c.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={user2}
                        style={{
                            width: 'calc(50% - 50px)',
                            filter:
                                'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                        }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />{' '}
                </div>{' '}
                <div
                    style={{
                        margin: '60px 0',
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: 100,
                    }}
                >
                    <ImageGrow
                        onClick={() => {
                            window.open(
                                '/static/media/Nathanael%20Bailey.f18f059be6fe13f3a8c7.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={user3}
                        style={{
                            width: 'calc(50% - 50px)',
                            filter:
                                'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                        }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />{' '}
                    <ImageGrow
                        onClick={() => {
                            window.open(
                                '/static/media/Johnson%20Myers.9395f5289ffba5ebe5f7.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={user4}
                        style={{
                            width: 'calc(50% - 50px)',
                            filter:
                                'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                        }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />
                </div>
                <div
                    style={{
                        margin: '60px 0',
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: 100,
                    }}
                >
                    <ImageGrow
                        onClick={() => {
                            window.open(
                                '/static/media/Corey%20Schultz.00d0254587344f5ac12d.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={user5}
                        style={{
                            width: 'calc(50% - 50px)',
                            filter:
                                'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                        }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />{' '}
                    <ImageGrow
                        onClick={() => {
                            window.open(
                                '/static/media/Aileen%20Shea.e245550605f6f9a2913d.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={user6}
                        style={{
                            width: 'calc(50% - 50px)',
                            filter:
                                'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                        }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />
                </div>
                <div
                    style={{
                        margin: '60px 0',
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: 100,
                    }}
                >
                    <ImageGrow
                        onClick={() => {
                            window.open(
                                '/static/media/Mark%20Mercado.05e6948d486866dce4e0.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={user7}
                        style={{
                            width: 'calc(50% - 50px)',
                            filter:
                                'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                        }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />{' '}
                    <ImageGrow
                        onClick={() => {
                            window.open(
                                '/static/media/User%20Data.1c23032e6430c49a7912.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={user8}
                        style={{
                            width: 'calc(50% - 50px)',
                            filter:
                                'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                        }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />
                </div>
            </Full>
            <Midi style={{ marginBottom: 0 }}>
                <Heading2 style={{ marginBottom: 30, fontSize: 35 }}>
                    Competitive Audit
                </Heading2>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    Following Personas, I decided to do an internal audit on
                    Unity's current market offerings. To get the most
                    useful insights, I decided to focus only on applications
                    that were directly available to a broad market, which
                    would give me the largest sample of user types with which I can 
                    generate quantitatives and other metrics. <br />{' '}
                    <br /> 
                    
                    Focusing on AECO (Architecture, Engineering, Construction) 
                    helped me to understand common design langauge standards that 
                    Unity employs to connect with customers.
                </Paragraph>
            </Midi>
            <Full>
                <ImageGrow
                    onClick={() => {
                        window.open(
                            '/static/media/competitive.cad66748e3387931a1c2.png',
                            '_blank',
                            'noopener,noreferrer'
                        );
                    }}
                    src={competitive}
                    style={{
                        marginTop: 50,
                        width: '100%',
                        filter: 'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                    }}
                    alt='Low fidelity wireframes that display movie theater seat selection flow'
                />
            </Full>
            <Midi style={{ marginBottom: 0 }}>
                <Heading2 style={{ marginBottom: 30, fontSize: 35 }}>
                    Pain Points Found
                </Heading2>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    Following the creation of user journey maps a handful of
                    pain points were discovered, many of which were already
                    being address by competitors. A handful of these problems
                    were being addressed which were what I really wanted to
                    spend time ideating and designing solutions for.
                </Paragraph>

                <FlexGroup>
                    <div>
                        <Heading2 style={{ marginBottom: 10, fontSize: 35 }}>
                            Siloed Data
                        </Heading2>
                        <Paragraph
                            style={{
                                maxWidth: 700,
                            }}
                        >
                            Data and knowledge are siloed and systems
                            disconnected - making a common cross
                            disciplinary perspective unachievable.
                        </Paragraph>
                    </div>
                    <div>
                        <Heading2 style={{ marginBottom: 10, fontSize: 35 }}>
                            Manual Processes
                        </Heading2>
                        <Paragraph
                            style={{
                                maxWidth: 700,
                            }}
                        >
                            Updating and manipulating 3D data is slow,
                            tedious, imprecise, and expensive - a remnant
                            of the past.
                        </Paragraph>
                    </div>
                </FlexGroup>
                <FlexGroup>
                    <div>
                        <Heading2 style={{ marginBottom: 10, fontSize: 35 }}>
                            Limited Scalability and ROI
                        </Heading2>
                        <Paragraph
                            style={{
                                maxWidth: 700,
                            }}
                        >
                            Lack of control, management, versioning
                            and distribution limits the use and value of
                            digital 3D assets.
                        </Paragraph>
                    </div>
                    <div>
                        <Heading2 style={{ marginBottom: 10, fontSize: 35 }}>
                            Accessibility
                        </Heading2>
                        <Paragraph
                            style={{
                                maxWidth: 700,
                            }}
                        >
                            Purpose-built applications don't fit the needs of all users. One size doesn't fit all.
                        
                        </Paragraph>
                    </div>
                </FlexGroup>
            </Midi>
            <Midi style={{ marginBottom: 0 }}>
                <Heading2 style={{ marginBottom: 30, fontSize: 35 }}>
                    User Flow
                </Heading2>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    After a few iterations of design thinking and exploration, I
                    was able to create a user-flow site map that scopes out the
                    necessary screens and expected interactions across the platform.{' '}
                    <br /> <br /> This layout really helps me look at the
                    structure logically so we can catch any mismatches or
                    miscommunications early. It also helps me to bring up
                    business or technical challenges early on, so we can address
                    them now, instead of when the designs are in their final
                    stages.
                </Paragraph>
            </Midi>
            <Full>
                <div
                    style={{
                        margin: '60px 0',
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: 20,
                    }}
                >
                    {' '}
                    <ImageGrow
                        onClick={() => {
                            window.open(
                                '/static/media/userflow.0ba0295d8bade097b9c6.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={UserFlowEA}
                        style={{
                            filter:
                                'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                            width: '100%',
                        }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />
                </div>
            </Full>
            <Midi style={{ marginBottom: 0 }}>
                <Heading2 style={{ marginBottom: 30, fontSize: 35 }}>
                    Low Fidelity - Design Decisions
                </Heading2>{' '}
                <Paragraph
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    First approach at the structure of the application, lots of
                    iteration and design thinking used here.
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
                    <div
                        style={{
                            width: 'calc(50% - 50px)',
                            alignItems: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 20,
                        }}
                    >
                        <ImageGrow
                            onClick={() => {
                                window.open(
                                    '/static/media/lowfi01.ee8aec1b56332e9474f5.png',
                                    '_blank',
                                    'noopener,noreferrer'
                                );
                            }}
                            src={lowfi01}
                            style={{
                                width: '100%',
                                filter:
                                    'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                            }}
                            alt='Low fidelity wireframes that display movie theater seat selection flow'
                        />{' '}
                        <Caption style={{ fontSize: 20 }}>
                            High level diagram that need design iteration
                        </Caption>
                    </div>
                    <div
                        style={{
                            width: 'calc(50% - 50px)',
                            alignItems: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 20,
                        }}
                    >
                        <ImageGrow
                            onClick={() => {
                                window.open(
                                    '/static/media/lowfi02.8ce06d0b812a2066f1ce.png',
                                    '_blank',
                                    'noopener,noreferrer'
                                );
                            }}
                            src={lowfi02}
                            style={{
                                width: '100%',
                                filter:
                                    'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                            }}
                            alt='Low fidelity wireframes that display movie theater seat selection flow'
                        />{' '}
                        <Caption style={{ fontSize: 20 }}>
                            Customer matrix that identify design needs
                        </Caption>
                    </div>
                </div>{' '}
                <div
                    style={{
                        margin: '60px 0',
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: 100,
                    }}
                >
                    <div
                        style={{
                            width: 'calc(50% - 50px)',
                            alignItems: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 20,
                        }}
                    >
                        <ImageGrow
                            onClick={() => {
                                window.open(
                                    '/static/media/lowfi03.a0b7d3a65f332dcf30e4.png',
                                    '_blank',
                                    'noopener,noreferrer'
                                );
                            }}
                            src={lowfi03}
                            style={{
                                width: '100%',
                                filter:
                                    'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                            }}
                            alt='Low fidelity wireframes that display movie theater seat selection flow'
                        />{' '}
                        <Caption style={{ fontSize: 20 }}>
                            Import & Collaboration flows
                        </Caption>
                    </div>
                    <div
                        style={{
                            width: 'calc(50% - 50px)',
                            alignItems: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 20,
                        }}
                    >
                        <ImageGrow
                            onClick={() => {
                                window.open(
                                    '/static/media/lowfi04.8b4d0ed52069cd6f8d7d.png',
                                    '_blank',
                                    'noopener,noreferrer'
                                );
                            }}
                            src={lowfi04}
                            style={{
                                width: '100%',
                                filter:
                                    'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                            }}
                            alt='Low fidelity wireframes that display movie theater seat selection flow'
                        />{' '}
                        <Caption style={{ fontSize: 20 }}>
                            3D asset / material flows 
                        </Caption>
                    </div>
                </div>
            </Full>
            <Midi style={{ marginBottom: 0 }}>
                <Heading2 style={{ marginBottom: 30, fontSize: 35 }}>
                    Visual Design
                </Heading2>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    After review sessions and usertesting, I went back through each of
                    the designs to update the UI to reflect the visual design, look and feel, 
                    and brand consistency that reflected Unity Technologies.
                </Paragraph>
            </Midi>

            <Full>
                <ImageGrow
                    onClick={() => {
                        window.open(
                            '/static/media/final.0faef7993da9dc3ddac8.png',
                            '_blank',
                            'noopener,noreferrer'
                        );
                    }}
                    src={FinalEA}
                    style={{
                        marginTop: 50,
                        width: '100%',
                    }}
                    alt='Low fidelity wireframes that display movie theater seat selection flow'
                />{' '}
                <ImageGrow
                    onClick={() => {
                        window.open(
                            '/static/media/final2.7d3fcfa4e26d97d14669.png',
                            '_blank',
                            'noopener,noreferrer'
                        );
                    }}
                    src={FinalEA2}
                    style={{
                        marginTop: 50,
                        width: '100%',
                    }}
                    alt='Low fidelity wireframes that display movie theater seat selection flow'
                />
            </Full>
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
                            The biggest challenge with Unity Cloud was the
                            ambiguity of the requirements. I'm used to working
                            with clients who are highly opinionated, but this
                            client was truly open to anything. This made it
                            tricky to get a sense of which direction the application 
                            should go. This ended up being a great personal challenge, 
                            as I was given the opportunity to have more control over 
                            product direction than I typically receive. This opportunity
                            challenged the way I approach design thinking.
                        </Paragraph>
                    </div>
                </FlexGroup>
            </Midi>

            <Foot />
        </Main>
    );
};

export { EA1 };
