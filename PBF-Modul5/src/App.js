import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch
} from "react-router-dom";

export default function NestingAuthExample() {
  return(
    <Router>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar=brand" href="#">MY CLOTHING Store</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" 
          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
          aria-expanded="false" aria-label="Toggle navigation">
            
            <span class="navbar-toggler-icon"></span>
          </button>  
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link">
                  <Link to="/home">HOME</Link>
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <Link to="/prodact">PRODUCT</Link>
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item ml-2 mt-2">
              <AuthButton />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="bghome">
        <br></br>
        <div class="text-center">
          <h4>Let's Buy The Clothes</h4>
        </div>
      </div>
      <hr />

      <Switch>
        <Route  path="/home">
          <Home />
        </Route>
        <Route  path="/login">
          <LoginPage />
        </Route>
        <Route  path="/prodact">
          <Prodact />
        </Route>
        <PrivateRoute path="/private">
          <ProtectedPage />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

const fakeAuth={
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton() {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: {pathname: "/"}};

  return fakeAuth.isAuthenticated ? (
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push(from));
        }}
      >
        Sign out
      </button>
  ) : (
    <p>You are not logged in.</p>
  );
}

function PrivateRoute({children, ...rest}){
  return (
    <Route 
    {...rest}
    render={({ location }) =>
    fakeAuth.isAuthenticated ? (
      children
    ) : (
      <Redirect
      to={{
        pathname: "/login",
        state: {from:location}
      }}
      />
    )
    }
    />
  );
}

function ProtectedPage() {
  return <h3>Private</h3>;
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: {pathname: "/prodact"}};
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <center>
      <p>Login to see our product {from.pathname}</p>
      <button type="button" class="btn btn-primary" onClick={login}>Log in</button>
      </center>
    </div>
  );
}

function Home(){
  const isLoggedIn = fakeAuth.isAuthenticated;
  return(
    <div>
      <center>
          <div class="container">
          <img src="https://cdn.shopify.com/s/files/1/0028/6132/files/pic_1_of_11_1440x.jpg?v=1611176847"
          alt="content"/>
          <h1> WELCOME ! </h1>
          <br></br><p>BUY YOUR FASHION</p>
        </div>
      </center>
    </div>
  );
}

function Prodact(){
  let { path, url } = useRouteMatch();
  const isLoggedIn = fakeAuth.isAuthenticated;
  if (isLoggedIn == true) {
    return(
      <div>
        <center>
          <h4>All Product</h4>
          <div class="card card-group">
            <div class="card">
            <Link to={`${url}/Kemeja Rp. 350.000`}>
              <img src="https://cdn.shopify.com/s/files/1/0028/6132/products/20201215-3sixteen-flannel-bw-1_540x.jpg?v=1610556256"
              alt="product1" /><br></br>
              <h5>SHIRT</h5>
              </Link>
            </div>

            <div class="card">
            <Link to={`${url}/Bucket Hat Premium Rp. 150.000`}>
              <img src="https://cdn.shopify.com/s/files/1/0028/6132/products/CamoBucket-1_330x.jpg?v=1607813757"
              alt="Product2" /><br></br>
              <h5>BUCKET HAT</h5>
              </Link>
            </div>

            <div class="card">
            <Link to={`${url}/Blue Jeans Rp. 650.000`}>
              <img src="https://cdn.shopify.com/s/files/1/0028/6132/products/20201015-3sixteen-fatiguepant-model-blue-1_720x960_crop_center.jpg?v=1605551462"
              alt="Product3" /><br></br>
              <h5>PANTS</h5>
              </Link>
              <br></br>
              <br/>
            </div>
          </div>
          <br></br>

          <div className="bgLink">
          <Switch>
            <Route exact path="{path}">
              <h3>Buy your Fashion!</h3>
            </Route>

            <Route path={`${path}/:prodactId`}>
                <Prodacts />
            </Route>
          </Switch>
          </div>
        </center>
      </div>
    );
  }
  return (
    <div>
      <center>
        <h2>FASHION STORE</h2>
      <Link to="/login">
      <button className="btn btn-warning">Go to login page</button>
      </Link>
      </center>
    </div>
  );
}

function Prodacts(){
  let {prodactId} = useParams();

  return (
    <div>
      <h3>{prodactId}</h3>
    </div>
  );
}

// PRAKTIKUM

// import React from "react";
// import{
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useParams,
//   useRouteMatch,
//   useLocation,
//   Redirect,
//   useHistory,
//   withRouter
// } from "react-router-dom";


// export default function AuthExample() {
//   return (
//     <Router>
//       <div>
//         <AuthButton />
//         <ul>
//           <li>
//             <Link to="/public">Public Page</Link>
//           </li>
//           <li>
//             <Link to="/private">Private Page</Link>
//           </li>
          
//         </ul>

//         <Switch>
//           <Route path="/public">
//             <PublicPage/>
//           </Route>
//           <Route path="/login">
//             <LoginPage />
//           </Route>
//           <PrivateRoute path="/private">
//             <ProtectedPage />
//           </PrivateRoute>
//         </Switch>
//       </div>
//     </Router>
//   );
// }
// const fakeAuth ={
//   isAuthenticated: false,
//   authenticate(cb) {
//     fakeAuth.isAuthenticated = true;
//     setTimeout(cb, 100);
//   },
//   signot(cb) {
//     fakeAuth.isAuthenticated = false;
//     setTimeout(cb, 100);
//   }
// };

// const AuthButton = withRouter(({ history }) =>
//   fakeAuth.isAuthenticated ? (
//     <p>
//       Welcome!{" "}
//       <button 
//       onClick={() => {
//         fakeAuth.signot(() => history.push("/"));
//         }}
//       >
//         Sign out
//       </button>
//     </p>
//   ) : (
//     <p>You are not logged in.</p>
//   )
// );

// function PrivateRoute({ children, ...rest}){
//   return (
//     <Route 
//       {...rest}
//       render={({ location }) =>
//         fakeAuth.isAuthenticated ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: {from:location}
//             }}
//             />
//         )
//       }
//      />
//   );
// }

// function PublicPage() {
//   return <h3>Public</h3>;
// }

// function ProtectedPage() {
//   return <h3>Private</h3>;
// }

// function LoginPage() {
//   let history = useHistory();
//   let location = useLocation();

//   let { from } = location.state || { from: {pathname: "/"} };
//   let login = () => {
//     fakeAuth.authenticate(() => {
//       history.replace(from);
//     });
//   };

//   return (
//     <div>
//       <p>You must log in to view the page at {from.pathname}</p>
//       <button onClick={login}>Log in</button>
//     </div>
//   );
// }
// function Child(){
//   let {id} = useParams();
//   return (
//     <div>
//       <h3>ID: {id} </h3>
//     </div>
//   );
// }

// function Home(){
//   return (
//      <div>
//        <h2>Home</h2>
//      </div>
//    );
//  }

//  function Topics(){
//   let {path, url} = useRouteMatch();
//   return (
//      <div>
//        <h2>Topics</h2>
//        <ul>
//          <li>
//            <Link to={`${url}/Sate, Nasi goreng`}>Kuliner</Link>
//          </li>
//          <li>
//            <Link to={`${url}/Wisata alam, Museum`}>Travelling</Link>
//          </li>
//          <li>
//            <Link to={`${url}/Ibis, JW Marriot`}>Review Hotel</Link>
//          </li>
//        </ul>

//        <Switch>
//          <Route exact path={path}>
//            <h3>Please select a topic.</h3>
//          </Route>
//          <Route path={`${path}/:topicId`}>
//            <Topic />
//          </Route>
//        </Switch>
//      </div>
//    );
//  }

//  function Topic(){
//    let {topicId} = useParams();

//    return (
//      <div>
//        <h3>{topicId}</h3>
//      </div>
//    )
//  }

// function About(){
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }

// function Dashboard(){
//   return (
//     <div>
//       <h2>Dashboard</h2>
//     </div>
//   );
// }