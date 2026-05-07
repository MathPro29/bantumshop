import Button from '@mui/material/Button';

export default function Herosection() {
  return (
    <div className="flex justify-center items-center p-5 bg-white mb-5 pt-16">
      <h2 className="hero-text items-center text-md lg:text-5xl flex flex-col align-center mt-5">
        Everydays Valued Prices
        <span className="text-sm lg:text-xl font-medium py-5 text-gray-800">
          Check out <span className='text-red-600 underline'><a href="#cards">HOT Deals!</a></span> for more!
        </span>
        <div className="justify-center items-center pt-5">
          <Button variant="outlined" className="out-btn" sx={{ padding: "10px 20px" }} href="#cards">Shop Now</Button>
        </div>
      </h2>
    </div>
  );
}
