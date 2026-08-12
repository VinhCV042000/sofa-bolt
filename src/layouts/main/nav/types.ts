import type { StackProps } from '@mui/material/Stack';
import type { Theme, SxProps } from '@mui/material/styles';
import type { ButtonBaseProps } from '@mui/material/ButtonBase';

// ----------------------------------------------------------------------

export type NavItemStateProps = {
  open?: boolean;
  active?: boolean;
  subItem?: boolean;
  hasChild?: boolean;
  externalLink?: boolean;
};

export type NavItemBaseProps = {
  title: string;
  path: string;
  icon?: string | React.ReactNode;
  // Some nav configs (mega-menu demos) group children under a subheader,
  // while others (the sofaN product nav configs) nest plain nav items
  // recursively. Both shapes are rendered at runtime, so both are accepted here.
  children?:
    | {
        subheader: string;
        items: {
          title: string;
          path: string;
        }[];
      }[]
    | NavItemBaseProps[];
};

export type NavItemProps = ButtonBaseProps & NavItemBaseProps & NavItemStateProps;

export type NavListProps = {
  data: NavItemBaseProps;
  sx?: SxProps<Theme>;
};

export type NavSubListProps = StackProps & {
  data: NavItemBaseProps[];
  subheader: string;
};

export type NavMainProps = {
  data: NavItemBaseProps[];
  sx?: SxProps<Theme>;
};
