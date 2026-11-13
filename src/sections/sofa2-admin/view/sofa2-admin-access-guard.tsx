import { useEffect, useState } from 'react';
import { useAuth } from '@clerk/react';
import { Link as RouterLink, Navigate, useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { SOFA2_ADMIN_GROUPS, SOFA2_ADMIN_ROOT } from '../sofa2-admin-data';
import {
  canOpenSofa2AdminGroup,
  type Sofa2AdminAccessSession,
} from '../sofa2-access-control';

type AdminSession = Sofa2AdminAccessSession;

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

  if (session?.role === 'staff' && !group) {
    const firstAllowed = SOFA2_ADMIN_GROUPS.find((item) =>
      canOpenSofa2AdminGroup(session, item.slug)
    );
    const firstModule = firstAllowed?.modules[0];
    if (firstAllowed && firstModule) {
      return <Navigate to={`${SOFA2_ADMIN_ROOT}/${firstAllowed.slug}/${firstModule.slug}`} replace />;
    }
  }

  const allowed = session?.role === 'admin' || (!!group && canOpenSofa2AdminGroup(session, group));

  if (!allowed) {
    const firstAllowed = SOFA2_ADMIN_GROUPS.find((item) =>
      canOpenSofa2AdminGroup(session, item.slug)
    );
    const firstModule = firstAllowed?.modules[0];
    const returnToAllowed = firstAllowed && firstModule
      ? `${SOFA2_ADMIN_ROOT}/${firstAllowed.slug}/${firstModule.slug}`
      : '/sofa2';
    return (
      <Box sx={{ p: { xs: 2, md: 6 } }}>
        <Paper sx={{ maxWidth: 560, mx: 'auto', p: 4, textAlign: 'center' }}>
          <Stack spacing={2} alignItems="center">
            <Typography variant="h5">Không có quyền truy cập</Typography>
            <Typography color="text.secondary">
              Tài khoản này chưa được cấp quyền vào khu vực quản trị hoặc module đang mở.
            </Typography>
            <Button component={RouterLink} to={returnToAllowed} variant="contained">
              {returnToAllowed === '/sofa2' ? 'Về trang Sofa2' : 'Mở trang được cấp quyền'}
            </Button>
          </Stack>
        </Paper>
      </Box>
    );
  }

  return <>{children}</>;
}
