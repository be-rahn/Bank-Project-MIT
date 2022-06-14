function Home() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card
          bgcolor="info"
          txtcolor="black"
          header="Bad Bank"
          title="Welcome to Bad Bank"
          text="Please create an account and then login in to make transactions. Your information may be shared by us to anyone at anytime. 😏"
          body={
            <img src="bank.png" className="img-fluid" alt="Responsive image" />
          }
        />
      </div>
    );
  }