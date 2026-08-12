import './code-highlight-block.css';

import type { Options } from 'react-markdown';

import { useMemo } from 'react';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';

import Link from '@mui/material/Link';

import { isExternalLink } from 'src/routes/utils';
import { RouterLink } from 'src/routes/components';

import { Image } from '../image';
import { StyledRoot } from './styles';
import { markdownClasses } from './classes';
import { htmlToMarkdown, isMarkdownContent } from './html-to-markdown';

import type { MarkdownProps } from './types';

// ----------------------------------------------------------------------

export function Markdown({ children, sx, ...other }: MarkdownProps) {
  const content = useMemo(() => {
    if (isMarkdownContent(`${children}`)) {
      return children;
    }
    return htmlToMarkdown(`${children}`.trim());
  }, [children]);

  return (
    <StyledRoot
      children={content}
      components={components as Options['components']}
      rehypePlugins={rehypePlugins as Options['rehypePlugins']}
      /* base64-encoded images
       * https://github.com/remarkjs/react-markdown/issues/774
       * urlTransform={(value: string) => value}
       */
      className={markdownClasses.root}
      sx={sx}
      {...other}
    />
  );
}

// ----------------------------------------------------------------------

type ComponentTag = {
  [key: string]: any;
};

// `rehype-raw` parses raw HTML embedded in markdown but does not sanitize it
// (any <script>/onerror/etc. would render as-is). Since this content may
// ultimately come from a CMS/admin-authored field rather than a fully
// trusted source, sanitize it before syntax highlighting. The default
// schema is extended to keep the `className` that `rehype-highlight` adds
// for code/language styling.
const sanitizeSchema = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    code: [...(defaultSchema.attributes?.code ?? []), 'className'],
    span: [...(defaultSchema.attributes?.span ?? []), 'className'],
  },
};

const rehypePlugins = [
  rehypeRaw,
  [rehypeSanitize, sanitizeSchema],
  rehypeHighlight,
  [remarkGfm, { singleTilde: false }],
];

const components = {
  img: ({ ...other }: ComponentTag) => (
    <Image
      ratio="16/9"
      className={markdownClasses.content.image}
      sx={{ borderRadius: 2 }}
      {...other}
    />
  ),
  a: ({ href, children, ...other }: ComponentTag) => {
    const linkProps = isExternalLink(href)
      ? { target: '_blank', rel: 'noopener' }
      : { component: RouterLink };

    return (
      <Link {...linkProps} href={href} className={markdownClasses.content.link} {...other}>
        {children}
      </Link>
    );
  },
  pre: ({ children }: ComponentTag) => (
    <div className={markdownClasses.content.codeBlock}>
      <pre>{children}</pre>
    </div>
  ),
  code({ className, children, ...other }: ComponentTag) {
    const language = /language-(\w+)/.exec(className || '');

    return language ? (
      <code {...other} className={className}>
        {children}
      </code>
    ) : (
      <code {...other} className={markdownClasses.content.codeInline}>
        {children}
      </code>
    );
  },
};
