import * as pickupsAPI from '../../utilities/pickups-api'
import './PickUpsIndexPage.css';

export default function PickUpsIndexPage() {
    return (
        <>
            <h1>All Pickups</h1>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Players Needed</th>
                  <th>Sport</th>
                  <th>Skill Level</th>
                  <th>Location</th>
                  <th>Date</th>
                  <th>Duration</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* <% pickups.forEach(function(p) { %>
                  <tr>
                    <td><%= p.playersRequested %></td>
            
                    <% p.gameRequested.forEach(function(detail) { %>
                      <td><%= detail.userGame %></td>
                      <td><%= detail.skillLevel %></td>
                      <td><%= detail.gameLocation %></td>
                      <% }); %>  
                      <td><%= p.dateTimeRequested.toLocaleDateString() %><br><%= p.dateTimeRequested.toLocaleTimeString() %></td>
                    <td><%= p.durationRequested %></td>
                    <!-- <td><img alt="avatar" src="<%= p.userAvatar %>" referrerpolicy="no-referrer" ><%= p.userName %></td> -->
                    <td><a href="/pickups/<%= p._id %>">DETAILS</a></td>
                  </tr>
                  <% }); %> */}
                </tbody>
            </table> 
        </>
    )
}