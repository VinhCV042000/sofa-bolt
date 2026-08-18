import { useState } from 'react';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import { alpha } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import useMediaQuery from '@mui/material/useMediaQuery';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { SOFA5_ADMIN_ROOT, SOFA5_ADMIN_GROUPS } from '../sofa5-admin-data';

// ----------------------------------------------------------------------

const NAV_WIDTH = 280;

const BG = '#161310';
const SURFACE = '#2C2823';
const ACCENT = '#C9A227';
const TEXT = '#F1EADD';

type Props = {
  children: React.ReactNode;
  activeGroup?: string;
  activeModule?: string;
  title: string;
  subtitle?: string;
  breadcrumb?: string[];
};

export function Sofa5AdminLayout({
  children,
  activeGroup,
  activeModule,
  title,
  subtitle,
  breadcrumb = [],
}: Props) {
  const isDesktop = useMediaQuery('(min-width:1200px)');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroups, setOpenGroups] = useState<string[]>(
    activeGroup ? [activeGroup] : [SOFA5_ADMIN_GROUPS[0].slug]
  );

  const toggleGroup = (slug: string) =>
    setOpenGroups((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]));

  const nav = (
    <Stack sx={{ width: NAV_WIDTH, height: 1, bgcolor: BG, color: TEXT }}>
      <Stack
        direction="row"
        alignItems="center"
        spacing={1.5}
        sx={{ px: 2.5, py: 3, borderBottom: `1px solid ${alpha(ACCENT, 0.16)}` }}
      >
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: 1.5,
            display: 'grid',
            placeItems: 'center',
            bgcolor: alpha(ACCENT, 0.16),
            color: ACCENT,
          }}
        >
          <Iconify icon="solar:confetti-minimalistic-bold-duotone" width={24} />
        </Box>
        <Box>
          <Typography variant="subtitle1" sx={{ lineHeight: 1.2 }}>
            Sofa Royale
          </Typography>
          <Typography variant="caption" sx={{ color: alpha(TEXT, 0.6) }}>
            Trung tâm quản trị
          </Typography>
        </Box>
      </Stack>

      <Box sx={{ flex: 1, overflowY: 'auto', px: 1.5, py: 2 }}>
        <ButtonBase
          component={RouterLink}
          href={SOFA5_ADMIN_ROOT}
          sx={{
            width: 1,
            gap: 1.5,
            px: 1.5,
            py: 1.15,
            mb: 1,
            borderRadius: 1.25,
            justifyContent: 'flex-start',
            color: !activeGroup ? ACCENT : alpha(TEXT, 0.75),
            bgcolor: !activeGroup ? alpha(ACCENT, 0.14) : 'transparent',
            '&:hover': { bgcolor: alpha(ACCENT, 0.1) },
          }}
        >
          <Iconify icon="solar:widget-5-bold-duotone" width={20} />
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            Tổng quan
          </Typography>
        </ButtonBase>

        {SOFA5_ADMIN_GROUPS.map((group) => {
          const open = openGroups.includes(group.slug);
          const isActiveGroup = activeGroup === group.slug;

          return (
            <Box key={group.slug} sx={{ mb: 0.5 }}>
              <ButtonBase
                onClick={() => toggleGroup(group.slug)}
                sx={{
                  width: 1,
                  gap: 1.5,
                  px: 1.5,
                  py: 1.15,
                  borderRadius: 1.25,
                  justifyContent: 'flex-start',
                  color: isActiveGroup ? ACCENT : alpha(TEXT, 0.8),
                  '&:hover': { bgcolor: alpha(ACCENT, 0.08) },
                }}
              >
                <Iconify icon={group.icon} width={20} />
                <Typography variant="body2" sx={{ fontWeight: 600, flex: 1, textAlign: 'left' }}>
                  {group.name}
                </Typography>
                <Chip
                  size="small"
                  label={group.modules.length}
                  sx={{
                    height: 18,
                    fontSize: 11,
                    color: alpha(TEXT, 0.7),
                    bgcolor: alpha(ACCENT, 0.14),
                  }}
                />
                <Iconify
                  width={16}
                  icon={open ? 'eva:chevron-down-fill' : 'eva:chevron-right-fill'}
                />
              </ButtonBase>

              <Collapse in={open}>
                <Stack sx={{ pl: 2.5, py: 0.5 }}>
                  {group.modules.map((module) => {
                    const selected = isActiveGroup && activeModule === module.slug;
                    return (
                      <ButtonBase
                        key={module.slug}
                        component={RouterLink}
                        href={`${SOFA5_ADMIN_ROOT}/${group.slug}/${module.slug}`}
                        sx={{
                          gap: 1.25,
                          px: 1.5,
                          py: 0.85,
                          borderRadius: 1,
                          justifyContent: 'flex-start',
                          color: selected ? ACCENT : alpha(TEXT, 0.62),
                          bgcolor: selected ? alpha(ACCENT, 0.12) : 'transparent',
                          '&:hover': { bgcolor: alpha(ACCENT, 0.08), color: TEXT },
                        }}
                      >
                        <Box
                          sx={{
                            width: 5,
                            height: 5,
                            borderRadius: '50%',
                            bgcolor: 'currentColor',
                            opacity: selected ? 1 : 0.5,
                          }}
                        />
                        <Typography variant="body2" sx={{ fontSize: 13.5, textAlign: 'left' }}>
                          {module.name}
                        </Typography>
                      </ButtonBase>
                    );
                  })}
                </Stack>
              </Collapse>
            </Box>
          );
        })}
      </Box>

      <Divider sx={{ borderColor: alpha(ACCENT, 0.16) }} />
      <Stack direction="row" alignItems="center" spacing={1.5} sx={{ p: 2 }}>
        <Avatar sx={{ bgcolor: alpha(ACCENT, 0.24), color: ACCENT, width: 36, height: 36 }}>NA</Avatar>
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography variant="subtitle2" noWrap>
            Ngọc Anh
          </Typography>
          <Typography variant="caption" sx={{ color: alpha(TEXT, 0.6) }} noWrap>
            Quản trị viên
          </Typography>
        </Box>
        <Tooltip title="Về trang bán hàng">
          <IconButton component={RouterLink} href="/sofa5" sx={{ color: alpha(TEXT, 0.7) }}>
            <Iconify icon="solar:logout-3-bold-duotone" width={20} />
          </IconButton>
        </Tooltip>
      </Stack>
    </Stack>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#FBF7EF' }}>
      {isDesktop ? (
        <Box
          component="aside"
          sx={{ width: NAV_WIDTH, flexShrink: 0, position: 'sticky', top: 0, height: '100vh' }}
        >
          {nav}
        </Box>
      ) : (
        <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>
          {nav}
        </Drawer>
      )}

      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Box
          component="header"
          sx={{
            position: 'sticky',
            top: 0,
            zIndex: 10,
            bgcolor: alpha('#FFFFFF', 0.85),
            backdropFilter: 'blur(8px)',
            borderBottom: `1px solid ${alpha('#7A8AA8', 0.16)}`,
          }}
        >
          <Container maxWidth={false} sx={{ maxWidth: 1440 }}>
            <Stack direction="row" alignItems="center" spacing={2} sx={{ py: 2 }}>
              {!isDesktop && (
                <IconButton onClick={() => setMobileOpen(true)}>
                  <Iconify icon="solar:hamburger-menu-bold-duotone" />
                </IconButton>
              )}
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {['Quản trị', ...breadcrumb].join('  •  ')}
                </Typography>
                <Typography variant="h5" sx={{ color: SURFACE }} noWrap>
                  {title}
                </Typography>
              </Box>
              <Chip
                size="small"
                icon={<Iconify icon="solar:shield-check-bold-duotone" width={16} />}
                label="Dữ liệu demo"
                sx={{ bgcolor: alpha(ACCENT, 0.16), color: '#6B5310', fontWeight: 600 }}
              />
            </Stack>
          </Container>
        </Box>

        <Container maxWidth={false} sx={{ maxWidth: 1440, py: 4 }}>
          {subtitle && (
            <Typography sx={{ mb: 3, color: 'text.secondary', maxWidth: 720 }}>{subtitle}</Typography>
          )}
          {children}
        </Container>
      </Box>
    </Box>
  );
}

export const SOFA5_ADMIN_THEME = { BG, SURFACE, ACCENT, TEXT };
