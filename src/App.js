import { Grid, Sticky } from 'semantic-ui-react';
import './App.css';
import ItemCard from './components/card.js'
import CategoryCard from './components/categoryCard.js'
import FloatingButton from './components/floatingButton.js'
function App() {
  return (
    <div className="App">

      <Grid columns={3}>
        <Grid.Column>
          <CategoryCard />
        </Grid.Column>
        <Grid.Column>
          <CategoryCard />
        </Grid.Column>
        <Grid.Column>
          <CategoryCard />
        </Grid.Column>
      </Grid>

      <FloatingButton />

      <ItemCard />
      <ItemCard />
      <ItemCard />
    </div>
  );
}

export default App;
