import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import axios from "axios";
import "../styles/menu.css";

function Menu() {
  // fetch menu from api
  const [menuItems, setMenuItems] = useState([]);
  let counter = 1;

  async function allItems() {
    // GET REQUEST
    var request = await axios
      .get("https://xcoffeevin.herokuapp.com/menus")
      .then((request) => {
        let items = request.data;
        let item = [];

        for (let i = 0; i < items.length; i++) {
          item.push(items[i]);
        }
        setMenuItems(item);
        console.log(menuItems);
      });
  }

  useEffect(() => {
    allItems();
  }, []);

  return (
    <div className="table_container">
      <div className="table_body">
        <Table striped hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Menu</th>
              <th>Price ($)</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.map((menuItem) => (
              <tr>
                <td>{counter++}</td>
                <td>{menuItem.name}</td>
                <td>{menuItem.price}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Button variant="dark">Order</Button>
    </div>
  );
}

export default Menu;
