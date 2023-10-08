import Users from "../api/users";



export default (context, inject) => {

  const factories = {
    users: Users(),
    hello: () => console.log("hello")
  };

  // Inject $api
  inject("api", factories);
};
