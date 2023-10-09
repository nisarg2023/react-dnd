import "./styles.css";
import { rectSortingStrategy } from "@dnd-kit/sortable";
import { MultipleContainers } from "./examples/Sortable/MultipleContainers";

export default function App() {
  return (
    <div className="App">
      <MultipleContainers
        columns={2}
        strategy={rectSortingStrategy}
        wrapperStyle={() => ({
          width: 150,
          height: 150
        })}
      />
    </div>
  );
}
