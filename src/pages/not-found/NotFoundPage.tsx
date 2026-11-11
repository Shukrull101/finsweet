import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import { ROUTES } from '@/shared/config/routes'
import { Button } from '@/shared/ui/Button'
import { Container } from '@/shared/ui/Container'

export function NotFoundPage() {
  const err = useRouteError()
  const is404 = !err || (isRouteErrorResponse(err) && err.status === 404)
  return (
    <Container className="py-24 text-center">
      <p className="mb-2 text-7xl font-bold text-brand">{is404 ? '404' : 'Oops'}</p>
      <h1 className="mb-3 text-2xl font-semibold">{is404 ? 'This page does not exist' : 'Something went wrong'}</h1>
      <p className="mb-8 text-muted">{is404 ? 'The link may be old or mistyped.' : 'Reload the page or go back to the home page.'}</p>
      <Button to={ROUTES.home} arrow>Back to home</Button>
    </Container>
  )
}
