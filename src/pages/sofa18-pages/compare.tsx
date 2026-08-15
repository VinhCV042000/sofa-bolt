import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import Stack from '@mui/material/Stack';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import Typography from '@mui/material/Typography';

import { SOFA18_COLORS } from 'src/sections/sofa18/sofa18-data';
import { Sofa18Section, Sofa18PageHero } from 'src/sections/sofa18-pages/sofa18-page-hero';
import { sofa18FormatPrice, SOFA18_PAGE_IMAGES, SOFA18_PAGE_PRODUCTS } from 'src/sections/sofa18-pages/sofa18-pages-data';

const ITEMS = SOFA18_PAGE_PRODUCTS.slice(0, 3);
const ROWS: { label: string; key: 'price' | 'material' | 'size' | 'rating' }[] = [
  { label: 'Giá', key: 'price' },
  { label: 'Chất liệu', key: 'material' },
  { label: 'Kích thước', key: 'size' },
  { label: 'Đánh giá', key: 'rating' },
];

export default function Page() {
  return (
    <>
      <Helmet><title>So sánh sản phẩm — Sofa18</title></Helmet>

      <Sofa18PageHero overline="SO SÁNH" title={<>SO SÁNH <span>SẢN PHẨM</span></>} subtitle="Đối chiếu thông số các mẫu sofa bạn quan tâm." image={SOFA18_PAGE_IMAGES.prod4} />

      <Sofa18Section bg="cream">
        <Box sx={{ overflowX: 'auto' }}>
          <Table sx={{ minWidth: 720 }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ bgcolor: 'transparent' }} />
                {ITEMS.map((p) => (
                  <TableCell key={p.id} sx={{ bgcolor: 'transparent' }}>
                    <Stack spacing={1.5}>
                      <Box component="img" src={p.image} alt={p.name} sx={{ width: 1, borderRadius: 2, aspectRatio: '4/3', objectFit: 'cover' }} />
                      <Typography variant="subtitle1" sx={{ color: SOFA18_COLORS.ink }}>{p.name}</Typography>
                    </Stack>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {ROWS.map((row) => (
                <TableRow key={row.key}>
                  <TableCell sx={{ color: SOFA18_COLORS.inkSoft }}>{row.label}</TableCell>
                  {ITEMS.map((p) => (
                    <TableCell key={p.id} sx={{ color: SOFA18_COLORS.ink }}>
                      {row.key === 'price' ? sofa18FormatPrice(p.price) : String(p[row.key])}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Sofa18Section>
    </>
  );
}
