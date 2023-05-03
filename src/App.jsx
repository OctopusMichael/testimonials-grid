import "./style/App.css";
import usuarios from "./json/usuarios.json";

function App() {
  return (
    <>
      <main>
        <div className="container">
          <div className="cards">
            {usuarios &&
              usuarios.map((element) => {
                return (
                  <div key={element.id} className={element.class}>
                    <div className="card-header">
                      <div className={element.avatar} />
                      <div>
                        <h3>{element.name}</h3>
                        <h5>{element.verification}</h5>
                      </div>
                    </div>
                    <div className="card-body">
                      <h2>{element.title}</h2>
                      <q>{element.testimonial}</q>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
