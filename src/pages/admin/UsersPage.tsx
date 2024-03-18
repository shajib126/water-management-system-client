
import { useCustomersQuery } from "../../redux/api/baseApi";
import Loading from "../Loading";

const UsersPage = () => {
  const { error, isLoading, data } = useCustomersQuery("");
  console.log({
    error,
    isLoading,
    data,
  });

  return (
    <div>
        {isLoading ? <Loading/> :<div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>User</th>
              <th>Address</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data?.data.map((user, i) => (
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                      <div className="text-sm opacity-50">{user.phone}</div>
                      <div className="text-sm opacity-50">{user.userType}</div>
                    </div>
                  </div>
                </td>
                <td>
                 {user.address}
                </td>
                <td>Purple</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div> }
      
    </div>
  );
};

export default UsersPage;
