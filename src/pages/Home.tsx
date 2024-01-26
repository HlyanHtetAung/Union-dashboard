import withAuth from "../components/withAuth";

function Home() {
  return (
    <div className="flex items-center justify-center">
      <h3 className="font-bold text-3xl mt-[100px]">
        Welcome to the UNION Dashboard
      </h3>
    </div>
  );
}

export default withAuth(Home);
