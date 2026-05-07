import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ToastContainer, toast } from 'react-toastify';

const productsData = [
  {
    title: "Gaming Table",
    description: "Best gaming table ever!!",
    image: "./src/assets/images/table_test.png",
    price: "฿599"
  },
  {
    title: "Ergonamic Table",
    description: "Less space? Try this out!!",
    image: "./src/assets/images/table_test.png",
    price: "฿999"
  },
  {
    title: "Professional Table",
    description: "100K+ pros use this",
    image: "./src/assets/images/table_test.png",
    price: "฿1,999"
  },
  {
    title: "Gaming Table",
    description: "Best gaming table ever!!",
    image: "./src/assets/images/table_test.png",
    price: "฿599"
  },
  {
    title: "Ergonamic Table",
    description: "Less space? Try this out!!",
    image: "./src/assets/images/table_test.png",
    price: "฿599"
  },
  {
    title: "Professional Table",
    description: "100K+ pros use this",
    image: "./src/assets/images/table_test.png",
    price: "฿1,999"
  },
  {
    title: "Gaming Table",
    description: "Best gaming table ever!!",
    image: "./src/assets/images/table_test.png",
    price: "฿599"
  },
  {
    title: "Ergonamic Table",
    description: "Less space? Try this out!!",
    image: "./src/assets/images/table_test.png",
    price: "฿599"
  },

];

export default function Cards() {
  const notify = () => toast.success("Purchased!");
  return (
    <div className="mt-5">
      <div className="container mx-auto my-10 p-5 flex flex-wrap gap-8 justify-center">
        {productsData.map((card, index) => (
          <Card key={index} sx={{
            maxWidth: 345,
            borderRadius: 4,
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-10px)'
            }
          }}>
            <CardMedia
              component="img"
              alt={card.title}
              height="180"
              image={card.image}
              sx={{ objectFit: 'cover' }}
            />
            <CardContent>

              <div className='flex'>
                <div className='flex row'>
                  <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', color: '#1a202c' }}>
                    {card.title}
                  </Typography>
                </div>
                <h2 className="text-md ml-auto items-center justify-center text-orange-600 font-bold">{card.price}</h2>
              </div>
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                {card.description}
              </Typography>
            </CardContent>
            <CardActions sx={{ padding: 2 }}>
              <Button size="large" variant="contained" className="bg-orange-400 w-full hover:bg-orange-600" sx={{ borderRadius: 2, textTransform: 'none', px: 3 }} onClick={notify}>Buy</Button>
            </CardActions>
          </Card>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
}