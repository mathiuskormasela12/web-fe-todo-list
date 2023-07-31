// ========= Card
// import all packages
import React from 'react'

// import boostatap component
import { Card as BootstrapCard } from 'react-bootstrap'
import { useCard } from './hooks'

interface ICardProps {
  id: string
  title: string
  subtitle?: string
  description?: string
}

export const Card: React.FC<ICardProps> = ({ id, title, subtitle, description }) => {
  const { handleDetail } = useCard()

  return (
    <BootstrapCard>
      <BootstrapCard.Body>
        <BootstrapCard.Title>
          {title}
        </BootstrapCard.Title>
        <BootstrapCard.Subtitle className="mb-2 text-muted">
          {subtitle}
        </BootstrapCard.Subtitle>
        <BootstrapCard.Text>
          {description}
        </BootstrapCard.Text>
        <BootstrapCard.Link className="text-primary" onClick={(event: React.MouseEvent<HTMLAnchorElement>) => { handleDetail<HTMLAnchorElement>(event, '/todo/' + id) }}>Detail</BootstrapCard.Link>
        <BootstrapCard.Link className="text-primary">Finish</BootstrapCard.Link>
        <BootstrapCard.Link className="text-danger">Delete</BootstrapCard.Link>
      </BootstrapCard.Body>
    </BootstrapCard>
  )
}
