import { Container } from 'react-bootstrap'
import { profile } from '../data/profile'

function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--color-surface)',
      padding: '2rem 0',
      borderTop: '1px solid var(--color-border)',
    }}>
      <Container className="text-center">
        <p className="text-muted-custom mb-0">
          © {new Date().getFullYear()} {profile.personal.name}. Hecho con React, Vite y Bootstrap.
        </p>
      </Container>
    </footer>
  )
}
export default Footer