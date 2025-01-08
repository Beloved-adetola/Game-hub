import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        md: `"nav nav" "aside main"`,
        lg: `"nav nav" "aside main"`
      }}
    >
      <GridItem area="nav" bg="red">
        Nav
      </GridItem>
      <GridItem area="aside" bg="purple" hideBelow="md">
        Aside
      </GridItem>
      <GridItem area="main" bg="yellow">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
