export type Workspace = {
  id: string;
  name: string;
  location: string;
  rent: number;
  rating: number;
  imageUrl: string;
};

export const workspaces: Workspace[] = [
  {
    id: '1',
    name: 'Premium Work Desk',
    location: 'Chennai',
    rent: 499,
    rating: 4.8,
    imageUrl: 'https://picsum.photos/seed/desk1/400/300',
  },
  {
    id: '2',
    name: 'Sunrise Co-working Hub',
    location: 'Coimbatore',
    rent: 350,
    rating: 4.6,
    imageUrl: 'https://picsum.photos/seed/desk2/400/300',
  },
  {
    id: '3',
    name: 'Quiet Corner Desk',
    location: 'Bangalore',
    rent: 650,
    rating: 4.9,
    imageUrl: 'https://picsum.photos/seed/desk3/400/300',
  },
  {
    id: '4',
    name: 'Skyline Office Pod',
    location: 'Chennai',
    rent: 420,
    rating: 4.5,
    imageUrl: 'https://picsum.photos/seed/desk4/400/300',
  },
  {
    id: '5',
    name: 'The Study Nook',
    location: 'Coimbatore',
    rent: 300,
    rating: 4.7,
    imageUrl: 'https://picsum.photos/seed/desk5/400/300',
  },
];
