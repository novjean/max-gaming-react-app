import './App.css'
import ListGroup from "./components/ListGroup";

function App() {
    let items = [
        'New York',
        'San Francisco',
        'Tokyo', 'Pune', 'London'
    ]

    const handleSelectItem = (item: String) => {
        console.log(item)
    }
    return <div>
        <ListGroup
            items={items}
            heading={"Cities"}
            onSelectItem={handleSelectItem}
        />
    </div>
}

export default App
