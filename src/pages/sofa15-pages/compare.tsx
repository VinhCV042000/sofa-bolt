import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { SOFA15_COLORS } from 'src/sections/sofa15/sofa15-data';
import { Sofa15Section, Sofa15PageHero } from 'src/sections/sofa15-pages/sofa15-page-hero';
import {
  SOFA15_PAGE_IMAGES,
  SOFA15_PAGE_PRODUCTS,
  sofa15FormatPrice,
} from 'src/sections/sofa15-pages/sofa15-pages-data';

export default function Page() {
  const theme = useTheme();
  const products = SOFA15_PAGE_PRODUCTS.slice(0, 3);

  const rows = [
    { label: 'Giá bán', render: (p: (typeof products)[number]) => sofa15FormatPrice(p.price) },
    { label: 'Chất liệu', render: (p: (typeof products)[number]) => p.material },
    { label: 'Kích thước', render: (p: (typeof products)[number]) => p.size },
    { label: 'Màu sắc', render: (p: (typeof products)[number]) => p.colorNames.join(', ') },
    { label: 'Đánh giá', render: (p: (typeof products)[number]) => `${p.rating} / 5 (${p.reviews})` },
  ];

  const cellSx = { borderColor: varAlpha(SOFA15_COLORS.gold, 0.15), color: varAlpha('#FFFFFF', 0.6) };

  return (
    <>
      <Helmet>
        <title>So sánh sản phẩm — Sofa15</title>
      </Helmet>

      <Sofa15PageHero
        overline="SO SÁNH"
        title={
          <>
            SO SÁNH <span>SẢN PHẨM</span>
          </>
        }
        subtitle="Đặt các tuyệt tác cạnh nhau để chọn ra tác phẩm phù hợp nhất."
        image={SOFA15_PAGE_IMAGES.prod1}
      />

      <Sofa15Section bg="black">
        <Box sx={{ overflowX: 'auto', border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.2)}` }}>
          <Table sx={{ minWidth: 720 }}>
            <TableHead>
              <TableRow>
                <TableCell sx={cellSx} />
                {products.map((p) => (
                  <TableCell key={p.id} sx={cellSx}>
                    <Stack spacing={1.5}>
                      <Box
                        component="img"
                        src={p.image}
                        alt={p.name}
                        sx={{ width: 1, height: 130, objectFit: 'cover' }}
                      />
                      <Typography
                        variant="subtitle1"
                        sx={{ color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily }}
                      >
                        {p.name}
                      </Typography>
                    </Stack>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.label}>
                  <TableCell sx={{ ...cellSx, color: SOFA15_COLORS.gold, whiteSpace: 'nowrap' }}>
                    {row.label}
                  </TableCell>
                  {products.map((p) => (
                    <TableCell key={p.id} sx={cellSx}>
                      {row.render(p)}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Sofa15Section>
    </>
  );
}