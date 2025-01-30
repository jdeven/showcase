import React from 'react';
import QUERIES, {
    Main,
    Midi,
    Heading2,
    Full,
    Paragraph2,
    Paragraph,
} from '../theming/styles';
import styled from 'styled-components';
import { Nav, Foot } from '../components';
import { Spread } from '../components/switch/styles';
import {
    Hifi,
    Lofi,
    Person1,
    Person2,
    JourneyMap,
    Sketch1,
    Sketch2,
    Sketch3,
    Sketch4,
    UserFlow,
    Synth,
    Change2,
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

const Movie = ({ toggleMode, mode, spread }) => {
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
                    Mobile Trading App Case Study
                </Heading2>
                <Paragraph2
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    Many of my friends and family consider themselves avid traders. 
                    I can expect at least one conversation around financial markets when we get together.
                    Although I don't consider myself a trading enthusiest, I found a particular shared pain point interesting: 
                    trading on mobile was not considered to be a pleasant experience.<br />
                    <br /> I spoke to my colleage at Scotiabank, and I was brought up to speed. Most "real" traders prefer the desktop experiencce, 
                    as it avails them larger screen real estate. They can use the extra room to view charts, quotes, option chains, news and media, often all at once.
                    Mobile was simply too limiting a platform. This felt like a challenge, so let's dive deeper, shall we?
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
                            I used a 5-stage Design Thinking model proposed by
                            the Hasso Plattner Institute of Design at Stanford.
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
                            As the consultant to an internal team, I was able to work on all
                            stages of the design including: User Research,
                            Sketching, Journey Maps, Low and High Fidelity
                            Designs.
                        </Paragraph2>
                    </div>
                </FlexGroup>
            </Midi>
            <Full>
                <ImageGrow
                    onClick={() => {
                        window.open(
                            '/static/media/lofi.c96666113efaa21aff8f.png',
                            '_blank',
                            'noopener,noreferrer'
                        );
                    }}
                    src={Lofi}
                    style={{ width: '100%' }}
                    alt='Low fidelity wireframes that display movie theater seat selection flow'
                />
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
                    To ensure we address the market properly, I created two different 
                    user personas to represent what I believe are key targets of the iTRADE app.
                    My goal was to maximize inclusivity, and use an extremely wide scope; 
                    target both inexperienced, and experienced traders alike.{' '}
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
                                '/static/media/person1.9c35aca211c25e58f052.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={Person1}
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
                                '/static/media/persona2.62b39138deaa10467765.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={Person2}
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
                    User Journey Map
                </Heading2>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    A group of users were then taken through the
                    existing user experience journey with the "retail" flow. This helped to begin
                    establishing pain points and better empathize with users at
                    each step of the application.{' '}
                </Paragraph>
                <ImageGrow
                    onClick={() => {
                        window.open(
                            '/static/media/journeyMap.26d97d3842dec723b043.png',
                            '_blank',
                            'noopener,noreferrer'
                        );
                    }}
                    src={JourneyMap}
                    style={{
                        marginTop: 50,
                        width: '100%',
                        filter: 'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                    }}
                    alt='Low fidelity wireframes that display movie theater seat selection flow'
                />
            </Midi>

            <Midi style={{ marginBottom: 0 }}>
                <Heading2 style={{ marginBottom: 30, fontSize: 35 }}>
                    Pain Points
                </Heading2>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    Following the creation of journey map, I identifed a few pain points.
                </Paragraph>

                <FlexGroup>
                    <div>
                        <Heading2
                            style={{
                                fontSize: 25,
                                lineHeight: '30px',
                                fontWeight: 300,
                            }}
                        >
                            Just Browsing
                        </Heading2>
                        <Paragraph
                            style={{
                                maxWidth: 700,
                            }}
                        >
                            Many users are interested in trading an asset, but the inital 
                            security information screen has too much information. It causes
                            our users to pause, and hesitate to initiate a trade.
                        </Paragraph>
                    </div>
                    <div>
                        <Heading2
                            style={{
                                fontSize: 25,
                                lineHeight: '30px',
                                fontWeight: 300,
                            }}
                        >
                            Estimation
                        </Heading2>
                        <Paragraph
                            style={{
                                maxWidth: 700,
                            }}
                        >
                            When users are on the trade ticket, they are not sure how to get a quick
                            understanding of how many shares they can afford.
                        </Paragraph>
                    </div>
                </FlexGroup>
                <FlexGroup>
                    <div>
                        <Heading2
                            style={{
                                fontSize: 25,
                                lineHeight: '30px',
                                fontWeight: 300,
                            }}
                        >
                            Option Chain
                        </Heading2>
                        <Paragraph
                            style={{
                                maxWidth: 700,
                            }}
                        >
                            Some users prefer to use the option chain, but the experience on mobile
                            is cumbersome.
                        </Paragraph>
                    </div>
                    <div>
                        <Heading2
                            style={{
                                fontSize: 25,
                                lineHeight: '30px',
                                fontWeight: 300,
                            }}
                        >
                            Accessibility
                        </Heading2>
                        <Paragraph
                            style={{
                                maxWidth: 700,
                            }}
                        >
                            A large amount of information necessary for those
                            with disabilities is often not included on these
                            apps and requires a phone call.
                        </Paragraph>
                    </div>
                </FlexGroup>
            </Midi>

            <Midi style={{ marginBottom: 0 }}>
                <Heading2 style={{ marginBottom: 30, fontSize: 35 }}>
                    Sketching and Ideation
                </Heading2>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    To begin addressing these pain points, I created digital
                    sketches for each of the main screens that would be
                    necessary.
                    These sketches helped me come up with ideas for flows as
                    well as create a logical informational hierarchy.
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
                                '/static/media/sketch1.c78d13f507ee3483095f.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={Sketch1}
                        style={{
                            width: 'calc(25% - 5px)',
                            filter:
                                'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                        }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />{' '}
                    <ImageGrow
                        onClick={() => {
                            window.open(
                                '/static/media/sketch2.a9134e65777d3d3ab12b.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={Sketch2}
                        style={{
                            width: 'calc(25% - 5px)',
                            filter:
                                'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                        }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />
                    <ImageGrow
                        onClick={() => {
                            window.open(
                                '/static/media/sketch3.a49db52d6bc0f8875d76.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={Sketch3}
                        style={{
                            width: 'calc(25% - 5px)',
                            filter:
                                'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                        }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />
                    <ImageGrow
                        onClick={() => {
                            window.open(
                                '/static/media/sketch4.e3e81936c029aacc2cba.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={Sketch4}
                        style={{
                            width: 'calc(25% - 5px)',
                            filter:
                                'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                        }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />
                </div>
            </Full>

            <Midi style={{ marginBottom: 0 }}>
                <Heading2 style={{ marginBottom: 30, fontSize: 35 }}>
                    Establishing User Flow
                </Heading2>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    Once my low fidelity wireframes were complete, I created an
                    additional flow diagram to capture additional branches and screens needed for a fully clickable prototype.
                </Paragraph>
                <ImageGrow
                    onClick={() => {
                        window.open(
                            '/static/media/userFlow.39bd47ab8d13214e945b.png',
                            '_blank',
                            'noopener,noreferrer'
                        );
                    }}
                    src={UserFlow}
                    style={{
                        marginTop: 50,
                        width: '100%',
                    }}
                    alt='Low fidelity wireframes that display movie theater seat selection flow'
                />
            </Midi>

            <Midi style={{ marginBottom: 0 }}>
                <Heading2 style={{ marginBottom: 30, fontSize: 35 }}>
                       User Testing
                </Heading2>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    My goal was to examine the overall experience of the main user flow 
                    (security selection, amount of contracts/shares, 
                    method, and expiry). I wanted to identify pain-points and challenges that 
                    could be impacting user retention and drop-off.
                </Paragraph>
                <ImageGrow
                    onClick={() => {
                        window.open(
                            '/static/media/synth.e1d79017c457d5a30522.png',
                            '_blank',
                            'noopener,noreferrer'
                        );
                    }}
                    src={Synth}
                    style={{
                        marginTop: 50,
                        width: '100%',
                        filter: 'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                    }}
                    alt='Low fidelity wireframes that display movie theater seat selection flow'
                />
            </Midi>

            <Midi style={{ marginBottom: 0 }}>
                <Heading2 style={{ marginBottom: 30, fontSize: 35 }}>
                    Changes Implemented from Insights
                </Heading2>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    From our insights, we gathered that there were a handful of pain points impacting experience.
                    I made novel improvements to the trade ticket, including "stacks" allowing users to go back
                    and change previous decisions, and then return where they left off.
                    <br /> <br /> 
 
                    Interestingly, I observed that users benefited from having a way to filter on the home screen.
                    I started with "Calls" and "Puts", which are types of option contracts that can be purchased.
                    Over time with more data, more filter options can help users customize their view.
                    The second change was to place the option chain of a "relevant" company right on the home screen.
                </Paragraph>
                <ImageGrow
                    onClick={() => {
                        window.open(
                            '/static/media/change2.0416b94e98f325dbb546.png',
                            '_blank',
                            'noopener,noreferrer'
                        );
                    }}
                    src={Change2}
                    style={{
                        marginTop: 50,
                        width: '100%',
                    }}
                    alt='Low fidelity wireframes that display movie theater seat selection flow'
                />{' '}
            </Midi>

            <Midi style={{ marginBottom: 0 }}>
                <Heading2 style={{ marginBottom: 30, fontSize: 35 }}>
                    Final High Fidelity Wireframes
                </Heading2>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    Finally, after spending some time finding and establishing a
                    visual style for the application, I created the final high
                    fidelity designs.
                </Paragraph>
                <ImageGrow
                    onClick={() => {
                        window.open(
                            '/static/media/hifi.97529e7c06140f92ce3c.png',
                            '_blank',
                            'noopener,noreferrer'
                        );
                    }}
                    src={Hifi}
                    style={{
                        marginTop: 50,
                        width: '100%',
                        filter: 'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                    }}
                    alt='Low fidelity wireframes that display movie theater seat selection flow'
                />
                <FlexGroup>
                    <div>
                        <Heading2
                            style={{
                                fontSize: 25,
                                lineHeight: '30px',
                                fontWeight: 300,
                            }}
                        >
                            Lessons Learned
                        </Heading2>
                        <Paragraph
                            style={{
                                maxWidth: 700,
                                marginTop: 15,
                            }}
                        >
                            This case study really helped me solidify the
                            importance of user testing at the low fidelity
                            stage. I got so caught up solving the original pain
                            points that were found that I ended up creating new
                            ones! User testing helped me take a step back and
                            readdress the overall goal of the application and
                            helped to identify many new paints points as well.
                        </Paragraph>
                    </div>
                    <div>
                        <Heading2
                            style={{
                                fontSize: 25,
                                lineHeight: '30px',
                                fontWeight: 300,
                            }}
                        >
                            Next Steps
                        </Heading2>
                        <Paragraph
                            style={{
                                maxWidth: 700,
                                marginTop: 15,
                            }}
                        >
                            If I were to continue building out and improving
                            this project, I would do another round of usability
                            testing to ensure that the original paint points
                            were accurately addressed.
                        </Paragraph>
                    </div>
                </FlexGroup>
            </Midi>
            <Foot />
        </Main>
    );
};

export { Movie };
