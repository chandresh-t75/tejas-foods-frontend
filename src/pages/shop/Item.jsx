import React from 'react'

const Item = () => {

    useEffect(() => {
        // Fetch data from the backend
        const fetchData = async () => {
          try {
            const response = await fetch("/menu.json");
            const data = await response.json();
            setMenu(data);
            setFilteredItems(data); // Initially, display all items
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
      }, []);
  return (
    <div>Item</div>
  )
}

export default Item