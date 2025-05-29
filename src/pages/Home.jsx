import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Hero = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`

const HeroContent = styled.div`
  text-align: center;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
`

const Title = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 6rem);
  margin-bottom: 1rem;
  letter-spacing: -0.03em;
`

const Subtitle = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.5rem);
  color: var(--color-text-muted);
  margin-bottom: 3rem;
  font-weight: 300;
`

const CTAButton = styled(motion(Link))`
  display: inline-block;
  padding: 1rem 3rem;
  background: var(--color-accent);
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: var(--transition);
  
  &:hover {
    background: #ff6666;
    transform: translateY(-2px);
  }
`

const BackgroundVideo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  background: linear-gradient(45deg, #ff4444, #0a0a0a);
  z-index: 1;
`

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--color-text-muted);
  
  &::after {
    content: '';
    display: block;
    width: 1px;
    height: 40px;
    background: var(--color-text-muted);
    margin: 0.5rem auto 0;
    animation: scroll 2s infinite;
  }
  
  @keyframes scroll {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(10px); }
  }
`

function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  }

  return (
    <Hero>
      <BackgroundVideo />
      <div className="container">
        <HeroContent
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Title variants={itemVariants}>
            Cinematic Storytelling
          </Title>
          <Subtitle variants={itemVariants}>
            Creative Direction × Visual Narratives × Digital Experiences
          </Subtitle>
          <CTAButton
            to="/portfolio"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Portfolio
          </CTAButton>
        </HeroContent>
      </div>
      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        Scroll
      </ScrollIndicator>
    </Hero>
  )
}

export default Home