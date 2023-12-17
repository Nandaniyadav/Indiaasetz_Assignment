
import Heading from "./components/common/DashboardHeadings/Heading";
import Form from "./components/common/Form/Form";
import ProfileStatus from "./components/common/ProfileStatus/ProfileStatus";
import Route from "./route";

function App() {
  return (
    <div className="App">
      <Route />
      <Heading/>
      <ProfileStatus/>

      <Form/>
    </div>
  );
}

export default App;
