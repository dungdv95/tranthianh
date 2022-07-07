import { makeStyles } from "@mui/styles";
import Main from "./pages/Main";

const useStyles=makeStyles({
  root: {
    display: 'flex',
    flex: '1 1 0%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    width: '100%',
  }
})

function App() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Main />
    </div>
  );
}

export default App;
