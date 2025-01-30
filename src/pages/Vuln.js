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
    Vuln,
    Vulnpersona1,
    Vulnpersona2,
    VulnJourney,
    VulnJourney2,
    VulnJourney3,
    VulnWire1,
    VulnWire2,
    Onboarding,
    VulnHifi,
    VulnHifi2,

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

const VulnPage = ({ toggleMode, mode, spread }) => {
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
                    Neurocatch Software
                </Heading2>
                <Paragraph2
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    HealthTech Connex is a neuroscience technology company that offers software
                    solutions for measuring cognitive brain function simply, quickly and objectively.
                    In 2020, they began their latest iteration of their platform: Neurocatch 2.0.
                </Paragraph2> 
                <Paragraph2>
                    They approached me to design two products: Neurocatch 2.0, a runtime application used
                    to perform brain scans, and the accompanying report.
                
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
                            Biggest Challenges
                        </Heading2>
                        <Paragraph2>
                            - The software platform has to maintain strict confidentiality on the part of users.
                        </Paragraph2>
                        <Paragraph2>
                            - There is hardware that works with the software, and needs to be considered for the onboarding.
                        </Paragraph2>{' '}
                        <Paragraph2>
                            - Users may perform one, or many brain scans; there needs to be value from
                            reports regardless of how many scans are done.
                        </Paragraph2>{' '}
                        <Paragraph2>
                            - The report style has to be able to compete with their competitors.
                        </Paragraph2>
                    </div>
                </FlexGroup>
            </Midi>
            <Midi style={{ marginTop: -100 }}>
                <Heading2 style={{ marginBottom: 30, fontSize: 35 }}>
                    My Role
                </Heading2>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                        marginBottom: 20,
                    }}
                >
                    Led the design of the Neurocatch 2.0 application
                    between April 2020 and May 2021. Collaborated with two other
                    front end developers on features and direction.
                </Paragraph>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                        marginBottom: 20,
                    }}
                >
                    In addition, I worked closely a PhD Neuroscientist (Subject Matter Expert), to guide in the development
                    of the data visualization elements.
                </Paragraph>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                        marginBottom: 0,
                    }}
                >
                    Finally, I faciliated numerous regularly scheduled workshops with the company, to expose updates and receive feedback/approvals.
                </Paragraph>
            </Midi>
            <Full>
                <ImageGrow
                    onClick={() => {
                        window.open(
                            '/static/media/vuln.7657dc427549660698c4.png',
                            '_blank',
                            'noopener,noreferrer'
                        );
                    }}
                    src={Vuln}
                    style={{ width: '100%' }}
                    alt='Low fidelity wireframes that display movie theater seat selection flow'
                />
            </Full>

            <Midi style={{ marginBottom: 0 }}>
                <Heading2 style={{ marginBottom: -20, fontSize: 35 }}>
                    High Level Goals
                </Heading2>

                <FlexGroup>
                    <div>
                        <Heading2
                            style={{
                                fontSize: 25,
                                lineHeight: '30px',
                                fontWeight: 300,
                                marginBottom: 10,
                            }}
                        >
                            For Clinical Staff
                        </Heading2>
                        <Paragraph
                            style={{
                                maxWidth: 700,
                            }}
                        >
                            Easily be able to conduct brain scans on patients.
                        </Paragraph>
                    </div>

                    <div>
                        <Heading2
                            style={{
                                fontSize: 25,
                                lineHeight: '30px',
                                fontWeight: 300,
                                marginBottom: 10,
                            }}
                        >
                            For Neurologists
                        </Heading2>
                        <Paragraph
                            style={{
                                maxWidth: 700,
                            }}
                        >
                            Allow easy understanding of a patient's status after reading the scan report.
                        </Paragraph>
                    </div>
                    <div>
                        <Heading2
                            style={{
                                fontSize: 25,
                                lineHeight: '30px',
                                fontWeight: 300,
                                marginBottom: 10,
                            }}
                        >
                            For Patients
                        </Heading2>
                        <Paragraph
                            style={{
                                maxWidth: 700,
                            }}
                        >
                            Receive a comprehensive understanding of cognition on only one clinical visit.
                        </Paragraph>
                    </div>
                </FlexGroup>
            </Midi>
            <Midi style={{ marginBottom: 0 }}>
                <Heading2 style={{ marginBottom: 30, fontSize: 35 }}>
                    User Personas
                </Heading2>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    I focused on the two user types.
                    A member of the clinic will be trained to condunct a brain scan,
                    but that clinician is already trained for similar / analogus tasks;
                    afterall they work in the clinic.
                    The Neurologist has to make recommendations to the patient, and therefore
                    must have confidence in the report.
                    <br /> <br />  
                    Developing these personas reveals user needs and helps us to empathize with
                    their pain points. These insights reveal opportunities to create tremendous value.
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
                                    '/static/media/persona-2.5c9d4b48f391736ee655.png',
                                    '_blank',
                                    'noopener,noreferrer'
                                );
                            }}
                            src={Vulnpersona2}
                            style={{
                                width: 'calc(50% - 50px)',
                                filter: 'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                            }}
                            alt='Low fidelity wireframes that display movie theater seat selection flow'
                        />{' '}


                    <ImageGrow
                            onClick={() => {
                                window.open(
                                    '/static/media/persona-1.a68be6e152d16a43f933.png',
                                    '_blank',
                                    'noopener,noreferrer'
                                );
                            }}
                            src={Vulnpersona1}
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
                    Mapping the Application 
                </Heading2>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    One particularly challenging portion of the design thinking
                    and planning for this application was in identifying what features
                    are MVP, and which could be added later. Eventually through enough
                    work-shopping, I mapped the following application.
                </Paragraph>

                <ImageGrow
                    onClick={() => {
                        window.open(
                            '/static/media/onboarding.e9e2fa35ecf8a0fb9559.png',
                            '_blank',
                            'noopener,noreferrer'
                        );
                    }}
                    src={Onboarding}
                    style={{
                        marginTop: 50,
                        width: '100%',
                    }}
                    alt='Low fidelity wireframes that display movie theater seat selection flow'
                />{' '}

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
                    I created a series of low fidelity sketches and wireframes
                    to best plan out the features and layouts that I would be
                    creating. I spent a few design iterations here to ensure
                    all user needs were being addressed. Other considerations 
                    were the development of schematics that depict device setup, 
                    and the detailed planning for the report.

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
                                '/static/media/vuln-wire.dc9bd5f1269de2f8a0f2.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={VulnWire1}
                        style={{
                            marginTop: 50,
                            width: '700px',
                            height: 'auto',
                            filter: 'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                        }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />{' '}

                    <ImageGrow
                        onClick={() => {
                            window.open(
                                '/static/media/vuln-wire2.b44a74ded436b7f838fc.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={VulnWire2}
                        style={{
                            marginTop: 50,
                            width: '700px',
                            height: 'auto',
                            filter: 'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                        }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />{' '}

                </div>
            </Full>


            <Midi style={{ marginBottom: 0 }}>
                <Heading2 style={{ marginBottom: 30, fontSize: 35 }}>
                    Developing the Neurocatch Report
                </Heading2>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                        marginBottom: 40,
                    }}
                >
                    After working with clinicians and neuroscientists, I learned that there are three key focus areas
                    of the report that needed to be developed. 
                                       
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
                            The Report Style
                        </Heading2>
                        <Paragraph
                            style={{
                                maxWidth: 1200,
                            }}
                        >
                            The first is the report style itslef, which needed to be
                            able to provide value to all users, be easy to understand, and still be a source of truth.
                        </Paragraph>

                        <ImageGrow
                            onClick={() => {
                                window.open(
                                    '/static/media/journey-vuln.512ba85753b17750ef81.png',
                                    '_blank',
                                    'noopener,noreferrer'
                                );
                            }}
                            src={VulnJourney}
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
                            For Neurologists
                        </Heading2>
                        <Paragraph
                            style={{
                                maxWidth: 1200,
                            }}
                        >
                            Secondly, I needed a component capable of depicting scan data visually. After researching, a data 
                            visualization tool called a "Radar Plot" appeared to satisfy all requirements.
                        </Paragraph>

                        <ImageGrow
                            onClick={() => {
                                window.open(
                                    '/static/media/journey-vuln2.3f6da9fb84cf9dde1137.png',
                                    '_blank',
                                    'noopener,noreferrer'
                                );
                            }}
                            src={VulnJourney2}
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
                            For Patients
                        </Heading2>
                        <Paragraph
                            style={{
                                maxWidth: 1200,
                            }}
                        >
                            Finally, I wanted to be able to convey a patient's state prior to the scan. To determine a patient's state,
                            I developed "The Scan Survey". It became the most contextual and personalized portion of the scan. 
                            The questions were all specific to the patient, and as such had the largest impact on cognitive
                            improvement. They manifest as "Lifestyle Factors" on the report, which I represented
                            with iconography.
                        </Paragraph>

                        <ImageGrow
                            onClick={() => {
                                window.open(
                                    '/static/media/journey-vuln3.c73ea8699bff2fe35900.png',
                                    '_blank',
                                    'noopener,noreferrer'
                                );
                            }}
                            src={VulnJourney3}
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
                    Final High Fidelity Designs for the Report
                </Heading2>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    After working closely with many clinicians and my neuroscientist partner,
                    I was finally able to create high fidelity designs of the Neurocatch 2.0 report.
                </Paragraph>
            </Midi>

            <Full>
                <ImageGrow
                    onClick={() => {
                        window.open(
                            '/static/media/vuln-hifi2.324fbe14042c3d4e23f7.png',
                            '_blank',
                            'noopener,noreferrer'
                        );
                    }}
                    src={VulnHifi2}
                    style={{
                        marginTop: 50,
                        width: '100%',
                    }}
                    alt='Low fidelity wireframes that display movie theater seat selection flow'
                />{' '}
            </Full>
            

            <Midi style={{ marginBottom: 0 }}>
                <Heading2 style={{ marginBottom: 30, fontSize: 35 }}>
                    Final High Fidelity Designs for the Software
                </Heading2>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    With many iterations on the scan flow, I was able to finalized the software design. I was
                    pleased with consistent use of iconography in both the the software and report. I was also 
                    very happy with the ability to incorporate all steps of the scan in a single flow. This includes
                    the patient survey, lifestyle factors, device and headset connections. I'm proud to say 
                    Neurocatch 2.0 is still being actively used in 2025.
                </Paragraph>
            </Midi>


            <Full>
                <ImageGrow
                    onClick={() => {
                        window.open(
                            '/static/media/vuln-hifi.57fa49e85859a4509893.png',
                            '_blank',
                            'noopener,noreferrer'
                        );
                    }}
                    src={VulnHifi}
                    style={{
                        marginTop: 50,
                        width: '100%',
                    }}
                    alt='Low fidelity wireframes that display movie theater seat selection flow'
                />{' '}
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
                            The biggest challenge with this projecet was the
                            need to work very closely with subject matter experts. 
                            I enjoyed some aspects, but it could also be a hindrance as
                            design decisions were always complex. Because of this,
                            I had to be very mindful of the longterm impact of my 
                            design choices.
                            <br /> <br /> 
                            Lastly, the report itself was very difficult to finalize.
                            As it is a static document, which is also used for complex
                            neurological diagnosis, it needed to be "perfect". In some ways,
                            it's final state is not intended to be iterated upon. This
                            idea generally goes against best practices, but for this client,
                            was the key to their product. This experience was certainly a very 
                            interesting lesson in the product design.
 
                        </Paragraph>
                    </div>
                </FlexGroup>
            </Midi>

            <Foot />
        </Main>
    );
};

export { VulnPage };
