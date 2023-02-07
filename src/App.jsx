import './App.css';

function App() {
  return (
    <main className="card">
      <div className="card__header">
        <div className="card__header-overlay">
          <img src="/images/icon-view.svg" alt="view" />
        </div>
        <img src="/images/image-equilibrium.jpg" alt="Ether cryptocurrency" />
      </div>
      <div className="card__body">
        <h1>Equilibrium #3429</h1>
        <p>Our Equilibrium collection promotes balance and calm.</p>
        <div className="card__body-balance">
          <div className="card__body-balance-price">
            <img src="/images/icon-ethereum.svg" alt="Ethereum" />
            <span>0.041 ETH</span>
          </div>
          <div className="card__body-balance-validity">
            <img src="/images/icon-clock.svg" alt="clock" />
            <span>3 days left</span>
          </div>
        </div>
      </div>
      <div className="card__footer">
        <img src="/images/image-avatar.png" alt="avatar" />
        <p>
          Creation of <span>Jules Wyvern</span>
        </p>
      </div>
    </main>
  );
}

export default App;
