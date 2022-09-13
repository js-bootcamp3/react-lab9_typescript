import { Navigate } from 'react-router-dom';
interface IProps {
  children: any
}
export const Authenticate = ({children}: IProps) => {

  if (!localStorage.getItem('user')) {
    return <Navigate to="/" replace />;
  }

  return (
    children
  )
}
