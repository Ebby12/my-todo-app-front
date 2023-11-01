import React from 'react'
import './task.css'

function Task() {
  return (
    <div>
      <table>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Actions</th>
        </thead>
        <tbody>
          <tr>
            <td>
              1
            </td>
            <td>
              complete assignment
            </td>
            <td class="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum laudantium modi magni dolore ea nostrum. Corporis, minima hic. Voluptatum vel, dolorem voluptate sit deleniti dolor ipsa eligendi harum nostrum sapiente!
            </td>
            <td>
              <span class="action">Create</span>
              <span class="action">Edit</span>
              <span class="action">Delete</span>

            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Task