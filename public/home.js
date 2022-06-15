function Home() {
  return (
    <Card
      bgcolor="primary"
      txtcolor="light"
      header="First Bank of the Moon"
      title="Welcome to the bank"
      text="Click the moon to create a new account or log in above."
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
