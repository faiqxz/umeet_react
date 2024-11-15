import { Redirect, Stack } from 'expo-router';
import { useAuth } from '../../provider/AuthProvider';

export default function AuthLayout() {
  const { user } = useAuth();
  if (user) {
    return <Redirect href="/" />;
  }
  return <Stack />;
}