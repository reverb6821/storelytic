import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import PlanetOne from '../Assets/svg/planet.svg';
import PlanetTwo from '../Assets/svg/planet-2.svg';
import PlanetThree from '../Assets/svg/planet-3.svg';
import PlanetFour from '../Assets/svg/planet-4.svg';

const Section = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #131313;
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    padding: 3rem calc((100vw - 1300px) / 2);
    @media screen and (max-width: 768px) {
        grid-grid-template-columns: 1fr;
    }
`;

const ColumnLeft = styled.div`
    display: flex;
    color: #fff;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 5rem 2rem;
    h1 {
        margin-bottom: 0.5rem;
        font-size: 2rem;
    }
    p {
        margin: 2rem 0;
        font-size: 4rem;
        line-height: 1.1;
    }
`;

const Image = styled(motion.img)`
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: 250px;
    max-height: 250px;
`;

const ColumnRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    position: relative;
    ${Image}:nth-child(1) {
        top: 10px;
        left: 10px;
    }
    ${Image}:nth-child(2) {
        top: 170px;
        right: 10px;
    }
    ${Image}:nth-child(3) {
        top: 350px;
        left: 50px;
    }
    ${Image}:nth-child(4) {
        bottom: 100px;
        right: 75px;
    }
`;

const Home = () => {
    const [response, setData] = React.useState(null);
    React.useEffect(() => {
        fetch('/api')
            .then(res => res.json())
            .then(response => setData(response.message));
    }, []);

    const fadeLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}>
                        Welcome to {!response ? 'Loading...' : response}
                    </motion.h1>
                    <motion.p
                        variants={fadeLeft}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 1 }}>
                        Journey to the unknown
                    </motion.p>
                </ColumnLeft>
                <ColumnRight>
                    <Image
                        src={PlanetOne}
                        alt="planet"
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, y: -100 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 1 },
                        }}
                    />
                    <Image
                        src={PlanetTwo}
                        alt="planet"
                        whileTap={{ scale: 0.6 }}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            transition: { duration: 1 },
                        }}
                    />
                    <Image
                        src={PlanetThree}
                        alt="planet"
                        whileTap={{ scale: 0.8 }}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            transition: { duration: 1 },
                        }}
                    />
                    <Image
                        src={PlanetFour}
                        alt="planet"
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, y: 100 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 1 },
                        }}
                    />
                </ColumnRight>
            </Container>
        </Section>
    );
};

export default Home;
