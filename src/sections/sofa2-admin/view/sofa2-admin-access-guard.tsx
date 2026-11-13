import { useEffect, useState } from 'react';
import { useAuth } from '@clerk/react';
import { Link as RouterLink, Navigate, useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type AdminSession = {
  role: 'admin' | 'staff';
  permissions?: string[];
};

type Props = {
  children: React.ReactNode;
  group?: string;
  moduleSlug?: string;
};

export function Sofa2AdminAccessGuard({ children, group, moduleSlug }: Props) {
  const { isLoaded, isSignedIn } = useAuth();
  const location = useLocation();
  const [checking, setChecking] = useState(true);
  const [session, setSession] = useState<AdminSession | null>(null);

  useEffect(() => {
    if (!isLoaded || !isSignedIn) return undefined;
    let active = true;
    setChecking(true);
    fetch('/api/admin/access/session', { credentials: 'include' })
      .then(async (response) => {
        if (!response.ok) throw new Error('Không có quyền quản trị.');
        return (await response.json()) as AdminSession;
      })
      .then((data) => {
        if (active) setSession(data);
      })
      .catch(() => {
        if (active) setSession(null);
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
    const returnTo = encodeURIComponent(`${location.pathname}${location.search}`);
    return <Navigate to={`/sofa2/dealer/sign-in?redirect_url=${returnTo}`} replace />;
  }

  const canOpenSeo = !!session?.permissions?.includes('SEO:Xem');
  const allowed =
    session?.role === 'admin' ||
    (session?.role === 'staff' && group === 'seo' && canOpenSeo);

  if (!allowed) {
    const returnToSeo = canOpenSeo ? '/sofa2/admin/seo/category' : '/sofa2';
    return (
      <Box sx={{ p: { xs: 2, md: 6 } }}>
        <Paper sx={{ maxWidth: 560, mx: 'auto', p: 4, textAlign: 'center' }}>
          <Stack spacing={2} alignItems="center">
            <Typography variant="h5">Không có quyền truy cập</Typography>
            <Typography color="text.secondary">
              Tài khoản này chưa được cấp quyền vào khu vực quản trị hoặc module đang mở.
            </Typography>
            <Button component={RouterLink} to={returnToSeo} variant="contained">
              {canOpenSeo ? 'Mở trang SEO được cấp quyền' : 'Về trang Sofa2'}
            </Button>
          </Stack>
        </Paper>
      </Box>
    );
  }

  return <>{children}</>;
}
