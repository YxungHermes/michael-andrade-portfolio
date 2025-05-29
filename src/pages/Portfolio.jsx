import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const PortfolioSection = styled.section`
  min-height: 100vh;
  padding: 8rem 0 4rem;
`

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  
  h1 {
    font-size: clamp(2rem, 4vw, 3rem);
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.2rem;
    color: var(--color-text-muted);
  }
`

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`

const FilterButton = styled.button`
  padding: 0.5rem 1.5rem;
  background: ${props => props.active ? 'var(--color-accent)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--color-text)'};
  border: 1px solid ${props => props.active ? 'var(--color-accent)' : 'var(--color-text-muted)'};
  cursor: pointer;
  transition: var(--transition);
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  
  &:hover {
    background: var(--color-accent);
    border-color: var(--color-accent);
    color: white;
  }
`

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`

const ProjectCard = styled(motion.article)`
  position: relative;
  overflow: hidden;
  background: #1a1a1a;
  cursor: pointer;
  
  &:hover .overlay {
    opacity: 1;
  }
  
  &:hover img {
    transform: scale(1.1);
  }
`

const ProjectImage = styled.div`
  position: relative;
  padding-bottom: 66.67%;
  overflow: hidden;
  
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }
`

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: 2rem;
  text-align: center;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: var(--color-text-muted);
    margin-bottom: 1rem;
  }
  
  span {
    color: var(--color-accent);
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 0.1em;
  }
`

function Portfolio() {
  const [filter, setFilter] = useState('all')
  
  const projects = [
    {
      id: 1,
      title: 'Urban Dreams',
      category: 'film',
      description: 'A cinematic exploration of city life',
      image: 'https://via.placeholder.com/600x400/2a2a2a/ffffff?text=Urban+Dreams'
    },
    {
      id: 2,
      title: 'Brand Evolution',
      category: 'branding',
      description: 'Complete brand identity redesign',
      image: 'https://via.placeholder.com/600x400/3a3a3a/ffffff?text=Brand+Evolution'
    },
    {
      id: 3,
      title: 'Digital Horizons',
      category: 'digital',
      description: 'Interactive web experience',
      image: 'https://via.placeholder.com/600x400/4a4a4a/ffffff?text=Digital+Horizons'
    },
    {
      id: 4,
      title: 'Motion Stories',
      category: 'motion',
      description: 'Animated brand narratives',
      image: 'https://via.placeholder.com/600x400/5a5a5a/ffffff?text=Motion+Stories'
    },
    {
      id: 5,
      title: 'Visual Poetry',
      category: 'film',
      description: 'Experimental short film',
      image: 'https://via.placeholder.com/600x400/6a6a6a/ffffff?text=Visual+Poetry'
    },
    {
      id: 6,
      title: 'Tech Forward',
      category: 'digital',
      description: 'Technology brand campaign',
      image: 'https://via.placeholder.com/600x400/7a7a7a/ffffff?text=Tech+Forward'
    }
  ]
  
  const categories = ['all', 'film', 'branding', 'digital', 'motion']
  
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter)

  return (
    <PortfolioSection>
      <div className="container">
        <Header>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Selected works and creative projects
          </motion.p>
        </Header>
        
        <FilterButtons>
          {categories.map((category) => (
            <FilterButton
              key={category}
              active={filter === category}
              onClick={() => setFilter(category)}
            >
              {category}
            </FilterButton>
          ))}
        </FilterButtons>
        
        <ProjectGrid>
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              as={Link}
              to={`/portfolio/${project.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <ProjectImage>
                <img src={project.image} alt={project.title} />
              </ProjectImage>
              <ProjectOverlay className="overlay">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span>{project.category}</span>
              </ProjectOverlay>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </div>
    </PortfolioSection>
  )
}

export default Portfolio