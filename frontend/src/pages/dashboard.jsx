import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from "flowbite-react";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/api/users/getusers')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div className="flex justify-center border p-4 mt-70">
      <div className="flex justify-center w-1/2">
        <Table hoverable className='w-full'>
          <Table.Head>
            <Table.HeadCell className="p-2 text-lg">Number</Table.HeadCell>
            <Table.HeadCell className="p-2 text-lg">Username</Table.HeadCell>
            <Table.HeadCell className="p-2 text-lg">Email</Table.HeadCell>
            <Table.HeadCell className="p-2 text-lg">Wanna chat</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {users.map((user, index) => (
              <Table.Row key={user.id}  className={`${index % 2 === 0 ? "bg-white" : "bg-gray-100"} my-5`}>
                <Table.Cell className="p-2 text-lg">{index + 1}</Table.Cell>
                <Table.Cell className="p-2 text-lg">{user.username}</Table.Cell>
                <Table.Cell className="p-2 text-lg">{user.email}</Table.Cell>
                <Table.Cell className="p-2 text-lg">
                  <button className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                    Chat
                  </button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}

export default Dashboard;
