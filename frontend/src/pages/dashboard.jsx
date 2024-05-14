import {React, useEffect, useState } from 'react';
import axios from 'axios';
import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/users/getusers')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <>
    <Card className="w-96">
    <List>
      <ListItem>
        <ListItemPrefix>
          <Avatar variant="circular" alt="candice" src="https://docs.material-tailwind.com/img/face-1.jpg" />
        </ListItemPrefix>
        <div>
          <Typography variant="h6" color="blue-gray">
            Tania Andrew
          </Typography>
          <Typography variant="small" color="gray" className="font-normal">
            Software Engineer @ Material Tailwind
          </Typography>
        </div>
      </ListItem>
      <ListItem>
        <ListItemPrefix>
          <Avatar variant="circular" alt="alexander" src="https://docs.material-tailwind.com/img/face-2.jpg" />
        </ListItemPrefix>
        <div>
          <Typography variant="h6" color="blue-gray">
            Alexander
          </Typography>
          <Typography variant="small" color="gray" className="font-normal">
            Backend Developer @ Material Tailwind
          </Typography>
        </div>
      </ListItem>
      <ListItem>
        <ListItemPrefix>
          <Avatar variant="circular" alt="emma" src="https://docs.material-tailwind.com/img/face-3.jpg" />
        </ListItemPrefix>
        <div>
          <Typography variant="h6" color="blue-gray">
            Emma Willever
          </Typography>
          <Typography variant="small" color="gray" className="font-normal">
            UI/UX Designer @ Material Tailwind
          </Typography>
        </div>
      </ListItem>
    </List>
  </Card>
  </>
);
  
}

export default Dashboard;