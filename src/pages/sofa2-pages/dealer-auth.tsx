import { SignIn, SignUp } from '@clerk/react';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function AuthPageFrame({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <>
      <Helmet>
        <title>{title} | LUXE Sofa</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'grid',
          placeItems: 'center',
          px: 2,
          py: 6,
          bgcolor: '#f6f3ef',
        }}
      >
        <Container maxWidth="sm">
          <Stack spacing={3} alignItems="center">
            <Box component="img" src="/logo.svg" alt="LUXE Sofa" sx={{ width: 170, height: 'auto' }} />
            <Stack spacing={0.5} alignItems="center" sx={{ textAlign: 'center' }}>
              <Typography variant="h4">{title}</Typography>
              <Typography variant="body2" color="text.secondary">
                Dành cho đại lý và đối tác đã được phê duyệt.
              </Typography>
            </Stack>
            {children}
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export function Sofa2DealerSignInPage() {
  return (
    <AuthPageFrame title="Đăng nhập cổng đại lý">
      <SignIn
        routing="path"
        path="/sofa2/dealer/sign-in"
        signUpUrl="/sofa2/dealer/sign-up"
        fallbackRedirectUrl="/sofa2/dealer"
      />
    </AuthPageFrame>
  );
}

export function Sofa2DealerSignUpPage() {
  return (
    <AuthPageFrame title="Tạo tài khoản cổng đại lý">
      <SignUp
        routing="path"
        path="/sofa2/dealer/sign-up"
        signInUrl="/sofa2/dealer/sign-in"
        fallbackRedirectUrl="/sofa2/dealer"
      />
    </AuthPageFrame>
  );
}
