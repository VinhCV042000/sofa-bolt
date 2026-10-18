import { useEffect, useState } from 'react';
import { useAuth } from '@clerk/react';
import { Link as RouterLink, Navigate, useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type Props = { children: React.ReactNode; resource?: string };

export function Sofa2DealerAdminGuard({ children, resource = 'dữ liệu đại lý' }: Props) {
  const { isLoaded, isSignedIn } = useAuth();
  const location = useLocation();
  const [checking, setChecking] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (!isLoaded || !isSignedIn) return undefined;
    let active = true;

    fetch('/api/dealer/session', { credentials: 'include' })
      .then(async (response) => {
        if (!response.ok) throw new Error('Tài khoản này chưa có quyền quản trị.');
        return response.json();
      })
      .then((identity: { role?: string }) => {
        if (active) setIsAdmin(identity.role === 'admin');
      })
      .catch(() => {
        if (active) setIsAdmin(false);
      })
      .finally(() => {
        if (active) setChecking(false);
      });

    return () => {
      active = false;
    };
  }, [isLoaded, isSignedIn]);

  if (!isLoaded || (isSignedIn && checking)) {
    return (
      <Box sx={{ minHeight: '50vh', display: 'grid', placeItems: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!isSignedIn) {
    const returnTo = encodeURIComponent(location.pathname);
    return <Navigate to={`/sofa2/dealer/sign-in?redirect_url=${returnTo}`} replace />;
  }

  if (!isAdmin) {
    return (
      <Box sx={{ p: { xs: 2, md: 6 } }}>
        <Paper sx={{ maxWidth: 560, mx: 'auto', p: 4, textAlign: 'center' }}>
          <Stack spacing={2} alignItems="center">
            <Typography variant="h5">Không có quyền truy cập</Typography>
            <Typography color="text.secondary">
              Chỉ tài khoản quản trị viên mới được quản lý {resource}.
            </Typography>
            <Button component={RouterLink} to="/sofa2/admin" variant="contained">
              Về trang quản trị
            </Button>
          </Stack>
        </Paper>
      </Box>
    );
  }

  return <>{children}</>;
}
