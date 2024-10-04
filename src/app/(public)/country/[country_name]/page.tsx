import Link from "next/link";

function CountryName({ params }: { params: { country_name: string } }) {
  const CountryDetails = [
    {
      name: "Pakistan",
      population: 88092400374,
      capital: "Islamabad",
      backgroundImage: "/images/pakistan.jfif"
    },
    {
      name: "Russia",
      population: 53871362115,
      capital: "Moscow",
      backgroundImage: "/images/russia.jfif"
    },
    {
      name: "America",
      population: 124494116876,
      capital: "Washington, D.C",
      backgroundImage: "/images/america.jfif"
    },
    {
      name: "Turkey",
      population: 31736367294,
      capital: "Ankara",
      backgroundImage: "/images/turkey.jfif"
    }
  ];

  // Find the country based on the URL
  const country = CountryDetails.find(
    (c) => c.name.toLowerCase() === params.country_name.toLowerCase()
  );

  // If country is not found, show "Country not found"
  if (!country) {
    return (
      <div className="h-96 flex items-center justify-center bg-black">
        <h1 className="text-white items-center text-5xl font-bold bg-red-600 px-6 py-4 rounded-xl">
          {params.country_name} country not found
        </h1>
      </div>
    );
  }

  // Style for the background image
  const backgroundStyle = {
    backgroundImage: `url(${country.backgroundImage})`,
    backgroundSize: "cover", 
    backgroundPosition: "center", 
    backgroundRepeat: "no-repeat", 
    height: "100vh", 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px",
    backgroundAttachment: "fixed", 
  };

  return (
    <div style={backgroundStyle}>
      <div className="w-max h-max bg-black bg-opacity-70 text-white shadow-2xl shadow-slate-800 py-10 px-16 rounded-3xl font-bold transition-transform duration-300 transform hover:scale-105">
        <h2 className="text-4xl py-2 font-serif text-center">Country Details</h2>
        <div className="text-2xl py-2 font-serif text-center">Name: {country.name}</div>
        <div className="text-2xl py-2 font-serif text-center">Capital: {country.capital}</div>
        <div className="text-2xl py-2 font-serif text-center">Population: {country.population.toLocaleString()}</div>

        <button className="bg-sky-500 m-auto mt-10 px-6 py-2 rounded-full duration-300 text-white hover:bg-sky-600 hover:scale-110 block">
          <Link href={"/country"}>Back</Link>
        </button>
      </div>
    </div>
  );
}

export default CountryName;
