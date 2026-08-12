import { useState, useCallback } from 'react';

import Collapse from '@mui/material/Collapse';

import { isExternalLink } from 'src/routes/utils';
import { useActiveLink } from 'src/routes/hooks/use-active-link';

import { CONFIG } from 'src/config-global';
import { varAlpha } from 'src/theme/styles';

import { NavLi, navSectionClasses, NavSectionVertical } from 'src/components/nav-section';

import { NavItem } from './nav-mobile-item';

import type { NavListProps, NavItemBaseProps } from '../types';

// ----------------------------------------------------------------------

export function NavList({ data }: NavListProps) {
  const active = useActiveLink(data.path, !!data.children);

  const [openMenu, setOpenMenu] = useState(false);

  const handleToggleMenu = useCallback(() => {
    if (data.children) {
      setOpenMenu((prev) => !prev);
    }
  }, [data.children]);

  const renderNavItem = (
    <NavItem
      // slots
      path={data.path}
      icon={data.icon}
      title={data.title}
      // state
      active={active}
      hasChild={!!data.children}
      open={data.children && !!openMenu}
      externalLink={isExternalLink(data.path)}
      // actions
      onClick={handleToggleMenu}
    />
  );

  if (data.children) {
    // `data.children` comes in two shapes depending on the nav config:
    // mega-menu style groups (`{ subheader, items }[]`), or a flat list of
    // nested nav items (no `subheader`/`items` wrapper). NavSectionVertical
    // only understands the former, so wrap the latter into a single
    // unlabeled group instead of passing it through (which would crash on
    // `group.items` being undefined).
    const groupedChildren =
      data.children.length > 0 && 'subheader' in data.children[0]
        ? (data.children as { subheader: string; items: NavItemBaseProps[] }[])
        : [{ items: data.children as NavItemBaseProps[] }];

    return (
      <NavLi>
        {renderNavItem}
        <Collapse in={openMenu}>
          <NavSectionVertical
            data={groupedChildren}
            slotProps={{ rootItem: { sx: { minHeight: 36 } } }}
            sx={{
              px: 1.5,
              [`& .${navSectionClasses.item.root}`]: {
                '&[aria-label="Dashboard"]': {
                  [`& .${navSectionClasses.item.title}`]: { display: 'none' },
                  height: 180,
                  borderRadius: 1.5,
                  backgroundSize: 'auto 88%',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundImage: `url(${CONFIG.assetsDir}/assets/illustrations/illustration-dashboard.webp)`,
                  border: (theme) =>
                    `solid 1px ${varAlpha(theme.palette.grey['500Channel'], 0.12)}`,
                },
              },
            }}
          />
        </Collapse>
      </NavLi>
    );
  }

  return <NavLi>{renderNavItem}</NavLi>;
}
