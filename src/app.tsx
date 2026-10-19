import 'src/global.css';

// ----------------------------------------------------------------------

import { ClerkProvider } from '@clerk/react';
import { publishableKeyFromHost } from '@clerk/react/internal';
import { useNavigate } from 'react-router-dom';

import { Router } from 'src/routes/sections';
import { Sofa2SeoHead } from 'src/sections/sofa2-admin/sofa2-seo-head';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import { CONFIG } from 'src/config-global';
import { LocalizationProvider } from 'src/locales';
import { I18nProvider } from 'src/locales/i18n-provider';
import { ThemeProvider } from 'src/theme/theme-provider';

import { Snackbar } from 'src/components/snackbar';
import { ProgressBar } from 'src/components/progress-bar';
import { MotionLazy } from 'src/components/animate/motion-lazy';
import { SettingsDrawer, defaultSettings, SettingsProvider } from 'src/components/settings';

import { CheckoutProvider } from 'src/sections/checkout/context';

import { AuthProvider as JwtAuthProvider } from 'src/auth/context/jwt';
import { AuthProvider as Auth0AuthProvider } from 'src/auth/context/auth0';
import { AuthProvider as AmplifyAuthProvider } from 'src/auth/context/amplify';
import { AuthProvider as SupabaseAuthProvider } from 'src/auth/context/supabase';
import { AuthProvider as FirebaseAuthProvider } from 'src/auth/context/firebase';

// ----------------------------------------------------------------------

const AuthProvider =
  (CONFIG.auth.method === 'amplify' && AmplifyAuthProvider) ||
  (CONFIG.auth.method === 'firebase' && FirebaseAuthProvider) ||
  (CONFIG.auth.method === 'supabase' && SupabaseAuthProvider) ||
  (CONFIG.auth.method === 'auth0' && Auth0AuthProvider) ||
  JwtAuthProvider;

const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
const clerkHostname = window.location.hostname.toLowerCase();
const configuredClerkKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const isLovableHostedHost = clerkHostname.endsWith('.lovable.app');
const clerkPubKey = isLovableHostedHost
  ? configuredClerkKey
  : publishableKeyFromHost(clerkHostname, configuredClerkKey);
const clerkProxyUrl = isLovableHostedHost
  ? '/api/__clerk'
  : import.meta.env.VITE_CLERK_PROXY_URL;

if (!clerkPubKey) {
  throw new Error('Missing VITE_CLERK_PUBLISHABLE_KEY for this hosted preview.');
}

const clerkAppearance = {
  theme: 'simple' as const,
  options: {
    logoPlacement: 'inside' as const,
    logoLinkUrl: basePath || '/',
    logoImageUrl: `${window.location.origin}${basePath}/logo.svg`,
  },
  variables: {
    colorPrimary: '#8A6746',
    colorForeground: '#29241f',
    colorMutedForeground: '#756b61',
    colorDanger: '#b42318',
    colorBackground: '#fffdf9',
    colorInput: '#ffffff',
    colorInputForeground: '#29241f',
    colorNeutral: '#ded7ce',
    fontFamily: 'Public Sans, sans-serif',
    borderRadius: '14px',
  },
};

function ClerkRouterProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const stripBase = (path: string) =>
    basePath && path.startsWith(basePath) ? path.slice(basePath.length) || '/' : path;

  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      proxyUrl={clerkProxyUrl}
      appearance={clerkAppearance}
      signInUrl={`${basePath}/sofa2/dealer/sign-in`}
      signUpUrl={`${basePath}/sofa2/dealer/sign-up`}
      localization={{
        signIn: { start: { title: 'Đăng nhập cổng đại lý', subtitle: 'Truy cập tài khoản đại lý LUXE Sofa' } },
        signUp: { start: { title: 'Tạo tài khoản đại lý', subtitle: 'Tài khoản cần được quản trị viên phê duyệt' } },
      }}
      routerPush={(to) => navigate(stripBase(to))}
      routerReplace={(to) => navigate(stripBase(to), { replace: true })}
    >
      {children}
    </ClerkProvider>
  );
}

export default function App() {
  useScrollToTop();

  return (
    <ClerkRouterProvider>
      <I18nProvider>
        <LocalizationProvider>
          <AuthProvider>
            <SettingsProvider settings={defaultSettings}>
              <ThemeProvider>
                <MotionLazy>
                  <CheckoutProvider>
                    <Snackbar />
                    <ProgressBar />
                    <SettingsDrawer />
                    <Sofa2SeoHead />
                    <Router />
                  </CheckoutProvider>
                </MotionLazy>
              </ThemeProvider>
            </SettingsProvider>
          </AuthProvider>
        </LocalizationProvider>
      </I18nProvider>
    </ClerkRouterProvider>
  );
}
