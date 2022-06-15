function Home() {
  return (
    <Card
      bgcolor="info"
      txtcolor="light"
      header="Space Bank Home"
      title="Welcome to the bank"
      text="Tap the planet to create a new account."
      body={
        <a type="submit" className="nav-link" href="#/CreateAccount/">
          {" "}
          <img
            src="moon.png"
            className="img-fluid"
            alt="Responsive image"
          />{" "}
        </a>
      }
    />
  );
}
