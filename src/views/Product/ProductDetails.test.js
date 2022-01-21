import ProductDetails from './ProductDetails';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

test('Ensure a loading state on page', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/products/34']}>
      <ProductDetails
        product={{
          id: 34,
          created_at: '2022-01-21T01:20:34.936627+00:00',
          title: 'LogiTech MX Master 3',
          description: 'High performance computer mouse',
          price: 45,
          image:
            'https://epowwlsvajvjgzuvqqfe.supabase.co/storage/v1/object/public/product-image/public/logitech-mx-master-3-hero-alt.jpg',
          category: 'accessories',
          user_id: 23,
          sold: null,
          condition: 'Slightly used',
        }}
      />
    </MemoryRouter>
  );
  await screen.findByText('loading');
  expect(container).toMatchSnapshot();
});
