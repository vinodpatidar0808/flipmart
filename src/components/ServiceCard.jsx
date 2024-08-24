const ServiceCard = ({ children, title, description }) => {
  return (
    <div className="bg-gray-100 gap-10 w-64  my-20 flex flex-col items-center py-8 rounded-md">
      <div className="bg-secondary -rotate-45 w-24  h-24 aspect-square flex justify-center items-center border rounded-full rounded-bl-none ">
        {children}
      </div>
      <div className="flex flex-col items-center gap-5 ">
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
