export default function Hero() {
  return (
    <div className="text-center mt-10">
      <h1 className="mb-4">
        <span className="text-[#E1AD29]">Home</span>
        <span className="mx-2">/</span>
        <span>Blog</span>
      </h1>
      <h1 className="font-Bunge text-[3rem] font-bold">
        <span className="mr-4">IDEAS</span>
        <span
          className="mx-4"
          style={{
            WebkitTextStroke: "1px black",
            WebkitTextFillColor: "white",
          }}
        >
          THAT
        </span>
        <span className="ml-4">INSPIRE</span>
      </h1>
    </div>
  );
}
