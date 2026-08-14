import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import Stack from '@mui/material/Stack';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import Typography from '@mui/material/Typography';

import { SOFA16_COLORS } from 'src/sections/sofa16/sofa16-data';
import { Sofa16Section, Sofa16PageHero } from 'src/sections/sofa16-pages/sofa16-page-hero';
import { sofa16FormatPrice, SOFA16_PAGE_IMAGES, SOFA16_PAGE_PRODUCTS } from 'src/sections/sofa16-pages/sofa16-pages-data';

const ITEMS = SOFA16_PAGE_PRODUCTS.slice(0, 3);
const ROWS: { label: string; key: 'price' | 'material' | 'size' | 'rating' }[] = [
  { label: 'Giá', key: 'price' },
  { label: 'Chất liệu', key: 'material' },
  { label: 'Kích thước', key: 'size' },
  { label: 'Đánh giá', key: 'rating' },
];

export default function Page() {
  return (
    <>
      <Helmet><title>So sánh sản phẩm — Sofa16</title></Helmet>

      <Sofa16PageHero overline="SO SÁNH" title={<>SO SÁNH <span>SẢN PHẨM</span></>} subtitle="Đối chiếu thông số các mẫu sofa bạn quan tâm." image={SOFA16_PAGE_IMAGES.prod4} />

      <Sofa16Section bg="cream">
        <Box sx={{ overflowX: 'auto' }}>
          <Table sx={{ minWidth: 720 }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ bgcolor: 'transparent' }} />
                {ITEMS.map((p) => (
                  <TableCell key={p.id} sx={{ bgcolor: 'transparent' }}>
                    <Stack spacing={1.5}>
                      <Box component="img" src={p.image} alt={p.name} sx={{ width: 1, borderRadius: 2, aspectRatio: '4/3', objectFit: 'cover' }} />
                      <Typography variant="subtitle1" sx={{ color: SOFA16_COLORS.ink }}>{p.name}</Typography>
                    </Stack>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {ROWS.map((row) => (
                <TableRow key={row.key}>
                  <TableCell sx={{ color: SOFA16_COLORS.inkSoft }}>{row.label}</TableCell>
                  {ITEMS.map((p) => (
                    <TableCell key={p.id} sx={{ color: SOFA16_COLORS.ink }}>
                      {row.key === 'price' ? sofa16FormatPrice(p.price) : String(p[row.key])}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Sofa16Section>
    </>
  );
}
