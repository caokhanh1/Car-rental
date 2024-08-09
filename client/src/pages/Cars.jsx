import CarCard from "../components/CarCard";
import RentalForm from "../components/RentalForm";

const Car = () => {
  return (
    <div className="flex p-8 gap-8">
      
     <div><RentalForm /></div>
        
      <div className="w-2/3 space-y-4">
        <CarCard />
        <CarCard />
        <CarCard />
      
      </div>
    </div>
  );
};

export default Car;