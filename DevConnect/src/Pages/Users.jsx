import { useState, useEffect } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 px-6">
     
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {users.map(user => (
          <div 
            key={user.id} 
            className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-teal-500/20 shadow-2xl hover:shadow-teal-500/30 transition-all hover:scale-105 hover:border-teal-400"
          >
            <div className="absolute inset-0 flex justify-center items-start pt-4">
              <div className="w-28 h-28 rounded-full bg-teal-500/10 blur-2xl"></div>
            </div>

         
            <div className="relative z-10 flex justify-center">
              <img 
                src={`https://i.pravatar.cc/150?img=${user.id}`} 
                alt={user.name}
                className="w-24 h-24 rounded-full border-4 border-teal-400"
              />
            </div>

        
            <div className="relative z-10 mt-6 text-center">
              <h3 className="text-2xl font-bold text-teal-300 mb-2">{user.name}</h3>
              <p className="text-gray-400 text-sm mb-1">📧 {user.email}</p>
              <p className="text-gray-500 text-sm">📞 {user.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
