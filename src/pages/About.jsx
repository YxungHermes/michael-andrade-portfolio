import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const AboutSection = styled.section`
  min-height: 100vh;
  padding: 8rem 0 4rem;
`

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const AboutContent = styled.div`
  h1 {
    font-size: clamp(2rem, 4vw, 3rem);
    margin-bottom: 2rem;
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--color-text-muted);
    margin-bottom: 1.5rem;
  }
`

const AboutImage = styled(motion.div)`
  position: relative;
  overflow: hidden;
  
  img {
    width: 100%;
    height: auto;
    filter: grayscale(100%);
    transition: var(--transition);
  }
  
  &:hover img {
    filter: grayscale(0%);
  }
`

const Skills = styled.div`
  margin-top: 3rem;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`

const Skill = styled.span`
  padding: 0.5rem 1rem;
  border: 1px solid var(--color-text-muted);
  font-size: 0.9rem;
  transition: var(--transition);
  
  &:hover {
    border-color: var(--color-accent);
    color: var(--color-accent);
  }
`

function About() {
  const skills = [
    'Creative Direction',
    'Film Production',
    'Visual Storytelling',
    'Brand Strategy',
    'Motion Design',
    'Photography',
    'Post-Production',
    'Art Direction'
  ]

  return (
    <AboutSection>
      <div className="container">
        <AboutGrid>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <AboutContent>
              <h1>About Michael Andrade</h1>
              <p>
                Creative director and visual storyteller with over a decade of experience
                crafting compelling narratives across digital and traditional media.
              </p>
              <p>
                My work bridges the gap between artistic vision and commercial success,
                delivering cinematic experiences that resonate with audiences and elevate brands.
              </p>
              <p>
                From concept to execution, I specialize in creating immersive visual stories
                that push creative boundaries while maintaining strategic focus.
              </p>
              
              <Skills>
                <h3>Expertise</h3>
                <SkillsList>
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Skill>{skill}</Skill>
                    </motion.div>
                  ))}
                </SkillsList>
              </Skills>
            </AboutContent>
          </motion.div>
          
          <AboutImage
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://via.placeholder.com/600x800/1a1a1a/ffffff?text=Michael+Andrade"
              alt="Michael Andrade"
            />
          </AboutImage>
        </AboutGrid>
      </div>
    </AboutSection>
  )
}

export default About