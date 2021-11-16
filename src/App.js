import "primereact/resources/themes/lara-light-indigo/theme.css"    //theme
import "primereact/resources/primereact.min.css"                    //core css
import "primeicons/primeicons.css" 


import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';

function App() {
  return (
    <div > 
    <Avatar image="rishabh.JPG" size="xlarge">
    <Badge value="4" severity="danger" />
</Avatar>
    </div>
  );
}

export default App;
