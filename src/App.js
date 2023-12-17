
import Heading from "./components/common/DashboardHeadings/Heading";
import ProfileStatus from "./components/common/ProfileStatus/ProfileStatus";
import Route from "./route";

function App() {
  return (
    <div className="App">
      <Route />
      <Heading/>
      <ProfileStatus/>
    </div>
  );
}

export default App;
